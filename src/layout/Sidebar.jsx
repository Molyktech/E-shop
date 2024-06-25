import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { getNav } from "../navigation/index";
import { ROUTE_CONSTANTS } from "../utils/constants/routesConstants";
import { BiLogOutCircle } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";

export default function Sidebar({ showSidebar, setShowSidebar }) {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const [allNav, setAllNav] = useState([]);
  const { role } = useSelector((state) => state.auth);

  useEffect(() => {
    const navs = getNav(role);
    setAllNav(navs);
  }, [role]);

  return (
    <div>
      <div
        onClick={() => setShowSidebar(false)}
        className={`fixed duration-200 ${
          !showSidebar ? "invisible" : "visible"
        } w-screen h-screen bg-[#95d8fe37] top-0 left-0 z-10`}
      ></div>

      <div
        className={`w-[260px] fixed bg-[#8A30E2] z-50 top-0 h-screen shadow-[0_0_15px_0_rgb(34_41_47_/_5%)] transition-all ${
          showSidebar ? "left-0" : "-left-[260px] lg:left-0"
        } `}
      >
        <div className="h-[70px] flex justify-center items-center">
          <Link to={ROUTE_CONSTANTS.HOME} className="w-[180px] h-[50px]">
            <img
              className="w-full h-full"
              src="http://localhost:3000/images/logo.png"
              alt=""
            />
          </Link>
        </div>
        <div className="px-[16px]">
          <ul>
            {allNav.map((nav, index) => (
              <li key={index}>
                <Link
                  to={nav.path}
                  className={`${
                    pathname.trim() === nav.path.trim()
                      ? "bg-[#2A0D57] shadow-indigo-500/50 text-white duration-500"
                      : "text-[#ffffff] font-bold duration-200 "
                  } px-[12px] py-[9px] rounded-sm flex justify-start items-center gap-[12px] hover:pl-4 transition-all w-full mb-1 `}
                >
                  <span>{nav.icon}</span>
                  <span>{nav.title}</span>
                </Link>
              </li>
            ))}
            <li>
              <button className="text-[#fff] font-bold duration-200 px-[12px] py-[9px] rounded-sm flex justify-start items-center gap-[12px] hover:pl-4 transition-all w-full mb-1">
                <span>
                  <BiLogOutCircle />
                </span>
                <span>Logout</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
