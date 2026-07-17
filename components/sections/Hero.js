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
    gsap.set([headlineRef.current, copyRef.current, ctaRef.current, stat1Ref.current, stat2Ref.current, stat3Ref.current], { 
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
    .to([headlineRef.current, copyRef.current, ctaRef.current], {
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
      <div className="w-full md:w-[45%] flex flex-col justify-center px-container py-section lg:pl-32 xl:pl-40 lg:pr-16 z-10">
        
        {/* Main Text Content */}
        <div className="flex flex-col gap-6 max-w-xl relative z-10">
          <h1 
            ref={headlineRef}
            className="text-display-xl"
          >
            Crafting Timeless Luxury Spaces.
          </h1>
          
          <p 
            ref={copyRef}
            className="text-body-lg text-muted-foreground max-w-[45ch]"
          >
            Award-winning interior architecture for the world&apos;s most discerning residences and boutique estates. We transform environments into living works of art.
          </p>

          <div ref={ctaRef} className="flex flex-col sm:flex-row gap-6 mt-8 items-start">
            <Button size="lg" variant="primary">
              Book a Consultation
            </Button>
            <Button size="lg" variant="ghost" className="group">
              Explore Portfolio
              <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Button>
          </div>
        </div>

        {/* Trust Indicators (Bottom Aligned) */}
        <div 
          className="hidden md:flex flex-row gap-12 mt-auto pt-24"
        >
          <div ref={stat1Ref}>
            <div className="text-h4 font-serif mb-1">15+</div>
            <div className="text-caption text-muted-foreground uppercase tracking-widest">Years of<br/>Excellence</div>
          </div>
          <div ref={stat2Ref}>
            <div className="text-h4 font-serif mb-1">$100M+</div>
            <div className="text-caption text-muted-foreground uppercase tracking-widest">Completed<br/>Projects</div>
          </div>
          <div ref={stat3Ref}>
            <div className="text-h4 font-serif mb-1">Award-Winning</div>
            <div className="text-caption text-muted-foreground uppercase tracking-widest">Design<br/>Studio</div>
          </div>
        </div>

      </div>

      {/* Right Column (Image Background / Bleed) */}
      <div className="absolute inset-0 md:relative md:inset-auto md:w-[55%] h-[100svh] w-full overflow-hidden">
        
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
