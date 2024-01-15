import "./btn_outline_black.scss"

import React, { ButtonHTMLAttributes, FC } from 'react';


interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  btnProp?: string;
}

const BtnOutlineBlack: FC<ButtonProps> = ({ children, btnProp, ...rest }) => {
  return (
    <button {...rest}>
      {children}
      {btnProp && <span>{btnProp}</span>}
    </button>
  );
};

export default BtnOutlineBlack;