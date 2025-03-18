import { AuthError } from "next-auth";

export const getErrorMessage = (error: unknown): string => {
  const isAuthError = error instanceof AuthError;

  if (isAuthError && "cause" in error) return error.cause?.err?.message ?? "";

  if (error instanceof Error && "message" in error) return error.message;

  const isError = !!error;
  const isObj = typeof error === "object";
  const isObjError = isError && isObj;

  if (isObjError && "message" in error) return String((error as Error).message);

  if (isObjError && "name" in error) return error.name as string;

  if (isObjError && "serverError" in error) return (error as any).serverError;

  if (typeof error === "string") return error;

  return "Something went wrong!";
};
