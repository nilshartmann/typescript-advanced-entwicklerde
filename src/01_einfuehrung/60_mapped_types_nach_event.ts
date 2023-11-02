import { Flatten } from "../02_fortgeschritten/flatten";

export default undefined;

type Person = {
  id: string;
  name: string;
  age: number;
};

// -----------------------------------------------------------------------------------------

// Mapped Types
// Utility Types

type X = Flatten<Readonly<Partial<Person>>>;

function patchPerson(person: Readonly<Partial<Person>>) {
  person.age = 33;
}

patchPerson({
  name: "Klaus",
  age: 123
});

//

// -----------------------------------------------------------------------------------------

// ... Für ein Formular zum Erfassen einer neuen Person benötigen wir ein Person-Objekt
//     aber ohne 'id'-Feld (weil das erst später vergeben wird)
//     -> wie erzeugen wir eine Person "ohne" Id

type PersonWithoutId = Omit<Person, "id">;

function enterNewPersonForm(): PersonWithoutId {
  // Keine Id hier!
  return {
    name: "Klaus",
    age: 32
  };
}
