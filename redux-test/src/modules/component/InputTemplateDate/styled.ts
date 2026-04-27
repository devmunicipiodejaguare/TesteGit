import styled from "styled-components";

export const FieldWrapper = styled.div`
  width: 20rem;
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
`;

export const FieldLabel = styled.label`
  font-size: 0.875rem;
  color: #e5e7eb;
  font-weight: 600;
`;

export const DateContainer = styled.div`
  height: 2.3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.45rem;
  padding: 0.3rem 0.45rem;
  border: 1px solid #4b5563;
  border-radius: 8px;
  background: rgba(17, 24, 39, 0.85);
`;

export const DatePart = styled.div<{ width: string }>`
  width: ${({ width }) => width};
  display: flex;
  align-items: center;
  gap: 0.35rem;
  color: #f9fafb;

  span {
    font-size: 0.85rem;
    opacity: 0.9;
  }
`;

export const SelectBase = styled.select`
  width: 100%;
  height: 1.7rem;
  border: 1px solid #6b7280;
  border-radius: 6px;
  background: #111827;
  color: #f9fafb;
  font-size: 0.8rem;
  padding: 0 0.35rem;
  outline: none;

  &:focus {
    border-color: #60a5fa;
    box-shadow: 0 0 0 2px rgba(96, 165, 250, 0.25);
  }
`;
