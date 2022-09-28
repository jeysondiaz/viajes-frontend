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
import { getLoginAcces } from "../../api";
import LoginForm from "./LoginForm";

const LoginUserModal = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleOpen = () => setOpen(!open);

  const handleLogin = async (e: any) => {
    e.preventDefault();

    const mail = e.target.email.value;
    const pass = e.target.password.value;

    try {
      const response = await getLoginAcces(mail, pass);
      localStorage.setItem("USER", JSON.stringify(response));
      navigate("/blog");
    } catch (error) {
      alert("Su email o password son invalidos");
      console.error(error)
    }
  }

  return (
    <div>
      <Button color="primary" onClick={handleOpen}>
        Login
      </Button>
      <Modal isOpen={open} toggle={handleOpen}>
        <ModalHeader toggle={handleOpen}>Login</ModalHeader>
        <Form onSubmit={handleLogin}>
          <ModalBody>
            <LoginForm />
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

export default LoginUserModal;
