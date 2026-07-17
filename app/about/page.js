"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { LuxuryImage } from "@/components/common/image";
import { Button } from "@/components/ui/button";
import { FeatureCard, TeamCard, ServiceCard, TestimonialCard } from "@/components/ui/card";
import { Icon } from "@/components/common/icon";
import { PenTool, Target, Lightbulb, Clock, Hammer, Leaf, Users, ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

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
            toggleActions: "play none none none"
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

    // Number Counter Animation
    const counters = gsap.utils.toArray('.gsap-counter');
    counters.forEach(counter => {
      const target = parseFloat(counter.getAttribute('data-target'));
      const suffix = counter.getAttribute('data-suffix') || '';
      
      gsap.to(counter, {
        innerHTML: target,
        duration: 2,
        ease: "power2.out",
        snap: { innerHTML: 1 },
        scrollTrigger: {
          trigger: counter,
          start: "top 85%",
          toggleActions: "play none none none"
        },
        onUpdate: function() {
          counter.innerHTML = Math.ceil(this.targets()[0].innerHTML) + suffix;
        }
      });
    });

  }, { scope: containerRef });

  return (
    <main ref={containerRef} className="bg-background min-h-screen pb-0">
      
      {/* 1. Hero Banner */}
      <section className="relative h-[80svh] w-full overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 w-full h-[120%] -top-[10%] will-change-transform z-0">
          <LuxuryImage 
            src="/images/hero-bg-2.png" 
            alt="LuxeSpace Interiors Studio"
            className="w-full h-full object-cover gsap-parallax absolute inset-0"
            wrapperClassName="w-full h-full"
            overlay={true}
            priority
          />
        </div>
        <div className="relative z-10 text-center px-container mt-16 max-w-3xl flex flex-col items-center">
          <span className="text-caption text-white/80 uppercase tracking-widest mb-6 block gsap-reveal">Our Story</span>
          <h1 className="text-[3rem] md:text-[4rem] lg:text-[4.5rem] leading-[1.1] text-white font-serif gsap-reveal mb-8">Defining Quiet Luxury.</h1>
          <div className="w-24 h-[1px] bg-white/30 mb-8 gsap-reveal"></div>
          <p className="text-body-lg text-white/80 font-light max-w-xl mx-auto gsap-reveal">
            We are an award-winning interior architecture studio dedicated to creating spaces of profound calm and timeless beauty.
          </p>
        </div>
      </section>

      {/* 2. Company Story */}
      <section className="py-[160px] px-container bg-background">
        <div className="container-base mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-32 items-start">
          <div className="flex flex-col gap-12 max-w-xl">
            <div className="flex flex-col gap-6">
              <h2 className="text-[2.5rem] md:text-[3.5rem] font-serif leading-tight text-heading gsap-reveal">A legacy of uncompromising craftsmanship.</h2>
              <div className="space-y-6 text-[1.125rem] text-muted-foreground font-light leading-relaxed gsap-reveal">
                <p>
                  Founded on the belief that true luxury whispers rather than shouts, LuxeSpace Interiors has spent the last decade redefining the spatial experience for the world&apos;s most discerning individuals.
                </p>
                <p>
                  We do not merely decorate; we architect emotions. By meticulously sourcing the rarest materials and honoring traditional artisanship, we create environments that serve as sanctuaries—timeless, calm, and profoundly beautiful.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 pt-8 border-t border-border/40">
              <div className="gsap-reveal">
                <div className="w-10 h-10 rounded-full bg-surface flex items-center justify-center text-primary mb-4">
                  <Icon icon={Target} size="sm" />
                </div>
                <h4 className="text-h5 font-serif text-heading mb-3">Our Mission</h4>
                <p className="text-small text-muted-foreground leading-relaxed">To translate profound aspirations into living, breathing works of art that transcend time.</p>
              </div>
              <div className="gsap-reveal">
                <div className="w-10 h-10 rounded-full bg-surface flex items-center justify-center text-primary mb-4">
                  <Icon icon={Lightbulb} size="sm" />
                </div>
                <h4 className="text-h5 font-serif text-heading mb-3">Our Vision</h4>
                <p className="text-small text-muted-foreground leading-relaxed">To be the global vanguard of minimal luxury, setting the benchmark for spatial harmony.</p>
              </div>
            </div>
          </div>
          
          <div className="relative h-[600px] md:h-[800px] w-full overflow-hidden rounded-2xl gsap-reveal sticky top-12">
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

      {/* 3. Brand Philosophy */}
      <section className="py-[160px] px-container bg-surface">
        <div className="container-base mx-auto">
          <div className="text-center mb-20 gsap-reveal">
            <span className="text-caption text-primary uppercase tracking-widest mb-4 block">Our Values</span>
            <h2 className="text-h2 font-serif text-heading">Brand Philosophy</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="gsap-reveal">
              <ServiceCard 
                icon={Clock}
                title="Timeless Design" 
                description="We reject fleeting trends, favoring architectural permanence and classical proportions that look just as striking decades from now."
              />
            </div>
            <div className="gsap-reveal">
              <ServiceCard 
                icon={Hammer}
                title="Premium Craftsmanship" 
                description="Partnering exclusively with master artisans, every custom joint and finish is executed with uncompromising precision."
              />
            </div>
            <div className="gsap-reveal">
              <ServiceCard 
                icon={Leaf}
                title="Sustainable Materials" 
                description="From Italian travertine to rare Japanese walnut, our materials are ethically sourced from the world's most exclusive quarries and forests."
              />
            </div>
            <div className="gsap-reveal">
              <ServiceCard 
                icon={Users}
                title="Client-Centered Approach" 
                description="Every shadow, sightline, and acoustic profile is engineered uniquely around your lifestyle to induce a sense of profound calm."
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Founder Message */}
      <section className="py-[160px] px-container bg-background">
        <div className="container-base mx-auto grid grid-cols-1 md:grid-cols-2 gap-0 lg:gap-16 items-center">
           <div className="relative h-[500px] lg:h-[700px] w-full md:w-4/5 overflow-hidden rounded-2xl z-10 gsap-reveal">
             <LuxuryImage 
                src="/images/hero-bg-4.png"
                alt="Founder of LuxeSpace Interiors"
                className="w-full h-full object-cover absolute inset-0"
                wrapperClassName="w-full h-full"
              />
          </div>
          <div className="bg-surface p-12 lg:p-16 rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] -mt-16 md:mt-0 md:-ml-24 relative z-20 max-w-xl gsap-reveal">
            <Icon icon={PenTool} className="text-primary mb-8" size="md" />
            <blockquote className="text-h4 font-serif italic mb-8 text-heading leading-relaxed">
              &quot;When you strip away the excess, what remains must be extraordinary. That is the essence of our approach.&quot;
            </blockquote>
            <div>
              <div className="text-button text-heading mb-1">Elias Vance</div>
              <div className="text-caption text-primary tracking-widest uppercase">Founder & Principal Architect</div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Design Journey */}
      <section className="py-[160px] px-container bg-surface border-t border-border/40 overflow-hidden">
        <div className="container-base mx-auto">
          <div className="text-center mb-24 gsap-reveal">
            <span className="text-caption text-primary uppercase tracking-widest mb-4 block">The Process</span>
            <h2 className="text-h2 font-serif text-heading">Design Journey</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-4 relative">
            {/* Connecting Line (Desktop only) */}
            <div className="hidden md:block absolute top-[28px] left-[10%] right-[10%] h-[1px] bg-border z-0"></div>
            
            {[
              { step: "01", title: "Discovery", desc: "Understanding your profound aspirations and lifestyle requirements." },
              { step: "02", title: "Concept", desc: "Developing the spatial narrative and material palette." },
              { step: "03", title: "Design", desc: "Meticulous architectural planning and 3D visualization." },
              { step: "04", title: "Execution", desc: "Master artisans bring the vision to life with precision." },
              { step: "05", title: "Delivery", desc: "The final reveal of your personalized sanctuary." }
            ].map((item, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center text-center gsap-reveal">
                <div className="w-14 h-14 rounded-full bg-background border border-border/50 flex items-center justify-center text-primary font-serif text-lg mb-6 shadow-sm transition-transform duration-500 hover:scale-110">
                  {item.step}
                </div>
                <h4 className="text-h5 font-serif text-heading mb-3">{item.title}</h4>
                <p className="text-small text-muted-foreground leading-relaxed px-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Company Statistics */}
      <section className="py-[120px] px-container bg-background border-y border-border/40">
        <div className="container-base mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8 md:divide-x divide-border/40">
            {[
              { target: "15", suffix: "+", label: "Years Experience" },
              { target: "250", suffix: "+", label: "Projects Completed" },
              { target: "98", suffix: "%", label: "Client Satisfaction" },
              { target: "12", suffix: "", label: "Design Awards" }
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center text-center gsap-reveal">
                <div className="text-[3rem] md:text-[4rem] text-primary font-serif mb-4 leading-none">
                  <span className="gsap-counter" data-target={stat.target} data-suffix={stat.suffix}>0</span>
                </div>
                <div className="text-caption text-muted-foreground uppercase tracking-widest">{stat.label}</div>
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
