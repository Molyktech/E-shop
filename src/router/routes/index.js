import { privateRoutes } from "./privateRoutes";
import MainLayout from "../../layout/MainLayout";
import { ROUTE_CONSTANTS } from "../../utils/constants/routesConstants";

export const getRoutes = () => {
  return {
    path: ROUTE_CONSTANTS.HOME,
    element: <MainLayout />,
    children: privateRoutes,
  };
};
