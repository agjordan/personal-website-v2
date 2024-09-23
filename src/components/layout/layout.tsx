import { PropsWithChildren } from "react";
import { ShapeCanvas } from "@/components/particles/shapeCanvas";

export function Layout({ children }: PropsWithChildren) {
  return (
    <div className="flex h-screen w-screen">
      <ShapeCanvas />
      <div className="flex min-h-0 flex-1 flex-col overflow-hidden">
        {children}
      </div>
    </div>
  );
}
