import { useEffect, useState } from "react";
import { Row } from "reactstrap";
import { getAllBlogs } from "../api/blog";
import BlogCard from "../components/BlogCard";
import CreateBlogModal from "../components/CreateBlogModal";
import Header from "../components/utils/Header";
import IBlog from "../types/IBlog";

const Blogs = () => {
  const [blogs, setBlogs] = useState<IBlog[]>([]);
  
  useEffect(() => {
    handleCreation();
    // eslint-disable-next-line
  }, []);

  const handleCreation = () => {
    getAllBlogs()
      .then((response) => setBlogs(response.data))
      .catch(() => alert("No se han encontrado blogs"));
  }

  return (
    <div className="container pb-5">
      <Header title="Reseñas de Viajes Blog" />
      <CreateBlogModal handleCreation={handleCreation} />
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
