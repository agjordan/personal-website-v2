import { ModeToggle } from "@/components/mode-toggle";
import { Separator } from "@/components/ui/separator";

export function Header() {
  return (
    <div className="flex flex-col p-10">
      <div className="flex justify-between p-5 align-middle">
        <p className="flex items-center align-middle text-lg">
          alex <sup>j</sup>
        </p>
        <ModeToggle />
      </div>
      <Separator className="flex" />
    </div>
  );
}
