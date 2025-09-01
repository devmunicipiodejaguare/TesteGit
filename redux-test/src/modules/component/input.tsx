import { memo } from "react";

type InputTesteProps = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type: React.InputHTMLAttributes<HTMLInputElement>["type"];
};

export const InputTeste = memo(({ onChange, type }: InputTesteProps) => {
  console.log("função inputTeste redenrizada");
  return <input type={type} onChange={onChange} />;
});
