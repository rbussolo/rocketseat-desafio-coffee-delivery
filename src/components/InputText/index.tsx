import { forwardRef } from "react";
import { InputContainer } from "./styles";

interface InputTextProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  widthContainer?: number;
  isOptional?: boolean;
}

export const InputText = forwardRef<HTMLInputElement, InputTextProps>(
  ({ label, name, widthContainer, placeholder = " ", isOptional = false, ...rest }, ref) => {
    return (
      <InputContainer width={widthContainer}>
        <input 
          type="text"
          name={name}
          placeholder={placeholder}
          { ...rest }
          ref={ref}
        />
        <div>
          <label htmlFor={name}>{label}</label>
          {isOptional ? (
            <span>Opcional</span>
          ) : (
            null
          )}
        </div>
      </InputContainer>
    )
  }
);