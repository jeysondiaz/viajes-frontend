import { RouteObject } from "react-router-dom";

import Login from "../../pages/Login";
import Blogs from "../../pages/Blogs";
import BlogInfo from "../../pages/BlogInfo";
import ProtectedRoute from "./ProtectedRoute";

const Routes: RouteObject[] = [
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/blog",
    element: (
      <ProtectedRoute>
        <Blogs />
      </ProtectedRoute>
    ),
  },
  {
    path: "/blog/:id",
    element: <ProtectedRoute>
      <BlogInfo />
    </ProtectedRoute>,
  },
];

export default Routes;
