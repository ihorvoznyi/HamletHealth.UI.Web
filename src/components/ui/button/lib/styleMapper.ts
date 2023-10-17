import { ButtonTypes } from "../index.interfaces";
import { inheritBtnStyle, outlinedBtnStyle, primaryBtnStyle } from "../index.tailwind";

type ButtonVariantMapper = {
  [key in ButtonTypes]: string;
}

export function styleMapper(type: ButtonTypes) {
  const mapper: ButtonVariantMapper = {
    primary: primaryBtnStyle,
    outlined: outlinedBtnStyle,
    inherit: inheritBtnStyle,
  };

  return mapper[type];
}