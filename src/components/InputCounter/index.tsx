import { Minus, Plus } from "@phosphor-icons/react";
import { CounterContainer } from "./styles";

interface InputCounterProps {
  counter?: number;
  height?: number;
  onPlusCounter: (id?: string) => void;
  onMinusCounter: (id?: string) => void;
}

export function InputCounter({ counter = 0, height = 2.375, onPlusCounter, onMinusCounter }: InputCounterProps) {
  return (
    <CounterContainer height={height}>
      <button type="button" onClick={() => onMinusCounter()}>
        <Minus size={14} weight="bold" />
      </button>
      <span>{counter}</span>
      <button type="button" onClick={() => onPlusCounter()}>
        <Plus size={14} weight="bold" />
      </button>
    </CounterContainer>
  )
}