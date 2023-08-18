"use client";

import Image from "next/image";
import AboutLine from "../aboutline";
import data from "../data.json";
import img0 from "../assets/crew/image-douglas-hurley.png";
import img1 from "../assets/crew/image-mark-shuttleworth.png";
import img2 from "../assets/crew/image-victor-glover.png";
import img3 from "../assets/crew/image-anousheh-ansari.png";
import Content from "../content";

import { useState } from "react";

export default function Destination() {
  const images = [img0, img1, img2, img3];
  const [current, setCurrent] = useState(0);

  const button_style: string = "rounded-full w-2 h-2 ";
  const selected_style: string = " bg-white";

  return (
    <div className="w-screen h-screen flex flex-col py-20 sm:max-lg:pb-0 justify-around sm:max-lg:justify-between lg:flex-row lg:justify-between ">
      <AboutLine num="02" text={"Meet your crew".toUpperCase()} />

      <span className="flex flex-col justify-center w-screen sm:max-lg:order-last lg:order-last lg:self-end lg:my-[-5rem]">
        <Image
          className="w-44 mx-auto h-52 sm:max-lg:w-[20rem] sm:max-lg:h-[25rem] lg:h-[30rem] lg:w-[25rem] "
          src={images[current]}
          alt={`Picture of  a crew member named ${data.crew[current].name}`}
        />
        <span className="h-px flex  mx-auto justify-self-center w-4/5 bg-[#383B4B] lg:hidden"></span>
      </span>

      <div className="flex flex-col lg:px-[10rem] lg:justify-end lg:gap-8 sm:max-lg:gap-12">
        <nav className="flex mb-4 justify-center sm:max-lg:order-10 gap-x-4 lg:order-last lg:justify-start lg:mt-10">
          <button
            className={
              button_style + (current === 0 ? selected_style : "bg-slate-600")
            }
            onClick={() => setCurrent(0)}
          />
          <button
            className={
              button_style + (current === 1 ? selected_style : "bg-slate-600")
            }
            onClick={() => setCurrent(1)}
          />
          <button
            className={
              button_style + (current === 2 ? selected_style : "bg-slate-600")
            }
            onClick={() => setCurrent(2)}
          />
          <button
            className={
              button_style + (current === 3 ? selected_style : "bg-slate-600")
            }
            onClick={() => setCurrent(3)}
          />
        </nav>

        <Content
          intro={data.crew[current].role}
          header={data.crew[current].name}
          body={data.crew[current].bio}
          page="crew"
        />
      </div>
    </div>
  );
}
