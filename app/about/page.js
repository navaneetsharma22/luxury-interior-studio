"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { LuxuryImage } from "@/components/common/image";
import { Button } from "@/components/ui/button";
import { FeatureCard, TeamCard } from "@/components/ui/card";
import { Icon } from "@/components/common/icon";
import { PenTool } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function AboutPage() {
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
          duration: 1,
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
    <main ref={containerRef} className="bg-background min-h-screen pb-0">
      
      {/* 1. Hero Banner */}
      <section className="relative h-[70svh] w-full overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 w-full h-[120%] -top-[10%] will-change-transform z-0">
          <LuxuryImage 
            src="/images/hero-bg-2.png" 
            alt="Aurevia Interiors Studio"
            className="w-full h-full object-cover gsap-parallax absolute inset-0"
            wrapperClassName="w-full h-full"
            overlay={true}
            priority
          />
        </div>
        <div className="relative z-10 text-center px-container mt-16">
          <span className="text-caption text-white/80 uppercase tracking-widest mb-4 block gsap-reveal">Our Story</span>
          <h1 className="text-display-lg text-white font-serif gsap-reveal">Defining Quiet Luxury.</h1>
        </div>
      </section>

      {/* 2. Company Story */}
      <section className="py-section px-container">
        <div className="container-base mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-32 items-center">
          <div className="flex flex-col gap-8 max-w-lg">
            <h2 className="text-h2 font-serif gsap-reveal">A legacy of uncompromising craftsmanship.</h2>
            <div className="space-y-6 text-body text-muted-foreground gsap-reveal">
              <p>
                Founded on the belief that true luxury whispers rather than shouts, Aurevia Interiors has spent the last decade redefining the spatial experience for the world&apos;s most discerning individuals.
              </p>
              <p>
                We do not merely decorate; we architect emotions. By meticulously sourcing the rarest materials and honoring traditional artisanship, we create environments that serve as sanctuaries—timeless, calm, and profoundly beautiful.
              </p>
            </div>
          </div>
          <div className="relative h-[600px] md:h-[800px] w-full overflow-hidden rounded-xl gsap-reveal">
             <div className="w-full h-[120%] -top-[10%] absolute will-change-transform">
               <LuxuryImage 
                  src="/images/hero-bg-3.png"
                  alt="Craftsmanship textures"
                  className="w-full h-full object-cover absolute inset-0 gsap-parallax"
                  wrapperClassName="w-full h-full"
                />
             </div>
          </div>
        </div>
      </section>

      {/* 3. Mission & Vision */}
      <section className="bg-foreground text-background py-section px-container text-center flex items-center justify-center min-h-[50vh]">
        <h2 className="text-display-md font-serif max-w-4xl mx-auto leading-tight gsap-reveal">
          &quot;Our mission is to translate your most profound aspirations into living, breathing works of art that transcend time.&quot;
        </h2>
      </section>

      {/* 4. Founder Message */}
      <section className="py-section px-container bg-surface">
        <div className="container-base mx-auto grid grid-cols-1 md:grid-cols-2 gap-0 lg:gap-16 items-center">
           <div className="relative h-[500px] lg:h-[700px] w-full md:w-4/5 overflow-hidden rounded-xl z-10 gsap-reveal">
             <LuxuryImage 
                src="/images/hero-bg-4.png"
                alt="Founder of Aurevia Interiors"
                className="w-full h-full object-cover absolute inset-0"
                wrapperClassName="w-full h-full"
              />
          </div>
          <div className="bg-background p-12 lg:p-16 rounded-xl shadow-floating -mt-16 md:mt-0 md:-ml-24 relative z-20 max-w-xl gsap-reveal">
            <Icon icon={PenTool} className="text-primary mb-6" size="md" />
            <blockquote className="text-h4 font-serif italic mb-8">
              &quot;When you strip away the excess, what remains must be extraordinary. That is the essence of our approach.&quot;
            </blockquote>
            <div>
              <div className="text-button text-foreground mb-1">Elias Vance</div>
              <div className="text-caption text-muted-foreground tracking-widest uppercase">Founder & Principal Architect</div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Design Philosophy */}
      <section className="py-section px-container">
        <div className="container-base mx-auto">
          <div className="text-center mb-16 gsap-reveal">
            <span className="text-caption text-primary uppercase tracking-widest mb-4 block">Tenets</span>
            <h2 className="text-h2 font-serif">Our Philosophy</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="gsap-reveal">
              <FeatureCard 
                title="Timelessness" 
                description="We reject fleeting trends, favoring architectural permanence and classical proportions that look just as striking decades from now."
              />
            </div>
            <div className="gsap-reveal">
              <FeatureCard 
                title="Sourced Rarity" 
                description="From Italian travertine to rare Japanese walnut, our materials are ethically sourced from the world's most exclusive quarries and forests."
              />
            </div>
            <div className="gsap-reveal">
              <FeatureCard 
                title="Spatial Harmony" 
                description="Every shadow, sightline, and acoustic profile is engineered to induce a sense of profound calm and spatial balance."
              />
            </div>
          </div>
        </div>
      </section>

      {/* 6. Timeline */}
      <section className="py-section px-container bg-surface overflow-hidden">
        <div className="container-content mx-auto">
          <div className="text-center mb-24 gsap-reveal">
            <h2 className="text-h2 font-serif">Our Evolution</h2>
          </div>
          
          <div className="relative border-l border-primary/20 ml-4 md:ml-1/2 space-y-16 md:space-y-24">
            {[
              { year: "2010", title: "The Inception", desc: "Elias Vance opens a boutique studio in Milan, focusing purely on bespoke furniture." },
              { year: "2015", title: "Global Expansion", desc: "Aurevia takes on its first international estate in Kyoto, cementing our signature aesthetic." },
              { year: "2021", title: "AD100 Recognition", desc: "Recognized among the world's top 100 architectural and interior design firms." },
              { year: "2026", title: "The New Standard", desc: "Launching our flagship showroom, redefining how clients experience luxury materials." }
            ].map((item, i) => (
              <div 
                key={i} 
                className="relative pl-10 md:pl-0 md:w-full gsap-reveal flex flex-col md:flex-row group"
              >
                {/* Mobile Dot */}
                <div className="absolute top-2 -left-[6px] w-3 h-3 rounded-full bg-background border-2 border-primary md:hidden" />
                
                {/* Desktop Layout Alternating */}
                <div className={`hidden md:block w-1/2 ${i % 2 === 0 ? 'pr-16 text-right' : 'pl-16 order-last'}`}>
                   {i % 2 === 0 ? (
                     <>
                      <div className="text-caption text-primary mb-2 tracking-widest">{item.year}</div>
                      <h4 className="text-h4 font-serif mb-3">{item.title}</h4>
                      <p className="text-body text-muted-foreground">{item.desc}</p>
                     </>
                   ) : null}
                </div>

                {/* Center Node Desktop */}
                <div className="hidden md:flex absolute left-0 -translate-x-1/2 top-2 w-4 h-4 rounded-full bg-background border-2 border-primary items-center justify-center transition-transform group-hover:scale-125" />

                <div className={`hidden md:block w-1/2 ${i % 2 !== 0 ? 'pl-16' : 'pr-16 order-last text-right'}`}>
                   {i % 2 !== 0 ? (
                     <>
                      <div className="text-caption text-primary mb-2 tracking-widest">{item.year}</div>
                      <h4 className="text-h4 font-serif mb-3">{item.title}</h4>
                      <p className="text-body text-muted-foreground">{item.desc}</p>
                     </>
                   ) : null}
                </div>

                {/* Mobile Content (always left aligned) */}
                <div className="md:hidden">
                    <div className="text-caption text-primary mb-2 tracking-widest">{item.year}</div>
                    <h4 className="text-h4 font-serif mb-3">{item.title}</h4>
                    <p className="text-body text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Team Preview */}
      <section className="py-section px-container">
        <div className="container-base mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gsap-reveal">
            <div>
              <span className="text-caption text-primary uppercase tracking-widest mb-4 block">The Artisans</span>
              <h2 className="text-h2 font-serif">Our Leadership</h2>
            </div>
            <Button variant="outline" className="hidden md:inline-flex mt-6 md:mt-0">View All Team</Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="gsap-reveal">
              <TeamCard 
                name="Elias Vance"
                role="Principal Architect"
                image="/images/hero-bg.png"
              />
            </div>
            <div className="gsap-reveal">
              <TeamCard 
                name="Sienna Roth"
                role="Head of Interiors"
                image="/images/hero-bg-2.png"
              />
            </div>
            <div className="gsap-reveal">
              <TeamCard 
                name="Julian Mercer"
                role="Director of Sourcing"
                image="/images/hero-bg-4.png"
              />
            </div>
          </div>
          <Button variant="outline" className="w-full mt-12 md:hidden">View All Team</Button>
        </div>
      </section>

      {/* 8. CTA */}
      <section className="py-[120px] px-container bg-foreground text-background text-center">
        <div className="container-content mx-auto gsap-reveal">
          <h2 className="text-display-md font-serif mb-6">Ready to begin?</h2>
          <p className="text-body-lg text-white/70 mb-12 max-w-xl mx-auto">
            Schedule a private consultation to discuss your vision and discover how we can transform your space.
          </p>
          <Button variant="primary" size="lg" className="bg-primary text-primary-foreground hover:bg-white hover:text-foreground">
            Contact the Studio
          </Button>
        </div>
      </section>

    </main>
  );
}
