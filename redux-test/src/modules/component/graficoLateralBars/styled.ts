import styled from "styled-components";

export const Styled = styled.div<{
  widthContainer: any;
  heightContainer: any;
}>`
  width: ${(props) => props?.widthContainer};
  height: ${(props) => props?.heightContainer};
  display: flex;
  align-items: start;
  justify-content: start;
  color: #000;
  overflow-y: auto;
  overflow-x: hidden;

  .recharts-sector {
    outline: none;
  }
`;

export const StyledTable = styled.table`
  width: 100%;
  height: auto;
  border: 1px solid #fff;
  padding: 0;
  margin: 0;
  border-collapse: collapse;
  table-layout: fixed;

  tr,
  td,
  th {
    border: 1px solid #fff;
  }
`;
