import { Button } from "@/components/ui/button";
import { Label } from "@radix-ui/react-label";
import { Input } from "@/components/ui/input";
import { Form } from "./form";

export default function Page() {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <Form />;
    </div>
  );
}
