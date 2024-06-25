import { AiOutlineDashboard, AiOutlineShoppingCart } from "react-icons/ai";
import { BiCategory } from "react-icons/bi";
import { FaUserTimes, FaUsers } from "react-icons/fa";
import { MdPayment } from "react-icons/md";
import { FaCodePullRequest } from "react-icons/fa6";
import { IoIosChatbubbles } from "react-icons/io";
import { IoMdAdd } from "react-icons/io";
import { MdViewList } from "react-icons/md";
import { TbBasketDiscount } from "react-icons/tb";
import { BsCartCheck } from "react-icons/bs";
import { IoChatbubbles } from "react-icons/io5";
import { BsFillChatQuoteFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { ROUTE_CONSTANTS } from "../utils/constants/routesConstants";

export const allNav = [
  {
    id: 1,
    title: "Dashboard",
    icon: <AiOutlineDashboard />,
    role: "admin",
    path: `/${ROUTE_CONSTANTS.ADMIN_DASHBOARD}`,
  },
  {
    id: 2,
    title: "Orders",
    icon: <AiOutlineShoppingCart />,
    role: "admin",
    path: ROUTE_CONSTANTS.ORDERS,
  },
  {
    id: 3,
    title: "Category",
    icon: <BiCategory />,
    role: "admin",
    path: ROUTE_CONSTANTS.CATEGORY,
  },
  {
    id: 4,
    title: "Sellers",
    icon: <FaUsers />,
    role: "admin",
    path: ROUTE_CONSTANTS.SELLERS,
  },
  {
    id: 5,
    title: "Payment Request",
    icon: <MdPayment />,
    role: "admin",
    path: ROUTE_CONSTANTS.PAYMENT_REQUEST,
  },
  {
    id: 6,
    title: "Deactivate Seller",
    icon: <FaUserTimes />,
    role: "admin",
    path: ROUTE_CONSTANTS.DEACTIVATE_SELLERS,
  },
  {
    id: 7,
    title: "Seller Request",
    icon: <FaCodePullRequest />,
    role: "admin",
    path: ROUTE_CONSTANTS.SELLERS_REQUEST,
  },
  {
    id: 8,
    title: "Live Chat",
    icon: <IoIosChatbubbles />,
    role: "admin",
    path: ROUTE_CONSTANTS.CHAT_SELLER,
  },
  {
    id: 9,
    title: "Dashboard",
    icon: <AiOutlineDashboard />,
    role: "seller",
    path: ROUTE_CONSTANTS.SELLER_DASHBOARD,
  },
  {
    id: 10,
    title: "Add Product",
    icon: <IoMdAdd />,
    role: "seller",
    path: ROUTE_CONSTANTS.SELLER_ADD_PRODUCT,
  },
  {
    id: 11,
    title: "All Product",
    icon: <MdViewList />,
    role: "seller",
    path: ROUTE_CONSTANTS.SELLER_ALL_PRODUCT,
  },
  {
    id: 12,
    title: "Discount Product",
    icon: <TbBasketDiscount />,
    role: "seller",
    path: ROUTE_CONSTANTS.SELLER_DISCOUNT_PRODUCT,
  },
  {
    id: 13,
    title: "Orders",
    icon: <BsCartCheck />,
    role: "seller",
    path: ROUTE_CONSTANTS.SELLER_ORDERS,
  },
  {
    id: 14,
    title: "Payments",
    icon: <MdPayment />,
    role: "seller",
    path: ROUTE_CONSTANTS.SELLER_PAYMENT,
  },
  {
    id: 15,
    title: "Chat-Customer",
    icon: <IoChatbubbles />,
    role: "seller",
    path: ROUTE_CONSTANTS.SELLER_CHAT_CUSTOMER,
  },
  {
    id: 16,
    title: "Chat-Support",
    icon: <BsFillChatQuoteFill />,
    role: "seller",
    path: ROUTE_CONSTANTS.SELLER_CHAT_SUPPORT,
  },
  {
    id: 16,
    title: "Profile",
    icon: <CgProfile />,
    role: "seller",
    path: ROUTE_CONSTANTS.SELLER_PROFILE,
  },
];
