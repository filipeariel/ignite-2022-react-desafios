import { Minus, Plus, Trash } from "phosphor-react";
import { useContext } from "react";
import { SelectedCoffeesContext } from "../../../contexts/SelectedCoffeesContext";
import { CoffeeContainer, OrderConfirmationContainer, Total } from "./styles";

export function OrderConfirmation() {
  const { selectedCoffees, setSelectesCoffees } = useContext(
    SelectedCoffeesContext
  );

  function handleIncreaseCoffeeQuantity(coffeeId: Number) {
    setSelectesCoffees((state) =>
      state.map((coffee) => {
        if (coffee.id === coffeeId)
          return {
            ...coffee,
            quantity: coffee.quantity + 1,
          };
        return coffee;
      })
    );
  }

  function handleDecreaseCoffeeQuantity(coffeeId: Number) {
    setSelectesCoffees(
      selectedCoffees!.map((coffee) => {
        if (coffee.id === coffeeId && coffee.quantity > 1)
          return {
            ...coffee,
            quantity: coffee.quantity - 1,
          };
        return coffee;
      })
    );
  }

  function handleRemoveCoffee(coffeeId: Number) {
    const updatedCart = [...selectedCoffees!];
    const productIndex = updatedCart.findIndex(
      (product) => product.id === coffeeId
    );

    updatedCart.splice(productIndex, 1);
    setSelectesCoffees(updatedCart);
  }

  const subTotal = selectedCoffees?.reduce((sumTotal, coffee) => {
    return sumTotal + coffee.price * coffee.quantity;
  }, 0);

  return (
    <OrderConfirmationContainer>
      <h1>Cafés selecionados</h1>
      <div>
        {selectedCoffees?.map((coffee) => {
          return (
            <CoffeeContainer key={coffee.id}>
              <img src={coffee.img} alt="" />
              <div>
                <span>{coffee.name}</span>
                <div>
                  <button>
                    <Minus
                      size={14}
                      weight="fill"
                      onClick={() => handleDecreaseCoffeeQuantity(coffee.id)}
                    />
                  </button>
                  <input type="number" readOnly value={coffee.quantity} />
                  <button>
                    <Plus
                      size={14}
                      weight="fill"
                      onClick={() => handleIncreaseCoffeeQuantity(coffee.id)}
                    />
                  </button>
                </div>
                <button onClick={() => handleRemoveCoffee(coffee.id)}>
                  <Trash size={16} weight="regular" />
                  REMOVER
                </button>
              </div>
              <strong>
                R${" "}
                {(coffee.price * coffee.quantity).toLocaleString("pt-BR", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </strong>
            </CoffeeContainer>
          );
        })}
        <Total>
          <div>
            <span>Total de Itens</span>{" "}
            <span>
              R${" "}
              {subTotal?.toLocaleString("pt-BR", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </span>
          </div>
          <div>
            <span>Entrega</span> <span>R$ 3,50</span>
          </div>
          <div>
            <strong>Total</strong>{" "}
            <strong>
              R${" "}
              {(subTotal! + 3.5).toLocaleString("pt-BR", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </strong>
          </div>
          <button
            type="submit"
            form="customer-information-input"
            disabled={selectedCoffees?.length === 0}
          >
            CONFIRMAR PEDIDO
          </button>
        </Total>
      </div>
    </OrderConfirmationContainer>
  );
}
