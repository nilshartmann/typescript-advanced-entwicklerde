export default undefined;

// - Wiederholung (evtl)
//
//      - TypeScript zieht Rückschlpsse aus JavaScript LAUFzeit Verhalten
//      - Beispiel: Person + Adress in sendLetterTo (typeof, in)
//      - evtl. Type Predicate Fn
//      - evtl. Zod

type Person = {
  address: string;
};

type Address = {
  city: string;
  plz: number;
};

function sendLetterTo(p: Person | Address) {
  const address: Address = p as Address;

  address.city;

  if (isAddress(p)) {
    // Type Guard
    p.city.toUpperCase();
    return p.plz;
  }

  return null;
}

// Type Predicate Function
function isAddress(p: unknown): p is Address {
  if (
    p !== null &&
    typeof p === "object" &&
    "city" in p &&
    "plz" in p &&
    typeof p.plz === "number"
  ) {
    return true;
  }

  return false;
}
