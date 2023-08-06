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

  const button_style: string = "font-destination-nav font-barlowCondenced ";
  const selected_style: string = " text-white border-b-2 border-white";

  const destination_text: string =
    "text-destination-text text-[#D0D6F9] font-barlowCondenced text-center uppercase";
  const destination_attr: string =
    "text-destination-attr font-bellefair text-white text-center uppercase";

  return (
    <div className="w-screen h-screen flex flex-col py-20 justify-around">
      <AboutLine num="01" text="pick your destination" />
      <Image
        src={images[current]}
        className="w-52 h-52 mx-auto"
        alt={`picture of ${data.destinations[current].name}`}
      />

      <nav className="flex justify-center gap-x-4">
        <button
          className={
            button_style + (current === 0 ? selected_style : "text-[#D0D6F9]")
          }
          onClick={() => setCurrent(0)}
        >
          MOON
        </button>
        <button
          className={
            button_style + (current === 1 ? selected_style : "text-[#D0D6F9]")
          }
          onClick={() => setCurrent(1)}
        >
          MARS
        </button>
        <button
          className={
            button_style + (current === 2 ? selected_style : "text-[#D0D6F9]")
          }
          onClick={() => setCurrent(2)}
        >
          EUROPA
        </button>
        <button
          className={
            button_style + (current === 3 ? selected_style : "text-[#D0D6F9]")
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

      <span className="h-px flex  mx-auto justify-self-center w-5/6 bg-[#383B4B]"></span>
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
  );
}
