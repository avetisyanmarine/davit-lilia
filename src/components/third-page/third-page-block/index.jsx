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
  line,
}) => {
  return (
    <>
      <ThirdPageBlockPart
        className={className || ""}
        style={{ marginTop: { uniqueMargin } ? `${uniqueMargin}px` : "" }}
      >
        <ThirdPageBlockPartSvg>
          <img loading="lazy" src={ImageSrc} />
        </ThirdPageBlockPartSvg>
        <ThirdPagePartContext data-aos="fade-left">
          <h3>{number}</h3>
          <h3>{bigText}</h3>
          <p>{smallText}</p>
        </ThirdPagePartContext>
      </ThirdPageBlockPart>
      {!line && (
        <img
          loading="lazy"
          src={Line}
          className="w-15"
          style={{ margin: "50px auto" }}
        />
      )}
    </>
  );
};
