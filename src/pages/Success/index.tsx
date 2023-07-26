import { DetailContainer, SuccessContainer } from "./styles";

import deliveryImage from '../../assets/delivery.png';
import { CurrencyDollar, MapPin, Timer } from "@phosphor-icons/react";
import { DetailWithIcon } from "../../components/DetailWithIcon";
import { ShoppingContext } from "../../context/ShoppingContext";
import { useContext } from "react";

export function Success() {
  const { orders } = useContext(ShoppingContext);

  const address_street = orders.length ? orders[0].address.street + ', ' + orders[0].address.street_number : "";
  const address_city_state = orders.length ? orders[0].address.neighborhood + ' - ' + orders[0].address.city + ', ' + orders[0].address.state : "";
  
  let payment_type = "";
  
  if (orders.length && orders[0].payment_type === "credito") {
    payment_type = "Cartão de Crédito";
  }

  if (orders.length && orders[0].payment_type === "debito") {
    payment_type = "Cartão de Débito";
  }

  if (orders.length && orders[0].payment_type === "dinheiro") {
    payment_type = "Dinheiro";
  }

  return (
    <SuccessContainer>
      <h1>
        Uhu! Pedido confirmado
      </h1>
      <h3>
        Agora é só aguardar que logo o café chegará até você
      </h3>
      <div>
        <DetailContainer>
          <DetailWithIcon icon={MapPin} iconColor="purple" weight="fill">
            <div>
              Entrega em <b>{ address_street }</b>
              <br />
              { address_city_state }
            </div>
          </DetailWithIcon>

          <DetailWithIcon icon={Timer} iconColor="yellow" weight="fill">
            <div>
              Previsão de entrega
              <br />
              <b>20 min - 30 min</b>
            </div>
          </DetailWithIcon>

          <DetailWithIcon icon={CurrencyDollar} iconColor="dark-yellow">
            <div>
              Pagamento de entrega
              <br />
              <b>{ payment_type }</b>
            </div>
          </DetailWithIcon>
        </DetailContainer>

        <img src={deliveryImage} />
      </div>
    </SuccessContainer>
  )
}