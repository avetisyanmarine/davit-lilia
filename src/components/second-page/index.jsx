import { SecondPagePart, SecondPagePartContext } from "./styled";
import { Container } from "../../GlobalStyle";
import Photo1 from "../../assets/image/photo4.jpg";

export const SecondPage = () => {
  return (
    <SecondPagePart>
      <Container>
        <SecondPagePartContext>
          <div>
            <h4 data-aos="fade-left">
              Սիրով հրավիրում ենք Ձեզ մասնակցելու մեր կյանքի կարևոր և հիշարժան
              օրվան։
            </h4>
          </div>
        </SecondPagePartContext>
        <img
          data-aos="fade-right"
          src={Photo1}
          alt="Photo 1"
          className="rounded-[15px]"
        />
        <h2 className="text-[55px]! text-[#c11c84]!">24․08․2026</h2>
      </Container>
    </SecondPagePart>
  );
};
