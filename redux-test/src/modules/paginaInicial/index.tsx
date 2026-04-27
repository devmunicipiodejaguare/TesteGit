import InputTemplateDate from "../component/InputTemplateDate";
import {
  Styled,
  StyledTable,
  StyledThead,
  StyledTbody,
  StyledTd,
  StyledTh,
  StyledTr,
  StyledThGroup,
  StyledTrContaier,
  StyledThContainer,
} from "./styled";

export default function TesteStorege() {
  return (
    <Styled>
      <InputTemplateDate label="Data (visual)" />

      <StyledTable>
        <StyledThead>
          <StyledTr>
            <StyledTh rowSpan={2}>Nº</StyledTh>
            <StyledTh rowSpan={2}>Nome</StyledTh>
            <StyledTh rowSpan={2}>Nascimento</StyledTh>
            <StyledThGroup largura={20}>Teste</StyledThGroup>
          </StyledTr>
          <StyledTrContaier>
            <StyledThContainer>
              <div>
                <h3>Teste</h3>
              </div>
            </StyledThContainer>
          </StyledTrContaier>
        </StyledThead>

        <StyledTbody>
          <StyledTr>
            <StyledTd>1</StyledTd>
            <StyledTd>Nome</StyledTd>
            <StyledTd>01/01/2000</StyledTd>
          </StyledTr>
        </StyledTbody>
      </StyledTable>
    </Styled>
  );
}
