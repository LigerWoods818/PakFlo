/**
 * US Coverage Map Component
 * Uses react-simple-maps with geoAlbersUsa projection
 * All cities positioned by real latitude/longitude - guaranteed accurate placement
 */
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

const GEO_URL = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

// Real lat/long coordinates for US cities
// [longitude, latitude, size, name]
type CityData = [number, number, number, string];

const cities: CityData[] = [
  // MAJOR METROS (size 6) - brightest, largest
  [-118.24, 34.05, 6, "Los Angeles"],
  [-87.63, 41.88, 6, "Chicago"],
  [-74.00, 40.71, 6, "New York"],
  [-95.37, 29.76, 6, "Houston"],
  [-112.07, 33.45, 6, "Phoenix"],

  // LARGE METROS (size 5)
  [-75.17, 39.95, 5, "Philadelphia"],
  [-96.80, 32.78, 5, "Dallas"],
  [-84.39, 33.75, 5, "Atlanta"],
  [-83.05, 42.33, 5, "Detroit"],
  [-122.42, 37.77, 5, "San Francisco"],

  // MID-SIZE METROS (size 4)
  [-104.99, 39.74, 4, "Denver"],
  [-93.27, 44.98, 4, "Minneapolis"],
  [-122.33, 47.61, 4, "Seattle"],
  [-80.19, 25.76, 4, "Miami"],
  [-90.20, 38.63, 4, "St. Louis"],
  [-82.99, 39.96, 4, "Columbus OH"],
  [-86.16, 39.77, 4, "Indianapolis"],
  [-81.69, 41.50, 4, "Cleveland"],
  [-71.06, 42.36, 4, "Boston"],
  [-76.61, 39.29, 4, "Baltimore"],

  // MEDIUM CITIES (size 3)
  [-121.49, 38.58, 3, "Sacramento"],
  [-117.16, 32.72, 3, "San Diego"],
  [-122.68, 45.52, 3, "Portland OR"],
  [-111.89, 40.76, 3, "Salt Lake City"],
  [-97.74, 30.27, 3, "Austin"],
  [-98.49, 29.42, 3, "San Antonio"],
  [-90.07, 29.95, 3, "New Orleans"],
  [-86.78, 36.16, 3, "Nashville"],
  [-80.84, 35.23, 3, "Charlotte"],
  [-81.66, 30.33, 3, "Jacksonville"],
  [-82.46, 27.95, 3, "Tampa"],
  [-77.04, 38.91, 3, "Washington DC"],
  [-79.99, 40.44, 3, "Pittsburgh"],
  [-84.51, 39.10, 3, "Cincinnati"],
  [-85.76, 38.25, 3, "Louisville"],
  [-94.58, 39.10, 3, "Kansas City"],
  [-97.52, 35.47, 3, "Oklahoma City"],
  [-95.99, 36.15, 3, "Tulsa"],
  [-106.65, 35.08, 3, "Albuquerque"],
  [-115.14, 36.17, 3, "Las Vegas"],
  [-78.64, 35.77, 3, "Raleigh"],
  [-77.43, 37.54, 3, "Richmond"],
  [-73.76, 42.65, 3, "Albany NY"],

  // SMALLER CITIES (size 2) - subtle dots
  [-119.79, 36.74, 2, "Fresno"],
  [-117.39, 33.95, 2, "Riverside/IE"],
  [-121.89, 37.34, 2, "San Jose"],
  [-123.09, 44.05, 2, "Eugene"],
  [-116.21, 43.62, 2, "Boise"],
  [-108.50, 45.78, 2, "Billings"],
  [-106.31, 42.87, 2, "Casper"],
  [-104.82, 38.83, 2, "Colorado Springs"],
  [-110.93, 32.22, 2, "Tucson"],
  [-96.70, 40.81, 2, "Lincoln"],
  [-95.93, 41.26, 2, "Omaha"],
  [-96.73, 43.55, 2, "Sioux Falls"],
  [-96.79, 46.88, 2, "Fargo"],
  [-97.33, 37.69, 2, "Wichita"],
  [-91.19, 30.45, 2, "Baton Rouge"],
  [-90.18, 32.30, 2, "Jackson MS"],
  [-86.80, 33.52, 2, "Birmingham"],
  [-86.30, 32.38, 2, "Montgomery"],
  [-83.95, 35.96, 2, "Knoxville"],
  [-89.97, 35.15, 2, "Memphis"],
  [-92.29, 34.75, 2, "Little Rock"],
  [-81.03, 34.00, 2, "Columbia SC"],
  [-79.93, 32.78, 2, "Charleston SC"],
  [-82.55, 35.60, 2, "Asheville"],
  [-81.38, 28.54, 2, "Orlando"],
  [-84.28, 30.44, 2, "Tallahassee"],
  [-80.14, 26.12, 2, "Fort Lauderdale"],
  [-87.90, 43.04, 2, "Milwaukee"],
  [-89.40, 43.07, 2, "Madison"],
  [-85.67, 42.96, 2, "Grand Rapids"],
  [-85.00, 41.08, 2, "Fort Wayne"],
  [-89.65, 39.78, 2, "Springfield IL"],
  [-72.68, 41.76, 2, "Hartford"],
  [-71.41, 42.89, 2, "Manchester NH"],
  [-73.21, 44.48, 2, "Burlington VT"],
  [-70.26, 43.66, 2, "Portland ME"],
  [-75.52, 39.74, 2, "Wilmington DE"],
  [-97.40, 27.80, 2, "Corpus Christi"],
  [-101.83, 35.22, 2, "Amarillo"],
  [-97.14, 31.55, 2, "Waco"],
  [-106.44, 31.76, 2, "El Paso"],
  [-80.24, 36.10, 2, "Winston-Salem"],
  [-76.29, 36.85, 2, "Virginia Beach"],
  [-78.88, 42.89, 2, "Buffalo"],
  [-76.15, 43.05, 2, "Syracuse"],
  [-84.39, 38.05, 2, "Lexington KY"],
  [-119.81, 39.53, 2, "Reno"],
  [-93.62, 41.59, 2, "Des Moines"],
  [-91.53, 41.98, 2, "Cedar Rapids"],
  [-84.86, 39.76, 2, "Dayton"],
  [-81.52, 41.08, 2, "Akron"],
];

