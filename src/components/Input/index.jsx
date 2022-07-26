import { Container, InputContainer } from "./styles";

function Input({ label, register, name, ...rest }) {
  return (
    <Container>
      <div>{label}</div>
      <InputContainer>
        {/* {Icon && <Icon />} */}
        <input {...register(name)} {...rest} helperText="um email" />
      </InputContainer>
    </Container>
  );
}

export default Input;
