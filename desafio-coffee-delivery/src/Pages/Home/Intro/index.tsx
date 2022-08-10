import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";

import coffeeDeliveryIntro from "../../../assets/coffee-delivery-intro.svg";
import { IntroContainer } from "./styles";

export function Intro() {
  return (
    <IntroContainer>
      <div>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <p>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </p>
        <div>
          <div>
            <div>
              <ShoppingCart size={16} weight="fill" />
            </div>
            <span> Compra simples e segura</span>
          </div>
          <div>
            <div>
              <Package size={16} weight="fill" />
            </div>
            <span> Embalagem mantém o café intacto</span>
          </div>
          <div>
            <div>
              <Timer size={16} weight="fill" />
            </div>
            <span> Entrega rápida e rastreada</span>
          </div>
          <div>
            <div>
              <Coffee size={16} weight="fill" />
            </div>
            <span> O café chega fresquinho até você</span>
          </div>
        </div>
      </div>
      <img src={coffeeDeliveryIntro} alt="" />
    </IntroContainer>
  );
}
