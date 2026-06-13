/**
 * Certifications Section
 * Shows industry certification badges
 * Positioned in the About section or before footer
 */

export default function Certifications() {
  const certs = [
    {
      abbr: "ISPM-15",
      name: "International Standards for Phytosanitary Measures",
      desc: "Heat-treated & certified for international shipment",
    },
    {
      abbr: "SFI",
      name: "Sustainable Forestry Initiative",
      desc: "Responsibly sourced wood products",
    },
    {
      abbr: "NWPCA",
      name: "National Wooden Pallet & Container Association",
      desc: "Industry standards & best practices",
    },
    {
      abbr: "OSHA",
      name: "OSHA Compliant",
      desc: "Full workplace safety compliance",
    },
  ];

  return (
    <section className="bg-[#EDE8E0] py-16 px-6 md:px-12 border-t border-[#D6D0C6]">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="block w-7 h-[2px] bg-[#C8901E]" />
            <span className="font-['Barlow_Condensed'] text-[12px] font-semibold tracking-[0.22em] uppercase text-[#C8901E]">Certifications & Compliance</span>
            <span className="block w-7 h-[2px] bg-[#C8901E]" />
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {certs.map((cert) => (
            <div key={cert.abbr} className="text-center">
              <div className="w-[72px] h-[72px] mx-auto mb-4 border-2 border-[#C8901E] flex items-center justify-center">
                <span className="font-['Barlow_Condensed'] text-[14px] font-bold tracking-[0.05em] text-[#C8901E]">{cert.abbr}</span>
              </div>
              <div className="font-['Barlow'] text-[13px] font-medium text-[#0E1E2E] mb-1">{cert.name}</div>
              <div className="font-['Barlow'] text-[12px] font-light text-[#6B7685]">{cert.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
