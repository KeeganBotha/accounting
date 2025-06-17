import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { AccountRecordSchema } from "../_data/financeTrackerSchema";
import { RHFInput } from "@/components/controlled-components/RHFInput";

export function MutateRecord() {
  const formMethods = useForm({
    resolver: zodResolver(AccountRecordSchema),
    defaultValues: {
      name: "",
      value: 0,
    },
  });

  const handleSubmit = formMethods.handleSubmit(async (formData) => {});

  return (
    <FormProvider {...formMethods}>
      <form onSubmit={handleSubmit}>
        <RHFInput label="Name" name="name" />
        <RHFInput label="Value" name="value" />
      </form>
    </FormProvider>
  );
}
