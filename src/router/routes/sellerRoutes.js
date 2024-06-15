import { lazy } from "react";
import { ROUTE_CONSTANTS } from "../../utils/constants/routesConstants";

const Home = lazy(() => import("../../views/pages/Home"));
export const sellerRoutes = [
  {
    path: ROUTE_CONSTANTS.HOME,
    element: <Home />,
    guard: ["admin", "seller"],
  },
];
