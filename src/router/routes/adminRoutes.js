import { lazy } from "react";
import { ROUTE_CONSTANTS } from "../../utils/constants/routesConstants";

const AdminDashboard = lazy(() => import("../../views/admin/AdminDashboard"));
const Orders = lazy(() => import("../../views/admin/Orders"));
const Category = lazy(() => import("../../views/admin/Category"));

export const adminRoutes = [
  {
    path: ROUTE_CONSTANTS.ADMIN_DASHBOARD,
    element: <AdminDashboard />,
    role: "admin",
  },
  {
    path: ROUTE_CONSTANTS.ORDERS,
    element: <Orders />,
    role: "admin",
  },
  {
    path: ROUTE_CONSTANTS.CATEGORY,
    element: <Category />,
    role: "admin",
  },
];
