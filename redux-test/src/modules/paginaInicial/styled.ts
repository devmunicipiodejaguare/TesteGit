import styled from "styled-components";

export const Styled = styled.div`
  width: 50%;
  height: 50%;
  display: flex;
  place-content: start;
  place-items: start;
  border: 1px solid #ccc;
  background-color: #f2f2f2;
  place-content: center;

  .recharts-sector {
    outline: none;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`;
