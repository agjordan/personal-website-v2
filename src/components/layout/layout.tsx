import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";
import { Particles } from "@/components/particles/particles";

export function Layout({ children }: PropsWithChildren) {
  return (
    <div className={cn("flex w-screen h-screen")}>
      {children}
      <Particles />
    </div>
  );
}
