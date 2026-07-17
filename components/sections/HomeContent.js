"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { LuxuryImage } from "@/components/common/image";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/common/icon";
import { ArrowRight } from "lucide-react";
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
      
      {/* 1. About the Studio */}
      <section className="py-[120px] px-container text-center max-w-5xl mx-auto">
        <span className="text-caption text-primary uppercase tracking-widest mb-6 block gsap-reveal">Our Philosophy</span>
        <h2 className="text-display-sm font-serif leading-tight text-foreground gsap-reveal">
          We believe that true luxury is defined by the absolute harmony between space, material, and light. Every project is an exploration of restraint and timeless elegance.
        </h2>
        <div className="mt-12 gsap-reveal">
          <Link href="/about" className="inline-flex items-center gap-2 text-button text-muted-foreground hover:text-primary transition-colors">
            Discover Our Studio
            <Icon icon={ArrowRight} size="sm" />
          </Link>
        </div>
      </section>

      {/* 2. Featured Selected Works */}
      <section className="py-section px-container bg-surface">
        <div className="container-base mx-auto">
          
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gsap-reveal">
            <div>
              <span className="text-caption text-primary uppercase tracking-widest mb-4 block">Portfolio</span>
              <h2 className="text-h2 font-serif">Selected Works</h2>
            </div>
            <Link href="/portfolio" className="hidden md:inline-flex items-center gap-2 text-button text-muted-foreground hover:text-primary transition-colors">
              View All Projects
              <Icon icon={ArrowRight} size="sm" />
            </Link>
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
          
          <div className="mt-16 text-center md:hidden gsap-reveal">
            <Link href="/portfolio" className="inline-flex items-center gap-2 text-button text-muted-foreground hover:text-primary transition-colors">
              View All Projects
              <Icon icon={ArrowRight} size="sm" />
            </Link>
          </div>

        </div>
      </section>

      {/* 3. Our Expertise */}
      <section className="py-section px-container bg-background">
        <div className="container-base mx-auto">
          <div className="text-center mb-16 gsap-reveal">
            <span className="text-caption text-primary uppercase tracking-widest mb-4 block">Expertise</span>
            <h2 className="text-h2 font-serif">Comprehensive Design</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Residential", desc: "Bespoke private homes and estates tailored entirely to the client's lifestyle." },
              { title: "Commercial", desc: "Flagship retail spaces and boutique corporate environments." },
              { title: "Hospitality", desc: "World-class hotels, restaurants, and exclusive members clubs." }
            ].map((service, i) => (
              <div key={i} className="flex flex-col items-center text-center gap-4 p-8 border border-border/50 rounded-xl hover:border-primary/30 transition-colors gsap-reveal">
                <h3 className="text-h4 font-serif">{service.title}</h3>
                <p className="text-body text-muted-foreground">{service.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center gsap-reveal">
            <Link href="/services" className="inline-flex items-center gap-2 text-button text-primary hover:text-foreground transition-colors">
              View Full Services
              <Icon icon={ArrowRight} size="sm" />
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
