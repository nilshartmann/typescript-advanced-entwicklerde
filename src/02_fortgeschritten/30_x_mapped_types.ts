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

type Copy<O> = {
  [K in keyof O]: O[K];
};

type OurReadonly<O> = {
  readonly [K in keyof O]: O[K];
};

type OurPartial<O> = {
  [K in keyof O]?: O[K];
};

type ValidatedObject<O> = {
  [K in keyof O]: boolean;
};

declare function validate<O extends object>(o: O): ValidatedObject<O>;

const result = validate({
  firstname: "klaus",
  age: 32
});

result.firstname;
//      ^?
result.age;
//      ^?
