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
    home: "text-home-header  sm:max-lg:text-[9.375rem] lg:text-[9.375rem]",
    destination:
      "text-destination-header sm:max-lg:text-[5rem] lg:text-[6.25rem] lg:text-left lg:my-[-1rem] lg:mx-[-0.5rem] ",
    crew: "text-tech-header mt-2 mb-4 sm:max-lg:text-[2.5rem] sm:max-lg:my-[-2rem] lg:text-[3rem] lg:text-left",
    technology:
      "text-tech-header mt-2 mb-4 sm:max-lg:text-[2.5rem] sm:max-lg:my-[-2rem] sm:max-lg:text-4 lg:text-[3rem] lg:text-left",
  };

  const intro_style: any = {
    home: "text-home-intro text-intro-text font-barlowCondenced  sm:max-lg:text-[1.25rem] lg:text-[1.75rem]",
    destination: "hidden",
    crew: "text-crew-intro font-bellefair text-white/20 sm:max-lg:text-[1.5rem] lg:text-[2rem] lg:text-left",
    technology:
      "text-tech-intro font-barlowCondenced lg:text-left lg:text-[1rem]",
  };
  return (
    <div
      className={
        "flex flex-col" +
        (page === "home"
          ? " gap-4  sm:max-lg:gap-6  sm:max-lg:w-3/5  sm:max-lg:mx-auto lg:w-1/3 lg:gap-10 lg:self-end"
          : " sm:max-lg:w-3/5 sm:max-lg:mx-auto sm:max-lg:gap-8 lg:w-4/5") +
        (page === "technology" ? " lg:self-end lg:w-[45%] lg:mb-[5rem] " : "")
      }
    >
      <span
        className={
          "text-center text-base font-normal  sm:max-lg:pb-4 " +
          intro_style[page]
        }
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

      <span className="text-body-text text-center font-barlow font-content-body px-4 lg:text-[1.125rem] lg:text-left lg:mx-[-1rem] ">
        {body}
      </span>
    </div>
  );
}
