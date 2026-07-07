import {
  ThirdPagePart,
  ThirdPagePartCalendar,
  ThirdPagePartContext,
  ThirdPagePartMini,
} from "./styled";
import { Container } from "../../GlobalStyle";
import SvgChurch from "../../assets/vectors/church.png";
import Church from "../../assets/image/church.jpg";
import Restaurant from "../../assets/image/restoran.jpg";
import BrideRoom from "../../assets/vectors/brideroom.png";
import Bride from "../../assets/vectors/bride.png";
import SvgCouple from "../../assets/vectors/cup.png";
import { ForthPagePartContext, ForthPagePart } from "../forth-page/styled";
import { ForthPageBlock } from "../forth-page/fortg-page-block";
import Photo5 from "../../assets/image/photo5.jpg";
import Photo1 from "../../assets/image/photo1.jpg";
import { ThirdPageBlock } from "./third-page-block";
import { SvgWaveLine } from "./svg-wave/index";
export const ThirdPage = () => {
  return (
    <ThirdPagePart>
      <Container>
        <h2>Ծրագիր</h2>
        <ThirdPagePartContext>
          <ThirdPageBlock
            className="uniqueone"
            ImageSrc={BrideRoom}
            number={"10:00"}
            bigText="ՓԵՍԱՅԻ ՏՈՒՆ"
            direction="left"
            link="https://www.google.com/maps?q=40.2317976,44.4497529&entry=gps&shh=CAE&lucs=,94297699,94231188,94280568,47071704,94218641,94282134,100813464,94286869,100813014&g_ep=CAISEjI2LjI0LjEuOTI4MjM2NTIyMBgAIIgnKlMsOTQyOTc2OTksOTQyMzExODgsOTQyODA1NjgsNDcwNzE3MDQsOTQyMTg2NDEsOTQyODIxMzQsMTAwODEzNDY0LDk0Mjg2ODY5LDEwMDgxMzAxNEICQU0%3D&skid=43628acd-bc8d-4b4c-8ab3-1972ba81ae3f&g_st=iw"
          />
          <ThirdPageBlock
            ImageSrc={Bride}
            uniqueMargin={10}
            number={"11:00"}
            bigText="ՀԱՐՍԻ ՏՈՒՆ"
            direction="right"
            link="https://www.google.com/maps?q=40.0862200,44.4789980&entry=gps&shhz=CAE&lucs=,94297699,94231188,94280568,47071704,94218641,94282134,100813464,94286869,100813014&g_ep=CAISEjI2LjI0LjEuOTI4MjM2NTIyMBgAIIgnKlMsOTQyOTc2OTksOTQyMzExODgsOTQyODA1NjgsNDcwNzE3MDQsOTQyMTg2NDEsOTQyODIxMzQsMTAwODEzNDY0LDk0Mjg2ODY5LDEwMDgxMzAxNEICQU0%3D&skid=cadd9e14-b7d0-4e59-9105-0a54258a9e46&g_st=ii"
          />
          <SvgWaveLine />
          <ThirdPageBlock
            uniqueMargin={10}
            ImageSrc={SvgChurch}
            number={"14:00"}
            bigText="ՊՍԱԿԱԴՐՈՒԹՅՈՒՆ"
            direction="left"
            smallText="Սաղմոսավանք եկեղեցի"
          />
          <ThirdPageBlock
            className="uniqueone"
            ImageSrc={BrideRoom}
            number={"16:00"}
            bigText="ՓԵՍԱՅԻ ՏՈՒՆ"
            direction="right"
            link="https://www.google.com/maps?q=40.2317976,44.4497529&entry=gps&shh=CAE&lucs=,94297699,94231188,94280568,47071704,94218641,94282134,100813464,94286869,100813014&g_ep=CAISEjI2LjI0LjEuOTI4MjM2NTIyMBgAIIgnKlMsOTQyOTc2OTksOTQyMzExODgsOTQyODA1NjgsNDcwNzE3MDQsOTQyMTg2NDEsOTQyODIxMzQsMTAwODEzNDY0LDk0Mjg2ODY5LDEwMDgxMzAxNEICQU0%3D&skid=43628acd-bc8d-4b4c-8ab3-1972ba81ae3f&g_st=iw"
          />
          <ThirdPageBlock
            className="secondBlock"
            ImageSrc={SvgCouple}
            number={"17:30"}
            direction="left"
            bigText="ՀԱՐՍԱՆՅԱՑ <br /> ՀԱՆԴԻՍՈՒԹՅՈՒՆ"
            smallText="Աշտարակ Հոլ ռեստորան"
          />
        </ThirdPagePartContext>
        <ForthPagePartContext>
          <ForthPageBlock
            ImageSrc={Church}
            bigText={"Սաղմոսավանք եկեղեցի"}
            mapSrc={"https://maps.app.goo.gl/j6HXoZW7etJwYDwm6"}
          />
          <img
            src={Photo5}
            className="rounded-[15px]"
            style={{ marginTop: "50px" }}
          />
          <ForthPageBlock
            ImageSrc={Restaurant}
            bigText={"Աշտարակ Հոլ ռեստորան"}
            mapSrc={"https://yandex.com/maps/org/100881804174?"}
          />
        </ForthPagePartContext>
      </Container>
      <img
        src={Photo1}
        className="rounded-[15px] grayscale"
        style={{ margin: "50px auto" }}
      />
      <Container>
        <ThirdPagePartMini>
          <h3 className="dzev">Սիրով սպասում ենք</h3>
          <hr />
          <h3 className="dzev">Պահպանիր Օրը</h3>
          <h3>Օգոստոս</h3>
        </ThirdPagePartMini>
        <ThirdPagePartCalendar>
          {[...Array(45)].map((_, i) =>
            i > 4 && i <= 35 ? (
              <div className={i - 4 == 24 ? "special" : ""}>{i - 4}</div>
            ) : (
              <div></div>
            ),
          )}
        </ThirdPagePartCalendar>
      </Container>
    </ThirdPagePart>
  );
};
