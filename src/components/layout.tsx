import { PropsWithChildren } from "react";
import { ShapeCanvas } from "@/components/particles/shapeCanvas";
import { ThemeProvider } from "./theme-provider";

export function Layout({ children }: PropsWithChildren) {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="flex h-screen w-screen">
        <ShapeCanvas />
        <div className="flex min-h-0 flex-1 flex-col overflow-hidden">
          {children}
        </div>
      </div>
    </ThemeProvider>
  );
}
