export default function AboutLine({
  num,
  text,
}: {
  num: string;
  text: string;
}) {
  return (
    <span className="flex font-barlowCondenced justify-center gap-x-2  sm:max-lg:justify-start order-first sm:max-lg:text-[1.25rem]  sm:max-lg:px-8 lg:text-[1.75rem] lg:px-[10rem] lg:absolute lg:py-[5rem] ">
      <span className="font-bold text-white/25">{num}</span>
      <span>{text}</span>
    </span>
  );
}
