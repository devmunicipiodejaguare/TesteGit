import InputTemplateDate from "../component/inputTemplateDate";
import { Styled } from "./styled";

import { useForm } from "react-hook-form";

export default function FrequenciaPauta() {
  const {
    control,
    formState: { errors },
  } = useForm<any>({});

  return (
    <Styled>
      <InputTemplateDate control={control} label="Teste" name="teste" />
    </Styled>
  );
}
