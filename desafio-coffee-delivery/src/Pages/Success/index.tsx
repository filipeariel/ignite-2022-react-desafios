import { CurrencyDollar, MapPin, Timer } from "phosphor-react";

import { SuccessContainer } from "./styles";

import illustrationImg from "../../assets/illustration.svg";
import { useContext } from "react";
import { SelectedCoffeesContext } from "../../contexts/SelectedCoffeesContext";

export function Success() {
  const { formData, paymentMethod } = useContext(SelectedCoffeesContext);

  return (
    <SuccessContainer>
      <h1>Uhu! Pedido confirmado</h1>
      <span>Agora é só aguardar que logo o café chegará até você</span>
      <section>
        <div>
          <div>
            <div>
              <MapPin size={16} weight="fill" />
            </div>
            <p>
              Entrega em{" "}
              <strong>
                {formData?.street}, {formData?.number}
              </strong>
              <br />
              {formData?.neighborhood} - {formData?.city}, {formData?.uf}
            </p>
          </div>
          <div>
            <div>
              <Timer size={16} weight="fill" />
            </div>
            <p>
              Previsão de entrega
              <br />
              <strong>20 min - 30 min</strong>
            </p>
          </div>
          <div>
            <div>
              <CurrencyDollar size={16} weight="regular" />
            </div>
            <p>
              Pagamento na entrega
              <br />
              <strong>{paymentMethod}</strong>
            </p>
          </div>
        </div>
        <img src={illustrationImg} alt="" />
      </section>
    </SuccessContainer>
  );
}
