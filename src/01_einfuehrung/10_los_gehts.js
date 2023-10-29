// Folgende Zeile ignorieren; Workaround für diesen Workspace
export default undefined;

// Basis-Syntax
//  Funktion
//   - Rückgabewert explizit vs. implizit
//  any und unknown
//  Union Type
//   string | null
//   Type Guard
//  Type Alias für ein Objekt
//   vs Interface für ein Objekt
//   Type Guards #2

//  Neue Datei 25:
//  Tagged Union Types
//    Neben einer Person kann man eine

let name = "Klaus";

name = 7;

name = false;

name = function () {
  return "Klaus ";
};

name.toUpperCase(); // 🤕
