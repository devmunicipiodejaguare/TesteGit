import { useState } from "react";
import { Styled } from "./styled";
import { useDispatch } from "react-redux";
import { armazenarNumero } from "../../store/slices/counterSlice";
import { useSelector } from "react-redux";
import type { RootState } from "../../store";

export default function TesteStorege() {
  const [numero, setNumero] = useState(0);
  const dispatch = useDispatch();
  const valor = useSelector((state: RootState) => state.counter.value);

  return (
    <Styled>
      <div>Teste para armazenar numeros</div>
      <input
        type="number"
        value={numero}
        onChange={(e) => setNumero(Number(e.target.value))}
      />
      <button onClick={() => dispatch(armazenarNumero(numero))}>
        Armazenar
      </button>
      <div>Exibir valores:</div>
      <div>{valor}</div>
    </Styled>
  );
}
