import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Form,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "reactstrap";

import IUser, { USER_DUMMY } from "../../types/IUser";
import CreateUserForm from "./CreateUserForm";
import { createUser } from "../../api";

const CreateUserModal = () => {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState<IUser>(USER_DUMMY);
  const navigate = useNavigate();

  const handleOpen = () => setOpen(!open);

  const handleUser = async (e: any) => {
    e.preventDefault();

    try {
      const response = await createUser(user);
      localStorage.setItem("USER", JSON.stringify(response));
      navigate("/blog");
    } catch (error) {
      console.error(error);
      alert("La información es invalida");
    }
  };

  return (
    <div>
      <Button onClick={handleOpen}>
        Crear Usuario
      </Button>
      <Modal isOpen={open} toggle={handleOpen}>
        <ModalHeader toggle={handleOpen}>Registrate</ModalHeader>
        <Form onSubmit={handleUser}>
          <ModalBody>
            <CreateUserForm user={user} setUser={setUser} />
          </ModalBody>
          <ModalFooter>
            <Button type="submit" color="primary">
              Crear usuario
            </Button>{" "}
            <Button color="secondary" onClick={handleOpen}>
              Cancelar
            </Button>
          </ModalFooter>
        </Form>
      </Modal>
    </div>
  );
};

export default CreateUserModal;
