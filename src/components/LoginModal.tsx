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
import LoginForm from "./LoginForm";

const LoginModal = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleOpen = () => setOpen(!open);

  const handleLogin = (e: any) => {
    e.preventDefault();

    const mail = e.target.email.value;
    const pass = e.target.password.value;

    if (mail === "sergio@morales.com" && pass === "Hola123") {
      navigate("/blog");
    } else {
      alert("Su mail o password son invalidos");
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

export default LoginModal;
