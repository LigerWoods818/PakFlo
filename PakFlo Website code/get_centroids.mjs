// Extract bounding box centers for each state from @svg-maps/usa
// This gives us accurate coordinates within the SVG viewBox

import usaMap from './node_modules/@svg-maps/usa/index.js';

// Parse SVG path to get bounding box
function getBBox(pathStr) {
  const nums = [];
  // Extract all coordinate pairs from the path
  const matches = pathStr.match(/[-+]?\d*\.?\d+/g);
  if (!matches) return null;
  
  let xs = [];
  let ys = [];
  
  // SVG paths have alternating x,y coordinates after move/line commands
  for (let i = 0; i < matches.length; i += 2) {
    if (i + 1 < matches.length) {
      xs.push(parseFloat(matches[i]));
      ys.push(parseFloat(matches[i + 1]));
    }
  }
  
  if (xs.length === 0) return null;
  
  const minX = Math.min(...xs);
  const maxX = Math.max(...xs);
  const minY = Math.min(...ys);
  const maxY = Math.max(...ys);
  
  return {
    cx: Math.round((minX + maxX) / 2),
    cy: Math.round((minY + maxY) / 2),
    minX: Math.round(minX),
    maxX: Math.round(maxX),
    minY: Math.round(minY),
    maxY: Math.round(maxY),
    width: Math.round(maxX - minX),
    height: Math.round(maxY - minY),
  };
}

const map = usaMap.default || usaMap;
const results = {};

for (const loc of map.locations) {
  if (loc.id === 'ak' || loc.id === 'hi') continue;
  const bbox = getBBox(loc.path);
  if (bbox) {
    results[loc.id] = { name: loc.name, ...bbox };
  }
}

// Print sorted by state name
const sorted = Object.entries(results).sort((a, b) => a[1].name.localeCompare(b[1].name));
for (const [id, data] of sorted) {
  console.log(`${id}: ${data.name} -> center(${data.cx}, ${data.cy}) bounds(${data.minX}-${data.maxX}, ${data.minY}-${data.maxY})`);
}

// Output as JSON for use in component
console.log('\n\n// JSON for component:');
console.log(JSON.stringify(results, null, 2));
