// import ErrorFormSistema from '@sistemaComponent/forms/errorForm';

import React, { useEffect, useRef, useState } from "react";
//@ts-ignore
import { Control, useController } from "react-hook-form";
import Select from "react-select";
import {
  Styled,
  StyledDate,
  StyledLabel,
  StyledMain,
  StyledSelectDateDay,
  StyledSelectDateMonth,
  StyledSelectDateYear,
} from "./styled";
import { EnumWidthSize } from "../../enum/EnumWidthSize";
import useRefErroBase from "../../ref/useRefErroBase";
import ErrorFormSistema from "../../ref/errorForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  faArrowRight,
  faCalendar,
  faCalendarAlt,
  faShareSquare,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";

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

type BaseInputProps = {
  name: string;
  control: Control<any>;
  placeholder?: string;
  label: string;
  accept?: string;
  wSize?: EnumWidthSize;
  readOnly?: boolean;
  defaultValue?: string;
  value?: any;
  disabled?: boolean;
  styledAlternativo?: boolean;
  obrigatorio?: boolean;
  tamanhoBase?: EnumWidthSize;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  anoDeterminado?: any;
  anoFixo?: number;
  minDate?: Date;
  maxDate?: Date;
};

type InputFormProps = BaseInputProps;

export default function InputTemplateDate({
  name,
  control,
  label,
  wSize = EnumWidthSize.w90,
  disabled,
}: InputFormProps) {
  const customStyled = {
    control: (base: any) => ({
      ...base,
      minWidth: 40,
      minHeight: "auto",
      textAlign: "center",
      // fontSize: theme?.fontSize?.p,
    }),

    menuPortal: (base: any) => ({
      ...base,
      zIndex: 9999,
    }),

    valueContainer: (base: any) => ({
      ...base,
      padding: 0,
    }),

    singleValue: (base: any) => ({
      ...base,
      color: "#000",
    }),

    menu: (base: any) => ({
      ...base,
      width: "auto", // 👈 aumenta largura do menu
      left: "50%",
      transform: "translateX(-50%)",
    }),

    menuList: (base: any) => ({
      ...base,
      maxHeight: 200,
      overflowY: "auto",

      // Firefox
      scrollbarWidth: "none",

      // IE / Edge antigo
      msOverflowStyle: "none",

      // Chrome / Safari
      "&::-webkit-scrollbar": {
        display: "none",
      },

      display: "flex",
      flexDirection: "column",
      alignItems: "center", // 👈 centraliza horizontal
      textAlign: "center",
      zIndex: "9999",
    }),
  };
  const [mouse, setMouse] = useState<any>();
  const { field, fieldState } = useController({ name, control });
  const refBase = useRef<HTMLDivElement>(null);
  const pos = useRefErroBase(refBase, mouse);

  return (
    <Styled wSize={wSize} hasError={!!fieldState.error} ref={refBase}>
      <StyledLabel hasError={!!fieldState.error} label={label}>
        {label}
      </StyledLabel>
      <StyledMain
        hasError={!!fieldState.error}
        onMouseEnter={() => setMouse(true)}
        onMouseLeave={() => setMouse(false)}
      >
        <StyledSelectDateDay>
          <StyledDate>
            <FontAwesomeIcon icon={faCalendarAlt as IconProp} />
            {/* 31 */}
            <Select
              styles={customStyled}
              components={{
                IndicatorSeparator: () => null,
                DropdownIndicator: () => null,
              }}
            />
          </StyledDate>
        </StyledSelectDateDay>
        <StyledSelectDateMonth>
          <StyledDate>
            <FontAwesomeIcon icon={faCalendar as IconProp} />
            {/* Setembro */}
            <Select
              styles={customStyled}
              components={{
                IndicatorSeparator: () => null,
                DropdownIndicator: () => null,
              }}
            />
          </StyledDate>
        </StyledSelectDateMonth>
        <StyledSelectDateYear>
          <StyledDate>
            <FontAwesomeIcon icon={faCalendarAlt as IconProp} />
            {/* 1999 */}
            <Select
              styles={customStyled}
              components={{
                IndicatorSeparator: () => null,
                DropdownIndicator: () => null,
              }}
            />
          </StyledDate>
        </StyledSelectDateYear>
      </StyledMain>
      {fieldState.error ? (
        <ErrorFormSistema
          text={fieldState.error.message}
          mouse={mouse}
          top={pos.top}
          left={pos.left}
        />
      ) : null}
    </Styled>
  );
}
