import { FC, useState } from "react";
import { Button, FormGroup, Input, InputGroup, Label } from "reactstrap";
import IUser from "../../types/IUser";

interface CreateUserFormProps {
  user: IUser;
  setUser: (user: IUser) => void;
}

const CreateUserForm: FC<CreateUserFormProps> = ({ user, setUser }) => {
  const [showPass, setShowPass] = useState(false);

  const handleChange = (value: string, key: "email" | "password" | "name" | "surname") => {
    const newUserValue: IUser = {
      ...user,
      [key]: value,
    }

    setUser(newUserValue);
  }
  return (
    <>
      <FormGroup>
        <Label for="email">Correo</Label>
        <Input
          required
          value={user.email}
          name="email"
          placeholder="Correo..."
          type="email"
          onChange={(e) => { handleChange(e.target.value, "email") }}
        />
      </FormGroup>
      <FormGroup>
        <Label for="password">Contraseña</Label>
        <InputGroup>
          <Input
            required
            value={user.password}
            name="password"
            placeholder="Contraseña..."
            type={showPass ? "text" : "password"}
            onChange={(e) => { handleChange(e.target.value, "password") }}
          />
          <Button onClick={() => setShowPass(!showPass)}>
            {showPass ? "Esconder" : "Mostrar"}
          </Button>
        </InputGroup>
      </FormGroup>
      <FormGroup>
        <Label for="name">Nombre</Label>
        <Input
          required
          value={user.name}
          name="name"
          placeholder="Nombre..."
          type="text"
          onChange={(e) => { handleChange(e.target.value, "name") }}
        />
      </FormGroup>
      <FormGroup>
        <Label for="surname">Apellido</Label>
        <Input
          required
          value={user.surname}
          name="surname"
          placeholder="Apellido..."
          type="text"
          onChange={(e) => { handleChange(e.target.value, "surname") }}
        />
      </FormGroup>
    </>
  );
};

export default CreateUserForm;
