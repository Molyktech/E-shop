import { lazy } from "react";
import { ROUTE_CONSTANTS } from "../../utils/constants/routesConstants";
const Login = lazy(() => import("../../views/auth/Login"));
const Register = lazy(() => import("../../views/auth/Register"));
const AdminLogin = lazy(() => import("../../views/auth/AdminLogin"));

const publicRoutes = [
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
];

export default publicRoutes;
