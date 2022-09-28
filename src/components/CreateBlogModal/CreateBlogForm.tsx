import { FC } from "react";
import { FormGroup, Input, Label } from "reactstrap";
import IBlog from "../../types/IBlog";

interface CreateBlogFormProps {
  blog: IBlog;
  setBlog: (blog: IBlog) => void;
}

const CreateBlogForm: FC<CreateBlogFormProps> = ({ blog, setBlog }) => {
  const handleChange = (value: string, key: "title" | "description") => {
    const newBlogValue: IBlog = {
      ...blog,
      [key]: value,
    }

    setBlog(newBlogValue);
  }
  return (
    <>
      <FormGroup>
        <Label for="name">Titulo</Label>
        <Input
          required
          value={blog.title}
          name="title"
          placeholder="Titulo..."
          type="text"
          onChange={(e) => { handleChange(e.target.value, "title") }}
        />
      </FormGroup>
      <FormGroup>
        <Label for="surname">Contenido</Label>
        <Input
          required
          value={blog.description}
          name="description"
          placeholder="Contenido..."
          type="textarea"
          onChange={(e) => { handleChange(e.target.value, "description") }}
        />
      </FormGroup>
    </>
  );
};

export default CreateBlogForm;
