import { EnumWidthSize } from "@data/enum/styled/EnumWidthSize";
import styled from "styled-components";

interface PropsCss {
  wSize?: EnumWidthSize;
  desabilitado?: boolean;
  hasError?: boolean;
  label?: string;
  typeInput?: string;
}

export const Styled = styled.div<PropsCss>`
  width: 12rem;
  height: 55px;
  display: flex;
  align-items: start;
  place-content: start;
  place-items: start;
  flex-direction: column;
  position: relative;
  gap: 2px;
`;

export const StyledLabel = styled.label<PropsCss>`
  width: 100%;
  height: auto;
  font-size: 14px;
  color: #333;
  white-space: nowrap;
  display: ${(props) => (props.label && props.label != "" ? "flex" : "none")};
  place-content: start;
  place-items: center;
  padding-right: ${(props) => (props.hasError ? "0px" : "35px")};
`;

export const StyledMain = styled.main<PropsCss>`
  width: 100%;
  height: 30px;
  display: flex;
  place-items: center;
  background-color: rgba(255, 255, 255, 0.7);
  border: 1px solid ${(props) => (props.hasError ? "red" : "#ccc")};
  border-radius: 4px;
  font-size: 14px;
  color: #000;
  font-weight: bold;
  place-content: space-between;
  padding: 0 5px;
`;
export const StyledSelectDateDay = styled.div`
  width: 25%;
  height: auto;
  display: flex;
  place-content: center;
  background-color: red;

  place-items: center;
`;
export const StyledSelectDateMonth = styled.div`
  width: 45%;
  height: auto;
  display: flex;
  place-content: center;
  background-color: red;
  place-items: center;
`;
export const StyledSelectDateYear = styled.div`
  width: 25%;
  height: auto;
  display: flex;
  place-content: center;
  background-color: red;
  place-items: center;
`;
export const StyledDate = styled.div`
  width: 95%;
  height: 100%;
  display: flex;
  place-content: space-between;
  place-items: center;
`;
