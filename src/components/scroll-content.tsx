import { SectionId } from "@/App";
import useOnScreen from "@/lib/useOnScreen";
import { Dispatch, SetStateAction, useRef } from "react";

type ScrollContentProps = {
  setVisibleSection: Dispatch<SetStateAction<string>>;
};
export function ScrollContent({ setVisibleSection }: ScrollContentProps) {
  return (
    <div className="flex flex-1 flex-col gap-10">
      <Section
        setVisibleSection={setVisibleSection}
        sectionTitle={"About"}
        sectionId={"about"}
        content={<About />}
      />
      <Section
        setVisibleSection={setVisibleSection}
        sectionTitle={"Experience"}
        sectionId={"experience"}
        content={<Experience />}
      />
      <Section
        setVisibleSection={setVisibleSection}
        sectionTitle={"Projects"}
        sectionId={"projects"}
        content={<Projects />}
      />
    </div>
  );
}

type SectionProps = {
  setVisibleSection: Dispatch<SetStateAction<string>>;
  sectionTitle: string;
  sectionId: SectionId;
  content: JSX.Element;
};
function Section({
  setVisibleSection,
  sectionTitle,
  sectionId,
  content,
}: SectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref);

  if (isVisible) {
    setVisibleSection(sectionId);
  }

  return (
    <div id={sectionId} className="flex flex-col gap-4 md:pt-10" ref={ref}>
      <SectionTitle title={sectionTitle} />
      {content}
    </div>
  );
}

function About() {
  return (
    <>
      <p>
        I'm a London-based software engineer with a background in product
        management and a passion for creating and delivering user-centric
        products. I discovered my love for coding while working as a product
        manager, where I found myself enjoying the process of building Python
        scripts to streamline workflows.
      </p>
      <p>
        Initially, I thought data engineering would be my path—after working on
        several ETL projects and teaching myself SQL—but I soon realized that my
        product management experience aligned well with front-end development,
        especially in creating intuitive user experiences.
      </p>
      <p>
        A few years later, I've worked across the full stack and feel most
        confident coding in TypeScript. I also have solid experience in Python
        and Java, with side projects that gave me a chance to dabble in C, Lua,
        and Ruby. I'm driven by big goals and thrive in fast-paced environments
        where I can take on interesting challenges, make a quick impact, and
        continue growing.
      </p>
    </>
  );
}

function Experience() {
  return (
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ab ea
      voluptates culpa modi ratione iste accusamus sequi, eveniet blanditiis
      suscipit odit consectetur quibusdam laboriosam maxime eum molestiae ipsum
      repellat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
      ab ea voluptates culpa modi ratione iste accusamus sequi, eveniet
      blanditiis suscipit odit consectetur quibusdam laboriosam maxime eum
      molestiae ipsum repellat.Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Dolor ab ea voluptates culpa modi ratione iste accusamus
      sequi, eveniet blanditiis suscipit odit consectetur quibusdam laboriosam
      maxime eum molestiae ipsum repellat.Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Dolor ab ea voluptates culpa modi ratione iste accusamus
      sequi, eveniet blanditiis suscipit odit consectetur quibusdam laboriosam
      maxime eum molestiae ipsum repellat.Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Dolor ab ea voluptates culpa modi ratione iste accusamus
      sequi, eveniet blanditiis suscipit odit consectetur quibusdam laboriosam
      maxime eum molestiae ipsum repellat.Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Dolor ab ea voluptates culpa modi ratione iste accusamus
      sequi, eveniet blanditiis suscipit odit consectetur quibusdam laboriosam
      maxime eum molestiae ipsum repellat.Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Dolor ab ea voluptates culpa modi ratione iste accusamus
      sequi, eveniet blanditiis suscipit odit consectetur quibusdam laboriosam
      maxime eum molestiae ipsum repellat.Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Dolor ab ea voluptates culpa modi ratione iste accusamus
      sequi, eveniet blanditiis suscipit odit consectetur quibusdam laboriosam
      maxime eum molestiae ipsum repellat.Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Dolor ab ea voluptates culpa modi ratione iste accusamus
      sequi, eveniet blanditiis suscipit odit consectetur quibusdam laboriosam
      maxime eum molestiae ipsum repellat.Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Dolor ab ea voluptates culpa modi ratione iste accusamus
      sequi, eveniet blanditiis suscipit odit consectetur quibusdam laboriosam
      maxime eum molestiae ipsum repellat.Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Dolor ab ea voluptates culpa modi ratione iste accusamus
      sequi, eveniet blanditiis suscipit odit consectetur quibusdam laboriosam
      maxime eum molestiae ipsum repellat.Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Dolor ab ea voluptates culpa modi ratione iste accusamus
      sequi, eveniet blanditiis suscipit odit consectetur quibusdam laboriosam
      maxime eum molestiae ipsum repellat.Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Dolor ab ea voluptates culpa modi ratione iste accusamus
      sequi, eveniet blanditiis suscipit odit consectetur quibusdam laboriosam
      maxime eum molestiae ipsum repellat.Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Dolor ab ea voluptates culpa modi ratione iste accusamus
      sequi, eveniet
    </p>
  );
}

