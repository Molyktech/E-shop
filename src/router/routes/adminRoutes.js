import { lazy } from "react";
import { ROUTE_CONSTANTS } from "../../utils/constants/routesConstants";

const AdminDashboard = lazy(() => import("../../views/admin/AdminDashboard"));

export const adminRoutes = [
  {
    path: ROUTE_CONSTANTS.ADMIN_DASHBOARD,
    element: <AdminDashboard />,
    role: "admin",
  },
];
