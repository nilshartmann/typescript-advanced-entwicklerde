// Folgende Zeile ignorieren; Workaround für diesen Workspace
export default undefined;

// Basis-Syntax
//  Funktion
//  any
//  Union Type
//   string | null
//   Type Guard
//  Type Alias für ein Objekt

let name = "Klaus";

name = 7;

name = false;

name = function () {
  return "Klaus ";
};

name.toUpperCase(); // 🤕
