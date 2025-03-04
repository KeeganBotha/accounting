import { ChangeEvent } from "react";
import { Controller, useFormContext } from "react-hook-form";

import { Input } from "../ui/input";

type RHFInputProps = {
  name: string;
};

export function RHFInput({ name }: RHFInputProps) {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value } }) => {
        function handleChange(event: ChangeEvent<HTMLInputElement>) {
          onChange(event.target.value);
        }

        return <Input onChange={handleChange} value={value} />;
      }}
    />
  );
}
