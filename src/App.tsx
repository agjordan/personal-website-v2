import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/header";
import { ScrollContent } from "./components/scroll-content";

type Section = "about" | "experience" | "projects";

export default function App() {
  function scrollToHash(section: Section) {
    const element = document.getElementById(section);
    element?.scrollIntoView();
  }

  return (
    <Layout>
      <Header />
      <div className="flex flex-1 flex-col overflow-hidden md:flex-row">
        <div className="flex flex-col gap-5 p-10 md:flex-1">
          <div className="text-5xl font-extrabold leading-none md:text-7xl lg:text-9xl xl:text-[180px]">
            <h1>Alex</h1>
            <h1>Jordan</h1>
          </div>
          <p>
            I create useable and accessible web experiences from ideas,
            wireframes, or pixel-perfect designs
          </p>
          <div className="hidden flex-1 flex-col items-start justify-center gap-5 md:flex">
            <Button variant="link" asChild>
              <a
                className="cursor-pointer underline"
                onClick={() => scrollToHash("about")}
              >
                About
              </a>
            </Button>
            <Button variant="link" asChild>
              <a
                className="cursor-pointer underline"
                onClick={() => scrollToHash("experience")}
              >
                Experience
              </a>
            </Button>
            <Button variant="link" asChild>
              <a
                className="cursor-pointer underline"
                onClick={() => scrollToHash("projects")}
              >
                Projects
              </a>
            </Button>
          </div>
        </div>
        <div className="flex flex-1 overflow-y-auto p-10">
          <ScrollContent />
        </div>
      </div>
    </Layout>
  );
}
