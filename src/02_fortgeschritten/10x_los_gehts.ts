export default undefined;

// Intro:
//  - Wiederholung (evtl)
//      - TypeScript zieht Rückschlpsse aus JavaSciprt LAUFzeit Verhalten
//      - Beispiel: Person + Adress in sendLetterTo (typeof, in)
//      - evtl. Type Predicate Fn
//      - evtl. Zod

//  - Werkzeuge für die nächsten Schritte:
//   - typeof
//    - Achtung! typeof gibt's in JavaScript und in TypeScript!
//   - keyof
//   - Index Access Operator (Beispiel: 'address' Company)

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

// wie kommen wir an 'address'
//
type Company = {
  name: string;
  address: {
    city: string;
    plz: string;
  };
};

type CompanyAddress = Company["address"];

type CompanyWithContacts = {
  name: string;
  contacts: [
    {
      city: string;
      plz: string;
    }
  ];
};

type Contact = CompanyWithContacts["contacts"][number];

const aCompany = {
  name: "Acme",
  contacts: [
    {
      city: "Hamburg",
      plz: "22359"
    }
  ]
};

type AContact = (typeof aCompany)["contacts"][number];
