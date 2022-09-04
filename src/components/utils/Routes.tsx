import { RouteObject } from "react-router-dom";

import Login from "../../pages/Login";
import Blog from "../../pages/Blog";
import BlogInfo from "../../pages/BlogInfo";

const Routes: RouteObject[] = [
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
  {
    path: "/blog/:id",
    element: <BlogInfo />,
  }
];

export default Routes;