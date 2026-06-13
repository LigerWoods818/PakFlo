import usaMap from './node_modules/@svg-maps/usa/index.js';
const map = usaMap.default || usaMap;

function getAbsoluteCoords(pathStr) {
  const coords = [];
  let x = 0, y = 0;
  const parts = pathStr.match(/[MLZmlz][^MLZmlz]*/g);
  if (parts === null) return coords;
  for (const part of parts) {
    const cmd = part[0];
    const nums = part.slice(1).trim().match(/[-+]?[0-9]*\.?[0-9]+/g);
    if (nums === null) continue;
    if (cmd === 'M' || cmd === 'L') {
      for (let i = 0; i < nums.length; i += 2) {
        x = parseFloat(nums[i]);
        y = parseFloat(nums[i+1]);
        coords.push([x, y]);
      }
    } else if (cmd === 'm' || cmd === 'l') {
      for (let i = 0; i < nums.length; i += 2) {
        x += parseFloat(nums[i]);
        y += parseFloat(nums[i+1]);
        coords.push([x, y]);
      }
    }
  }
  return coords;
}

const skip = ['ak','hi'];
const results = [];
for (const s of map.locations) {
  if (skip.includes(s.id)) continue;
  const coords = getAbsoluteCoords(s.path);
  if (coords.length === 0) continue;
  const xs = coords.map(c => c[0]).filter(v => Number.isFinite(v));
  const ys = coords.map(c => c[1]).filter(v => Number.isFinite(v));
  if (xs.length === 0 || ys.length === 0) continue;
  const cx = Math.round((Math.min(...xs) + Math.max(...xs)) / 2);
  const cy = Math.round((Math.min(...ys) + Math.max(...ys)) / 2);
  results.push({ id: s.id, name: s.name, cx, cy });
}

// Print readable
for (const r of results) {
  console.log(`${r.id.padEnd(3)} ${r.name.padEnd(20)} center: (${r.cx}, ${r.cy})`);
}
