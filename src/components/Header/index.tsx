import { CartContainer, HeaderContainer, LocationAndCartContainer, LocationContainer } from "./styles";

import logoCoffeDelivery from './../../assets/logo-coffee-delivery.svg';
import { MapPin, ShoppingCart } from "@phosphor-icons/react";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ShoppingContext } from "../../context/ShoppingContext";

export function Header() {
  const { shoppingCart } = useContext(ShoppingContext);
  const amountItemsInCart = shoppingCart.items.reduce((acc, item) => acc + item.amount, 0);

  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={logoCoffeDelivery} />
      </NavLink>

      <LocationAndCartContainer>
        <LocationContainer>
          <MapPin size={20} weight="fill" />
          <span>Cuiabá, MT</span>
        </LocationContainer>

        <CartContainer to="/checkout">
          <ShoppingCart size={20} weight="fill" />

          { amountItemsInCart ? (
            <span>{ amountItemsInCart }</span>
          ) : (
            null
          )}
        </CartContainer>
      </LocationAndCartContainer>
    </HeaderContainer>
  )
}