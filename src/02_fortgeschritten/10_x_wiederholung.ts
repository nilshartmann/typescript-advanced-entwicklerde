export default undefined;

// Wiederholung (evtl):
//      - TypeScript zieht Rückschlpsse aus JavaScript LAUFzeit Verhalten
//      - Beispiel: Person + Adress in sendLetterTo (typeof, in)
//      - evtl. Type Predicate Fn
//      - evtl. Zod

type Person = {
  address: string;
};

type Address = {
  city: string;
  plz: string;
};

function sendLetterTo(p: string | Person | Address) {
  if (typeof p === "string") {
    // Type Guard
    return p.toLowerCase(); // p === string
  }
  if ("city" in p) {
    return p.plz.toLowerCase(); // p === Address
  }

  return p.address.toLowerCase(); // p === Person
}
