import { ThirdPagePartContext } from "../styled";
import { ThirdPageBlockPart, ThirdPageBlockPartSvg } from "./styled";
import Line from "../../../assets/image/line.png";

export const ThirdPageBlock = ({
  ImageSrc,
  number,
  bigText,
  smallText,
  uniqueMargin,
  className,
  direction,
  link,
}) => {
  return (
    <>
      <ThirdPageBlockPart
        className={className || ""}
        direction={direction}
        style={{ marginTop: { uniqueMargin } ? `${uniqueMargin}px` : "" }}
      >
        <ThirdPageBlockPartSvg>
          <img loading="lazy" src={ImageSrc} />
        </ThirdPageBlockPartSvg>
        <ThirdPagePartContext
          data-aos={direction === "right" ? "fade-right" : "fade-left"}
          direction={direction}
        >
          <h3>{number}</h3>
          <h3 className="mb-1" dangerouslySetInnerHTML={{ __html: bigText }} />
          <p className="text-[24px]">{smallText}</p>
          {link && (
            <>
              <a
                className="underline text-[24px]"
                href={link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Քարտեզ
              </a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-geo-alt inline-block ml-1" // bi-geo-alt իկոնան է (կաթիլ)
                viewBox="0 0 16 16"
              >
                <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.304 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
              </svg>
            </>
          )}
        </ThirdPagePartContext>
      </ThirdPageBlockPart>
    </>
  );
};
