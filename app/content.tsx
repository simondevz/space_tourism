export default function Content({
  intro,
  header,
  body,
  page,
}: {
  intro: string | null;
  header: string;
  body: string;
  page: string; // has to be either home, destination or crew
}) {
  const header_style: any = {
    home: "text-home-header",
    destination: "text-destination-header",
    crew: "text-tech-header mt-2 mb-4",
    technology: "text-tech-header mt-2 mb-4",
  };

  const intro_style: any = {
    home: "text-home-intro text-intro-text font-barlowCondenced",
    destination: "hidden",
    crew: "text-crew-intro font-bellefair text-white/20",
    technology: "text-tech-intro font-barlowCondenced",
  };
  return (
    <div className={"flex flex-col" + (page === "home" ? " gap-4" : "")}>
      <span
        className={"text-center text-base font-normal " + intro_style[page]}
      >
        {intro?.toUpperCase()}
      </span>

      <span
        className={
          "font-bellefair font-normal text-center text-white " +
          header_style[page]
        }
      >
        {header.toUpperCase()}
      </span>

      <span className="text-body-text text-center font-barlow font-content-body px-4">
        {body}
      </span>
    </div>
  );
}
