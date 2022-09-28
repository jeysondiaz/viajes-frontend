import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Row } from "reactstrap";
import { getAllBlogs } from "../api/blog";
import BlogCard from "../components/BlogCard";
import CreateBlogModal from "../components/CreateBlogModal";
import IBlog from "../types/IBlog";

const Blogs = () => {
  const [blogs, setBlogs] = useState<IBlog[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    getAllBlogs()
      .then((response) => setBlogs(response.data))
      .catch(() => alert("No se han encontrado blogs"));
    // eslint-disable-next-line
  }, []);

  return (
    <div className="p-5">
      <div className="d-flex flex-row justify-content-between">
        <h1 className="pb-2">Lista de blogs</h1>
        <Button
          color="danger"
          className="mb-2"
          onClick={() => {
            localStorage.removeItem("USER");
            navigate("/");
          }}
        >
          Desconectar
        </Button>
      </div>
      <CreateBlogModal />
      <Row>
        {blogs.map((value) => (
          <BlogCard
            key={`blog-card-${value.idReviews}`}
            blogId={value.idReviews ?? 0}
            title={value.title}
            date={value.dateCreated}
            user={`${value.user?.name} ${value.user?.surname}`}
          />
        ))}
      </Row>
    </div>
  );
};

export default Blogs;
