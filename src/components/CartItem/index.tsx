import { Trash } from "@phosphor-icons/react";
import { ItemAction, ItemContainer, ItemDetail, ItemForm, ItemName, ItemPrice, RemoveItemButton } from "./styles";
import { ShoppingCartItem, ShoppingContext } from "../../context/ShoppingContext";
import { InputCounter } from "../InputCounter";
import { useContext } from "react";

const Real = new Intl.NumberFormat('pt-BR', { minimumFractionDigits: 2 });

interface CartItemProps {
  item: ShoppingCartItem;
}

export function CartItem({ item }: CartItemProps) {
  const { removeProduct, addItemAtCart, removeItemAtCart } = useContext(ShoppingContext);

  const totalPrice = item.product.price * item.amount;

  return (
    <ItemContainer key={item.id}>
      <ItemDetail>
        <img src={item.product.urlImage} />

        <ItemForm>
          <ItemName>{item.product.name}</ItemName>

          <ItemAction>
            <InputCounter 
              counter={item.amount}
              onMinusCounter={() => removeItemAtCart(item.id)}
              onPlusCounter={() => addItemAtCart(item.id)}
              height={2.5}
            />
            <RemoveItemButton type="button" onClick={() => removeProduct(item.id)}>
              <Trash size={16} />
              REMOVER
            </RemoveItemButton>
          </ItemAction>
        </ItemForm>
      </ItemDetail>

      <ItemPrice>R$ {Real.format(totalPrice)}</ItemPrice>
    </ItemContainer>
  )
}