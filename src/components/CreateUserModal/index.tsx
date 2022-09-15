import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
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

  useEffect(() => {
    setUser({
      ...user,
      idUser: uuidv4()
    });

    /* eslint-disable-next-line */
  }, [])

  const handleOpen = () => setOpen(!open);

  const handleUser = async (e: any) => {
    e.preventDefault();

    navigate("/blog");

    try {
      const response = await createUser(user);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Button color="primary" onClick={handleOpen}>
        Crear Usuario
      </Button>
      <Modal isOpen={open} toggle={handleOpen}>
        <ModalHeader toggle={handleOpen}>Login</ModalHeader>
        <Form onSubmit={handleUser}>
          <ModalBody>
            <CreateUserForm user={user} setUser={setUser} />
          </ModalBody>
          <ModalFooter>
            <Button type="submit" color="primary">
              Login
            </Button>{" "}
            <Button color="secondary" onClick={handleOpen}>
              Cancel
            </Button>
          </ModalFooter>
        </Form>
      </Modal>
    </div>
  );
};

export default CreateUserModal;
