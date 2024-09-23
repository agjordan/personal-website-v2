import { SectionId } from "@/App";
import useOnScreen from "@/lib/useOnScreen";
import { Dispatch, SetStateAction, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "./ui/badge";

type ScrollContentProps = {
  setVisibleSection: Dispatch<SetStateAction<string>>;
};
export function ScrollContent({ setVisibleSection }: ScrollContentProps) {
  return (
    <div className="mt-96 flex flex-1 flex-col gap-10">
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
    <>
      <ExperienceDetail
        date="10/22—10/24"
        title="Software Engineer"
        workplace="Holistic AI"
        description="At Holistic AI, I led the front-end development of 
        several applications from inception, including a platform for auditing 
        and monitoring large language models (LLMs) and a system to audit 
        Automated Environmental Decision Tools (AEDT) in compliance with NYC 
        Local Law 144. In addition to building new applications, I refactored 
        and optimized existing projects, modularizing the code to enhance readability 
        and maintainability. While my primary focus was on the front-end, 
        I also contributed to back-end development, particularly using TypeScript and Python, 
        to ensure seamless integration across the stack."
        techs={[
          "TypeScript",
          "HTML & CSS",
          "React",
          "Node.js",
          "Python",
          "Java",
        ]}
      />
      <ExperienceDetail
        date="12/21—06/22"
        title="Software Engineer"
        workplace="Clim8"
        description="sit amet consectetur adipisicing elit. Dolor ab ea voluptates culpa modi
      ratione iste accusamus sequi, eveniet blanditiis suscipit odit consectetur
      quibusdam laboriosam maxime eum molestiae ipsum repellat."
        techs={["TypeScript", "HTML & CSS", "React Native", "Jest"]}
      />
      <ExperienceDetail
        date="01/21—11/21"
        title="Junior Full Stack Developer"
        workplace="_nology"
        description="sit amet consectetur adipisicing elit. Dolor ab ea voluptates culpa modi
      ratione iste accusamus sequi, eveniet blanditiis suscipit odit consectetur
      quibusdam laboriosam maxime eum molestiae ipsum repellat."
        techs={["Javascript", "React", "HTML & CSS"]}
      />
      <ExperienceDetail
        date="01/21—11/21"
        title="Product Manager"
        workplace="Pass the Keys"
        description="sit amet consectetur adipisicing elit. Dolor ab ea voluptates culpa modi
      ratione iste accusamus sequi, eveniet blanditiis suscipit odit consectetur
      quibusdam laboriosam maxime eum molestiae ipsum repellat."
        techs={["Python", "SQL", "HTML & CSS"]}
      />
      <Button variant="link" className="self-start">
        See all experience
      </Button>
    </>
  );
}

type ExperienceDetailProps = {
  date: string;
  title: string;
  workplace: string;
  description: string;
  techs: string[];
};
function ExperienceDetail({
  date,
  title,
  description,
  workplace,
  techs,
}: ExperienceDetailProps) {
  return (
    <div className="grid grid-cols-5 gap-2">
      <div className="text-nowrap">{date}</div>
      <div className="col-span-4 flex flex-col">
        <div>
          {title}, <b>{workplace}</b>
        </div>
        <div>{description}</div>
        <div className="flex flex-wrap gap-1">
          {techs.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>
      </div>
    </div>
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
    </div>
  );
}

type SectionTitleProps = {
  title: string;
};
function SectionTitle({ title }: SectionTitleProps) {
  return <h3 className="text-lg underline md:hidden">{title}</h3>;
}