export default function USCoverageMap() {
  return (
    <section className="bg-[#0E1E2E] py-[80px] px-6 md:px-12 relative overflow-hidden">
      <div className="absolute inset-0 opacity-40" style={{
        backgroundImage: `
          repeating-linear-gradient(90deg, rgba(255,255,255,0.015) 0px, rgba(255,255,255,0.015) 1px, transparent 1px, transparent 80px),
          repeating-linear-gradient(0deg, rgba(255,255,255,0.015) 0px, rgba(255,255,255,0.015) 1px, transparent 1px, transparent 80px)
        `
      }} />
      
      <div className="max-w-[1200px] mx-auto relative z-[1]">
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="block w-7 h-[2px] bg-[#C8901E]" />
            <span className="font-['Barlow_Condensed'] text-[12px] font-semibold tracking-[0.22em] uppercase text-[#C8901E]">National Coverage</span>
            <span className="block w-7 h-[2px] bg-[#C8901E]" />
          </div>
          <h2 className="font-['DM_Serif_Display'] text-[clamp(32px,4vw,48px)] leading-[1.1] text-white mb-4">Pallets, Packaging & Logistics<br />Where You Need Them.</h2>
          <p className="text-[17px] font-light text-white/50 max-w-[600px] mx-auto leading-[1.7]">PakFlo's manufacturing and partner network spans all 48 contiguous states — delivering consistent quality and reliable supply wherever your operation runs.</p>
        </div>

        {/* Map */}
        <div className="relative max-w-[900px] mx-auto">
          <ComposableMap
            projection="geoAlbersUsa"
            projectionConfig={{ scale: 1100 }}
            style={{ width: "100%", height: "auto" }}
          >
            <Geographies geography={GEO_URL}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill="rgba(200,144,30,0.05)"
                    stroke="rgba(200,144,30,0.2)"
                    strokeWidth={0.5}
                    style={{
                      default: { outline: "none" },
                      hover: { outline: "none", fill: "rgba(200,144,30,0.1)" },
                      pressed: { outline: "none" },
                    }}
                  />
                ))
              }
            </Geographies>

            {/* City markers - sorted small first so large render on top */}
            {cities
              .sort((a, b) => a[2] - b[2])
              .map(([lng, lat, size, name], i) => (
                <Marker key={`${name}-${i}`} coordinates={[lng, lat]}>
                  <circle
                    r={size >= 6 ? 5 : size >= 5 ? 4 : size >= 4 ? 3.5 : size >= 3 ? 2.8 : 2}
                    fill={
                      size >= 6 ? "#C8901E" :
                      size >= 5 ? "rgba(200,144,30,0.8)" :
                      size >= 4 ? "rgba(200,144,30,0.6)" :
                      size >= 3 ? "rgba(200,144,30,0.45)" :
                      "rgba(200,144,30,0.3)"
                    }
                  />
                  {/* HQ glow for Los Angeles */}
                  {name === "Los Angeles" && (
                    <>
                      <circle r={10} fill="none" stroke="rgba(229,168,50,0.3)" strokeWidth={1} />
                      <circle r={16} fill="none" stroke="rgba(229,168,50,0.12)" strokeWidth={0.7} />
                    </>
                  )}
                </Marker>
              ))}
          </ComposableMap>
        </div>

        {/* Stats below map */}
        <div className="flex justify-center gap-16 mt-10 flex-wrap">
          <div className="text-center">
            <div className="font-['DM_Serif_Display'] text-[42px] text-white leading-none mb-2">100+</div>
            <div className="font-['Barlow_Condensed'] text-[12px] font-semibold tracking-[0.14em] uppercase text-white/50">Metro Markets Coast to Coast</div>
          </div>
          <div className="text-center">
            <div className="font-['DM_Serif_Display'] text-[42px] text-white leading-none mb-2">48</div>
            <div className="font-['Barlow_Condensed'] text-[12px] font-semibold tracking-[0.14em] uppercase text-white/50">U.S. States Served</div>
          </div>
        </div>
      </div>
    </section>
  );
}
