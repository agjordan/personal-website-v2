import { Layout } from "@/components/layout/layout";
import { Separator } from "@/components/ui/separator";

type Section = "about" | "experience" | "projects";

export default function App() {
  function scrollToHash(section: Section) {
    const element = document.getElementById(section);
    element?.scrollIntoView();
  }

  return (
    <Layout>
      <div className="flex flex-col p-10">
        <p className="flex items-center align-middle text-lg">
          alex <sup>j</sup>
        </p>
        <Separator className="flex" />
      </div>
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
          <div className="hidden flex-1 flex-col justify-center gap-5 md:flex">
            <a
              className="cursor-pointer underline"
              onClick={() => scrollToHash("about")}
            >
              About
            </a>
            <a
              className="cursor-pointer underline"
              onClick={() => scrollToHash("experience")}
            >
              Experience
            </a>
            <a
              className="cursor-pointer underline"
              onClick={() => scrollToHash("projects")}
            >
              Projects
            </a>
          </div>
        </div>
        <div className="flex flex-1 overflow-y-auto p-10">
          <ScrollContent />
        </div>
      </div>
    </Layout>
  );
}

function ScrollContent() {
  return (
    <div className="flex flex-1 flex-col gap-10">
      <p id="about" className="flex flex-col gap-4">
        <span>
          I'm a London-based software engineer with a background in product
          management and a passion for creating and delivering user-centric
          products. I discovered my love for coding while working as a product
          manager, where I found myself enjoying the process of building Python
          scripts to streamline workflows.
        </span>
        <span>
          Initially, I thought data engineering would be my path—after working
          on several ETL projects and teaching myself SQL—but I soon realized
          that my product management experience aligned well with front-end
          development, especially in creating intuitive user experiences.
        </span>
        <span>
          A few years later, I've worked across the full stack and feel most
          confident coding in TypeScript. I also have solid experience in Python
          and Java, with side projects that gave me a chance to dabble in C,
          Lua, and Ruby. I'm driven by big goals and thrive in fast-paced
          environments where I can take on interesting challenges, make a quick
          impact, and continue growing.
        </span>
      </p>
      <p id="experience">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ab ea
        voluptates culpa modi ratione iste accusamus sequi, eveniet blanditiis
        suscipit odit consectetur quibusdam laboriosam maxime eum molestiae
        ipsum repellat. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Dolor ab ea voluptates culpa modi ratione iste accusamus sequi, eveniet
        blanditiis suscipit odit consectetur quibusdam laboriosam maxime eum
        molestiae ipsum repellat.Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Dolor ab ea voluptates culpa modi ratione iste
        accusamus sequi, eveniet blanditiis suscipit odit consectetur quibusdam
        laboriosam maxime eum molestiae ipsum repellat.Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Dolor ab ea voluptates culpa modi
        ratione iste accusamus sequi, eveniet blanditiis suscipit odit
        consectetur quibusdam laboriosam maxime eum molestiae ipsum
        repellat.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
        ab ea voluptates culpa modi ratione iste accusamus sequi, eveniet
        blanditiis suscipit odit consectetur quibusdam laboriosam maxime eum
        molestiae ipsum repellat.Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Dolor ab ea voluptates culpa modi ratione iste
        accusamus sequi, eveniet blanditiis suscipit odit consectetur quibusdam
        laboriosam maxime eum molestiae ipsum repellat.Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Dolor ab ea voluptates culpa modi
        ratione iste accusamus sequi, eveniet blanditiis suscipit odit
        consectetur quibusdam laboriosam maxime eum molestiae ipsum
        repellat.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
        ab ea voluptates culpa modi ratione iste accusamus sequi, eveniet
        blanditiis suscipit odit consectetur quibusdam laboriosam maxime eum
        molestiae ipsum repellat.Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Dolor ab ea voluptates culpa modi ratione iste
        accusamus sequi, eveniet blanditiis suscipit odit consectetur quibusdam
        laboriosam maxime eum molestiae ipsum repellat.Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Dolor ab ea voluptates culpa modi
        ratione iste accusamus sequi, eveniet blanditiis suscipit odit
        consectetur quibusdam laboriosam maxime eum molestiae ipsum
        repellat.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
        ab ea voluptates culpa modi ratione iste accusamus sequi, eveniet
        blanditiis suscipit odit consectetur quibusdam laboriosam maxime eum
        molestiae ipsum repellat.Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Dolor ab ea voluptates culpa modi ratione iste
        accusamus sequi, eveniet blanditiis suscipit odit consectetur quibusdam
        laboriosam maxime eum molestiae ipsum repellat.Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Dolor ab ea voluptates culpa modi
        ratione iste accusamus sequi, eveniet blanditiis suscipit odit
        consectetur quibusdam laboriosam maxime eum molestiae ipsum
        repellat.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
        ab ea voluptates culpa modi ratione iste accusamus sequi, eveniet
      </p>
      <p id="projects">
        Spent the last 2 years building all the things at HAI. But here are some
        older projects from when I was learning JS/React <br /> Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Dolor ab ea voluptates
        culpa modi ratione iste accusamus sequi, eveniet blanditiis suscipit
        odit consectetur quibusdam laboriosam maxime eum molestiae ipsum
        repellat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
        ab ea voluptates culpa modi ratione iste accusamus sequi, eveniet
        blanditiis suscipit odit consectetur quibusdam laboriosam maxime eum
        molestiae ipsum repellat.Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Dolor ab ea voluptates culpa modi ratione iste
        accusamus sequi, eveniet blanditiis suscipit odit consectetur quibusdam
        laboriosam maxime eum molestiae ipsum repellat.Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Dolor ab ea voluptates culpa modi
        ratione iste accusamus sequi, eveniet blanditiis suscipit odit
        consectetur quibusdam laboriosam maxime eum molestiae ipsum
        repellat.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
        ab ea voluptates culpa modi ratione iste accusamus sequi, eveniet
        blanditiis suscipit odit consectetur quibusdam laboriosam maxime eum
        molestiae ipsum repellat.Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Dolor ab ea voluptates culpa modi ratione iste
        accusamus sequi, eveniet blanditiis suscipit odit consectetur quibusdam
        laboriosam maxime eum molestiae ipsum repellat.Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Dolor ab ea voluptates culpa modi
        ratione iste accusamus sequi, eveniet blanditiis suscipit odit
        consectetur quibusdam laboriosam maxime eum molestiae ipsum
        repellat.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
        ab ea voluptates culpa modi ratione iste accusamus sequi, eveniet
        blanditiis suscipit odit consectetur quibusdam laboriosam maxime eum
        molestiae ipsum repellat.Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Dolor ab ea voluptates culpa modi ratione iste
        accusamus sequi, eveniet blanditiis suscipit odit consectetur quibusdam
        laboriosam maxime eum molestiae ipsum repellat.Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Dolor ab ea voluptates culpa modi
        ratione iste accusamus sequi, eveniet blanditiis suscipit odit
        consectetur quibusdam laboriosam maxime eum molestiae ipsum
        repellat.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
        ab ea voluptates culpa modi ratione iste accusamus sequi, eveniet
        blanditiis suscipit odit consectetur quibusdam laboriosam maxime eum
        molestiae ipsum repellat.Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Dolor ab ea voluptates culpa modi ratione iste
        accusamus sequi, eveniet blanditiis suscipit odit consectetur quibusdam
        laboriosam maxime eum molestiae ipsum repellat.Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Dolor ab ea voluptates culpa modi
        ratione iste accusamus sequi, eveniet blanditiis suscipit odit
        consectetur quibusdam laboriosam maxime eum molestiae ipsum
        repellat.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
        ab ea voluptates culpa modi ratione iste accusamus sequi, eveniet
      </p>
    </div>
  );
}
