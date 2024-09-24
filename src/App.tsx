import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/header";
import { ScrollContent } from "./components/scroll-content";
import { useEffect, useRef, useState } from "react";
import { cn } from "./lib/utils";

export type SectionId = "about" | "experience" | "projects";

export default function App() {
  const [visibleSection, setVisibleSection] = useState("about");

  function scrollToHash(section: SectionId) {
    const element = document.getElementById(section);
    element?.scrollIntoView();
  }
  function handleClick(id: SectionId) {
    scrollToHash(id);
    setVisibleSection(id);
  }

  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observer.current = new IntersectionObserver((entries) => {
      const visibleSection = entries.find(
        (entry) => entry.isIntersecting,
      )?.target;

      //Update state with the visible section ID
      if (visibleSection) {
        console.log(visibleSection?.id);
        setVisibleSection(visibleSection.id);
      }
    });

    const sections = document.querySelectorAll("section");

    sections.forEach((section) => {
      observer.current?.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.current?.unobserve(section);
      });
    };
  }, []);

  return (
    <Layout>
      <Header />
      <div className="flex flex-1 flex-col overflow-auto md:flex-row md:overflow-hidden">
        <div className="flex flex-col gap-5 p-10 md:flex-1">
          <div className="text-5xl font-extrabold leading-none md:text-7xl lg:text-9xl xl:text-[180px]">
            <h1>Alex Jordan</h1>
          </div>
          <p>
            I create useable and accessible web experiences from ideas,
            wireframes, or pixel-perfect designs
          </p>
          <div
            className="hidden flex-1 flex-col items-start justify-center gap-5 md:flex"
            onClick={(e) => e.stopPropagation()}
          >
            <LinkButton
              text="About"
              onClick={() => handleClick("about")}
              isVisible={visibleSection === "about"}
            />
            <LinkButton
              text="Experience"
              onClick={() => handleClick("experience")}
              isVisible={visibleSection === "experience"}
            />
            <LinkButton
              text="Projects"
              onClick={() => handleClick("projects")}
              isVisible={visibleSection === "projects"}
            />
          </div>
        </div>
        <ScrollContent />
      </div>
    </Layout>
  );
}

type LinkButtonProps = {
  text: string;
  onClick: () => void;
  isVisible: boolean;
};

function LinkButton({ text, onClick, isVisible }: LinkButtonProps) {
  return (
    <Button variant="link" asChild>
      <a
        className={cn("cursor-pointer", {
          "font-semibold underline": isVisible,
        })}
        onClick={onClick}
      >
        {`${isVisible ? "————" : "——"}${text}`}
      </a>
    </Button>
  );
}
