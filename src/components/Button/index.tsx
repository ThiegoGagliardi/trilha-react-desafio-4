import { ButtonContainer } from "./styles";
import { IButtonProps } from "./types";

const Button = ({ title, onClick, isEnabled, classType }: IButtonProps) => {
  return <ButtonContainer className={classType} disabled={isEnabled} onClick={onClick}>{title}</ButtonContainer>;
};

export default Button;
