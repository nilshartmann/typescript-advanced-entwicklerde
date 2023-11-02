export default undefined;

// Generic Functions
// - setState-Funktion von React
//   - Typ Parameter wird übergeben oder abgeleitet
//   - Zurück kommt Parameter-Typ und Setter-Funktion
//
// Generic Types
//  - Die Setter-Funktion als Typ

declare function createStateSetter<A>(s: A): (newValue: A) => void;

const x = createStateSetter<string | null>("ac");
x("fasdfasdf");
x(null);

const y: number = createStateSetter(123);
const b: boolean = createStateSetter(true);
