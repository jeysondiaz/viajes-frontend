import { Button } from "reactstrap"
import BlogsTable from "../components/BlogsTable"

const Blog = () => {
  return (
    <div className="p-5">
      <h1 className="pb-2">Lista de blogs</h1>
      <Button className="mb-2">Crear entrada</Button>
      <BlogsTable />
    </div>
  )
}

export default Blog