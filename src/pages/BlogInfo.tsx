import { useParams } from "react-router-dom"

const BlogInfo = () => {
  const { id } = useParams();

  return (
    <div>BlogInfo {id}</div>
  )
}

export default BlogInfo