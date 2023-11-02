export default undefined;

// - keyof
//   - Default-Value
//   - Constraints

type KeysOfPerson<O extends object> = keyof O;

declare function getPropertyFromObject<O extends object, K extends KeysOfPerson<O>>(
  object: O,
  key: K
): O[K];

declare function isValid<O extends object>(object: O, key: KeysOfPerson<O>): boolean;

const person = { firstname: "Klaus", age: 123 };

// getPropertyFromObject("klaus", "firstname");

const firstname: string = getPropertyFromObject(person, "firstname");
const age: number = getPropertyFromObject(person, "age");
const city: string = getPropertyFromObject(person, "city"); // ERR: 'city' nicht in dem Objekt
