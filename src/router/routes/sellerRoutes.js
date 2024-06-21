import { lazy } from "react";
import { ROUTE_CONSTANTS } from "../../utils/constants/routesConstants";

const Home = lazy(() => import("../../views/pages/Home"));
const SellerDashboard = lazy(() =>
  import("../../views/seller/SellerDashboard")
);
const AddProduct = lazy(() => import("../../views/seller/AddProduct"));
const Products = lazy(() => import("../../views/seller/Products"));
const DiscountProducts = lazy(() =>
  import("../../views/seller/DiscountProducts")
);
const Orders = lazy(() => import("../../views/seller/Orders"));
const Payments = lazy(() => import("../../views/seller/Payments"));
const ChatCustomer = lazy(() => import("../../views/seller/ChatCustomer"));
const ChatSupport = lazy(() => import("../../views/seller/ChatSupport"));
const Profile = lazy(() => import("../../views/seller/Profile"));
const EditProduct = lazy(() => import("../../views/seller/EditProduct"));
const OrderDetails = lazy(() => import("../../views/seller/OrderDetails"));

export const sellerRoutes = [
  {
    path: ROUTE_CONSTANTS.HOME,
    element: <Home />,
    guard: ["admin", "seller"],
  },
  {
    path: ROUTE_CONSTANTS.SELLER_DASHBOARD,
    element: <SellerDashboard />,
    role: "seller",
    status: "active",
  },
  {
    path: ROUTE_CONSTANTS.SELLER_ADD_PRODUCT,
    element: <AddProduct />,
    role: "seller",
    status: "active",
  },
  {
    path: ROUTE_CONSTANTS.SELLER_ALL_PRODUCT,
    element: <Products />,
    role: "seller",
    status: "active",
  },
  {
    path: ROUTE_CONSTANTS.SELLER_DISCOUNT_PRODUCT,
    element: <DiscountProducts />,
    role: "seller",
    status: "active",
  },
  {
    path: ROUTE_CONSTANTS.SELLER_ORDERS,
    element: <Orders />,
    role: "seller",
    guard: ["active", "inactive"],
  },
  {
    path: ROUTE_CONSTANTS.SELLER_PAYMENT,
    element: <Payments />,
    role: "seller",
    status: "active",
  },
  {
    path: ROUTE_CONSTANTS.SELLER_CHAT_CUSTOMER,
    element: <ChatCustomer />,
    role: "seller",
    status: "active",
  },
  {
    path: `${ROUTE_CONSTANTS.SELLER_CHAT_CUSTOMER}/:customerId`,
    element: <ChatCustomer />,
    role: "seller",
    status: "active",
  },
  {
    path: ROUTE_CONSTANTS.SELLER_CHAT_SUPPORT,
    element: <ChatSupport />,
    role: "seller",
    guard: ["active", "inactive", "pending"],
  },
  {
    path: ROUTE_CONSTANTS.SELLER_PROFILE,
    element: <Profile />,
    role: "seller",
    status: "active",
  },
  {
    path: `${ROUTE_CONSTANTS.SELLER_EDIT_PRODUCT}/:productId`,
    element: <EditProduct />,
    role: "seller",
    status: "active",
  },
  {
    path: `${ROUTE_CONSTANTS.SELLER_ORDER_DETAILS}/:orderId`,
    element: <OrderDetails />,
    role: "seller",
    guard: ["active", "inactive"],
  },
];
