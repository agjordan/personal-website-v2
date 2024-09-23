import { PropsWithChildren } from "react";
import { ShapeCanvas } from "@/components/particles/shapeCanvas";

export function Layout({ children }: PropsWithChildren) {
  return (
    <div className="flex w-screen h-screen min-h-0 overflow-y-auto">
      <ShapeCanvas />
      <div className="flex flex-1">{children}</div>
    </div>
  );
}
