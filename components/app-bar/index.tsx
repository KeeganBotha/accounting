import { ModeToggle } from "../theme/ModeToggle";
import { Title } from "./Title";

export function AppBar() {
  return (
    <div className="h-[5rem] w-[calc(100vw-10rem)] shadow-lg w-fill">
      <Title />
      <ModeToggle />
    </div>
  );
}
