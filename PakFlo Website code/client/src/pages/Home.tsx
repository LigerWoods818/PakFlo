import { useState } from "react";
import { Menu, X } from "lucide-react";
import USCoverageMap from "@/components/USCoverageMap";
import TrustedBy from "@/components/TrustedBy";
import Certifications from "@/components/Certifications";

const LOGO_URL = "/manus-storage/IMG_9740_fbaa0c81.PNG";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormSubmitted(true);
    (e.target as HTMLFormElement).reset();
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen">
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-6 md:px-12 h-[70px]" style={{ background: 'transparent' }}>
        <a href="#home">
          <img src={LOGO_URL} alt="PakFlo" className="h-[36px] w-auto" />
        </a>
        
        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-9 list-none">
          <li><a href="#services" className="font-['Barlow'] text-[13px] font-medium tracking-[0.08em] uppercase text-white/80 no-underline hover:text-[#E5A832] transition-colors">Services</a></li>
          <li><a href="#about" className="font-['Barlow'] text-[13px] font-medium tracking-[0.08em] uppercase text-white/80 no-underline hover:text-[#E5A832] transition-colors">About</a></li>
          <li><a href="#contact" className="font-['Barlow'] text-[13px] font-medium tracking-[0.08em] uppercase text-white/80 no-underline hover:text-[#E5A832] transition-colors">Contact</a></li>
          <li><a href="#contact" className="bg-[#C8901E] text-white px-[22px] py-[9px] text-[13px] font-semibold tracking-[0.08em] uppercase no-underline hover:bg-[#E5A832] transition-colors">Get a Quote</a></li>
        </ul>

        {/* Mobile Hamburger */}
        <button 
          className="lg:hidden text-[#C8901E] p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="absolute top-[70px] left-0 right-0 bg-[#0E1E2E] border-t border-white/10 lg:hidden">
            <ul className="flex flex-col p-6 gap-4 list-none">
              <li><a href="#services" onClick={() => setMobileMenuOpen(false)} className="font-['Barlow'] text-[14px] font-medium tracking-[0.08em] uppercase text-white/75 no-underline hover:text-[#E5A832]">Services</a></li>
              <li><a href="#about" onClick={() => setMobileMenuOpen(false)} className="font-['Barlow'] text-[14px] font-medium tracking-[0.08em] uppercase text-white/75 no-underline hover:text-[#E5A832]">About</a></li>
              <li><a href="#contact" onClick={() => setMobileMenuOpen(false)} className="font-['Barlow'] text-[14px] font-medium tracking-[0.08em] uppercase text-white/75 no-underline hover:text-[#E5A832]">Contact</a></li>
              <li><a href="#contact" onClick={() => setMobileMenuOpen(false)} className="inline-block bg-[#C8901E] text-white px-[22px] py-[12px] text-[14px] font-semibold tracking-[0.08em] uppercase no-underline hover:bg-[#E5A832] mt-2">Get a Quote</a></li>
            </ul>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section id="home" className="min-h-[85vh] bg-[#0E1E2E] flex items-center relative overflow-hidden pt-[100px] pb-[60px] px-6 md:px-12"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(14,30,46,0.92) 0%, rgba(14,30,46,0.75) 50%, rgba(14,30,46,0.5) 100%),
            url('https://d2xsxph8kpxj0f.cloudfront.net/310519663446899959/3dev7AiQMuMhsGAWpG4on5/hero-warehouse-warm-TTius7cnfn8oixPiUxbu7o.webp')
          `,
          backgroundSize: 'cover',
          backgroundPosition: 'center right',
        }}
      >
        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-[120px] bg-gradient-to-b from-transparent to-[#F7F4EF] z-[1]" />
        
        <div className="relative z-[2] max-w-[1200px] mx-auto w-full">
          <h1 className="font-['DM_Serif_Display'] text-[clamp(48px,7vw,90px)] leading-[1.06] text-white max-w-[780px] mb-8 animate-fade-up animate-fade-up-2">
            From the pallet up,<br />everything is built around<br /><em className="italic text-[#E5A832]">your product.</em>
          </h1>
          
          <p className="text-[18px] font-light text-white/60 max-w-[560px] leading-[1.7] mb-12 animate-fade-up animate-fade-up-3">
            Standard and custom pallets and crates,  packaging, plus the warehousing and freight to move them. One team, nationwide.
          </p>
          
          <div className="flex gap-4 flex-wrap animate-fade-up animate-fade-up-4">
            <a href="#contact" className="bg-[#C8901E] text-white px-9 py-[15px] font-['Barlow'] text-[14px] font-semibold tracking-[0.06em] uppercase no-underline hover:bg-[#E5A832] hover:-translate-y-[1px] transition-all inline-block">Request a Quote</a>
            <a href="#services" className="bg-white/10 text-white px-9 py-[15px] font-['Barlow'] text-[14px] font-medium tracking-[0.06em] uppercase no-underline border border-white/40 hover:border-[#C8901E] hover:text-[#E5A832] hover:bg-white/15 transition-all inline-block backdrop-blur-sm">Our Services</a>
          </div>
        </div>


      </section>

      {/* STATS BAR */}
      <section className="bg-[#C8901E] px-6 md:px-12 py-10">
        {/* Desktop: 5 in a row */}
        <div className="max-w-[1200px] mx-auto hidden md:flex items-stretch justify-center">
          <div className="flex-1 py-4 px-4 text-center">
            <div className="font-['DM_Serif_Display'] text-[48px] text-white leading-none mb-2">30<span className="text-[32px]">+</span></div>
            <div className="font-['Barlow_Condensed'] text-[12px] font-semibold tracking-[0.14em] uppercase text-white/75">Years of Industry Leadership</div>
          </div>
          <div className="w-[1px] bg-white/20 my-3" />
          <div className="flex-1 py-4 px-4 text-center">
            <div className="font-['DM_Serif_Display'] text-[48px] text-white leading-none mb-2">1M<span className="text-[32px]">+</span></div>
            <div className="font-['Barlow_Condensed'] text-[12px] font-semibold tracking-[0.14em] uppercase text-white/75">Board Feet Processed Annually</div>
          </div>
          <div className="w-[1px] bg-white/20 my-3" />
          <div className="flex-1 py-4 px-4 text-center">
            <div className="font-['DM_Serif_Display'] text-[48px] text-white leading-none mb-2">48</div>
            <div className="font-['Barlow_Condensed'] text-[12px] font-semibold tracking-[0.14em] uppercase text-white/75">States in Our Network</div>
          </div>
          <div className="w-[1px] bg-white/20 my-3" />
          <div className="flex-1 py-4 px-4 text-center">
            <div className="font-['DM_Serif_Display'] text-[48px] text-white leading-none mb-2 whitespace-nowrap">1 Source</div>
            <div className="font-['Barlow_Condensed'] text-[12px] font-semibold tracking-[0.14em] uppercase text-white/75">For Pallets, Packaging & Logistics</div>
          </div>
          <div className="w-[1px] bg-white/20 my-3" />
          <div className="flex-1 py-4 px-4 text-center">
            <div className="font-['DM_Serif_Display'] text-[48px] text-white leading-none mb-2 whitespace-nowrap">3 Countries</div>
            <div className="font-['Barlow_Condensed'] text-[12px] font-semibold tracking-[0.14em] uppercase text-white/75">U.S., Canada & Mexico</div>
          </div>
        </div>
        {/* Mobile: 2-column grid with 5th centered below */}
        <div className="max-w-[500px] mx-auto md:hidden">
          <div className="grid grid-cols-2 gap-y-8 gap-x-4">
            <div className="text-center">
              <div className="font-['DM_Serif_Display'] text-[36px] text-white leading-none mb-2">30<span className="text-[24px]">+</span></div>
              <div className="font-['Barlow_Condensed'] text-[11px] font-semibold tracking-[0.12em] uppercase text-white/75">Years of Industry Leadership</div>
            </div>
            <div className="text-center">
              <div className="font-['DM_Serif_Display'] text-[36px] text-white leading-none mb-2">1M<span className="text-[24px]">+</span></div>
              <div className="font-['Barlow_Condensed'] text-[11px] font-semibold tracking-[0.12em] uppercase text-white/75">Board Feet Processed Annually</div>
            </div>
            <div className="text-center">
              <div className="font-['DM_Serif_Display'] text-[36px] text-white leading-none mb-2">48</div>
              <div className="font-['Barlow_Condensed'] text-[11px] font-semibold tracking-[0.12em] uppercase text-white/75">States in Our Network</div>
            </div>
            <div className="text-center">
              <div className="font-['DM_Serif_Display'] text-[36px] text-white leading-none mb-2">1 Source</div>
              <div className="font-['Barlow_Condensed'] text-[11px] font-semibold tracking-[0.12em] uppercase text-white/75">For Pallets, Packaging & Logistics</div>
            </div>
          </div>
          <div className="text-center mt-8">
            <div className="font-['DM_Serif_Display'] text-[36px] text-white leading-none mb-2">3 Countries</div>
            <div className="font-['Barlow_Condensed'] text-[11px] font-semibold tracking-[0.12em] uppercase text-white/75">U.S., Canada & Mexico</div>
          </div>
        </div>
      </section>

      {/* TRUSTED BY */}
      <TrustedBy />

      {/* SERVICES */}
      <section id="services" className="bg-[#F7F4EF] py-[100px] px-6 md:px-12">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex justify-between items-end mb-[60px] gap-10 flex-wrap">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="block w-7 h-[2px] bg-[#C8901E]" />
                <span className="font-['Barlow_Condensed'] text-[12px] font-semibold tracking-[0.22em] uppercase text-[#C8901E]">What We Do</span>
              </div>
              <h2 className="font-['DM_Serif_Display'] text-[clamp(36px,4vw,54px)] leading-[1.1] text-[#0E1E2E] mb-5">Industrial Solutions,<br />Built Around You.</h2>
            </div>
            <p className="text-[17px] font-light text-[#6B7685] max-w-[560px] leading-[1.7]">From raw wood products to full-scale logistics management, PakFlo is your single source for the industrial supply chain.</p>
          </div>

          <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-[2px]">
            {[
              { num: '01', title: 'Pallets & Crating', desc: 'New, reconditioned, and custom pallets. Heavy-duty crates and skids engineered to spec. Heat-treated and ISPM-15 certified for domestic and export shipments.' },
              { num: '02', title: 'Custom Packaging', desc: 'Industrial packaging solutions designed for your product and your supply chain. Wood, corrugated, foam, and multi-material configurations built to protect and perform.' },
              { num: '03', title: 'Wood Products', desc: 'Lumber, dimensional wood, dunnage, blocking and bracing material. Mill-direct sourcing and full-service cutting to your specifications.' },
              { num: '04', title: 'Warehousing', desc: 'Flexible warehousing and distribution solutions. Vendor-managed inventory, just-in-time delivery programs, and on-site storage tailored to your operation.' },
              { num: '05', title: 'Logistics & Freight', desc: 'End-to-end freight management and supply chain coordination. National carrier relationships and dedicated account management that keeps your operation moving.' },
            ].map((service) => (
              <div key={service.num} className="group bg-white p-[44px_36px] border-l-[3px] border-l-transparent hover:bg-[#0E1E2E] hover:border-l-[#C8901E] transition-all duration-[250ms] cursor-default">
                <div className="font-['Barlow_Condensed'] text-[12px] font-bold tracking-[0.15em] text-[#D6D0C6] mb-7 group-hover:text-white transition-colors duration-[250ms]">{service.num}</div>
                <div className="font-['DM_Serif_Display'] text-[24px] text-[#0E1E2E] mb-[14px] leading-[1.2] group-hover:text-white transition-colors duration-[250ms]">{service.title}</div>
                <p className="text-[15px] font-light text-[#6B7685] leading-[1.7] group-hover:text-white/60 transition-colors duration-[250ms]">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="bg-[#EDE8E0] py-[100px] px-6 md:px-12">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[80px] lg:gap-[80px] items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="block w-7 h-[2px] bg-[#C8901E]" />
                <span className="font-['Barlow_Condensed'] text-[12px] font-semibold tracking-[0.22em] uppercase text-[#C8901E]">About Us</span>
              </div>
              <h2 className="font-['DM_Serif_Display'] text-[clamp(28px,3vw,40px)] leading-[1.2] text-[#0E1E2E] mb-8">Built on <em className="italic text-[#C8901E]">decades</em> of industry expertise. Scaled to serve the nation.</h2>
              <p className="text-[16px] font-light text-[#6B7685] leading-[1.8] mb-5">PakFlo was founded with a single conviction: that manufacturers and distributors deserve a supply chain partner with the depth of a national operator and the responsiveness of a family business.</p>
              <p className="text-[16px] font-light text-[#6B7685] leading-[1.8]">Headquartered in San Bernardino and operating coast to coast, we bring together wood products manufacturing, industrial packaging, warehousing, and freight under one roof — eliminating vendor fragmentation and delivering the consistency your supply chain demands.</p>
            </div>

            <div className="bg-[#0E1E2E] p-[56px_48px] relative">
              <div className="absolute top-4 left-4 right-[-16px] bottom-[-16px] border border-[#C8901E] z-0" />
              <div className="relative z-[1]">
                <ul className="list-none flex flex-col gap-6">
                  {[
                    { icon: '01', title: 'Speed & Responsiveness', desc: 'We move when you need us to move. Fast quoting, reliable lead times, and a team that answers the phone.' },
                    { icon: '02', title: 'Industrial-Grade Quality', desc: 'Every product that leaves our network is built to perform. No shortcuts, no substitutions without approval.' },
                    { icon: '03', title: 'National Reach', desc: 'Supplier relationships and logistics capacity across all 48 contiguous states, ready to scale with you.' },
                    { icon: '04', title: 'Partnership Mentality', desc: "We're not a vendor. We're a long-term partner invested in the efficiency and growth of your operation." },
                  ].map((value) => (
                    <li key={value.title} className="flex gap-5 items-start">
                      <div className="w-9 h-9 bg-[#C8901E] flex items-center justify-center flex-shrink-0 text-[11px] font-['Barlow_Condensed'] font-bold tracking-[0.1em] text-white">{value.icon}</div>
                      <div>
                        <div className="font-['Barlow_Condensed'] text-[16px] font-bold tracking-[0.08em] uppercase text-white mb-1">{value.title}</div>
                        <div className="text-[14px] font-light text-white/55 leading-[1.6]">{value.desc}</div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <Certifications />

      {/* COVERAGE MAP */}
      <USCoverageMap />

      {/* CTA BANNER */}
      <section className="relative py-[80px] px-6 md:px-12 overflow-hidden" style={{
        backgroundImage: `linear-gradient(to bottom, rgba(14,30,46,0.85), rgba(14,30,46,0.9)), url('https://d2xsxph8kpxj0f.cloudfront.net/310519663446899959/3dev7AiQMuMhsGAWpG4on5/aerial-distribution-V8vG5gnrfTqcRT7X2tUZoL.webp')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
        <div className="max-w-[800px] mx-auto text-center relative z-[1]">
          <h2 className="font-['DM_Serif_Display'] text-[clamp(28px,3.5vw,42px)] leading-[1.2] text-white mb-4">Ready to Simplify Your Supply Chain?</h2>
          <p className="text-[16px] font-light text-white/60 leading-[1.7] mb-8">One call. One partner. Every pallet, package, and shipment handled.</p>
          <a href="#contact" className="bg-[#C8901E] text-white px-10 py-[16px] font-['Barlow'] text-[14px] font-semibold tracking-[0.06em] uppercase no-underline hover:bg-[#E5A832] hover:-translate-y-[1px] transition-all inline-block">Get Started Today</a>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-[#0E1E2E] py-[100px] px-6 md:px-12">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <span className="block w-7 h-[2px] bg-[#C8901E]" />
            <span className="font-['Barlow_Condensed'] text-[12px] font-semibold tracking-[0.22em] uppercase text-[#C8901E]">Get in Touch</span>
          </div>
          <h2 className="font-['DM_Serif_Display'] text-[clamp(36px,4vw,54px)] leading-[1.1] text-white mb-5">Let's Talk About<br />Your Supply Chain.</h2>
          <p className="text-[17px] font-light text-white/50 max-w-[560px] leading-[1.7]">Tell us what you need. We'll respond within one business day with a tailored quote and a point of contact dedicated to your account.</p>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-[80px] items-start mt-[60px]">
            <div>
              <div className="mb-9">
                <div className="font-['Barlow_Condensed'] text-[11px] font-bold tracking-[0.2em] uppercase text-[#C8901E] mb-2">Headquarters</div>
                <div className="text-[17px] font-light text-white/75 leading-[1.6]">Headquartered in San Bernardino, California</div>
              </div>
              <div className="w-10 h-[1px] bg-white/10 my-9" />
              <div className="mb-9">
                <div className="font-['Barlow_Condensed'] text-[11px] font-bold tracking-[0.2em] uppercase text-[#C8901E] mb-2">Email</div>
                <a href="mailto:info@pakflo.com" className="text-[17px] font-light text-white/75 leading-[1.6] hover:text-[#E5A832] transition-colors">info@pakflo.com</a>
              </div>
              <div className="w-10 h-[1px] bg-white/10 my-9" />
              <div className="mb-9">
                <div className="font-['Barlow_Condensed'] text-[11px] font-bold tracking-[0.2em] uppercase text-[#C8901E] mb-2">Phone</div>
                <a href="tel:8184568617" className="text-[17px] font-light text-white/75 leading-[1.6] hover:text-[#E5A832] transition-colors">(818) 456-8617</a>
              </div>
              <div className="w-10 h-[1px] bg-white/10 my-9" />
              <div>
                <div className="font-['Barlow_Condensed'] text-[11px] font-bold tracking-[0.2em] uppercase text-[#C8901E] mb-2">Response Time</div>
                <div className="text-[17px] font-light text-white/75 leading-[1.6]">Within 1 business day.</div>
              </div>
            </div>

            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label className="text-[12px] font-medium tracking-[0.1em] uppercase text-white/40">First Name</label>
                  <input type="text" placeholder="John" required className="bg-white/5 border border-white/12 text-white px-[18px] py-[14px] font-['Barlow'] text-[15px] font-light outline-none focus:border-[#C8901E] transition-colors placeholder:text-white/20 w-full" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[12px] font-medium tracking-[0.1em] uppercase text-white/40">Last Name</label>
                  <input type="text" placeholder="Smith" required className="bg-white/5 border border-white/12 text-white px-[18px] py-[14px] font-['Barlow'] text-[15px] font-light outline-none focus:border-[#C8901E] transition-colors placeholder:text-white/20 w-full" />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label className="text-[12px] font-medium tracking-[0.1em] uppercase text-white/40">Company</label>
                  <input type="text" placeholder="Acme Corp" required className="bg-white/5 border border-white/12 text-white px-[18px] py-[14px] font-['Barlow'] text-[15px] font-light outline-none focus:border-[#C8901E] transition-colors placeholder:text-white/20 w-full" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[12px] font-medium tracking-[0.1em] uppercase text-white/40">Phone</label>
                  <input type="tel" placeholder="(555) 000-0000" className="bg-white/5 border border-white/12 text-white px-[18px] py-[14px] font-['Barlow'] text-[15px] font-light outline-none focus:border-[#C8901E] transition-colors placeholder:text-white/20 w-full" />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[12px] font-medium tracking-[0.1em] uppercase text-white/40">Email</label>
                <input type="email" placeholder="john@company.com" required className="bg-white/5 border border-white/12 text-white px-[18px] py-[14px] font-['Barlow'] text-[15px] font-light outline-none focus:border-[#C8901E] transition-colors placeholder:text-white/20 w-full" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[12px] font-medium tracking-[0.1em] uppercase text-white/40">Service Needed</label>
                <select className="bg-white/5 border border-white/12 text-white px-[18px] py-[14px] font-['Barlow'] text-[15px] font-light outline-none focus:border-[#C8901E] transition-colors w-full cursor-pointer appearance-none" style={{ WebkitAppearance: 'none' }}>
                  <option value="" className="bg-[#162030] text-white">Select a service...</option>
                  <option className="bg-[#162030] text-white">Pallets &amp; Crating</option>
                  <option className="bg-[#162030] text-white">Custom Packaging</option>
                  <option className="bg-[#162030] text-white">Wood Products</option>
                  <option className="bg-[#162030] text-white">Warehousing</option>
                  <option className="bg-[#162030] text-white">Logistics &amp; Freight</option>
                  <option className="bg-[#162030] text-white">Multiple Services</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[12px] font-medium tracking-[0.1em] uppercase text-white/40">Tell Us About Your Needs</label>
                <textarea placeholder="Volume, frequency, locations, timeline — the more detail, the faster we can help." className="bg-white/5 border border-white/12 text-white px-[18px] py-[14px] font-['Barlow'] text-[15px] font-light outline-none focus:border-[#C8901E] transition-colors placeholder:text-white/20 w-full resize-y min-h-[120px]" />
              </div>
              <button type="submit" className="bg-[#C8901E] text-white border-none px-10 py-4 font-['Barlow'] text-[14px] font-semibold tracking-[0.08em] uppercase cursor-pointer self-start hover:bg-[#E5A832] hover:-translate-y-[1px] transition-all">
                Send Request →
              </button>
              {formSubmitted && (
                <div className="text-[14px] text-[#E5A832] mt-1">
                  ✓ Message sent. We'll be in touch within one business day.
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#07111B] py-10 px-6 md:px-12 flex justify-between items-center flex-wrap gap-5 max-md:flex-col max-md:items-start">
        <a href="#home">
          <img src={LOGO_URL} alt="PakFlo" className="h-[30px] w-auto" />
        </a>
        <ul className="flex gap-7 list-none">
          <li><a href="#services" className="text-[13px] font-normal text-white/35 no-underline tracking-[0.05em] hover:text-[#C8901E] transition-colors">Services</a></li>
          <li><a href="#about" className="text-[13px] font-normal text-white/35 no-underline tracking-[0.05em] hover:text-[#C8901E] transition-colors">About</a></li>
          <li><a href="#contact" className="text-[13px] font-normal text-white/35 no-underline tracking-[0.05em] hover:text-[#C8901E] transition-colors">Contact</a></li>
        </ul>
        <div className="text-[13px] font-light text-white/30">© 2026 PakFlo LLC. All rights reserved.</div>
        <div className="text-[13px] font-light text-white/30">Headquartered in San Bernardino, California. Operating nationwide.</div>
      </footer>
    </div>
  );
}
