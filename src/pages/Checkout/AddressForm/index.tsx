import { MapPinLine } from "@phosphor-icons/react";
import { AddressContainer, AddressHeader, InputForm, InputRow } from "./styles";
import { InputText } from "../../../components/InputText";
import { useFormContext } from 'react-hook-form';
import { useEffect } from "react";
import { maskCEP } from "../../../utils/mask";

export function AddressForm() {
  const { register, watch, setValue } = useFormContext();

  const address_zip_code = watch("address_zip_code") as string;

  useEffect(() => {
    const zip_code_with_mask = maskCEP(address_zip_code);

    setValue("address_zip_code", zip_code_with_mask);
  }, [address_zip_code, setValue]);

  return (
    <AddressContainer>
      <AddressHeader>
        <MapPinLine size={22} />

        <div>
          <p>Endereço de entrega</p>
          <span>Informe o endereço onde deseja receber o pedido</span>
        </div>
      </AddressHeader>

      <InputForm>
        <InputRow>
          <InputText 
            label="CEP" 
            widthContainer={200} 
            {...register("address_zip_code")}
          />
        </InputRow>

        <InputRow>
          <InputText 
            label="Rua" 
            {...register("address_street")}
          />
        </InputRow>

        <InputRow>
          <InputText 
            label="Número" 
            widthContainer={200}
            {...register("address_street_number")}
          />
          <InputText 
            label="Complemento" 
            isOptional={true} 
            {...register("address_complement")}
          />
        </InputRow>

        <InputRow>
          <InputText 
            label="Bairro"
            widthContainer={200}
            {...register("address_neighborhood")}
          />
          <InputText 
            label="Cidade" 
            {...register("address_city")}
          />
          <InputText 
            label="UF"
            widthContainer={60}
            {...register("address_state")}
          />
        </InputRow>
      </InputForm>
    </AddressContainer>
  )
}