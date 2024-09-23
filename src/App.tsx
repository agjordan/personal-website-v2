import { Layout } from "@/components/layout/layout";
import { Separator } from "@/components/ui/separator";

export default function App() {
  return (
    <Layout>
      <div className="flex flex-1 flex-col md:flex-row">
        <div className="flex flex-1 flex-col gap-5 p-10">
          <p className="flex items-center align-middle text-lg">
            alex <sup>j</sup>
          </p>
          <Separator className="flex" />
          <div className="text-5xl font-extrabold leading-none md:text-7xl lg:text-9xl xl:text-[180px]">
            <h1>Alex</h1>
            <h1>Jordan</h1>
          </div>
          <p>
            I create useable and accessible web experiences from ideas,
            wireframes, or pixel-perfect designs
          </p>
          <div className="hidden flex-1 flex-col justify-center gap-5 md:flex">
            <p className="underline">About</p>
            <p className="underline">Experience</p>
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
      <p id="about" className="md:mt-96">
        I'm a London-based software engineer with a background in product
        management and a passion for creating and delivering user-centric
        products. I feel most confident coding in TypeScript but I also have
        experience in Python and Java. I have dabbled in C, Lua, and Ruby in
        side projects. I'm motivated by big goals and clear missions. I do my
        best work in fast-paced environments where I can take on interesting
        challenges, make a quick impact, and keep growing.
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
        laboriosam maxime eum molestiae ipsum repellat.
      </p>
    </div>
  );
}
