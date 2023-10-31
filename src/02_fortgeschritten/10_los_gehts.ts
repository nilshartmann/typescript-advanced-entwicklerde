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

function sendLetterTo(p: any) {}

// wie kommen wir an 'address'
//

type Company = {
  name: string;
  address: {
    city: string;
    plz: string;
  };
};

type CompanyWithContacts = {
  name: string;
  contacts: [
    {
      city: string;
      plz: string;
    }
  ];
};

const aCompany = {
  name: "Acme",
  contacts: [
    {
      city: "Hamburg",
      plz: "22359"
    }
  ]
};
