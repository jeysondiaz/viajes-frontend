import { ReactNode } from "react"
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const user = localStorage.getItem("USER");

  if (!user) {
    return <><Navigate to="/" replace /></>;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
