import { Bank, CreditCard, CurrencyDollar, Money } from "@phosphor-icons/react";
import { PaymentContainer, PaymentHeader, PaymentType } from "./styles";
import { PaymentButton } from "../styles";
import { useFormContext } from 'react-hook-form';
import { PaymentTypes } from "../../../reducers/shopping";

interface PaymentFormProps {
  paymentType: keyof typeof PaymentTypes | "";
}

export function PaymentForm({ paymentType }: PaymentFormProps) {
  const { setValue } = useFormContext();
  
  function handleSelectPaymentType(type: keyof typeof PaymentTypes) {
    const newTypeSelected = paymentType && paymentType === type ? "" : type;

    setValue("payment_type", newTypeSelected);
  }

  const isSelectPaymentCredito = paymentType && PaymentTypes[paymentType] === PaymentTypes.credito ? 'isSelected' : '';
  const isSelectPaymentDebito = paymentType && PaymentTypes[paymentType] === PaymentTypes.debito ? 'isSelected' : '';
  const isSelectPaymentDinheiro = paymentType && PaymentTypes[paymentType] === PaymentTypes.dinheiro ? 'isSelected' : '';

  return (
    <PaymentContainer>
      <PaymentHeader>
        <CurrencyDollar size={22} />

        <div>
          <p>Pagamento</p>
          <span>O pagamento é feito na entrega. Escolha a forma que deseja pagar</span>
        </div>
      </PaymentHeader>

      <PaymentType>
        <PaymentButton
          type="button"
          className={isSelectPaymentCredito}
          onClick={() => handleSelectPaymentType("credito")}
        >
          <CreditCard size={16} />
          CARTÃO DE CRÉDITO
        </PaymentButton>

        <PaymentButton
          type="button"
          className={isSelectPaymentDebito}
          onClick={() => handleSelectPaymentType("debito")}
        >
          <Bank size={16} />
          CARTÃO DE DÉBITO
        </PaymentButton>

        <PaymentButton
          type="button"
          className={isSelectPaymentDinheiro}
          onClick={() => handleSelectPaymentType("dinheiro")}
        >
          <Money size={16} />
          DINHEIRO
        </PaymentButton>
      </PaymentType>
    </PaymentContainer>
  );
}