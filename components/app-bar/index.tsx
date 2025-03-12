import { ModeToggle } from "./ModeToggle";
import { Account } from "./Account";
import { Title } from "./Title";

export function AppBar() {
  return (
    <div className="h-[5rem] w-[calc(100vw-10rem)] shadow-lg w-fill p-4 bg flex flex-row justify-between items-center">
      <Title />
      <div className="flex flex-row gap-4">
        <ModeToggle />
        <Account />
      </div>
    </div>
  );
}
