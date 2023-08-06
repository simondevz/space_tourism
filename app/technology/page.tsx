"use client";

import Image from "next/image";
import AboutLine from "../aboutline";
import data from "../data.json";
import img0_portrait from "../assets/technology/image-launch-vehicle-portrait.jpg";
import img0_landscape from "../assets/technology/image-launch-vehicle-landscape.jpg";
import img1_portrait from "../assets/technology/image-spaceport-portrait.jpg";
import img1_landscape from "../assets/technology/image-spaceport-landscape.jpg";
import img2_portrait from "../assets/technology/image-space-capsule-portrait.jpg";
import img2_landscape from "../assets/technology/image-space-capsule-landscape.jpg";
import Content from "../content";

import { useState } from "react";

export default function Destination() {
  const images_potrait = [img0_portrait, img1_portrait, img2_portrait];
  const images_landscape = [img0_landscape, img1_landscape, img2_landscape];

  const [current, setCurrent] = useState(0);
  const button_style: string = "rounded-full border font-bellefair w-10 h-10";
  const selected_style: string = " bg-white text-black";

  return (
    <div className="w-screen h-screen flex flex-col py-20 justify-around">
      <AboutLine num="03" text={"SPACE LAUNCH 101".toUpperCase()} />
      <Image src={images_landscape[current]} alt="picture of a moon" />

      <nav className="flex justify-center gap-x-4">
        <button
          className={button_style + (current === 0 ? selected_style : "")}
          onClick={() => setCurrent(0)}
        >
          1
        </button>
        <button
          className={button_style + (current === 1 ? selected_style : "")}
          onClick={() => setCurrent(1)}
        >
          2
        </button>
        <button
          className={button_style + (current === 2 ? selected_style : "")}
          onClick={() => setCurrent(2)}
        >
          3
        </button>
      </nav>

      <Content
        intro="THE TERMINOLOGY…"
        header={data.technology[current].name}
        body={data.technology[current].description}
        page="technology"
      />
    </div>
  );
}
