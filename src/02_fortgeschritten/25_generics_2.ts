export default undefined;

// - keyof
//   - Default-Value
//   - Constraints

declare function getPropertyFromObject(object: any, key: any): any;

const firstname: string = getPropertyFromObject({ firstname: "Klaus", age: 32 }, "firstname");
const age: number = getPropertyFromObject({ firstname: "Klaus", age: 32 }, "age");
const city: string = getPropertyFromObject({ firstname: "Klaus", age: 32 }, "city"); // ERR: 'city' nicht in dem Objekt
