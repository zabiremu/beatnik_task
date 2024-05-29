import React from "react";
import logo from "../assets/image/ABC logo.png";
import dashboard from "../assets/image/icons/dashboard.png";
import Order from "../assets/image/icons/Vector (1).png";
import Request from "../assets/image/icons/ic_sharp-edit-note.png";
import Shop from "../assets/image/icons/fluent-mdl2_shop.png";
import Plan from "../assets/image/icons/fluent-mdl2_diet-plan-notebook.png";
import forcast from "../assets/image/icons/mdi_graph-bell-curve-cumulative.png";
import signIn from "../assets/image/icons/ion_settings-outline.png";
import users from "../assets/image/icons/ph_users.png";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div>
      <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 text-sm text-gray-500 rounded-lg ms-3 sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clip-rule="evenodd"
            fill-rule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        id="default-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 drop-shadow-sm"
        aria-label="Sidebar"
      >
        <div className="flex flex-col justify-between h-full px-3 py-4 overflow-y-auto bg-white dark:bg-gray-800 ">
          <ul className="font-medium ">
            <li>
              <Link
                to="/dashboard"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <span className="ms-3">
                  <img src={logo} alt="" className="w-[101px] h-[42px]" />
                </span>
              </Link>
            </li>
            <li className="mt-[40px]">
              <span className="ms-3 text-[12px] font-[400] text-[#969696]">
                Main Menu
              </span>
            </li>
            <li className="mt-[8px]">
              <Link
                to="/dashboard"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-[#EBEEF0] dark:hover:bg-[#EBEEF0] group"
              >
                <img
                  src={dashboard}
                  alt=""
                  className="w-[15px] h-[15px] text-[#111111] transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                />

                <span className="ms-3 text-[16px] font-[500]">Dashboard</span>
              </Link>
            </li>
            <li className="mt-[8px]">
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <img
                  src={Order}
                  alt=""
                  className="w-[15px] h-[15px] text-[#111111] transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                />
                <span className="flex-1 ms-3 whitespace-nowrap ms-3 text-[16px] font-[500]">
                  Order
                </span>
                <span className="inline-flex items-center justify-center px-2 text-sm font-medium text-gray-800 bg-gray-100 rounded-full ms-3 dark:bg-gray-700 dark:text-gray-300"></span>
              </a>
            </li>
            <li className="mt-[8px]">
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <img
                  src={Request}
                  alt=""
                  className="w-[15px] h-[15px] text-[#111111] transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                />
                <span className="flex-1 ms-3 whitespace-nowrap ms-3 text-[16px] font-[500]">
                  Requests
                </span>
                <span className="inline-flex items-center justify-center w-3 h-3 p-3 text-sm font-medium text-blue-800 rounded-full ms-3 "></span>
              </a>
            </li>
            <li className="mt-[8px]">
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <img
                  src={Shop}
                  alt=""
                  className="w-[15px] h-[15px] text-[#111111] transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                />
                <span className="flex-1 ms-3 whitespace-nowrap ms-3 text-[16px] font-[500]">
                  Shop Floor
                </span>
              </a>
            </li>
            <li className="mt-[8px]">
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <img
                  src={Plan}
                  alt=""
                  className="w-[15px] h-[15px] text-[#111111] transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                />
                <span className="flex-1 ms-3 whitespace-nowrap  ms-3 text-[16px] font-[500]">
                  Production Plan
                </span>
              </a>
            </li>
            <li className="mt-[8px]">
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <img
                  src={forcast}
                  alt=""
                  className="w-[15px] h-[15px] text-[#111111] transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                />
                <span className="flex-1 ms-3 whitespace-nowrap  ms-3 text-[16px] font-[500]">
                  Forcast
                </span>
              </a>
            </li>
          </ul>

          <ul className="font-medium ">
            <hr className="text-black" />
            <li className="mt-[8px]">
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <img
                  src={users}
                  alt=""
                  className="w-[20px] h-[13px] text-[#111111] transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                />
                <span className="flex-1 ms-3 whitespace-nowrap  ms-3 text-[16px] font-[500]">
                  Users
                </span>
              </a>
            </li>
            <li className="mt-[8px]">
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <img
                  src={signIn}
                  alt=""
                  className="w-[15px] h-[15px] text-[#111111] transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                />
                <span className="flex-1 ms-3 whitespace-nowrap  ms-3 text-[16px] font-[500]">
                  SignIn
                </span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
