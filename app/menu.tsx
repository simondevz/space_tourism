"use client";

import Image from "next/image";
import close from "../app/assets/shared/icon-close.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Menu({
  display,
  onClick,
}: {
  display: boolean;
  onClick: any;
}) {
  const path: string = usePathname();
  const active_style = "sm:max-lg:border-b-2 lg:border-b-2 ";
  const hover_style =
    "sm:max-lg:hover:border-b-2 lg:hover:border-b-2 lg:hover:border-white/50 sm:max-lg:hover:border-white/50 ";

  return (
    <div
      className={
        "absolute w-3/4  sm:max-lg:w-3/5 lg:w-3/5 flex-col right-0 bg-white/4 h-full sm:max-lg:h-fit lg:h-fit gap-6 p-8 sm:max-lg:py-0 lg:my-10 lg:py-0 backdrop-blur-2xl  sm:max-lg:flex lg:flex" +
        (display ? " flex" : " hidden")
      }
    >
      <div className="flex flex-row-reverse  sm:max-lg:hidden lg:hidden">
        <Image onClick={onClick} src={close} alt="Close menu" />
      </div>

      <div className="flex gap-8 flex-col sm:max-lg:justify-around sm:max-lg:flex-row  sm:max-lg:gap-x-4 lg:justify-around lg:flex-row  lg:gap-x-4">
        <Link
          className={
            "sm:max-lg:py-8 lg:py-6 " +
            (path === "/" ? active_style : hover_style)
          }
          onClick={onClick}
          href={"/"}
        >
          <span className="font-bold  sm:max-lg:hidden font-barlowCondenced">
            00
          </span>{" "}
          <span className=" font-barlowCondenced">HOME</span>
        </Link>
        <Link
          className={
            "sm:max-lg:py-8 lg:py-6 " +
            (path === "/destination" ? active_style : hover_style)
          }
          onClick={onClick}
          href={"/destination"}
        >
          <span className="font-bold  sm:max-lg:hidden font-barlowCondenced">
            01
          </span>{" "}
          <span className=" font-barlowCondenced">DESTINATION</span>
        </Link>
        <Link
          className={
            "sm:max-lg:py-8 lg:py-6 " +
            (path === "/crew" ? active_style : hover_style)
          }
          onClick={onClick}
          href={"/crew"}
        >
          <span className="font-bold  sm:max-lg:hidden font-barlowCondenced">
            02
          </span>{" "}
          <span className=" font-barlowCondenced">CREW</span>
        </Link>
        <Link
          className={
            "sm:max-lg:py-8 lg:py-6  " +
            (path === "/technology" ? active_style : hover_style)
          }
          onClick={onClick}
          href={"/technology"}
        >
          <span className="font-bold  sm:max-lg:hidden font-barlowCondenced">
            03
          </span>{" "}
          <span className=" font-barlowCondenced">TECHNOLOGY</span>
        </Link>
      </div>
    </div>
  );
}
