import { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { Spinner } from "reactstrap";
import { getBlogById } from "../api";
import Header from "../components/utils/Header";
import IBlog from "../types/IBlog";

const BlogInfo = () => {
  const [blogInfo, setBlogInfo] = useState<IBlog>();
  const [date, setDate] = useState(new Date());

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const numberId = Number(id);
    if (!isNaN(numberId)) {
      getBlogById(Number(id))
        .then((response) => setBlogInfo(response.data))
        .catch(() => alert("No se ha encontrado información del blog"));
    } else navigate("/blog");

    // eslint-disable-next-line
  }, [id]);

  useEffect(() => {
    if (blogInfo?.dateCreated) setDate(new Date(blogInfo.dateCreated));
  }, [blogInfo]);

  if (!id) return <Navigate to="/blog" replace />;

  if (!blogInfo) return <Spinner>Loading...</Spinner>;

  return (
    <div className="container pb-5 bg-white h-100 p-0">
      <Header title={blogInfo.title} backBtnPath="/blog"/>
      <div className="px-5 my-4">
        <h5>
          Autor:{" "}
          {`${blogInfo.user?.name ?? ""} ${blogInfo.user?.surname ?? ""}`}
        </h5>
        <h6>
          Creado el{" "}
          {`${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`}
        </h6>
      </div>
      {/* eslint-disable-next-line */}
      <img
        className="w-100"
        src="https://picsum.photos/1024/300"
        alt="blog-image"
      />
      <div className="px-5">
        <p className="fs-5 mt-4">{blogInfo.description}</p>
      </div>
    </div>
  );
};

export default BlogInfo;
