import { lazy } from "react";
import { ROUTE_CONSTANTS } from "../../utils/constants/routesConstants";
const Home = lazy(() => import("../../views/pages/Home"));
const Login = lazy(() => import("../../views/auth/Login"));
const Register = lazy(() => import("../../views/auth/Register"));
const AdminLogin = lazy(() => import("../../views/auth/AdminLogin"));
const UnAuthorized = lazy(() => import("../../views/pages/UnAuthorized"));

const publicRoutes = [
  {
    path: ROUTE_CONSTANTS.HOME,
    element: <Home />,
  },
  {
    path: ROUTE_CONSTANTS.LOGIN,
    element: <Login />,
  },
  {
    path: ROUTE_CONSTANTS.REGISTER,
    element: <Register />,
  },
  {
    path: ROUTE_CONSTANTS.ADMIN_LOGIN,
    element: <AdminLogin />,
  },
  {
    path: ROUTE_CONSTANTS.UNAUTHORIZED,
    element: <UnAuthorized />,
  },
];

export default publicRoutes;