function Projects() {
  return (
    <div>
      Spent the last 2 years building all the things at HAI. But here are some
      older projects from when I was learning JS/React <br /> Lorem ipsum dolor
      sit amet consectetur adipisicing elit. Dolor ab ea voluptates culpa modi
      ratione iste accusamus sequi, eveniet blanditiis suscipit odit consectetur
      quibusdam laboriosam maxime eum molestiae ipsum repellat. Lorem ipsum
      dolor sit amet consectetur adipisicing elit. Dolor ab ea voluptates culpa
      modi ratione iste accusamus sequi, eveniet blanditiis suscipit odit
      consectetur quibusdam laboriosam maxime eum molestiae ipsum repellat.Lorem
      ipsum dolor sit amet consectetur adipisicing elit. Dolor ab ea voluptates
      culpa modi ratione iste accusamus sequi, eveniet blanditiis suscipit odit
      consectetur quibusdam laboriosam maxime eum molestiae ipsum repellat.Lorem
      ipsum dolor sit amet consectetur adipisicing elit. Dolor ab ea voluptates
      culpa modi ratione iste accusamus sequi, eveniet blanditiis suscipit odit
      consectetur quibusdam laboriosam maxime eum molestiae ipsum repellat.Lorem
      ipsum dolor sit amet consectetur adipisicing elit. Dolor ab ea voluptates
      culpa modi ratione iste accusamus sequi, eveniet blanditiis suscipit odit
      consectetur quibusdam laboriosam maxime eum molestiae ipsum repellat.Lorem
      ipsum dolor sit amet consectetur adipisicing elit. Dolor ab ea voluptates
      culpa modi ratione iste accusamus sequi, eveniet blanditiis suscipit odit
      consectetur quibusdam laboriosam maxime eum molestiae ipsum repellat.Lorem
      ipsum dolor sit amet consectetur adipisicing elit. Dolor ab ea voluptates
      culpa modi ratione iste accusamus sequi, eveniet blanditiis suscipit odit
      consectetur quibusdam laboriosam maxime eum molestiae ipsum repellat.Lorem
      ipsum dolor sit amet consectetur adipisicing elit. Dolor ab ea voluptates
      culpa modi ratione iste accusamus sequi, eveniet blanditiis suscipit odit
      consectetur quibusdam laboriosam maxime eum molestiae ipsum repellat.Lorem
      ipsum dolor sit amet consectetur adipisicing elit. Dolor ab ea voluptates
      culpa modi ratione iste accusamus sequi, eveniet blanditiis suscipit odit
      consectetur quibusdam laboriosam maxime eum molestiae ipsum repellat.Lorem
      ipsum dolor sit amet consectetur adipisicing elit. Dolor ab ea voluptates
      culpa modi ratione iste accusamus sequi, eveniet blanditiis suscipit odit
      consectetur quibusdam laboriosam maxime eum molestiae ipsum repellat.Lorem
      ipsum dolor sit amet consectetur adipisicing elit. Dolor ab ea voluptates
      culpa modi ratione iste accusamus sequi, eveniet blanditiis suscipit odit
      consectetur quibusdam laboriosam maxime eum molestiae ipsum repellat.Lorem
      ipsum dolor sit amet consectetur adipisicing elit. Dolor ab ea voluptates
      culpa modi ratione iste accusamus sequi, eveniet blanditiis suscipit odit
      consectetur quibusdam laboriosam maxime eum molestiae ipsum repellat.Lorem
      ipsum dolor sit amet consectetur adipisicing elit. Dolor ab ea voluptates
      culpa modi ratione iste accusamus sequi, eveniet blanditiis suscipit odit
      consectetur quibusdam laboriosam maxime eum molestiae ipsum repellat.Lorem
      ipsum dolor sit amet consectetur adipisicing elit. Dolor ab ea voluptates
      culpa modi ratione iste accusamus sequi, eveniet
    </div>
  );
}

type SectionTitleProps = {
  title: string;
};
function SectionTitle({ title }: SectionTitleProps) {
  return <h3 className="text-lg underline md:hidden">{title}</h3>;
}
