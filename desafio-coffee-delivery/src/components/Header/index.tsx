import { NavLink } from "react-router-dom";
import { MapPin, ShoppingCart } from "phosphor-react";

import { HeaderContainer } from "../Header/styles";
import logoCoffeeDelivery from "../../assets/logo-coffee-delivery.svg";
import { useContext } from "react";
import { SelectedCoffeesContext } from "../../contexts/SelectedCoffeesContext";

export function Header() {
  const { selectedCoffees } = useContext(SelectedCoffeesContext);

  return (
    <HeaderContainer>
      <nav>
        <NavLink to="/" title="Ínicio">
          <img src={logoCoffeeDelivery} alt="" />
        </NavLink>
        <div>
          <div>
            <MapPin size={30} weight="fill" />
            Peruíbe / SP
          </div>
          <NavLink to="/checkout" title="Carrinho">
            <ShoppingCart size={30} weight="fill" />
            <span>{selectedCoffees ? selectedCoffees.length : "0"}</span>
          </NavLink>
        </div>
      </nav>
    </HeaderContainer>
  );
}
