import { lazy } from "react";
import { ROUTE_CONSTANTS } from "../../utils/constants/routesConstants";

const Home = lazy(() => import("../../views/pages/Home"));
const SellerDashboard = lazy(() =>
  import("../../views/seller/SellerDashboard")
);
const AddProduct = lazy(() => import("../../views/seller/AddProduct"));
const Products = lazy(() => import("../../views/seller/Products"));
export const sellerRoutes = [
  {
    path: ROUTE_CONSTANTS.HOME,
    element: <Home />,
    guard: ["admin", "seller"],
  },
  {
    path: ROUTE_CONSTANTS.SELLER_DASHBOARD,
    element: <SellerDashboard />,
    guard: ["seller"],
  },
  {
    path: ROUTE_CONSTANTS.SELLER_ADD_PRODUCT,
    element: <AddProduct />,
    guard: ["seller"],
  },
  {
    path: ROUTE_CONSTANTS.SELLER_ALL_PRODUCT,
    element: <Products />,
    guard: ["seller"],
  },
];
