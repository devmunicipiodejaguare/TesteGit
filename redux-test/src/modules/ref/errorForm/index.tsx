import { createPortal } from "react-dom";
import { Styled, StyledTriangulo } from "./styled";

export default function ErrorFormSistema({
  text,
  mouse,
  alternative = false,
  top,
  left,
}: {
  text: any;
  mouse: boolean;
  alternative?: boolean;
  top: number;
  left: number;
}) {
  return createPortal(
    <Styled
      mouse={mouse}
      alternative={alternative}
      style={{
        position: "fixed",
        top,
        left,
      }}
    >
      {text}
      <StyledTriangulo />
    </Styled>,

    document.body,
  );
}
