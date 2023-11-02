export default undefined;

//  Intro

//  - Werkzeuge für die nächsten Schritte:
//   - string literal
//     - union type ("pending", "loading", "finished")
//     - widening und narrowing
//   - Index Access Operator (Beispiel: 'address' Company)
//
//   - typeof
//    - Achtung! typeof gibt's in JavaScript und in TypeScript!

// type Eins = 1;
// type Zwei = 2;

// function addEinsAndZwei(a: Eins, b: Zwei) {

// }

// addEinsAndZwei(1, 2);
// addEinsAndZwei(2, 1);

type RequestState = "new" | "loading" | "failed";

declare function setRequestState(state: RequestState): void;

setRequestState("loading"); // OK
setRequestState("loading"); // OK

// wie kommen wir an 'address'?
//

type Company = {
  name: string;
  address: {
    city: string | number;
    plz: string;
  };
};

type Address = Company["address"];

declare function sendLetterTo(a: Address): void;

type CompanyWithContacts = {
  name: string;
  contacts: [
    {
      city: string;
      plz: string;
    }
  ];
};

type Address2 = CompanyWithContacts["contacts"][number];

const aCompany = {
  name: "Acme",
  contacts: [
    {
      city: "Hamburg",
      plz: "22359"
    }
  ]
};

let city = "Hamburg";
//     ^?

declare function travelTo(city: "Hamburg"): void;
travelTo(city);
travelTo("Berlin");

type C = typeof aCompany;
type AddressInC = (typeof aCompany)["contacts"][number];
