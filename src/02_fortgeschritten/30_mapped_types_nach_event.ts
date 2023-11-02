import { Flatten } from "./flatten";

export default undefined;

// - Wiederholung
//    - Partial
//    - Readonly

//  Das können wir selbst bauen!
//   - Mapped Type:
//      - 1:1-Kopie des Objektes
//      - Key wird optional
//      - Rückabe-Typ für alle "boolean"

// const firstname = "Klaus"
// const greeting = `Hello, ${firstname}`

type ValidatedKeyName<S extends string> = `isValid${Capitalize<S>}`;

type ValidatedObject<O extends object> = {
  [KEY in keyof O & string as O[KEY] extends Function ? never : ValidatedKeyName<KEY>]: boolean;
};

declare function validate<O extends object>(o: O): Flatten<ValidatedObject<O>>;

const person = { firstname: "Klaus", age: 123, sayHello() {} };

const result = validate(person);

// const result = { firstname: true, age: false }
type Result = { firstname: boolean; age: boolean };

type Result2 = { isValidFirstname: boolean; isValidAge: boolean };

// type MyPartial<O extends object> = {
//   readonly [KEY in keyof O]?: O[KEY] | undefined
// }
