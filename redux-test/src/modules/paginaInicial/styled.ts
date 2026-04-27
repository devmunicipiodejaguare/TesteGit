import styled from "styled-components";

export const Styled = styled.div`
  width: 50%;
  height: 50%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: start;
  justify-content: start;
`;

export const StyledTable = styled.table`
  width: 100%;
  height: 20%;
  border: 1px solid #fff;
  padding: 0;
  margin: 0;
  border-collapse: collapse;
  /* table-layout: fixed; */
`;
export const StyledThead = styled.thead``;

export const StyledTh = styled.th`
  border: 1px solid #fff;
`;

export const StyledTbody = styled.tbody``;

export const StyledTr = styled.tr``;

export const StyledTd = styled.td`
  border: 1px solid #fff;
`;

export const StyledTrContaier = styled.tr`
  width: 100%;
`;
export const StyledThContainer = styled.th`
  background-color: red;
  border: 1px solid #fff;
`;
export const StyledThGroup = styled.th<{ largura: number }>`
  width: ${({ largura }) => (largura ? `${largura}vw` : "auto")};
`;
