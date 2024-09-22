import { Layout } from "@/components/layout/layout";
import { Separator } from "@/components/ui/separator";

export default function App() {
  return (
    <Layout>
      <div className="flex flex-col flex-1 gap-5 p-10 ">
        <p className="flex items-center text-lg align-middle">
          alex <sup>j</sup>
        </p>
        <Separator className="flex" />
        <div className="py-10">
          <h1 className="text-[180px] font-extrabold leading-none animate-appear">
            Alex
          </h1>
          <h1 className="text-[180px] font-extrabold leading-none animate-appear">
            Jordan
          </h1>
        </div>
        <p className="animate-appear">
          I create useable and accessible web experiences from ideas,
          wireframes, or pixel-perfect designs
        </p>
      </div>
    </Layout>
  );
}
