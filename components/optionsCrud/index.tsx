"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { DialogDescription } from "@radix-ui/react-dialog";

import { splitCamelCase } from "@/lib/utils";

import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Icon } from "../icon";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { OptionSchema } from "./schema";
import { Card, CardContent } from "../ui/card";
import { RHFInput } from "../controlled-components/RHFInput";
import { RHFSelect } from "../controlled-components/RHFSelect";
import { FormButtons } from "../controlled-components/FormButtons";

type OptionsCrudProps = {
  data: OptionType[];
};

export function OptionsCrud({ data }: OptionsCrudProps) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row justify-between">
        <Input placeholder="Search..." className="max-w-xs" />
        <MutateOptionDialog />
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-start w-full">
        {data.map((option) => {
          return <OptionCard key={option.value} data={option} />;
        })}
      </div>
    </div>
  );
}

type OptionCardProps = {
  data: OptionType;
};

function OptionCard({ data }: OptionCardProps) {
  const { iconName, text, value } = data;

  return (
    <Card className="min-w-[19rem] h-fit">
      <CardContent>
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-col gap-2">
            <p>{text}</p>
            <p className="text-xs text-muted-foreground capitalize">
              {splitCamelCase(iconName)}
            </p>
          </div>
          <div className="flex gap-4">
            <ActionDialog
              title={"Edit " + text}
              description={"You are editting"}
              onSubmit={() => {}}
              iconName={"edit"}
            />
            <ActionDialog
              title={"Delete " + text}
              description={"Really Delete?"}
              onSubmit={() => {}}
              iconName={"delete"}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

type ActionDialogProps = {
  title: string;
  description: string | React.ReactNode;
  onSubmit: () => void;
  iconName: string;
};

function ActionDialog({
  description,
  onSubmit,
  title,
  iconName,
}: ActionDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="icon">
          <Icon iconName={iconName as any} />
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogTitle>{title}</DialogTitle>
        <DialogDescription>{description}</DialogDescription>
      </DialogContent>
    </Dialog>
  );
}

function MutateOptionDialog() {
  const formMethods = useForm({
    resolver: zodResolver(OptionSchema),
    defaultValues: {
      text: "",
      value: "0",
      iconName: "",
    },
  });

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <Icon iconName="add" /> Add
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Create Option</DialogTitle>
        <DialogDescription hidden />
        <FormProvider {...formMethods}>
          <form>
            <RHFInput label="Type" name="text" />
            <RHFSelect label="" name="" options={[]} />
            <FormButtons />
          </form>
        </FormProvider>
      </DialogContent>
    </Dialog>
  );
}
