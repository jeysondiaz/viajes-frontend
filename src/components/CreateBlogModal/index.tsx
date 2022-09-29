import { useState } from "react";
import {
  Button,
  Form,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "reactstrap";

import CreateBlogForm from "./CreateBlogForm";
import { createBlog } from "../../api";
import IBlog from "../../types/IBlog";

const CreateBlogModal = ({
  handleCreation,
}: {
  handleCreation: () => void;
}) => {
  const [open, setOpen] = useState(false);
  const [blog, setBlog] = useState<IBlog>({
    title: "",
    description: "",
  });

  const handleOpen = () => setOpen(!open);

  const handleBlog = async (e: any) => {
    e.preventDefault();

    try {
      await createBlog(blog);
      handleCreation();
      setOpen(!open);
    } catch (error) {
      console.error(error);
      alert("Hubo un error al crear el blog");
    }
  };

  return (
    <div>
      <Button color="primary" onClick={handleOpen}>
        Crear Blog
      </Button>
      <Modal isOpen={open} toggle={handleOpen}>
        <ModalHeader toggle={handleOpen}>Nuevo Blog 1</ModalHeader>
        <Form onSubmit={handleBlog}>
          <ModalBody>
            <CreateBlogForm blog={blog} setBlog={setBlog} />
          </ModalBody>
          <ModalFooter>
            <Button type="submit" color="primary">
              Crear blog
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

export default CreateBlogModal;
