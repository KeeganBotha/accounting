import React, { ChangeEvent } from "react";
import { Controller, useFormContext } from "react-hook-form";

import { Input } from "../ui/input";
import { Label } from "../ui/label";

interface RHFFileProps {
  name: string;
  label: string;
}

export function RHFFile({ name, label, ...props }: RHFFileProps) {
  const { control } = useFormContext();

  function handleChange() {}

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value } }) => {
        function handleChange(event: ChangeEvent<HTMLInputElement>) {
          onChange(event.target.value);
        }

        return (
          <div className="flex flex-col gap-2">
            {label && <Label>{label}</Label>}
            <Input onChange={handleChange} value={value} {...props} />
          </div>
        );
      }}
    />
  );
}
