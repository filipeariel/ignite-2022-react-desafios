import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from "phosphor-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import { FormContainer, OrderInputContainer, PaymentContainer } from "./styles";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SelectedCoffeesContext } from "../../../contexts/SelectedCoffeesContext";

const customerInformationFormValidationSchema = zod.object({
  cep: zod.string().min(1, "Informe o CEP"),
  number: zod.string().min(1, "Informe o número"),
  city: zod.string().min(1, "Informe a cidade"),
  complement: zod.string().optional(),
  street: zod.string().min(1, "Informe a rua"),
  neighborhood: zod.string().min(1, "Informe o bairro"),
  uf: zod.string().min(1, "Informe a UF"),
});

type CustomerInformationFormData = zod.infer<
  typeof customerInformationFormValidationSchema
>;

export function OrderInput() {
  const {
    includeFormData,
    paymentMethod,
    setPaymentMethod,
    setSelectesCoffees,
  } = useContext(SelectedCoffeesContext);
  const [isPaymentMethodEmpty, setisPaymentMethodEmpty] = useState(false);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CustomerInformationFormData>({
    resolver: zodResolver(customerInformationFormValidationSchema),
    defaultValues: {},
  });

  function handleCustomerInformation(data: CustomerInformationFormData) {
    if (paymentMethod === "") {
      setisPaymentMethodEmpty(true);
    } else {
      includeFormData(data);
      setSelectesCoffees([]);
      navigate("../success");
    }
  }

  function handlePaymentMethod(event: any) {
    const { name } = event.target;

    setPaymentMethod(name);
    setisPaymentMethodEmpty(false);
  }

  return (
    <OrderInputContainer>
      <span>Complete seu Pedido</span>
      <div>
        <div>
          <MapPinLine size={22} />
          <p>
            <strong>Endereço de Entrega</strong>
            <br />
            <span>Informe o endereço onde deseja receber seu pedido</span>
          </p>
        </div>
        <FormContainer
          id="customer-information-input"
          onSubmit={handleSubmit(handleCustomerInformation)}
          action=""
        >
          <div className="cep">
            <div className={errors.cep ? "required" : ""}>
              <input
                type="number"
                id="cep"
                placeholder="CEP"
                maxLength={8}
                {...register("cep")}
              />
            </div>
            {errors.cep && <span>{errors.cep.message}</span>}
          </div>

          <div className="street">
            <div className={errors.street ? "required" : ""}>
              <input
                type="text"
                id="street"
                placeholder="Rua"
                {...register("street")}
              />
            </div>
            {errors.street && <span>{errors.street.message}</span>}
          </div>
          <div className="number">
            <div className={errors.number ? "required" : ""}>
              <input
                type="number"
                id="number"
                placeholder="Número"
                {...register("number")}
              />
            </div>
            {errors.number && <span>{errors.number.message}</span>}
          </div>
          <div className="complement">
            <div>
              <input
                type="text"
                id="complement"
                placeholder="Complemento"
                {...register("complement")}
              />
            </div>
            <p>Opcional</p>
          </div>
          <div className="neighborhood">
            <div className={errors.neighborhood ? "required" : ""}>
              <input
                type="text"
                id="neighborhood"
                placeholder="Bairro"
                {...register("neighborhood")}
              />
            </div>
            {errors.neighborhood && <span>{errors.neighborhood.message}</span>}
          </div>
          <div className="city">
            <div className={errors.city ? "required" : ""}>
              <input
                type="text"
                id="city"
                placeholder="Cidade"
                {...register("city")}
              />
            </div>
            {errors.city && <span>{errors.city.message}</span>}
          </div>
          <div className="uf">
            <div className={errors.uf ? "required" : ""}>
              <input
                maxLength={2}
                type="text"
                id="uf"
                placeholder="UF"
                {...register("uf")}
              />
            </div>
            {errors.uf && <span>{errors.uf.message}</span>}
          </div>
        </FormContainer>
      </div>
      <PaymentContainer>
        <div>
          <CurrencyDollar size={22} />
          <p>
            <strong>Pagamento</strong>
            <br />
            <span>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </span>
          </p>
        </div>
        <div>
          <button
            className={`${
              paymentMethod === "Cartão de Crédito" ? "selected" : ""
            }`}
            name="Cartão de Crédito"
            type="button"
            onClick={handlePaymentMethod}
          >
            <CreditCard size={22} />
            Cartão de Crédito
          </button>
          <button
            className={`${
              paymentMethod === "Cartão de Débito" ? "selected" : ""
            }`}
            type="button"
            name="Cartão de Débito"
            onClick={handlePaymentMethod}
          >
            <Bank size={22} />
            Cartão de Débito
          </button>
          <button
            className={`${paymentMethod === "Dinheiro" ? "selected" : ""}`}
            type="submit"
            name="Dinheiro"
            onClick={handlePaymentMethod}
          >
            <Money size={22} />
            Dinheiro
          </button>
        </div>
        {isPaymentMethodEmpty && (
          <span className="missing-method">Escolha um método de pagamento</span>
        )}
      </PaymentContainer>
    </OrderInputContainer>
  );
}
