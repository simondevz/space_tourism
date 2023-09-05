"use client";

import Content from "./content";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div className="flex flex-col gap-20 px-4 py-20 w-screen h-screen justify-around lg:flex-row lg:justify-around lg:content-end">
      <Content
        intro=" So, you want to travel to"
        header="Space"
        body="Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!"
        page="home"
      />

      <span className="self-stretch flex justify-center lg:self-end ">
        <button
          onClick={() => router.push("/destination")}
          className="rounded-full bg-white w-36 h-36 text-explore-btn font-bellefair lg:text-[2rem] lg:w-[17rem] lg:h-[17rem] hover:outline hover:outline-[3rem] lg:hover:outline-[5rem] hover:outline-white/20"
        >
          EXPLORE
        </button>
      </span>
    </div>
  );
}
