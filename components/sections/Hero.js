"use client";

import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Button } from "@/components/ui/button";
import { LuxuryImage } from "@/components/common/image";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function Hero() {
  const sectionRef = useRef(null);
  const imageWrapperRef = useRef(null);
  const imageRef = useRef(null);
  
  // Content refs for staggered reveal
  const headlineRef = useRef(null);
  const copyRef = useRef(null);
  const ctaRef = useRef(null);
  const btnsRef = useRef(null);
  const stat1Ref = useRef(null);
  const stat2Ref = useRef(null);
  const stat3Ref = useRef(null);
  const scrollCueRef = useRef(null);
  const scrollCueLineRef = useRef(null);

  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    "/images/hero-bg.png", 
    "/images/hero-bg-2.png", 
    "/images/hero-bg-3.png",
    "/images/hero-bg-4.png",
    "/images/hero-bg-5.png"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [images.length]);

  useGSAP(() => {
    // 1. Initial Timeline (Entrance Animations)
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Ensure elements are initially hidden or positioned correctly before animation
    gsap.set([headlineRef.current, copyRef.current, ctaRef.current, btnsRef.current, stat1Ref.current, stat2Ref.current, stat3Ref.current], { 
      y: 30, 
      opacity: 0 
    });
    
    gsap.set(imageWrapperRef.current, { clipPath: "inset(0 100% 0 0)" });
    gsap.set(imageRef.current, { scale: 1.15 });

    // --- Sequence Starts ---

    // A. Image Reveal (Smooth wipe from left to right)
    tl.to(imageWrapperRef.current, { 
      clipPath: "inset(0 0% 0 0)", 
      duration: 1.8, 
      ease: "power4.inOut" 
    })
    
    // B. Image Slow Scale (Subtle Ken burns starting after wipe)
    .to(imageRef.current, {
      scale: 1,
      duration: 2.5,
      ease: "power2.out"
    }, "-=1.5")

    // C. Headline & Content Stagger
    .to([headlineRef.current, copyRef.current, ctaRef.current, btnsRef.current], {
      y: 0,
      opacity: 1,
      duration: 1.2,
      stagger: 0.15,
      ease: "power3.out"
    }, "-=1.8")

    // D. Statistics Reveal
    .to([stat1Ref.current, stat2Ref.current, stat3Ref.current], {
      y: 0,
      opacity: 1,
      duration: 1,
      stagger: 0.1,
      ease: "power3.out"
    }, "-=1.4")

    // E. Scroll Indicator Reveal
    .fromTo(scrollCueRef.current, 
      { opacity: 0 }, 
      { opacity: 1, duration: 1 }, 
      "-=1.0"
    );

    // 2. Scroll Indicator Looping Animation
    gsap.to(scrollCueLineRef.current, {
      yPercent: 100,
      duration: 1.5,
      repeat: -1,
      ease: "power1.inOut",
      yoyo: true
    });

    // 3. Parallax Effect on Scroll
    // The image moves slightly slower than the scroll speed to create depth
    gsap.to(imageRef.current, {
      yPercent: 20, // Move image down as we scroll down
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true, // Smooth scrubbing
      }
    });

  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="relative min-h-[100svh] w-full flex flex-col md:flex-row overflow-hidden bg-background">
      
      {/* Left Column (Content) */}
      <div className="w-full md:w-[50%] flex flex-col justify-center px-container py-section lg:pl-32 xl:pl-40 lg:pr-16 z-10 relative">
        
        {/* Main Text Content */}
        <div className="flex flex-col gap-6 max-w-xl relative z-10">
          
          {/* Decorative Tagline */}
          <div ref={headlineRef} className="flex items-center gap-3 mb-2">
            <span className="flex gap-1 text-accent font-bold text-lg leading-none">
              |||
            </span>
            <span className="text-caption text-accent uppercase tracking-widest font-medium">
              Where Luxury Meets Lifestyle
            </span>
          </div>

          <h1 
            ref={copyRef}
            className="text-display-xl text-heading font-serif leading-tight"
          >
            Transform Your Living Space with Timeless Elegance
          </h1>
          
          <p 
            ref={ctaRef}
            className="text-body-lg text-muted-foreground max-w-[50ch] leading-relaxed"
          >
            At LuxeSpace Interiors, we create exquisite interiors that blend sophistication with comfort, tailored to reflect your unique personality and style. Our experienced designers and craftsmen ensure your living space is both beautiful and functional.
          </p>

          <div ref={btnsRef} className="flex flex-col sm:flex-row gap-6 mt-6 items-start">
            <Button size="lg" className="bg-[#E8E2D9] text-[#14352F] hover:bg-[#DDD8CF] border border-[#DDD8CF] font-semibold tracking-wide uppercase text-[12px] rounded-sm px-6 group transition-colors">
              Explore Our Designs
              <span className="ml-3 inline-flex items-center justify-center w-6 h-6 rounded-full border border-[#14352F] group-hover:bg-[#14352F] group-hover:text-[#E8E2D9] transition-all">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </span>
            </Button>
            <button className="flex items-center gap-3 text-heading hover:text-heading/80 transition-colors duration-300 group h-12">
              <span className="w-10 h-10 rounded-full bg-[#E8E2D9] text-[#14352F] flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-sm">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>
              </span>
              <span className="text-[13px] font-semibold tracking-wide">Watch Video</span>
            </button>
          </div>
        </div>

        {/* Trust Indicators (Bottom Aligned) */}
        <div 
          className="hidden md:flex flex-row gap-12 mt-auto pt-24 border-t border-border"
          style={{ paddingTop: "2rem", marginTop: "auto" }}
        >
          <div ref={stat1Ref}>
            <div className="text-h3 font-serif mb-1 text-heading">20+</div>
            <div className="text-caption text-muted-foreground uppercase tracking-widest">Years of<br/>Experience</div>
          </div>
          <div ref={stat2Ref}>
            <div className="text-h3 font-serif mb-1 text-heading">500+</div>
            <div className="text-caption text-muted-foreground uppercase tracking-widest">Completed<br/>Projects</div>
          </div>
          <div ref={stat3Ref}>
            <div className="text-h3 font-serif mb-1 text-heading">98%</div>
            <div className="text-caption text-muted-foreground uppercase tracking-widest">Client<br/>Satisfaction</div>
          </div>
        </div>

      </div>

      {/* Right Column (Image Background / Bleed) */}
      <div className="absolute inset-0 md:relative md:inset-auto md:w-[50%] h-[100svh] w-full overflow-hidden">
        
        {/* Mobile Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent md:hidden z-0" />
        
        <div ref={imageWrapperRef} className="w-full h-full will-change-transform relative">
          <div ref={imageRef} className="absolute inset-0 w-full h-[120%] -top-[10%] will-change-transform">
             {images.map((src, index) => (
               <div 
                 key={src} 
                 className={`absolute inset-0 w-full h-full transition-opacity duration-[2500ms] ease-in-out ${index === currentImage ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
               >
                 <LuxuryImage 
                    src={src}
                    alt="Minimalist luxury interior space"
                    aspectRatio="auto"
                    wrapperClassName="w-full h-full"
                    className="w-full h-full object-cover object-center absolute"
                    hoverEffect="none"
                    priority={index === 0}
                 />
               </div>
             ))}
          </div>
        </div>
      </div>

      {/* Scroll Cue */}
      <div ref={scrollCueRef} className="absolute bottom-8 left-8 md:left-16 flex flex-col items-center gap-4 z-20">
        <span className="text-caption text-muted-foreground tracking-widest uppercase origin-bottom-left -rotate-90 translate-y-full whitespace-nowrap mb-24 md:mb-16">
          Scroll to explore
        </span>
        <div className="w-[1px] h-12 bg-border relative overflow-hidden">
          <div ref={scrollCueLineRef} className="absolute -top-full left-0 w-full h-full bg-foreground" />
        </div>
      </div>
      
    </section>
  );
}
