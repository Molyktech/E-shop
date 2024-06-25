import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { ROUTE_CONSTANTS } from "../../utils/constants/routesConstants";

export default function Home() {
  const { role } = useSelector((state) => state.auth);
  if (role === "seller")
    return <Navigate to={`${ROUTE_CONSTANTS.SELLER_DASHBOARD}`} replace />;
  else if (role === "admin")
    return <Navigate to={`/${ROUTE_CONSTANTS.ADMIN_DASHBOARD}`} replace />;
  else return <Navigate to={`${ROUTE_CONSTANTS.LOGIN}`} replace />;
}
