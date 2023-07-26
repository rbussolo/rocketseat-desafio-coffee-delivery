import {  BuyingButton, CartContainer, CheckoutContainer, MoreInfoContainer, ProductContainer, TotalContainer } from "./styles";
import React, { useContext } from "react";
import { ShoppingContext } from "../../context/ShoppingContext";
import { CartItem } from "../../components/CartItem";
import { AddressForm } from "./AddressForm";
import { PaymentForm } from "./PaymentForm";
import * as zod from "zod";
import { FieldErrors, FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { useNavigate } from "react-router-dom";
import { Order, PaymentTypes } from "../../reducers/shopping";

const newOrderValidationSchema = zod.object({
  address_zip_code: zod.string().min(9, "Informe o CEP"),
  address_street: zod.string().min(1, "Informe a Rua"),
  address_street_number: zod.string().min(1, "Informe o Número da Rua"),
  address_complement: zod.string(),
  address_neighborhood: zod.string().min(1, "Informe o Bairro"),
  address_city: zod.string().min(1, "Informe a Cidade"),
  address_state: zod.string().min(1, "Informe a UF"),
  payment_type: zod.string().min(1, "Informe o Tipo de Pagamento")
});

interface NewOrderFormData {
  address_zip_code: string;
  address_street: string;
  address_street_number: string;
  address_complement: string;
  address_neighborhood: string;
  address_city: string;
  address_state: string;
  payment_type: keyof typeof PaymentTypes | "";
}

const Real = new Intl.NumberFormat('pt-BR', { minimumFractionDigits: 2 });
const MySwal = withReactContent(Swal);

export function Checkout() {
  const { shoppingCart, createNewOrder } = useContext(ShoppingContext);
  const navigate = useNavigate();
  
  const newOrderForm = useForm<NewOrderFormData>({
    resolver: zodResolver(newOrderValidationSchema),
    defaultValues: {
      address_zip_code: "",
      address_street: "",
      address_complement: "",
      address_street_number: "",
      address_neighborhood: "",
      address_city: "",
      address_state: "",
      payment_type: ""
    }
  });

  const { handleSubmit, watch, reset } = newOrderForm;

  const paymentType = watch("payment_type");

  const hasItemsInCart = shoppingCart.items.length ? true : false;
  const itemsPrice = shoppingCart.items.reduce((acc, value) => acc + (value.amount * value.product.price), 0);
  const deliveryPrice = 3.5;
  const totalPrice = itemsPrice + deliveryPrice;

  function handleCreateNewOrder(data: NewOrderFormData) {
    const payment_type: keyof typeof PaymentTypes = data.payment_type === "" ? "credito" : data.payment_type;

    const newOrder: Order = {
      address: {
        zip_code: data.address_zip_code,
        city: data.address_city,
        neighborhood: data.address_neighborhood,
        state: data.address_state,
        street: data.address_street,
        street_number: data.address_street_number,
        complement: data.address_complement
      },
      payment_type: payment_type,
      items: shoppingCart.items,
      delivery_price: deliveryPrice,
      total_price: totalPrice
    }

    createNewOrder(newOrder);
    reset();

    navigate("/success");
  }

  function handleErrorOnCreateNewOrder(errors: FieldErrors<NewOrderFormData>) {
    const listError = Object.keys(errors);
    let message = "";
    
    for(let i = 0; i < listError.length; i++) {
      const error = errors[listError[i] as keyof typeof errors];

      if (error?.message) {
        message += error.message + "<br />";
      }
    }

    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    MySwal.fire('Erro', message, "error");
  }

  return (
    <CheckoutContainer onSubmit={handleSubmit(handleCreateNewOrder, handleErrorOnCreateNewOrder)} action="">
      <MoreInfoContainer>
        <h2>Complete seu pedido</h2>

        <FormProvider {...newOrderForm}>
          <AddressForm />
          <PaymentForm paymentType={paymentType} />
        </FormProvider>
      </MoreInfoContainer>
      <ProductContainer>
        <h2>Cafés selecionados</h2>

        <CartContainer>
          {shoppingCart.items.map(item => {
            return (
              <React.Fragment key={item.id}>
                <CartItem 
                  item={item}
                />

                <hr />
              </React.Fragment>
            )
          })}

          <TotalContainer>
            <div>
              <span className="small">Total de itens</span>
              <span className="medium">R$ {Real.format(itemsPrice)}</span>
            </div>
            <div>
              <span className="small">Entrega</span>
              <span className="medium">R$ {Real.format(deliveryPrice)}</span>
            </div>
            <div>
              <span className="large">Total</span>
              <span className="large">R$ {Real.format(totalPrice)}</span>
            </div>
          </TotalContainer>

          <BuyingButton disabled={!hasItemsInCart} type="submit">
            CONFIRMAR PEDIDO
          </BuyingButton>
        </CartContainer>
      </ProductContainer>
    </CheckoutContainer>
  )
}