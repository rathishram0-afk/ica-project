import { useEffect, useRef, useState } from 'react';

/**
 * useAssetPreloader — loads a list of images and reports honest progress.
 *
 * Both `load` and `error` settle an asset, so a missing or broken file can
 * never hang the site behind the preloader.
 *
 * @param {string[]} sources - Image URLs to preload.
 * @param {Object} options
 * @param {number} options.minDuration - Floor in ms so fast connections don't flash (default 1200)
 * @param {number} options.timeout - Hard release in ms if the network stalls (default 6000)
 * @returns {{ progress: number, done: boolean, loaded: number, total: number }}
 */
export default function useAssetPreloader(sources = [], { minDuration = 1200, timeout = 6000 } = {}) {
  const [loaded, setLoaded] = useState(0);
  const [elapsed, setElapsed] = useState(false);
  const [timedOut, setTimedOut] = useState(false);
  const total = sources.length;

  // Freeze the list on first render so a new array literal from the caller
  // doesn't restart the whole preload on every re-render.
  const sourcesRef = useRef(sources);

  useEffect(() => {
    const list = sourcesRef.current;
    let cancelled = false;

    // Count within this run and publish the absolute total, never n+1.
    // StrictMode mounts effects twice in development, and an incrementing
    // counter would carry the first run's tally into the second; assigning
    // this run's own count overwrites it instead.
    let count = 0;

    // One settle per asset: a cached image reports `complete` synchronously
    // AND still fires onload afterwards, so without the guard each cached
    // asset would be counted twice.
    const images = list.map((src) => {
      const img = new Image();
      let settled = false;
      const settle = () => {
        if (settled || cancelled) return;
        settled = true;
        count += 1;
        setLoaded(count);
      };
      img.onload = settle;
      img.onerror = settle;
      img.src = src;
      // Already in the browser cache: onload may never fire.
      if (img.complete) settle();
      return img;
    });

    const minTimer = setTimeout(() => {
      if (!cancelled) setElapsed(true);
    }, minDuration);

    const maxTimer = setTimeout(() => {
      if (!cancelled) setTimedOut(true);
    }, timeout);

    return () => {
      cancelled = true;
      clearTimeout(minTimer);
      clearTimeout(maxTimer);
      images.forEach((img) => {
        img.onload = null;
        img.onerror = null;
      });
    };
  }, [minDuration, timeout]);

  const rawProgress = total === 0 ? 100 : Math.min(100, Math.round((loaded / total) * 100));
  // Never report 100% before the minimum has elapsed — the bar should finish
  // filling, not snap shut.
  const progress = timedOut ? 100 : elapsed ? rawProgress : Math.min(rawProgress, 95);
  const done = timedOut || (elapsed && loaded >= total);

  return { progress, done, loaded, total };
}
