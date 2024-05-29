import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Table from "../components/Table";

const Dashboard = () => {
  return (
    <div>
      <Sidebar />
      <div className="p-4 sm:ml-64">
        <Navbar />
      </div>
      <div className="p-[37px] sm:ml-64 bg-[#f7f9fb] h-100">
        <div className=" p-6 bg-white border border-gray-200 rounded-lg shadow w-100 dark:bg-gray-800 dark:border-gray-700 md:pt-[48px] md:ps-[56px]">
          <div className="heading pb-[28px]">
            <h1 className="text-[24px] font-[700] text-[#1C1C1C] ">
              Recent Orders
            </h1>
            <p className="text-[14px] font-[400] text-[#9FA1A6] ">
              You are viewing the total number of orders placed so far
            </p>
          </div>
          <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
            <ul
              className="flex flex-wrap -mb-px text-sm font-medium text-center"
              id="default-styled-tab"
              data-tabs-toggle="#default-styled-tab-content"
              data-tabs-active-classes="text-purple-600 hover:text-purple-600 dark:text-purple-500 dark:hover:text-purple-500 border-purple-600 dark:border-purple-500"
              data-tabs-inactive-classes="dark:border-transparent text-gray-500 hover:text-gray-600 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300"
              role="tablist"
            >
              <li className="me-2" role="presentation">
                <button
                  className="inline-block p-4 border-b-2 rounded-t-lg"
                  id="profile-styled-tab"
                  data-tabs-target="#styled-profile"
                  type="button"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="false"
                >
                  Total Orders
                </button>
              </li>
              <li className="me-2" role="presentation">
                <button
                  className="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                  id="dashboard-styled-tab"
                  data-tabs-target="#styled-dashboard"
                  type="button"
                  role="tab"
                  aria-controls="dashboard"
                  aria-selected="false"
                >
                  Pending Orders
                </button>
              </li>
              <li className="me-2" role="presentation">
                <button
                  className="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                  id="settings-styled-tab"
                  data-tabs-target="#styled-settings"
                  type="button"
                  role="tab"
                  aria-controls="settings"
                  aria-selected="false"
                >
                  Approved Orders
                </button>
              </li>
              <li role="presentation">
                <button
                  className="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                  id="contacts-styled-tab"
                  data-tabs-target="#styled-contacts"
                  type="button"
                  role="tab"
                  aria-controls="contacts"
                  aria-selected="false"
                >
                  Completed Orders
                </button>
              </li>
            </ul>
          </div>
          <div id="default-styled-tab-content">
            <div
              className="hidden rounded-lg bg-gray-50 dark:bg-gray-800"
              id="styled-profile"
              role="tabpanel"
              aria-labelledby="profile-tab"
            >
              <Table />
            </div>
            <div
              className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
              id="styled-dashboard"
              role="tabpanel"
              aria-labelledby="dashboard-tab"
            >
              <p className="text-sm text-gray-500 dark:text-gray-400">
                This is some placeholder content the{" "}
                <strong className="font-medium text-gray-800 dark:text-white">
                  Dashboard tab's associated content
                </strong>
                . Clicking another tab will toggle the visibility of this one
                for the next. The tab JavaScript swaps classes to control the
                content visibility and styling.
              </p>
            </div>
            <div
              className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
              id="styled-settings"
              role="tabpanel"
              aria-labelledby="settings-tab"
            >
              <p className="text-sm text-gray-500 dark:text-gray-400">
                This is some placeholder content the{" "}
                <strong className="font-medium text-gray-800 dark:text-white">
                  Settings tab's associated content
                </strong>
                . Clicking another tab will toggle the visibility of this one
                for the next. The tab JavaScript swaps classes to control the
                content visibility and styling.
              </p>
            </div>
            <div
              className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
              id="styled-contacts"
              role="tabpanel"
              aria-labelledby="contacts-tab"
            >
              <p className="text-sm text-gray-500 dark:text-gray-400">
                This is some placeholder content the{" "}
                <strong className="font-medium text-gray-800 dark:text-white">
                  Contacts tab's associated content
                </strong>
                . Clicking another tab will toggle the visibility of this one
                for the next. The tab JavaScript swaps classes to control the
                content visibility and styling.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
