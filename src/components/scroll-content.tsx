import { SectionId } from "@/App";
import { Button } from "@/components/ui/button";
import { Badge } from "./ui/badge";
import { Link } from "lucide-react";

export function ScrollContent() {
  return (
    <div
      className="flex flex-1 flex-col gap-28 p-10 md:overflow-y-auto md:pt-96"
      id="scroll"
    >
      <Section sectionTitle={"About"} sectionId={"about"} content={<About />} />
      <Section
        sectionTitle={"Experience"}
        sectionId={"experience"}
        content={<Experience />}
      />
      <Section
        sectionTitle={"Projects"}
        sectionId={"projects"}
        content={<Projects />}
      />
    </div>
  );
}

type SectionProps = {
  sectionTitle: string;
  sectionId: SectionId;
  content: JSX.Element;
};
function Section({ sectionTitle, sectionId, content }: SectionProps) {
  return (
    <section id={sectionId} className="flex flex-col gap-4 md:gap-8">
      <SectionTitle title={sectionTitle} />
      {content}
    </section>
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
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus, quo
        rerum totam accusantium corrupti, quae, molestias deleniti ut inventore
        ea ducimus est quam nihil voluptatibus. Earum natus quidem non aliquam!
      </p>
    </>
  );
}

type SectionTitleProps = {
  title: string;
};
function SectionTitle({ title }: SectionTitleProps) {
  return <h3 className="text-lg underline md:hidden">{title}</h3>;
}

function Experience() {
  return (
    <>
      <ExperienceDetail
        date="10/22—10/24"
        title="Software Engineer"
        workplace="Holistic AI"
        description="At Holistic AI, I led the front-end development of several applications from inception, including a platform for auditing and monitoring large language models (LLMs) and a system to audit Automated Environmental Decision Tools (AEDT) in compliance with NYC Local Law 144. In addition to building new applications, I refactored and optimized existing projects, modularizing the code to enhance readability and maintainability. While my primary focus was on the front-end, I also contributed to back-end development, particularly using TypeScript and Python, to ensure seamless integration across the stack."
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
        description="At Clim8, I gained valuable mobile development experience while contributing to the Android and iOS applications. I delivered a wide range of features, including charting historical performance data, enabling ISA transfers, managing Junior ISA accounts with risk and suitability assessments, and building a complex account closure flow. Focusing primarily on React Native and TypeScript, I developed these features and ensured they were thoroughly tested with Jest and React Native Testing Library. This role allowed me to sharpen my mobile development skills while supporting Clim8's mission of promoting sustainable investments."
        techs={["TypeScript", "HTML & CSS", "React Native", "Jest"]}
      />
      <ExperienceDetail
        date="01/21—11/21"
        title="Junior Developer"
        workplace="_nology"
        description="At _nology, I completed an intensive 12-week boot camp focused on web development technologies. Following the boot camp, I was seconded to Sugar (add-sugar.io) for 6 months as a Junior Developer, where I built their internal credit management portal. This project allowed me to work across the stack using React, TypeScript, and Python, while also integrating AWS Lambda functions to handle key backend processes. This experience helped me solidify my foundational development skills and gain practical exposure to cloud-based solutions."
        techs={["Javascript", "React", "HTML & CSS"]}
      />
      <ExperienceDetail
        date="01/21—11/21"
        title="Product Manager"
        workplace="Pass the Keys"
        description="At Pass the Keys, I introduced Agile methodologies to streamline the development process, significantly shortening the release cycle for the engineering team. Leading the team, I oversaw the development of multiple high-impact features, including pricing optimization algorithms, pricing adjustment tools, and professional photography upload tools, achieving an ROI of over 150% within a year. During this time, I also taught myself SQL and Python to perform data analysis, further enhancing decision-making and driving product improvements."
        techs={["Python", "SQL", "HTML & CSS"]}
      />
      <Button variant="link" className="self-start" asChild>
        <a href="src/assets/Alex-Jordan-CV.pdf" download="Alex-Jordan-CV.pdf">
          See all experience
        </a>
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
    <div className="grid grid-cols-3 gap-2 lg:grid-cols-4">
      <div className="text-nowrap">{date}</div>
      <div className="col-span-2 flex flex-col gap-4 lg:col-span-3">
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
    <>
      <p>
        During the past two years at Holistic AI, I've been deeply focused on
        tackling challenging problems and driving impactful solutions in
        fast-paced environments. This period has been both demanding and
        rewarding, leaving me with limited opportunities to explore side
        projects or experiment with new technologies outside of my professional
        work. However, I encourage you to take a look at some of my earlier
        projects listed below. While they may not reflect my most recent work,
        they offer a glimpse into my journey as a developer and how much I've
        grown over the years. Revisiting these projects is a reminder of the
        foundational skills and experiences that continue to shape my approach
        to software engineering today.
      </p>
      <ProjectDetail
        thumbnail="src/assets/maze.png"
        title="Maze Creator and Solver"
        description="A project I completed to learn more about data structures and algorithms. The app can generate two different kinds of mazes with two very different approaches. They are then solved using Djikstra's algorithms."
        link="https://agjordan.github.io/maze-generator-solver/"
      />
      <ProjectDetail
        thumbnail="src/assets/recipe.png"
        title="Save my Recipe"
        description="A simple app to save recipes from food52.com (my favourite cooking website at the time). The endpoint deployed on Heroku that processed the website and enabled saving the recipe no longer works since Heroku killed their free tier. I will one day fix this ;)"
        link="https://recipe-saver-f431f.web.app/login"
      />
      <ProjectDetail
        thumbnail="src/assets/portfolio.png"
        title="Old portfolio website (v1)"
        description="My first portfolio website, here for posteriority so you can see how much I have improved."
        link="https://agjordan.github.io/portfolio-website/"
      />
    </>
  );
}
type ProjectDetailProps = {
  thumbnail: string;
  title: string;
  description: string;
  link: string;
};

function ProjectDetail({
  thumbnail,
  title,
  description,
  link,
}: ProjectDetailProps) {
  return (
    <div className="grid grid-cols-3 gap-4 lg:grid-cols-4">
      <div className="col-span-3 flex flex-col gap-2 lg:col-span-3">
        <div className="flex items-center gap-5">
          <h3 className="text-lg font-semibold">{title}</h3>
          <a href={link} target="_blank" className="italic">
            <Link size={15} />
          </a>
        </div>
        <p>{description}</p>
      </div>
      <img
        src={thumbnail}
        alt="thumbnail"
        width={150}
        className="object-contain opacity-65"
      />
    </div>
  );
}
