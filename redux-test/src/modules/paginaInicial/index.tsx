import { useState } from "react";
import { Styled } from "./styled";

export default function TesteStorege() {
  const [numero, setNumero] = useState(0);
  const [valor, setValor] = useState<number>(0);
  return (
    <Styled>
      <div>Teste para armazenar numeros</div>
      <input
        type="number"
        value={numero}
        onChange={(e) => setNumero(Number(e.target.value))}
      />
      <button onClick={() => setValor(numero)}>
        Armazenar
      </button>
      <div>Exibir valores:</div>
      <div>{valor}</div>
    </Styled>
  );
}
