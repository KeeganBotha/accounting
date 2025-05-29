"use client";

import { useFormContext } from "react-hook-form";

export function RHFDiagnostic() {
  const formMethods = useFormContext();

  return (
    <div>
      <div>{JSON.stringify(formMethods.watch())}</div>
      <div>{JSON.stringify(formMethods.formState.errors)}</div>
    </div>
  );
}
