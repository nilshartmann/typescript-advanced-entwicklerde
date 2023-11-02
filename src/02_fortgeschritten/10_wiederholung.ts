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
  plz: string;
};

function sendLetterTo(p: any) {}
