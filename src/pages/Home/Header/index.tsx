import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react";
import { ProductContainer, ProductQualities, ProductQuality, ProductTitle, HeaderContainer } from "./styles";

import imageProduct from '../../../assets/home-coffee.png';

export function Header() {
  return (
    <HeaderContainer>
      <ProductContainer>
        <ProductTitle>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>Com o Coffe Delivery você recebe o seu café onde estiver, a qualquer hora</p>
        </ProductTitle>
        <ProductQualities>
          <ProductQuality qualitycolor="dark-yellow">
            <div>
              <ShoppingCart size={16} />
            </div>
            Compra simples e segura
          </ProductQuality>
          <ProductQuality qualitycolor="gray">
            <div>
              <Package size={16} />
            </div>
            Embalagem mantém o café intacto
          </ProductQuality>
          <ProductQuality qualitycolor="yellow">
            <div>
              <Timer size={16} />
            </div>
            Entrega rápida e rastreada
          </ProductQuality>
          <ProductQuality qualitycolor="purple">
            <div>
              <Coffee size={16} />
            </div>
            O café chega fresquinho até você
          </ProductQuality>
        </ProductQualities>
      </ProductContainer>

      <img src={imageProduct} />
    </HeaderContainer>
  );
}