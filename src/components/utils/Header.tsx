import { useNavigate } from "react-router-dom";
import { Button } from "reactstrap";

interface HeaderProps {
  title: string;
  backBtnPath?: string;
}

const Header = ({ title, backBtnPath }: HeaderProps) => {
  const navigate = useNavigate();

  return (
    <div className="d-flex flex-row justify-content-between p-4 mb-3 bg-dark align-items-center text-light">
      <div className="d-flex flex-row align-items-center">
        {backBtnPath && (
          <Button
            style={{ width: 40, height: 40 }}
            className="me-3 rounded-circle d-flex flex-row align-items-center bg-info"
            color="primary"
            onClick={() => navigate(backBtnPath)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-left"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
              />
            </svg>
          </Button>
        )}
        <h1>{title}</h1>
      </div>
      <Button
        color="danger"
        onClick={() => {
          localStorage.removeItem("USER");
          navigate("/");
        }}
      >
        Desconectar
      </Button>
    </div>
  );
};

export default Header;
