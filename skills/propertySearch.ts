// natural language property search

// structured filter we extract -> each variable maps to a real rets_property field
export interface PropertyFilter {
  city?: string;
  maxPrice?: number;
  minBed?: number;
  minBath?: number;
  minSqft?: number;
  property?: string;
  pool?: number;
  view?: number;
  maxHoa?: number;
}

// turn free-text query into structured filter object
export function parsePropertyQuery(query: string): PropertyFilter {
  const filter: PropertyFilter = {};
  
  // define patterns to be used for extracting info
  const cityMatch = query.match(/\bin\s+([a-z][a-z\s]*?)(?=\s+(?:under|with|over|and|\$|\d)\b|[,.?!]|$)/i);
  const priceMatch = query.match(/(?:under|below|less than|no more than|max|up to|within|≤|cheaper than)\s*\$?([\d,.]+)(k|m)?/i);
  const bedMatch = 
  const bathMatch = 
  const sqftMatch = 
  const propertyMatch = 
  const poolMatch = 
  const viewMatch = 
  const hoaMatch = 
  
  
  
  // use patterns from above and find all matches with query
  if (cityMatch) {
   filter.city = cityMatch[1].trim();
  }

  if (priceMatch) {
    let maxPrice = Number(priceMatch[1].replace(/,/g, "")); 
    const suffix = priceMatch[2]?.toLowerCase();
    if (suffix == 'k') maxPrice *= 1000;
    if (suffix == 'm') maxPrice *= 1000000;
    filter.maxPrice = maxPrice;
  }

  return filter;
}

// quick test
console.log(parsePropertyQuery("Show me 3-bedroom condos in Irvine under $1.5M with a pool."));




