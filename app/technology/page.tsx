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
  const images_landscape = [
    <Image
      key={0}
      className="w-full lg:hidden"
      src={img0_landscape}
      alt="picture of the technology"
    />,
    <Image
      key={1}
      className="w-full lg:hidden"
      src={img1_landscape}
      alt="picture of the technology"
    />,
    <Image
      key={2}
      className="w-full lg:hidden"
      src={img2_landscape}
      alt="picture of the technology"
    />,
  ];

  const images_potrait = [
    <Image
      key={0}
      className="w-[20rem] h-[20rem] hidden lg:flex order-last self-end"
      src={img0_portrait}
      alt="picture of the technology"
    />,
    <Image
      key={1}
      className="w-[20rem] h-[20rem] hidden lg:flex order-last self-end"
      src={img1_portrait}
      alt="picture of the technology"
    />,
    <Image
      key={2}
      className="w-[20rem] h-[20rem] hidden lg:flex order-last self-end"
      src={img2_portrait}
      alt="picture of the technology"
    />,
  ];

  const [current, setCurrent] = useState(0);
  const button_style: string =
    "rounded-full border font-bellefair w-10 h-10 border-white/50";
  const selected_style: string = " bg-white text-black";

  return (
    <div className="w-screen h-screen flex flex-col py-20 justify-around lg:flex-row lg:justify-between lg:gap-10">
      <AboutLine num="03" text={"SPACE LAUNCH 101".toUpperCase()} />

      {images_landscape[current]}
      {images_potrait[current]}

      <nav className="flex justify-center gap-x-4 lg:flex-col lg:justify-between lg:h-2/5 lg:self-end lg:mb-[5rem] lg:pl-[10rem]">
        <button
          className={
            button_style +
            (current === 0 ? selected_style : " hover:border-white ")
          }
          onClick={() => setCurrent(0)}
        >
          1
        </button>
        <button
          className={
            button_style +
            (current === 1 ? selected_style : " hover:border-white ")
          }
          onClick={() => setCurrent(1)}
        >
          2
        </button>
        <button
          className={
            button_style +
            (current === 2 ? selected_style : " hover:border-white ")
          }
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
