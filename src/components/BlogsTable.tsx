import { useNavigate } from "react-router-dom";
import { Button, Table } from "reactstrap";

const BlogsTable = () => {
  const navegate = useNavigate();

  function handleSelectBlog(id: string, other: any) {
    navegate("/blog/"+id)
  }

  return (
    <Table striped>
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Creation Date</th>
          <th>User</th>
          <th>Ver</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Viaje ecuador</td>
          <td>12/01/2018</td>
          <td>@jeyson</td>
          <td><Button onClick={() => handleSelectBlog("1", [1,2,3])}>Ver</Button></td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Viaje panama</td>
          <td>10/10/2018</td>
          <td>@felipe</td>
          <td><Button onClick={() => handleSelectBlog("2", [2])}>Ver</Button></td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Viaje Mexico</td>
          <td>05/03/2019</td>
          <td>@juan</td>
          <td><Button onClick={() => handleSelectBlog("3", [])}>Ver</Button></td>
        </tr>
      </tbody>
    </Table>
  );
};

export default BlogsTable;
