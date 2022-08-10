import { OrderConfirmation } from "./OrderConfirmation";
import { OrderInput } from "./OrderInput";
import { CheckoutContainer } from "./styles";

export function Checkout() {
  return (
    <CheckoutContainer>
      <OrderInput />
      <OrderConfirmation />
    </CheckoutContainer>
  );
}
