"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { LuxuryImage } from "@/components/common/image";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/common/icon";
import { ArrowRight, Leaf, Clock, User, Hammer, Home, Building2, Wine } from "lucide-react";
import Link from "next/link";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function HomeContent() {
  const containerRef = useRef(null);

  useGSAP(() => {
    // Reveal all elements with .gsap-reveal class
    const revealElements = gsap.utils.toArray('.gsap-reveal');
    revealElements.forEach((el) => {
      gsap.fromTo(el, 
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    // Philosophy Section Animation
    const philTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".phil-trigger",
        start: "top 75%",
        toggleActions: "play none none reverse"
      }
    });
    
    philTl.fromTo(".gsap-phil-heading", 
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    )
    .fromTo(".gsap-phil-text", 
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out", stagger: 0.15 },
      "-=0.7"
    )
    .fromTo(".gsap-phil-cta",
      { opacity: 0 },
      { opacity: 1, duration: 0.8 },
      "-=0.5"
    )
    .fromTo(".gsap-phil-item",
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "power3.out" },
      "-=0.5"
    );

    // Parallax elements
    const parallaxElements = gsap.utils.toArray('.gsap-parallax');
    parallaxElements.forEach((el) => {
      gsap.to(el, {
        yPercent: 15,
        ease: "none",
        scrollTrigger: {
          trigger: el.parentElement,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="bg-background relative z-20">
      
      {/* 1. Our Philosophy */}
      <section className="py-[120px] px-container bg-background">
        <div className="max-w-[800px] mx-auto text-center flex flex-col items-center phil-trigger">
          <span className="text-lg md:text-xl font-semibold text-primary uppercase tracking-widest mb-6 block gsap-phil-heading">OUR PHILOSOPHY</span>
          
          <h2 className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] font-serif leading-tight text-heading mb-10 gsap-phil-heading">
            Designing spaces that inspire timeless living.
          </h2>
          
          <div className="flex flex-col gap-6 mb-12">
            <p className="text-body-lg text-muted-foreground font-sans font-light leading-relaxed gsap-phil-text">
              We believe that true luxury is found in the meticulous attention to detail and a profound respect for materials. Our approach centers on creating environments that feel effortless, balancing quiet sophistication with enduring comfort.
            </p>
            <p className="text-body-lg text-muted-foreground font-sans font-light leading-relaxed gsap-phil-text">
              Every project is a deeply collaborative journey, resulting in bespoke sanctuaries that resonate with your personal vision while maintaining our signature standard of unparalleled craftsmanship.
            </p>
          </div>

          <div className="mb-20 gsap-phil-cta">
            <Link href="/about" className="group inline-flex items-center gap-2 text-[13px] font-medium tracking-widest uppercase text-heading transition-colors relative pb-1">
              Discover Our Studio
              <Icon icon={ArrowRight} size="sm" className="transform group-hover:translate-x-1 transition-transform" />
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-heading transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </div>

          {/* Brand Values Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 w-full">
            {[
              { icon: Leaf, title: "Natural Materials", desc: "Sourcing only the finest organic elements." },
              { icon: Clock, title: "Timeless Design", desc: "Aesthetics that transcend seasonal trends." },
              { icon: User, title: "Personalized Spaces", desc: "Tailored entirely to your unique lifestyle." },
              { icon: Hammer, title: "Premium Craftsmanship", desc: "Flawless execution in every detail." }
            ].map((value, i) => (
              <div key={i} className="flex flex-col items-center text-center gap-4 gsap-phil-item">
                <div className="w-12 h-12 rounded-full bg-surface flex items-center justify-center text-primary mb-2">
                  <Icon icon={value.icon} size="md" />
                </div>
                <h3 className="text-h6 font-serif text-heading">{value.title}</h3>
                <p className="text-sm text-muted-foreground font-light">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Featured Selected Works */}
      <section className="py-section px-container bg-surface">
        <div className="container-base mx-auto">
          
          <div className="flex flex-col items-center text-center mb-16 w-full gsap-reveal">
            <span className="text-lg md:text-xl font-semibold text-primary uppercase tracking-widest mb-6 block">PORTFOLIO</span>
            <h2 className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] font-serif leading-tight text-heading">
              Selected Works
            </h2>
          </div>

          <div className="flex flex-col gap-24">
            
            {/* Project 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center group">
              <div className="lg:col-span-7 relative h-[60svh] w-full overflow-hidden rounded-xl cursor-pointer gsap-reveal">
                 <Link href="/projects/fifth-avenue-penthouse">
                   <div className="w-full h-[120%] -top-[10%] absolute will-change-transform">
                     <LuxuryImage 
                        src="/images/portfolio-hero.png" // Reusing AI image
                        alt="Fifth Avenue Penthouse"
                        className="w-full h-full object-cover absolute inset-0 gsap-parallax transition-transform duration-1000 group-hover:scale-105"
                        wrapperClassName="w-full h-full"
                        hoverEffect="none"
                      />
                   </div>
                 </Link>
              </div>
              <div className="lg:col-span-5 flex flex-col gap-6 gsap-reveal">
                <div>
                  <span className="text-caption text-primary uppercase tracking-widest block mb-2">Residential</span>
                  <h3 className="text-h3 font-serif group-hover:text-primary transition-colors">
                    <Link href="/projects/fifth-avenue-penthouse">Fifth Avenue Penthouse</Link>
                  </h3>
                </div>
                <p className="text-body text-muted-foreground">
                  A sanctuary of absolute calm perched above the Manhattan skyline, featuring custom travertine floors and hand-carved wood paneling.
                </p>
                <Link href="/projects/fifth-avenue-penthouse" className="inline-flex items-center gap-2 text-button text-foreground hover:text-primary transition-colors mt-2">
                  Explore Case Study
                  <Icon icon={ArrowRight} size="sm" className="transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Project 2 (Alternating) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center group">
              <div className="lg:col-span-7 lg:order-2 relative h-[60svh] w-full overflow-hidden rounded-xl cursor-pointer gsap-reveal">
                 <Link href="/projects/the-aspen-chalet">
                   <div className="w-full h-[120%] -top-[10%] absolute will-change-transform">
                     <LuxuryImage 
                        src="/images/portfolio-res-2.png" // Reusing AI image
                        alt="The Aspen Chalet"
                        className="w-full h-full object-cover absolute inset-0 gsap-parallax transition-transform duration-1000 group-hover:scale-105"
                        wrapperClassName="w-full h-full"
                        hoverEffect="none"
                      />
                   </div>
                 </Link>
              </div>
              <div className="lg:col-span-5 lg:order-1 flex flex-col gap-6 gsap-reveal">
                <div>
                  <span className="text-caption text-primary uppercase tracking-widest block mb-2">Hospitality</span>
                  <h3 className="text-h3 font-serif group-hover:text-primary transition-colors">
                    <Link href="/projects/the-aspen-chalet">Aman Tokyo Lobby</Link>
                  </h3>
                </div>
                <p className="text-body text-muted-foreground">
                  An exploration of monolithic materials and soft light, creating an intimate entry sequence for a world-class luxury hotel.
                </p>
                <Link href="/projects/the-aspen-chalet" className="inline-flex items-center gap-2 text-button text-foreground hover:text-primary transition-colors mt-2">
                  Explore Case Study
                  <Icon icon={ArrowRight} size="sm" className="transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

          </div>
          
          <div className="mt-16 flex justify-center w-full gsap-reveal">
            <Link href="/portfolio">
              <Button size="lg" className="bg-heading text-background hover:bg-heading/90 font-semibold tracking-wide uppercase text-[12px] rounded-sm px-8 group transition-colors">
                Explore Projects
                <span className="ml-3 inline-flex items-center justify-center w-6 h-6 rounded-full border border-background group-hover:bg-background group-hover:text-heading transition-all">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </Button>
            </Link>
          </div>

        </div>
      </section>

      {/* 3. Our Expertise */}
      <section className="py-[120px] px-container bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-surface/40 via-background to-background relative z-10">
        <div className="container-base mx-auto">
          
          <div className="flex flex-col items-center text-center mb-14 gsap-reveal">
            <span className="text-caption text-primary uppercase tracking-widest mb-6 block">EXPERTISE</span>
            <h2 className="text-[2.5rem] md:text-[3.5rem] font-serif leading-tight text-heading mb-8">
              Comprehensive Design
            </h2>
            <p className="text-body-lg text-muted-foreground font-sans font-light leading-relaxed max-w-[700px]">
              We offer full-service interior architecture and design, managing every detail from conceptual sketches to the final curated installation. Our holistic approach ensures a seamless, luxurious experience at every scale.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-14">
            {[
              { icon: Home, title: "Residential", desc: "Bespoke private homes and luxury estates tailored entirely to your lifestyle and personal aesthetic." },
              { icon: Building2, title: "Commercial", desc: "Flagship retail spaces, boutique corporate environments, and exclusive executive offices." },
              { icon: Wine, title: "Hospitality", desc: "World-class boutique hotels, destination restaurants, and private members clubs." }
            ].map((service, i) => (
              <div key={i} className="group flex flex-col items-center text-center p-10 bg-background border border-border/30 rounded-2xl shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] hover:border-primary/20 transition-all duration-500 ease-out hover:-translate-y-2 gsap-reveal">
                
                <div className="w-14 h-14 rounded-full bg-surface/60 flex items-center justify-center text-primary mb-6 transition-transform duration-500 group-hover:scale-110">
                  <Icon icon={service.icon} size="md" />
                </div>
                
                <h3 className="text-[1.5rem] font-serif text-heading mb-5">{service.title}</h3>
                
                <div className="w-12 h-[1px] bg-border/60 mb-5 transition-colors duration-500 group-hover:bg-primary/30"></div>
                
                <p className="text-[15px] text-muted-foreground font-light leading-relaxed">{service.desc}</p>
                
              </div>
            ))}
          </div>
          
          <div className="text-center gsap-reveal">
            <Link href="/services" className="group inline-flex items-center gap-2 text-[13px] font-medium tracking-widest uppercase text-heading transition-colors relative pb-1">
              View Full Services
              <Icon icon={ArrowRight} size="sm" className="transform group-hover:translate-x-1 transition-transform" />
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-heading transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </div>
          
        </div>
      </section>

      {/* 4. Consultation CTA */}
      <section className="py-[120px] px-container bg-foreground text-background text-center">
        <div className="container-content mx-auto gsap-reveal">
          <span className="text-caption text-white/50 uppercase tracking-widest mb-6 block">Ready to Begin?</span>
          <h2 className="text-display-md font-serif mb-6">Commission a Project</h2>
          <p className="text-body-lg text-white/70 mb-12 max-w-xl mx-auto">
            Our waitlist is currently open for full-scale residential and commercial commissions for the upcoming year.
          </p>
          <Link href="/contact">
            <Button variant="primary" size="lg" className="bg-primary text-primary-foreground hover:bg-white hover:text-foreground">
              Inquire Now
            </Button>
          </Link>
        </div>
      </section>

    </div>
  );
}
