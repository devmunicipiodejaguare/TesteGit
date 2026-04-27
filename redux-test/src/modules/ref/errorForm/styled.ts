import styled from 'styled-components';

export const Styled = styled.ul<{ mouse: boolean; alternative }>`
  position: fixed;

  width: max-content;
  /* max-width: 260px; */
  white-space: nowrap;

  padding: 4px 8px;
  border-radius: 6px;

  color: red;
  font-weight: 500;
  font-size: 12px;
  background-color: #e9e9e9;
  border: 0.1px solid #0a0a0a;

  z-index: 2000;

  opacity: ${(p) => (p.mouse ? 1 : 0)};
  transform: ${(p) => (p.mouse ? 'translateY(6px)' : 'translateY(-6px)')};
  visibility: ${(p) => (p.mouse ? 'visible' : 'hidden')};

  transition:
    opacity 180ms ease,
    transform 180ms ease,
    visibility 180ms ease;

  pointer-events: none;
`;

export const StyledTriangulo = styled.div`
  position: absolute;
  width: 0;
  height: 0;
  color: #e9e9e9;

  /* triângulo externo (borda) */
  &::before {
    content: '';
    position: absolute;
    left: -1px;
    top: -29px;

    border-left: 7px solid transparent;
    border-right: 7px solid transparent;
    border-bottom: 7px solid black;
  }

  /* triângulo interno (miolo) */
  &::after {
    content: '';
    position: absolute;
    left: 0px;
    top: -28px;

    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-bottom: 6px solid #e9e9e9;
  }
`;
