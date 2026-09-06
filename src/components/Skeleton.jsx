import React from 'react';

/**
 * Skeleton primitives — brand-tinted loading placeholders.
 *
 * All variants share the `.skeleton-shimmer` sweep defined in index.css,
 * which the global prefers-reduced-motion block already neutralises.
 */

export default function Skeleton({ className = '', rounded = 'rounded-2xl', style }) {
  return (
    <div
      aria-hidden="true"
      className={`skeleton-shimmer ${rounded} ${className}`}
      style={style}
    />
  );
}

/** A stack of text lines, last one short so it reads as a paragraph. */
export function SkeletonText({ lines = 3, className = '', lineClassName = 'h-3.5' }) {
  return (
    <div aria-hidden="true" className={`space-y-2.5 ${className}`}>
      {Array.from({ length: lines }).map((_, i) => (
        <div
          key={i}
          className={`skeleton-shimmer rounded-full ${lineClassName}`}
          style={{ width: i === lines - 1 ? '62%' : `${88 + ((i * 7) % 12)}%` }}
        />
      ))}
    </div>
  );
}

export function SkeletonCircle({ size = 'w-12 h-12', className = '' }) {
  return <div aria-hidden="true" className={`skeleton-shimmer rounded-full ${size} ${className}`} />;
}

/** Heading block — a wide bar over a narrower one. */
export function SkeletonHeading({ className = '' }) {
  return (
    <div aria-hidden="true" className={`space-y-3 ${className}`}>
      <div className="skeleton-shimmer rounded-full h-7 sm:h-9 w-3/4" />
      <div className="skeleton-shimmer rounded-full h-7 sm:h-9 w-1/2" />
    </div>
  );
}

/** Card shape used by the grid page skeletons. */
export function SkeletonCard({ className = '' }) {
  return (
    <div
      aria-hidden="true"
      className={`rounded-3xl border border-slate-200/80 bg-white p-5 space-y-4 ${className}`}
    >
      <div className="skeleton-shimmer rounded-2xl h-40 w-full" />
      <div className="flex items-center gap-3">
        <div className="skeleton-shimmer rounded-2xl w-10 h-10 shrink-0" />
        <div className="flex-1 space-y-2">
          <div className="skeleton-shimmer rounded-full h-3 w-1/3" />
          <div className="skeleton-shimmer rounded-full h-4 w-3/4" />
        </div>
      </div>
      <SkeletonText lines={2} lineClassName="h-3" />
    </div>
  );
}
