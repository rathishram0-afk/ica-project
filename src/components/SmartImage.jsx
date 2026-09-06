import React, { useCallback, useState } from 'react';

/**
 * SmartImage — an <img> that shows a shimmer skeleton until it loads.
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
 */
export default function SmartImage({
  src,
  alt = '',
  className = '',
  wrapperClassName = '',
  skeletonClassName = 'rounded-2xl',
  placeholderClassName = '',
  variant = 'light',
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

  return (
    <span className={`relative block ${wrapperClassName} ${isLoading ? placeholderClassName : ''}`}>
      {isLoading && (
        <span
          aria-hidden="true"
          className={`${variant === 'dark' ? 'skeleton-shimmer-dark' : 'skeleton-shimmer'} absolute inset-0 block ${skeletonClassName}`}
        />
      )}
      <img
        ref={measureRef}
        src={src}
        alt={alt}
        loading={loading}
        onLoad={() => setStatus('loaded')}
        onError={() => setStatus('error')}
        className={`${className} transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
        {...imgProps}
      />
    </span>
  );
}
