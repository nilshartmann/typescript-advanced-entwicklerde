// Folgende Zeile ignorieren; Workaround für diesen Workspace
export default undefined;

// Basis-Syntax
//  Funktion
//  any
//  Union Type
//   string | null
//   Type Guard
//  Type Alias für ein Objekt

let klaus = "Klaus";

// Union Type
// Type Narrowing

const person = {
  firstname: "Susi",
  age: 32
};
// Type Aliase
type Person = {
  firstname: string;
  age: number;
};

class Animal {
  sayHello() {
    return "";
  }
}

function sayHello(person: string | null | Person | Animal): string | null {
  if (person === null) {
    // Type Guard
    return null;
  }

  if (person instanceof Animal) {
    // Type Guard
    return person.sayHello();
  }

  if (typeof person === "object") {
    // Type Guard
    return `Hello ${person.firstname.toUpperCase()}`;
  }

  return `Hello, ${person.toUpperCase()}`;
}

sayHello({
  age: 18,
  firstname: "Susi"
});
const x: Person = {
  firstname: "Peter",
  age: 19
  // lastname: "Müller"
};
sayHello(x);
