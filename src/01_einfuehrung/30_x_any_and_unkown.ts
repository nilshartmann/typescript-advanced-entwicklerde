import { z } from "zod";

export default undefined;

// Example: fetch function
// Example:
//   type ErrorResponse = { error: string };
//   type SuccessResponse = { data: string };
//   type Response = ErrorResponse | SuccessResponse;

// fetch weiß nicht, was für ein Objekt über per HTTP geladen wird
// Rückgabe-Type also any...
//  => Konsequenz?
declare function fetch(): any;

// => wir können auf dem Return-Value ALLES machen
fetch().toUpperCase();

//  => was wäre besser?
declare function betterFetch(): unknown;

// ...nun müssen wir überprüfen!
const r = betterFetch();
if (typeof r === "string") {
  r.toUpperCase();
}

// Example, API conventions:
//   type ErrorResponse = { error: string };
//   type SuccessResponse = { data: string };
//   type Response = ErrorResponse | SuccessResponse;

type ErrorResponse = { error: string };
type SuccessResponse = { data: string };
type Response = ErrorResponse | SuccessResponse;

function loadFromApi(): Response {
  const r = betterFetch();
  ensureValidResponse(r);
  return r;
}

function ensureValidResponse(candidate: any): asserts candidate is Response {
  if ("error" in candidate || "data" in candidate) {
    return;
  }

  throw new Error("Candidate is invalid");
}

// idea 2: how can users of apiFetch distinguish between
//    ErrorResponse and SuccessResponse

function fetchUser() {
  const res = loadFromApi();

  if (isSuccessResponse(res)) {
    res.data.toUpperCase();
  } else {
    res.error.toLowerCase();
  }
}

function isSuccessResponse(candidate: Response): candidate is SuccessResponse {
  return "data" in candidate;
}

const ErrorResponseSchema = z.object({
  error: z.string()
});
const SuccessResponseSchema = z.object({
  data: z.string()
});

const ResponseSchema = ErrorResponseSchema.or(SuccessResponseSchema);

const result = betterFetch();
const validResult = ResponseSchema.parse(result);

const successResponse = SuccessResponseSchema.safeParse(validResult);
if (successResponse.success) {
  successResponse.data.data;
}

// https://www.typescriptlang.org/docs/handbook/advanced-types.html#type-guards-and-differentiating-types
// https://www.typescriptlang.org/docs/handbook/advanced-types.html#user-defined-type-guards
// https://www.typescriptlang.org/play?q=241#example/unknown-and-never
