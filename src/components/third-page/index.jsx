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
import { ThirdPageBlock } from "./third-page-block";
export const ThirdPage = () => {
  return (
    <ThirdPagePart>
      <Container>
        <h2>Ծրագիր</h2>
        <ThirdPagePartContext>
          <ThirdPageBlock
            className="uniqueone"
            ImageSrc={BrideRoom}
            number={"11:00"}
            bigText="ՀԱՐՍԻ ՏՈՒՆ"
          />
          <ThirdPageBlock
            ImageSrc={Bride}
            uniqueMargin={10}
            number={"13:00"}
            bigText="ՓԵՍԱՅԻ ՏՈՒՆ"
            />
          <ThirdPageBlock
            uniqueMargin={10}
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
