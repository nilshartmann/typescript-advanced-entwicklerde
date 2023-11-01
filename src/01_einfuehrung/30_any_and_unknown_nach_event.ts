import { z } from "zod";

export default undefined;

// any und unknown
// Type Predicate Functions
// evtl: Zod

// fetch weiß nicht, was für ein Objekt über per HTTP geladen wird
// Rückgabe-Type also any...
//  => Konsequenz?

declare function fetch(): any;

const x = fetch();
x.toUpperCase();

//  => was wäre besser?
declare function betterFetch(): unknown;

const y = betterFetch();
if (typeof y === "string") {
  y.toUpperCase();
}

// Example, API conventions:
type ErrorResponse = { error: string };
type SuccessResponse = { data: string };
type Response = ErrorResponse | SuccessResponse;

function loadData(): Response {
  const response = betterFetch();
  assertResponse(response);
  return response;
}

function loadUser() {
  const response = loadData();

  if (isErrorResponse(response)) {
    console.error(response.error);
    return;
  }

  response;
}

// Type Predicate Function
function isErrorResponse(r: Response): r is ErrorResponse {
  if ("error" in r) {
    return true;
  }

  return false;
}

// Type Assertion Function
function assertResponse(r: unknown): asserts r is Response {
  if (r !== null && typeof r === "object") {
    return;
  }

  throw new Error("Invalid Response received from server");
}

// Zod https://zod.dev
const ErrorResponseSchema = z.object({
  error: z.string()
});
const SuccessResponseSchema = z.object({
  data: z.string()
});
const ResponseSchema = ErrorResponseSchema.or(SuccessResponseSchema);
type TResponseSchema = z.infer<typeof ResponseSchema>;

function loadXyz(): TResponseSchema {
  const response = betterFetch();

  const validatedResponse = ResponseSchema.parse(response);

  return validatedResponse;
}

// 1. Assert das ein Aufruf von betterFetch eine Response zurückliefert
//     (loadFromApi-Funktion und assert-Funktion)
// 2. Funktion, mit der wir ermitteln können, ob wir ein Error oder ein Success haben
//3. evtl. Zod
