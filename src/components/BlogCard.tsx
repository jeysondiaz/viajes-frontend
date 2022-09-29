import { useNavigate } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
  Col,
} from "reactstrap";

interface BlogCardProps {
  blogId: number;
  title: string;
  date?: Date;
  user: string;
}

const BlogCard = ({ blogId, title, date, user }: BlogCardProps) => {
  const navigate = useNavigate();
  const today = new Date(date ?? "");
  const formattedDate = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;

  const handleClick = () => {
    navigate(`/blog/${blogId}`)
  }

  return (
    <Col xs={4} className="pt-4">
      <Card className="">
        <CardImg
          alt="Card image cap"
          src="https://picsum.photos/500/250"
          top
          width="100%"
        />
        <CardBody>
          <CardTitle tag="h5">{title}</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            fecha de creación: {formattedDate}
          </CardSubtitle>
          <CardText>{user}</CardText>
          <Button onClick={handleClick}>Ver blog</Button>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BlogCard;
