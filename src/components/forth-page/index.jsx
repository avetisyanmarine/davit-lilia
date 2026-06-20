import { Container, Flexible } from "../../GlobalStyle";
import Church from "../../assets/image/church.jpg";
import Bant from "../../assets/image/bant.png";
import PHoto3 from "../../assets/image/photo3.jpg";
import SaveTheDate from "../../assets/image/savethedate.png";
import AttendanceGuests from "../AttendanceGuests";
import Photo4 from "../../assets/image/photo4.jpg";
import { ForthPagePart } from "./styled";
import Photo2 from "../../assets/image/photo2.png";

export const ForthPage = () => {
  return (
    <ForthPagePart>
      <Container>
        <div className="relative">
          <img src={PHoto3} alt="Photo 3" className="rounded-[15px]" />
          <img
            className="absolute top-1.5 left-1.5 w-[130px] invert brightness-0 contrast-200"
            src={SaveTheDate}
            alt="Save The Date"
          />
        </div>
      </Container>
      <div style={{ margin: "55px 0" }} className="text-center w-full">
        <h2 style={{ marginBottom: "20px" }}>Դետալներ</h2>
        <Flexible className="relative">
          <img src={Bant} className="mx-auto my-8 grayscale" />
          <Flexible
            style={{ padding: "0 25px" }}
            data-aos="fade-up"
            className="absolute w-full h-[322px] bg-white/45 text-2xl"
          >
            Ձեզ հետ բերեք ՍԵՐ, ժպիտներ ու անսահման դրական էմոցիաներ․ ինչպես նաև
            հարմարավետ կոշիկներ՝ պարելու համար։
            <br />
            <br />
            Հարսի պարի և հրավառության ընթացքում կխնդրենք ծնողներին ուշադիր լինել
            իրենց բալիկների նկատմամբ:
          </Flexible>
        </Flexible>
      </div>
      <div className="text-center w-full relative">
        <img
          src={Photo4}
          className="rounded-[15px]"
          style={{ marginBottom: "40px" }}
        />
        <h2 style={{ marginBottom: "20px", fontFamily: "cursive" }}>
          Dress Code
        </h2>
        <Flexible
          style={{ padding: "0 25px" }}
          data-aos="fade-up"
          className="w-full h-[272px] bg-white/45 text-2xl"
        >
          Խնդրում ենք հարսանիքի օրը <br /> ԽՈՒՍԱՓԵԼ <br /> սպիտակ հագուստ
          կրելուց
          <br />
          <br />
          Մնացած բոլոր երանգները սազում են Ձեզ առավել քան երբևէ
        </Flexible>
      </div>
      <Container>
        <img
          src={Photo2}
          className="rounded-[15px]"
          style={{ margin: "40px 0" }}
        />
        <h2
          className="text-center font-[ArmAllegrou]"
          style={{ margin: "20px 0" }}
        >
          Սիրով ՝ <br /> Դավիթ և Լիլիա
        </h2>
      </Container>
    </ForthPagePart>
  );
};
