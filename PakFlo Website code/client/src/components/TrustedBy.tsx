/**
 * Leadership Experience Section
 * Defensible framing with authoritative all-caps company name styling
 */

export default function TrustedBy() {
  const companies = [
    "DELL TECHNOLOGIES",
    "COCA-COLA",
    "ARISTOCRAT TECHNOLOGIES",
    "PELICAN PRODUCTS",
    "CROWN PACKAGING",
    "PREMIER PACKAGING",
  ];

  return (
    <section className="bg-[#F7F4EF] py-14 px-6 md:px-12 border-b border-[#EDE8E0]">
      <div className="max-w-[1200px] mx-auto text-center">
        <p className="font-['Barlow'] text-[15px] font-light text-[#6B7685] leading-[1.8] max-w-[680px] mx-auto mb-8">
          Backed by leadership with decades of experience serving manufacturers and distributors including:
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-5 gap-x-6 items-center max-w-[1000px] mx-auto">
          {companies.map((name) => (
            <div
              key={name}
              className="font-['Barlow_Condensed'] text-[13px] md:text-[14px] font-bold tracking-[0.1em] uppercase text-[#0E1E2E] opacity-50 text-center select-none whitespace-nowrap"
            >
              {name}
            </div>
          ))}
        </div>
        <p className="font-['Barlow'] text-[15px] font-light text-[#6B7685] mt-6 text-center">
          & 800+ more served by our leadership team.
        </p>
      </div>
    </section>
  );
}
