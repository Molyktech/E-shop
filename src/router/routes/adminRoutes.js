import { lazy } from "react";
import { ROUTE_CONSTANTS } from "../../utils/constants/routesConstants";

const AdminDashboard = lazy(() => import("../../views/admin/AdminDashboard"));
const Orders = lazy(() => import("../../views/admin/Orders"));
const Category = lazy(() => import("../../views/admin/Category"));
const Sellers = lazy(() => import("../../views/admin/Sellers"));
const PaymentRequest = lazy(() => import("../../views/admin/PaymentRequest"));
const DeactivateSeller = lazy(() =>
  import("../../views/admin/DeactivateSeller")
);

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
  {
    path: ROUTE_CONSTANTS.SELLERS,
    element: <Sellers />,
    role: "admin",
  },
  {
    path: ROUTE_CONSTANTS.PAYMENT_REQUEST,
    element: <PaymentRequest />,
    role: "admin",
  },
  {
    path: ROUTE_CONSTANTS.DEACTIVATE_SELLERS,
    element: <DeactivateSeller />,
    role: "admin",
  },
];
