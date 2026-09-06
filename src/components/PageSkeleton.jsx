import React from 'react';
import Skeleton, { SkeletonText, SkeletonHeading, SkeletonCard } from './Skeleton';

/** Navy hero band — mirrors the dark hero most pages open with. */
function HeroBand({ withImage = true }) {
  return (
    <section className="relative bg-gradient-to-r from-[#061F4F] via-[#0B2D6B] to-[#082B68] py-16 lg:py-24 overflow-hidden">
      <div className="absolute inset-0 opacity-10 world-map-bg pointer-events-none" />
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16 relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className={withImage ? 'lg:col-span-6 space-y-6' : 'lg:col-span-8 space-y-6'}>
            <div className="skeleton-shimmer-dark rounded-full h-5 w-40" />
            <div className="space-y-3">
              <div className="skeleton-shimmer-dark rounded-full h-9 sm:h-12 w-11/12" />
              <div className="skeleton-shimmer-dark rounded-full h-9 sm:h-12 w-3/4" />
            </div>
            <div className="space-y-2.5 pt-1">
              <div className="skeleton-shimmer-dark rounded-full h-3.5 w-full" />
              <div className="skeleton-shimmer-dark rounded-full h-3.5 w-10/12" />
              <div className="skeleton-shimmer-dark rounded-full h-3.5 w-7/12" />
            </div>
            <div className="flex flex-wrap gap-3 pt-3">
              <div className="skeleton-shimmer-dark rounded-full h-11 w-40" />
              <div className="skeleton-shimmer-dark rounded-full h-11 w-36" />
            </div>
          </div>
          {withImage && (
            <div className="lg:col-span-6 flex justify-center">
              <div className="skeleton-shimmer-dark rounded-3xl w-full max-w-[460px] h-56 sm:h-72 lg:h-80" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function SectionHeading() {
  return (
    <div className="text-center space-y-3 max-w-2xl mx-auto">
      <div className="skeleton-shimmer rounded-full h-3 w-28 mx-auto" />
      <div className="skeleton-shimmer rounded-full h-7 sm:h-8 w-2/3 mx-auto" />
      <div className="skeleton-shimmer rounded-full h-3.5 w-5/6 mx-auto" />
    </div>
  );
}

/**
 * PageSkeleton — placeholder layout shown while a page swaps in.
 *
 * @param {'hero-split'|'grid'|'form'} variant
 */
export default function PageSkeleton({ variant = 'grid' }) {
  return (
    <div aria-hidden="true" className="animate-fadeIn">
      <HeroBand withImage={variant !== 'form'} />

      <div className="max-w-6xl mx-auto px-6 lg:px-12 py-16 space-y-14">
        <SectionHeading />

        {variant === 'hero-split' && (
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <Skeleton className="lg:col-span-5 h-64 sm:h-80 w-full" rounded="rounded-3xl" />
            <div className="lg:col-span-7 space-y-5">
              <SkeletonHeading />
              <SkeletonText lines={4} />
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div key={i} className="space-y-2">
                    <Skeleton className="h-8 w-full" rounded="rounded-xl" />
                    <Skeleton className="h-2.5 w-3/4" rounded="rounded-full" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {variant === 'grid' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        )}

        {variant === 'form' && (
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-7 rounded-3xl border border-slate-200/80 bg-white p-6 sm:p-8 space-y-6">
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="space-y-2.5">
                  <Skeleton className="h-2.5 w-28" rounded="rounded-full" />
                  <Skeleton className="h-11 w-full" rounded="rounded-xl" />
                </div>
              ))}
              <Skeleton className="h-12 w-44" rounded="rounded-full" />
            </div>
            <div className="lg:col-span-5 space-y-5">
              {Array.from({ length: 3 }).map((_, i) => (
                <div
                  key={i}
                  className="rounded-3xl border border-slate-200/80 bg-white p-5 flex items-start gap-4"
                >
                  <Skeleton className="w-11 h-11 shrink-0" rounded="rounded-2xl" />
                  <div className="flex-1 space-y-2.5">
                    <Skeleton className="h-3 w-1/3" rounded="rounded-full" />
                    <SkeletonText lines={2} lineClassName="h-3" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
