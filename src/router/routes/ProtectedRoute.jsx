import React, { Suspense } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { ROUTE_CONSTANTS } from "../../utils/constants/routesConstants";

const ProtectedRoute = ({ route, children }) => {
  const { role, userInfo } = useSelector((state) => state.auth);
  console.log("route", route);
  if (role) {
    if (userInfo) {
      if (userInfo.role === route.role) {
        if (route.status) {
          if (route.status === userInfo.status) {
            return <Suspense fallback={null}>{children}</Suspense>;
          } else {
            if (userInfo.status === "pending") {
              return <Navigate to={ROUTE_CONSTANTS.SELLER_PENDING} replace />;
            } else {
              return (
                <Navigate to={ROUTE_CONSTANTS.SELLER_INACTIVE``} replace />
              );
            }
          }
        }
      } else {
        if (route.guard) {
          if (route.guard.some((r) => r === userInfo.status)) {
            return <Suspense fallback={null}>{children}</Suspense>;
          } else {
            return <Navigate to={ROUTE_CONSTANTS.SELLER_PENDING} replace />;
          }
        } else {
          return <Suspense fallback={null}>{children}</Suspense>;
        }
      }
    } else {
      return <Navigate to="/unauthorized" replace />;
    }
  } else {
    return <Navigate to={`${ROUTE_CONSTANTS.LOGIN}`} replace />;
  }
};
export default ProtectedRoute;
