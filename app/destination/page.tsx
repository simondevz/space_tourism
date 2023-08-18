"use client";

import Image from "next/image";
import AboutLine from "../aboutline";
import data from "../data.json";
import moonImg from "../assets/destination/image-moon.png";
import marsImg from "../assets/destination/image-mars.png";
import europaImg from "../assets/destination/image-europa.png";
import titanImg from "../assets/destination/image-titan.png";
import Content from "../content";

import { useState } from "react";

export default function Destination() {
  const images = [moonImg, marsImg, europaImg, titanImg];
  const [current, setCurrent] = useState(0);

  const button_style: string =
    "font-destination-nav font-barlowCondenced sm:max-lg:text-[1rem]s";
  const selected_style: string = " text-white border-b-2 border-white";

  const destination_text: string =
    "text-destination-text text-[#D0D6F9] font-barlowCondenced text-center uppercase ";
  const destination_attr: string =
    "text-destination-attr font-bellefair text-white text-center uppercase";

  return (
    <div className="w-screen h-screen flex flex-col py-20 justify-around lg:flex-row lg:justify-between">
      <AboutLine num="01" text="pick your destination" />
      <Image
        src={images[current]}
        className="w-52 h-52 mx-auto sm:max-lg:w-[20rem] sm:max-lg:h-[20rem] lg:my-auto lg:w-[27rem] lg:h-[27rem]"
        alt={`picture of ${data.destinations[current].name}`}
      />

      <div className="flex flex-col lg:justify-start lg:h-fit lg:my-auto lg:pt-12 lg:w-2/5 lg:gap-4 gap-8">
        <nav className="flex justify-center gap-x-8 lg:text-[1rem] lg:self-start">
          <button
            className={
              button_style +
              (current === 0
                ? selected_style
                : "text-[#D0D6F9] hover:border-b-2 hover:border-white/50")
            }
            onClick={() => setCurrent(0)}
          >
            MOON
          </button>
          <button
            className={
              button_style +
              (current === 1
                ? selected_style
                : "text-[#D0D6F9] hover:border-b-2 hover:border-white/50")
            }
            onClick={() => setCurrent(1)}
          >
            MARS
          </button>
          <button
            className={
              button_style +
              (current === 2
                ? selected_style
                : "text-[#D0D6F9] hover:border-b-2 hover:border-white/50")
            }
            onClick={() => setCurrent(2)}
          >
            EUROPA
          </button>
          <button
            className={
              button_style +
              (current === 3
                ? selected_style
                : "text-[#D0D6F9] hover:border-b-2 hover:border-white/50")
            }
            onClick={() => setCurrent(3)}
          >
            TITAN
          </button>
        </nav>

        <Content
          intro={null}
          header={data.destinations[current].name}
          body={data.destinations[current].description}
          page="destination"
        />

        <span className="h-px flex mx-auto justify-self-center w-5/6 bg-[#383B4B] lg:w-4/5 lg:self-start lg:mx-0 lg:my-[1rem] "></span>
        <div className="flex flex-col gap-8 sm:max-lg:flex-row sm:max-lg:justify-center sm:max-lg:gap-20 lg:flex-row lg:justify-start lg:gap-20">
          <div className="flex flex-col">
            <span className={destination_text}>AVG. DISTANCE</span>
            <span className={destination_attr}>
              {data.destinations[current].distance}
            </span>
          </div>
          <div className="flex flex-col">
            <span className={destination_text}>EST. TRAVEL TIME</span>
            <span className={destination_attr}>
              {data.destinations[current].travel.toUpperCase()}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
