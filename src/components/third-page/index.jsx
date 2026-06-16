import {
  ThirdPagePart,
  ThirdPagePartCalendar,
  ThirdPagePartContext,
  ThirdPagePartMini,
} from "./styled";
import { Container } from "../../GlobalStyle";
import SvgChurch from "../../assets/vectors/church.png";
import Church from "../../assets/image/church.png";
import Restaurant from "../../assets/image/restoran.jpg";
import Photo2 from "../../assets/image/photo2.jpg";
import SvgRing from "../../assets/vectors/ring.png";
import SvgCouple from "../../assets/vectors/cup.png";
import { ForthPagePartContext, ForthPagePart } from "../forth-page/styled";
import { ForthPageBlock } from "../forth-page/fortg-page-block";
import { ThirdPageBlock } from "./third-page-block";
import PhotoGroup1 from "../../assets/image/groupphoto1.jpg";
import PhotoGroup2 from "../../assets/image/groupphoto2.jpg";
import PhotoGroup3 from "../../assets/image/groupphoto3.jpg";
import SerLiqySer from "../../assets/image/serliqyser.png";
export const ThirdPage = () => {
  return (
    <ThirdPagePart>
      <Container>
        <h2>Ծրագիր</h2>
        <ThirdPagePartContext>
          <ThirdPageBlock
            className="uniqueone"
            ImageSrc={SvgRing}
            number={"11:00"}
            bigText="ՀԱՐՍԻ ՏՈՒՆ"
          />
          <ThirdPageBlock
            ImageSrc={SvgRing}
            uniqueMargin={150}
            number={"13:00"}
            bigText="ՓԵՍԱՅԻ ՏՈՒՆ"
            />
          <ThirdPageBlock
            uniqueMargin={150}
            ImageSrc={SvgChurch}
            number={"15:00"}
            bigText="ՊՍԱԿԱԴՐՈՒԹՅՈՒՆ"
            smallText="Սաղմոսավանք եկեղեցի"
          />
          <ThirdPageBlock
            className="secondBlock"
            line={true}
            ImageSrc={SvgCouple}
            number={"17:30"}
            bigText="ՀԱՐՍԱՆՅԱՑ ՀԱՆԴԻՍՈՒԹՅՈՒՆ"
            smallText="Աշտարակ Հոլ ռեստորան"
          />
        </ThirdPagePartContext>
        <div
          className="flex h-[100vh] gap-[20px] justify-around"
          style={{ marginTop: "70px" }}
        >
            <img src={SerLiqySer} className="h-[100vh] w-[40%]" />
          <div className="flex flex-col gap-2 w-[60%]">
            <img
              src={PhotoGroup1}
              alt=""
              className="h-1/3 object-cover rounded-[10px]"
            />
            <img
              src={PhotoGroup2}
              alt=""
              className="h-1/3 object-cover rounded-[10px]"
            />
            <img
              src={PhotoGroup3}
              alt=""
              className="h-1/3 object-cover rounded-[10px]"
            />
          </div>
        </div>
        <ForthPagePartContext>
          <ForthPageBlock
            ImageSrc={Church}
            bigText={"Սաղմոսավանք եկեղեցի"}
            mapSrc={"https://maps.app.goo.gl/j6HXoZW7etJwYDwm6"}
          />
          <ForthPageBlock
            ImageSrc={Restaurant}
            bigText={"Աշտարակ Հոլ ռեստորան"}
            mapSrc={"https://yandex.com/maps/org/100881804174?"}
          />
        </ForthPagePartContext>
      </Container>
      <img src={Photo2} className="rounded-[15px]" alt="" />
      <Container>
        <ThirdPagePartMini>
          <h3 className="dzev">Սիրով սպասում ենք</h3>
          <hr />
          <h3 className="dzev">Պահպանիր Օրը</h3>
          <h3>Հուլիս</h3>
        </ThirdPagePartMini>
        <ThirdPagePartCalendar>
          {[...Array(35)].map((_, i) =>
            i > 1 && i <= 32 ? (
              <div className={i - 1 == 16 ? "special" : ""}>{i - 1}</div>
            ) : (
              <div></div>
            ),
          )}
        </ThirdPagePartCalendar>
      </Container>
    </ThirdPagePart>
  );
};
