import React, { useCallback, useState } from 'react';
import manifest from '../lib/image-manifest.json';

/**
 * Builds a WebP srcset for a source image, but only from renditions the
 * generator actually wrote. The manifest is the guard: referencing a variant
 * that does not exist would 404 and, worse, the browser would not fall back.
 *
 * Run `npm run images` after adding a picture to refresh it.
 */
function webpSourceFor(src) {
  const widths = manifest[src];
  if (!widths || widths.length === 0) return null;
  const stem = src.replace(/\.(jpe?g|png|webp)$/i, '');
  return widths.map((w) => `${stem}-${w}.webp ${w}w`).join(', ');
}

/**
 * SmartImage — an <img> that shows a shimmer skeleton until it loads, and
 * serves a responsive WebP rendition where one exists.
 *
 * Drop-in for a plain <img>: keep the original classes on `className` and put
 * any layout classes the old element carried (max-w, mx-auto, aspect, rounded)
 * on `wrapperClassName`.
 *
 * The image is rendered at opacity-0 rather than removed, so it reserves its
 * own box and the skeleton never causes layout shift. Images with no intrinsic
 * height (h-auto) need `placeholderClassName` to give the skeleton a size while
 * loading.
 *
 * @param {React.ReactNode} fallback - Rendered in place of the image if it fails.
 * @param {'light'|'dark'} variant - Skeleton tint; use 'dark' on navy sections.
 * @param {string} sizes - How wide the image renders, so the browser can pick
 *   the right rendition. Defaults to full width on phones, half above that,
 *   which matches the two-column layouts this site uses most.
 */
export default function SmartImage({
  src,
  alt = '',
  className = '',
  wrapperClassName = '',
  skeletonClassName = 'rounded-2xl',
  placeholderClassName = '',
  variant = 'light',
  sizes = '(max-width: 768px) 100vw, 50vw',
  fallback = null,
  loading = 'lazy',
  ...imgProps
}) {
  const [status, setStatus] = useState('loading'); // 'loading' | 'loaded' | 'error'

  // Ref callback rather than an effect: an image served from cache can finish
  // before mount, and `complete` is the only way to catch that.
  const measureRef = useCallback((node) => {
    if (node && node.complete && node.naturalWidth > 0) setStatus('loaded');
  }, []);

  // On error render the fallback, or nothing at all — a broken-image icon
  // looks worse on a client site than an absent one.
  if (status === 'error') {
    return fallback;
  }

  const isLoading = status === 'loading';
  const webpSrcSet = webpSourceFor(src);

  const img = (
    <img
      ref={measureRef}
      src={src}
      alt={alt}
      loading={loading}
      decoding="async"
      sizes={webpSrcSet ? sizes : undefined}
      onLoad={() => setStatus('loaded')}
      onError={() => setStatus('error')}
      className={`${className} transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
      {...imgProps}
    />
  );

  return (
    <span className={`relative block ${wrapperClassName} ${isLoading ? placeholderClassName : ''}`}>
      {isLoading && (
        <span
          aria-hidden="true"
          className={`${variant === 'dark' ? 'skeleton-shimmer-dark' : 'skeleton-shimmer'} absolute inset-0 block ${skeletonClassName}`}
        />
      )}
      {webpSrcSet ? (
        <picture>
          <source type="image/webp" srcSet={webpSrcSet} sizes={sizes} />
          {img}
        </picture>
      ) : (
        img
      )}
    </span>
  );
}
