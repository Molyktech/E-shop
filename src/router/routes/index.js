import { privateRoutes } from "./privateRoutes";
import MainLayout from "../../layout/MainLayout";
import { ROUTE_CONSTANTS } from "../../utils/constants/routesConstants";
import ProtectedRoute from "./ProtectedRoute";

export const getRoutes = () => {

  privateRoutes.map((route) => {
    return (route.element = (
      <ProtectedRoute route={route}>{route.element}</ProtectedRoute>
    ));
  });
  return {
    path: ROUTE_CONSTANTS.HOME,
    element: <MainLayout />,
    children: privateRoutes,
  };
};
