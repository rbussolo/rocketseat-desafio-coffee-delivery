import { Header } from "./Header";
import { ProductContainer, ProductList, HomeContainer } from "./styles";

import { productList } from "../../data/products";
import { ProductCard } from "../../components/ProductCard";

export function Home() {
  return (
    <HomeContainer>
      <Header />

      <ProductContainer>
        <h1>Nossos cafés</h1>
        <ProductList>
          { productList.map(product => {
            return (
              <ProductCard product={product} key={product.id} />
            )
          })}
        </ProductList>
      </ProductContainer>
    </HomeContainer>
  )
}