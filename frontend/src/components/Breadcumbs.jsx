import React from "react";

const Breadcumbs = ({ pageTitle, subTitle }) => {
  return (
    <div>
      <nav className="flex" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
          <li className="inline-flex items-center">
            <a
              href="#"
              className="inline-flex items-center text-sm bg-[#1E0202] font-medium text-white px-[8px] py-[4px]  rounded-[2px] hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
            >
              A
            </a>
          </li>
          <li>
            <div className="flex items-center">
              <svg
                className="w-3 h-3 mx-1 text-gray-400 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <a
                href="#"
                className="text-[16px] font-[400] text-[#130101]ms-1  md:ms-2"
              >
                Manufacturing
              </a>
            </div>
          </li>
          <li aria-current="page">
            <div className="flex items-center">
              <svg
                className="w-3 h-3 mx-1 text-gray-400 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <span className="ms-1 text-[16px] font-[400] text-[#130101] md:ms-2 ">
                {pageTitle}
              </span>
            </div>
          </li>
          {subTitle ? (
            <li aria-current="page">
              <div className="flex items-center">
                <svg
                  className="w-3 h-3 mx-1 text-gray-400 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
                <span className="ms-1 text-[16px] font-[400] text-[#130101] md:ms-2 ">
                  {subTitle}
                </span>
              </div>
            </li>
          ) : (
            <></>
          )}
        </ol>
      </nav>
    </div>
  );
};

export default Breadcumbs;
