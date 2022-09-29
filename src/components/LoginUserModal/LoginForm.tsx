import { FormGroup, Input, Label } from "reactstrap";

const LoginForm = () => {
  return (
    <>
      <FormGroup>
        <Label for="exampleEmail">Email</Label>
        <Input
          name="email"
          placeholder="Mail..."
          type="email"
        />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Password</Label>
        <Input
          name="password"
          placeholder="Contraseña..."
          type="password"
        />
      </FormGroup>
    </>
  );
};

export default LoginForm;
