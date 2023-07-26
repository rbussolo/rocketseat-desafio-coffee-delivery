import { ShoppingCart } from "@phosphor-icons/react";
import { AddCartButton, ProductCart, ProductContainer, ProductForm, ProductPrice } from "./styles";
import { Product, ShoppingContext } from "../../context/ShoppingContext";
import { useState, useContext } from "react";
import { InputCounter } from "../InputCounter";

interface ProductCardProps {
  product: Product;
}

const Real = new Intl.NumberFormat('pt-BR', { minimumFractionDigits: 2 });

export function ProductCard({ product }: ProductCardProps) {
  const [counter, setCounter] = useState(1);
  const { addProduct } = useContext(ShoppingContext);

  function handleMinusCounter() {
    setCounter(state => {
      if(state - 1 > 0) {
        return state - 1;
      }

      return state;
    })
  }

  function handlePlusCounter() {
    setCounter(state => state + 1);
  }

  function handleAddProductAtCart() {
    addProduct(product.id, counter);
    setCounter(1);
  }

  return (
    <ProductContainer key={product.id}>
      <img src={product.urlImage} />
      <div className="details">
        {product.details.map(detail => {
          return (
            <span key={detail}>{detail}</span>
          )
        })}
      </div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <ProductCart>
        <ProductPrice>R$ <b>{Real.format(product.price)}</b></ProductPrice>
        <ProductForm>
          <InputCounter 
            counter={counter} 
            onMinusCounter={handleMinusCounter}
            onPlusCounter={handlePlusCounter}
          />
          <AddCartButton type="button" onClick={handleAddProductAtCart}>
            <ShoppingCart size={22} weight="fill" />
          </AddCartButton>
        </ProductForm>
      </ProductCart>
    </ProductContainer>
  )
}