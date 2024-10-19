import { useForm } from "react-hook-form";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";


import { Container, LoginContainer, Column, Spacing, Title } from "./styles";
import { defaultValues, IFormLogin } from "./types";

const schema = yup
  .object({
    email: yup.string().email("E-mail inválido").required("Campo obrigatório"),
    password: yup
      .string()
      .min(6, "No minimo 6 caracteres")
      .required("Campo obrigatório"),
  })
  .required();

const Login = () => {
  
  const handleOnBlur = () =>{

    console.log('blured');

    const button = document.getElementsByTagName('Button')[0]; 
    
    console.log(isValid);
    (button as HTMLButtonElement).disabled = isValid;
    if (isValid) {
      button.classList.remove("desabilitado");
      button.classList.add("habilitado");
    } else{
      button.classList.remove("habilitado");
      button.classList.add("desabilitado");
    }
    
    console.log(button);
  };

  const {
    control,
    formState: { errors, isValid },
  } = useForm<IFormLogin>({
    resolver: yupResolver(schema),
    mode: "onBlur",
    defaultValues,
    reValidateMode: "onChange"    
  });

  return (
    <Container>
      <LoginContainer>
        <Column>
          <Title>Login</Title>
          <Spacing />
          <Input
            name="email"
            placeholder="Email"
            customOnBlur={handleOnBlur}
            control={control}
            errorMessage={errors?.email?.message}            
          />
          <Spacing />
          <Input
            name="password"
            type="password"
            placeholder="Senha"
            customOnBlur={handleOnBlur}
            control={control}
            errorMessage={errors?.password?.message}            
          />
          <Spacing />          
          <Button title="Entrar" classType='desabilitado' isEnabled={false} />
        </Column>
      </LoginContainer>
    </Container>
  );
};

export default Login;