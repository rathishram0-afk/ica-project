import React, { useCallback, useState, useEffect } from 'react';
import { Image, Calendar, X, ChevronLeft, ChevronRight, Eye, ArrowRight, Camera } from 'lucide-react';
import SmartImage from '../components/SmartImage';

export default function MediaPage() {
  const [activeTab, setActiveTab] = useState('gallery');
  const [visibleCount, setVisibleCount] = useState(6);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Reset visible count when tab changes
  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    setVisibleCount(6);
  };

  // 1. GALLERY CATEGORY ITEMS (EXACTLY 6 PHOTOS)
  const galleryItems = [
    {
      title: "ICA International Speedcubing Championship",
      category: "Competition Event",
      image: "/images/gallery/event1.jpg",
      objectPosition: "center",
      desc: "Students participating in timed speedcubing rounds and championship matches."
    },
    {
      title: "Championship Recognition & Trophy Ceremony",
      category: "Award Ceremony",
      image: "/images/gallery/event2.jpg",
      objectPosition: "center",
      desc: "Recognizing outstanding young solvers with medals, trophies, and honors."
    },
    {
      title: "Guinness World Record Candidate Demonstration",
      category: "Special Milestone",
      image: "/images/gallery/event3.jpg",
      objectPosition: "center",
      desc: "Live speedcubing demonstration by candidates trained for Guinness World Records."
    },
    {
      title: "Interactive Cubing Workshop & Training Stage",
      category: "Workshop Event",
      image: "/images/gallery/event4.jpg",
      objectPosition: "center",
      desc: "Interactive learning sessions and group demonstrations on stage."
    },
    {
      title: "Inter-School Cubing Rolling Trophy Event",
      category: "School Championship",
      image: "/images/gallery/event5.jpg",
      objectPosition: "center",
      desc: "School teams competing for the annual ICA rolling trophy."
    },
    {
      title: "Youth Speedcubers Grand Celebration",
      category: "Public Celebration",
      image: "/images/gallery/event6.jpg",
      objectPosition: "center",
      desc: "Celebrating team achievements, dedication, and cognitive excellence."
    }
  ];

  // 2. EVENTS & MOMENTS CATEGORY ITEMS (EXACTLY 6 PHOTOS)
  const eventsItems = [
    {
      title: "SISC Event Moment 1",
      alt: "SISC event photo",
      image: "/images/events-and-moments/moment1.jpg",
      objectPosition: "center"
    },
    {
      title: "SISC Achievement Moment 2",
      alt: "SISC achievement photo",
      image: "/images/events-and-moments/moment2.jpg",
      objectPosition: "center 10%",
      objectFit: "contain",
      scale: 0.88
    },
    {
      title: "SISC Event Moment 3",
      alt: "SISC event photo",
      image: "/images/events-and-moments/moment3.jpg",
      objectPosition: "center"
    },
    {
      title: "SISC Competition Moment 4",
      alt: "SISC competition photo",
      image: "/images/events-and-moments/moment4.jpg",
      objectPosition: "center"
    },
    {
      title: "SISC Team Moment 5",
      alt: "SISC team photo",
      image: "/images/events-and-moments/moment5.jpg",
      objectPosition: "center"
    },
    {
      title: "SISC Achievement Moment 6",
      alt: "SISC achievement photo",
      image: "/images/events-and-moments/moment6.jpg",
      objectPosition: "center"
    }
  ];

  // Active items based on selected tab
  const getActiveItems = () => {
    switch (activeTab) {
      case 'events-moments':
        return eventsItems;
      case 'gallery':
      default:
        return galleryItems;
    }
  };

  const currentItems = getActiveItems();
  const displayedItems = currentItems.slice(0, visibleCount);
  const hasMore = visibleCount < currentItems.length;

  // Open Lightbox
  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  // Close Lightbox
  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
  }, []);

  // Lightbox Navigation — memoised so the keyboard effect below can depend on
  // them honestly instead of capturing a stale render's copy.
  const prevImage = useCallback(() => {
    setCurrentImageIndex((prev) => (prev === 0 ? currentItems.length - 1 : prev - 1));
  }, [currentItems.length]);

  const nextImage = useCallback(() => {
    setCurrentImageIndex((prev) => (prev === currentItems.length - 1 ? 0 : prev + 1));
  }, [currentItems.length]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!lightboxOpen) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'ArrowRight') nextImage();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, closeLightbox, prevImage, nextImage]);

  return (
    <div className="w-full bg-white text-slate-800">

      {/* ---------------------------------------------------- */}
      {/* PAGE HEADER */}
      {/* ---------------------------------------------------- */}
      <section className="relative py-14 lg:py-18 bg-[#F8F9FB] border-b border-slate-100 overflow-hidden text-center">
        <div className="absolute inset-0 opacity-[0.10] world-map-bg pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-[#C8A24A] bg-white px-5 py-2 rounded-full border border-[#C8A24A]/40 shadow-xs">
            <Camera size={14} /> MEDIA & GALLERY
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B2D6B] leading-tight">
            Our Story in <span className="text-[#C8A24A]">Pictures & Moments</span>
          </h1>
          <p className="text-slate-500 text-xs sm:text-sm max-w-xl mx-auto font-light leading-relaxed">
            Explore photographs, milestones, and memorable learning experiences from the International Cube Academy global community.
          </p>

          {/* TWO CATEGORY TABS (GALLERY & EVENTS & MOMENTS) */}
          <div className="pt-4 flex justify-center">
            <div className="inline-flex bg-white rounded-full p-1.5 border border-slate-200 shadow-xs gap-1 flex-wrap justify-center">
              {[
                { id: 'gallery', label: 'Gallery', icon: Image },
                { id: 'events-moments', label: 'Events & Moments', icon: Calendar },
              ].map(tab => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => handleTabChange(tab.id)}
                    className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                      activeTab === tab.id
                        ? 'bg-[#0B2D6B] text-white shadow-sm'
                        : 'text-slate-600 hover:text-[#0B2D6B]'
                    }`}
                  >
                    <Icon size={14} /> {tab.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* MAIN MEDIA CONTENT */}
      {/* ---------------------------------------------------- */}
      <div className="max-w-6xl mx-auto px-6 lg:px-12 py-12 lg:py-16 space-y-12">

        {/* CATEGORY SECTION DESCRIPTION */}
        <div className="text-center space-y-2 max-w-xl mx-auto">
          <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#C8A24A]">
            {activeTab === 'gallery' ? "TRAINING & CLASSROOM MOMENTS" : "COMPETITIONS & CELEBRATIONS"}
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0B2D6B]">
            {activeTab === 'gallery' ? "Gallery" : "Events & Moments"}
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm font-light leading-relaxed">
            {activeTab === 'gallery'
              ? "Photographs showcasing training sessions, classroom activities, students solving cubes, and workshops."
              : "Highlights from competitions, award ceremonies, stage programs, and memorable event celebrations."}
          </p>
        </div>

        {/* IMAGE GRID WITH CONSISTENT 4:3 ASPECT RATIO - PHOTOS ONLY (NO TEXT BELOW) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedItems.map((item, idx) => (
            <div
              key={idx}
              onClick={() => openLightbox(idx)}
              className="w-full aspect-[4/3] bg-[#F8F9FB] rounded-3xl overflow-hidden border border-slate-200/80 shadow-xs hover:border-[#C8A24A]/70 hover:shadow-md hover:-translate-y-1 transition-all duration-300 relative group cursor-pointer"
            >
              {item.image ? (
                <SmartImage
                  src={item.image}
                  alt={item.alt || item.title || "Gallery Photo"}
                  loading="lazy"
                  wrapperClassName="w-full h-full"
                  skeletonClassName="rounded-3xl"
                  style={{
                    objectPosition: item.objectPosition || 'center',
                    objectFit: item.objectFit || 'cover',
                    transform: item.scale ? `scale(${item.scale})` : undefined
                  }}
                  className="w-full h-full block group-hover:scale-105 transition-transform duration-500 rounded-3xl"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-[#0B2D6B]/5 to-[#C8A24A]/10 p-6 flex flex-col items-center justify-center text-center space-y-2 group-hover:bg-[#0B2D6B]/10 transition-colors rounded-3xl">
                  <div className="w-12 h-12 rounded-2xl bg-white text-[#0B2D6B] flex items-center justify-center shadow-xs border border-slate-200/60 group-hover:bg-[#0B2D6B] group-hover:text-[#C8A24A] transition-colors">
                    <Camera size={22} />
                  </div>
                  <div className="text-[11px] font-extrabold uppercase tracking-widest text-[#C8A24A]">
                    Photograph Placeholder
                  </div>
                </div>
              )}

              {/* Subtle hover icon overlay */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none rounded-3xl">
                <div className="w-12 h-12 rounded-full bg-black/60 backdrop-blur-md text-white flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                  <Eye size={20} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* VIEW MORE BUTTON */}
        {hasMore && (
          <div className="text-center pt-4">
            <button
              onClick={() => setVisibleCount((prev) => prev + 4)}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#0B2D6B] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#071d47] transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 group"
            >
              <span>VIEW MORE PHOTOS</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        )}

      </div>

      {/* ---------------------------------------------------- */}
      {/* LIGHTBOX MODAL (PURE PHOTO ONLY - NO NAVY CARD OR TEXT) */}
      {/* ---------------------------------------------------- */}
      {lightboxOpen && (
        <div 
          onClick={closeLightbox}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn cursor-pointer"
        >
          {/* Close Button */}
          <button
            onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
            className="absolute top-5 right-5 text-white/80 hover:text-white p-2.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-50"
            aria-label="Close Lightbox"
          >
            <X size={24} />
          </button>

          {/* Previous Button */}
          <button
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-50"
            aria-label="Previous Image"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Next Button */}
          <button
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-50"
            aria-label="Next Image"
          >
            <ChevronRight size={24} />
          </button>

          {/* PURE PHOTO CONTAINER - NO NAVY PANEL, NO CAPTIONS, MAXIMUM VIEWPORT AREA */}
          <div 
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-full max-h-[92vh] flex items-center justify-center pointer-events-auto"
          >
            {currentItems[currentImageIndex]?.image ? (
              <SmartImage
                key={currentItems[currentImageIndex].image}
                src={currentItems[currentImageIndex].image}
                alt={currentItems[currentImageIndex].title}
                loading="eager"
                wrapperClassName="flex items-center justify-center"
                placeholderClassName="w-[80vw] max-w-[900px] h-[60vh]"
                skeletonClassName="rounded-md"
                variant="dark"
                className="max-w-full max-h-[92vh] w-auto h-auto object-contain block mx-auto rounded-md shadow-2xl transition-all duration-300 select-none"
              />
            ) : (
              <div className="text-center space-y-3 p-8 bg-black/40 border border-white/20 rounded-2xl">
                <Camera size={32} className="text-[#C8A24A] mx-auto" />
                <div className="text-sm font-semibold text-white">Photograph Placeholder</div>
              </div>
            )}
          </div>

        </div>
      )}

    </div>
  );
}
