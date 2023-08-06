export default function AboutLine({
  num,
  text,
}: {
  num: string;
  text: string;
}) {
  return (
    <span className="flex font-barlowCondenced justify-center gap-x-2">
      <span className="font-bold text-white/25">{num}</span>
      <span>{text}</span>
    </span>
  );
}
