"use client";

import { useFormContext } from "react-hook-form";

import { Button } from "../ui/button";
import { Icon } from "../icon";

type FormButtonsProps = {
  onSubmit?: () => void;
  onReset?: () => void;
};

export function FormButtons({
  onSubmit = () => {},
  onReset = () => {},
}: FormButtonsProps) {
  const formMethods = useFormContext();
  const isSubmitting = formMethods.formState.isSubmitting;

  function handleReset() {
    onReset();
    formMethods.reset();
  }

  function handleSubmit() {
    onSubmit();
  }

  return (
    <div className="flex flex-row gap-4 items-center justify-center">
      <Button type="reset" variant="secondary" onClick={handleReset}>
        {isSubmitting ? (
          <Icon iconName="Loading" className="animate-spin" />
        ) : null}
        Reset
      </Button>
      <Button type="submit" onClick={handleSubmit}>
        {isSubmitting ? (
          <Icon iconName="Loading" className="animate-spin" />
        ) : null}
        Submit
      </Button>
    </div>
  );
}
