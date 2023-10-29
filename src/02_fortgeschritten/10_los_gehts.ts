export default undefined;

// Intro:
//   - typeof
//   - keyof Operator am Beispiel Addresse

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
