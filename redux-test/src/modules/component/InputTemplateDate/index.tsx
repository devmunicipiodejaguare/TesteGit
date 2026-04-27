import {
  DateContainer,
  DatePart,
  FieldLabel,
  FieldWrapper,
  SelectBase,
} from "./styled";

type InputTemplateDateProps = {
  label?: string;
};

const months = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];

export default function InputTemplateDate({
  label = "Data de nascimento",
}: InputTemplateDateProps) {
  return (
    <FieldWrapper>
      <FieldLabel>{label}</FieldLabel>

      <DateContainer>
        <DatePart width="24%">
          <span>📅</span>
          <SelectBase defaultValue="">
            <option value="" disabled>
              Dia
            </option>
            {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
              <option key={day} value={day}>
                {day}
              </option>
            ))}
          </SelectBase>
        </DatePart>

        <DatePart width="48%">
          <span>🗓️</span>
          <SelectBase defaultValue="">
            <option value="" disabled>
              Mês
            </option>
            {months.map((month) => (
              <option key={month} value={month}>
                {month}
              </option>
            ))}
          </SelectBase>
        </DatePart>

        <DatePart width="24%">
          <span>📆</span>
          <SelectBase defaultValue="">
            <option value="" disabled>
              Ano
            </option>
            {Array.from({ length: 80 }, (_, i) => 2026 - i).map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </SelectBase>
        </DatePart>
      </DateContainer>
    </FieldWrapper>
  );
}
