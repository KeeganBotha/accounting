"use client";

import { Controller, useFormContext } from "react-hook-form";

import {
  Select as SelectContainer,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Label } from "../ui/label";

type RHFSelectProps = {
  name: string;
  label: string;
  options: OptionType[];
};

export function RHFSelect({ name, label, options }: RHFSelectProps) {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value } }) => {
        function handleChange(updatedValue: string) {
          onChange(updatedValue);
        }

        return (
          <div className="flex flex-col gap-2">
            {label && <Label>{label}</Label>}
            <Select onChange={handleChange} value={value} options={options} />
          </div>
        );
      }}
    />
  );
}

type SelectProps = {
  options: OptionType[];
  value: string | undefined;
  onChange: (value: string) => void;
};

function Select({ options, value, onChange }: SelectProps) {
  return (
    <SelectContainer onValueChange={onChange} defaultValue={value}>
      <SelectTrigger>
        <SelectValue placeholder="Select a verified email to display" />
      </SelectTrigger>
      <SelectContent>
        {options.map((option) => {
          return (
            <SelectItem key={option.value} value={option.value}>
              {option.text}
            </SelectItem>
          );
        })}
      </SelectContent>
    </SelectContainer>
  );
}
