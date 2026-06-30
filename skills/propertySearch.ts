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

  const cityMatch = // city - word(s) right after "in" (EX: "...in Long Beach..." -> "Long Beach")
  const priceMatch = 
  const bedMatch = 
  const bathMatch = 
  const sqftMatch = 
  const propertyMatch = 
  const poolMatch = 
  const viewMatch = 
  const hoaMatch = 
  
  return filter;
}

// quick test
console.log(parsePropertyQuery("Show me 3-bedroom condos in Irvine under $1.5M with a pool."));
