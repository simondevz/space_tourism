"use client";
import { useSelectedLayoutSegment } from "next/navigation";

export default function Background({
  children,
}: {
  children: React.ReactNode;
}) {
  const segment: string | null = useSelectedLayoutSegment();
  let bgImage: string = segment || "home";
  const style: any = {
    home: "max-sm:bg-homeMobile sm:max-lg:bg-homeTablet lg:bg-homeDesktop",
    crew: "max-sm:bg-crewMobile sm:max-lg:bg-crewTablet lg:bg-crewDesktop",
    technology:
      "max-sm:bg-technologyMobile sm:max-lg:bg-technologyTablet lg:bg-technologyDesktop",
    destination:
      "max-sm:bg-destinationMobile sm:max-lg:bg-destinationTablet lg:bg-destinationDesktop",
  };

  return (
    <div
      className={
        "bg-cover bg-no-repeat h-full w-full flex flex-col " + style[bgImage]
      }
    >
      {children}
    </div>
  );
}
