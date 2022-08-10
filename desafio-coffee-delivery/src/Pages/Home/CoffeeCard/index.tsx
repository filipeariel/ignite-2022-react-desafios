import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { CoffeeCardContainer, CoffeesContainer } from "./styles";
import { useContext, useState } from "react";
import { coffeeTypes } from "../../../data/coffees";
import { SelectedCoffeesContext } from "../../../contexts/SelectedCoffeesContext";

export function CoffeeCard() {
  const { ShopCoffee } = useContext(SelectedCoffeesContext);

  const [coffees, setCoffees] = useState(coffeeTypes);

  function handleIncreaseCoffeeQuantity(coffeeId: Number) {
    setCoffees((state) =>
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
    setCoffees(
      coffees.map((coffee) => {
        if (coffee.id === coffeeId && coffee.quantity > 1)
          return {
            ...coffee,
            quantity: coffee.quantity - 1,
          };
        return coffee;
      })
    );
  }

  return (
    <CoffeesContainer>
      {coffees.map((coffee) => {
        return (
          <div key={coffee.id}>
            <CoffeeCardContainer>
              <img src={coffee.img} alt={coffee.name} />
              <div>
                {coffee.tags.map((tag) => {
                  return (
                    <>
                      <span key={tag}>{tag}</span>
                    </>
                  );
                })}
              </div>
              <h2>{coffee.name}</h2>
              <p>{coffee.description}</p>
              <div>
                <span>
                  R${" "}
                  <strong>
                    {coffee.price.toLocaleString("pt-BR", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </strong>
                </span>
                <div>
                  <button
                    disabled={coffee.quantity === 1}
                    onClick={() => handleDecreaseCoffeeQuantity(coffee.id)}
                  >
                    <Minus size={14} weight="fill" />
                  </button>
                  <input type="number" readOnly value={coffee.quantity} />
                  <button
                    onClick={() => handleIncreaseCoffeeQuantity(coffee.id)}
                  >
                    <Plus size={14} weight="fill" />
                  </button>
                </div>
                <button onClick={() => ShopCoffee(coffee)}>
                  <ShoppingCart size={22} weight="fill" />
                </button>
              </div>
            </CoffeeCardContainer>
          </div>
        );
      })}
    </CoffeesContainer>
  );
}
