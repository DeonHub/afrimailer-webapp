import React, { useState } from "react";

const Sidebar = ({ active }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [dropdowns, setDropdowns] = useState({
    staff: false,
    payroll: false,
    reports: false,
    settings: false,
    notifications: false,
  });

  // Toggle function to control sidebar state
  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const toggleDropdown = (key) => {
    setDropdowns((prevDropdowns) => ({
      ...prevDropdowns,
      [key]: !prevDropdowns[key],
    }));
  };

  return (
    <aside
      className={`fixed inset-y-0 z-10 flex flex-col w-72 max-h-screen bg-gray-800 border-r shadow-lg lg:z-auto lg:static lg:shadow-none transition-all transform text-white ${
        !isSidebarOpen ? "-translate-x-full lg:translate-x-0 lg:w-20" : ""
      }`}
    >
      <div className="flex items-center justify-between flex-shrink-0 p-5 border-b border-gray-500">
        <a href="/dashboard"
          className={`text-xl font-semibold leading-8 tracking-wider whitespace-nowrap ${
            !isSidebarOpen ? "lg:justify-center" : "w-50"
          }`}
        >
          {isSidebarOpen ? "AfriHRM" : "AB"}
        </a>
        <button onClick={toggleSidebar} className="p-2 rounded-md">
          <svg
            className={`w-4 h-4 text-white`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 5l7 7-7 7M5 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
      {/* Sidebar Links */}
      <nav className="flex-1 gap-y-5 overflow-hidden hover:overflow-y-auto">
        <ul className="p-5 overflow-hidden space-y-2">
          <li className="text-white">
            <a
              href="/dashboard"
              className={`flex items-center p-2 space-x-2 rounded-md hover:bg-white hover:text-gray-800 ${
                active === "dashboard" ? "bg-white text-gray-800" : ""
              }`}
            >
              <span>
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  class="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
              </span>
              <span className={`${!isSidebarOpen ? "lg:hidden" : ""}`}>
                Dashboard
              </span>
            </a>
          </li>

          <li className="text-white">
            <a
              href="#"
              className={`flex items-center p-2 space-x-2 rounded-md transition-colors duration-300 hover:bg-white hover:text-gray-800 ${
                active === "staff" ? "bg-white text-gray-800" : ""
              }`}
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
                  />
                </svg>
              </span>
              <span className={`${!isSidebarOpen ? "lg:hidden" : ""}`}>
                Staff Management
              </span>
              <span
                className="ml-auto justify-end transition-transform duration-300 transform"
                style={{ lineHeight: "0" }}
              >
                <svg
                  onClick={() => toggleDropdown("staff")}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className={`ml-5 w-4 h-4 ${
                    dropdowns.staff ? "rotate-180" : ""
                  }`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </a>

            {/* Dropdown items */}
            {dropdowns.staff && (
              <ul className="pl-8 space-y-2 overflow-hidden transition-all duration-300 ease-in-out transform text-sm text-gray-200">
                <li>
                  <a
                    href="#"
                    className="block p-1.5 hover:bg-white hover:text-gray-800 rounded-md"
                  >
                    Staff List
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block p-1.5 hover:bg-white hover:text-gray-800 rounded-md"
                  >
                    Roles
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block p-1.5 hover:bg-white hover:text-gray-800 rounded-md"
                  >
                    Departments
                  </a>
                </li>
              </ul>
            )}
          </li>

          <li className="text-white">
            <a
              href="#"
              className={`flex items-center p-2 space-x-2 rounded-md hover:bg-white hover:text-gray-800 ${
                active === "payroll" ? "bg-white text-gray-800" : ""
              }`}
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"
                  />
                </svg>
              </span>
              <span className={`${!isSidebarOpen ? "lg:hidden" : ""}`}>
                Payroll Management
              </span>
              <span
                className="ml-auto transition-transform duration-300 transform"
                style={{ lineHeight: "0" }}
              >
                <svg
                  onClick={() => toggleDropdown("payroll")}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className={`ml-5 w-4 h-4 ${
                    dropdowns.payroll ? "rotate-180" : ""
                  }`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </a>

            {dropdowns.payroll && (
              <ul className="pl-8 space-y-2 overflow-hidden transition-all duration-300 ease-in-out transform text-sm text-gray-200">
                <li>
                  <a
                    href="#"
                    className="block p-1.5 hover:bg-white hover:text-gray-800 rounded-md"
                  >
                    Staff Payments
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block p-1.5 hover:bg-white hover:text-gray-800 rounded-md"
                  >
                    Other Payments
                  </a>
                </li>
              </ul>
            )}
          </li>

          <li className="text-white">
            <a
              href="#"
              className={`flex items-center p-2 space-x-2 rounded-md hover:bg-white hover:text-gray-800 ${
                active === "attendance" ? "bg-white text-gray-800" : ""
              }`}
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                  />
                </svg>
              </span>
              <span className={`${!isSidebarOpen ? "lg:hidden" : ""}`}>
                Attendance and Leave Tracking
              </span>
            </a>
          </li>

          <li className="text-white">
            <a
              href="#"
              className={`flex items-center p-2 space-x-2 rounded-md hover:bg-white hover:text-gray-800 ${
                active === "performance" ? "bg-white text-gray-800" : ""
              }`}
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605"
                  />
                </svg>
              </span>
              <span className={`${!isSidebarOpen ? "lg:hidden" : ""}`}>
                Performance and Analytics
              </span>
            </a>
          </li>

          <li className="text-white">
            <a
              href="#"
              className={`flex items-center p-2 space-x-2 rounded-md hover:bg-white hover:text-gray-800 ${
                active === "task" ? "bg-white text-gray-800" : ""
              }`}
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75"
                  />
                </svg>
              </span>
              <span className={`${!isSidebarOpen ? "lg:hidden" : ""}`}>
                Task and Project Management
              </span>
            </a>
          </li>

          <li className="text-white">
            <a
              href="#"
              className={`flex items-center p-2 space-x-2 rounded-md hover:bg-white hover:text-gray-800 ${
                active === "notifications" ? "bg-white text-gray-800" : ""
              }`}
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5"
                  />
                </svg>
              </span>
              <span className={`${!isSidebarOpen ? "lg:hidden" : ""}`}>
                Notifications
              </span>
            </a>
          </li>

          <li className="text-white">
            <a
              href="/afrimailer"
              className={`flex items-center p-2 space-x-2 rounded-md hover:bg-white hover:text-gray-800 ${
                active === "mailer" ? "bg-white text-gray-800" : ""
              }`}
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                  />
                </svg>
              </span>
              <span className={`${!isSidebarOpen ? "lg:hidden" : ""}`}>
                AfriMailer
              </span>
            </a>
          </li>
        </ul>
      </nav>

      {/* Sidebar footer */}
      <div className="flex-shrink-0 p-2 border-t max-h-14 text-gray-800">
        <a href="/" className="flex items-center justify-center w-full px-4 py-2 space-x-1 font-medium tracking-wider uppercase bg-gray-100 border rounded-md focus:outline-none focus:ring">
          <span>
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>
          </span>
          <span className={`${!isSidebarOpen ? "lg:hidden" : ""}`}>Logout</span>
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;
