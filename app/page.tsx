import Content from "./content";

export default function Home() {
  return (
    <div className="flex flex-col gap-20 px-4 py-20 w-screen h-screen justify-around">
      <Content
        intro=" So, you want to travel to"
        header="Space"
        body="Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!"
        page="home"
      />

      <span className="self-stretch flex justify-center">
        <button className="rounded-full bg-white w-36 h-36 text-explore-btn font-bellefair">
          EXPLORE
        </button>
      </span>
    </div>
  );
}
