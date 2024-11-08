import React, { useState } from 'react';

const Header = ({ greetings }) => {
  const [isSearchBoxOpen, setIsSearchBoxOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [isAvatarOpen, setIsAvatarOpen] = useState(false);

  console.log("greetings :>> ", greetings);

  const handleToggle = () => {
    console.log("hello")
    toggleSidebar();
  }

  return (
<header className="flex-shrink-0 border-b  bg-white shadow-md">
            <div className="flex items-center justify-between p-4">
              {/* Navbar left */}
              <div className="flex items-center space-x-3">
                <span className="p-2 text-xl font-semibold tracking-wider uppercase lg:hidden">
                  AfroBoard
                </span>
              </div>

              {/* Mobile search box */}
              {isSearchBoxOpen && (
                <div
                  className="fixed inset-0 z-10 bg-black bg-opacity-20"
                  style={{
                    backdropFilter: "blur(14px)",
                    WebkitBackdropFilter: "blur(14px)",
                  }}
                >
                  <div
                    onClick={() => setIsSearchBoxOpen(false)}
                    className="absolute inset-x-0 flex items-center justify-between p-2 bg-white shadow-md"
                  >
                    <div className="flex items-center flex-1 px-2 space-x-2">
                      {/* search icon */}
                      <span>
                        <svg
                          className="w-6 h-6 text-gray-500"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                          />
                        </svg>
                      </span>
                      <input
                        type="text"
                        placeholder="Search"
                        className="w-full px-4 py-3 text-gray-600 rounded-md focus:bg-gray-100 focus:outline-none"
                      />
                    </div>
                    {/* Close button */}
                    <button
                      onClick={() => setIsSearchBoxOpen(false)}
                      className="flex-shrink-0 p-4 rounded-md"
                    >
                      <svg
                        className="w-4 h-4 text-gray-500"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              )}

              {/* Desktop search box */}
              <div className="items-center hidden px-2 space-x-2 md:flex-1 md:flex md:mr-auto md:ml-5">
                {/* search icon */}
                <span>
                  <svg
                    className="w-5 h-5 text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </span>
                <input
                  type="text"
                  placeholder="Search"
                  className="px-4 py-3 border rounded-md hover:bg-gray-100 lg:max-w-sm md:py-2 md:flex-1 focus:outline-none md:focus:bg-gray-100 md:focus:shadow md:focus:border"
                />
              </div>

              {/* Navbar right */}
              <div className="relative flex items-center space-x-3">
                {/* Search button */}
                <button
                  onClick={() => setIsSearchBoxOpen(true)}
                  className="p-2 bg-gray-100 rounded-full md:hidden focus:outline-none focus:ring hover:bg-gray-200"
                >
                  <svg
                    className="w-6 h-6 text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>

                {/* Notification Button */}
                <div className="relative">
                  <div className="absolute right-0 p-1 bg-red-400 rounded-full animate-ping"></div>
                  <div className="absolute right-0 p-1 bg-red-400 border rounded-full"></div>
                  <button
                    onClick={() => setIsNotificationOpen(!isNotificationOpen)}
                    className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 focus:outline-none focus:ring"
                  >
                    <svg
                      className="w-6 h-6 text-gray-500"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                      />
                    </svg>
                  </button>

                  {/* Dropdown card */}
                  {isNotificationOpen && (
                    <div className="absolute w-48 max-w-md mt-3 transform bg-white rounded-md shadow-lg -translate-x-3/4 min-w-max">
                      <div className="p-4 font-medium border-b">
                        <span className="text-gray-800">Notification</span>
                      </div>
                      <ul className="flex flex-col p-2 my-2 space-y-1">
                        <li>
                          <a
                            href="#"
                            className="block px-2 py-1 transition rounded-md hover:bg-gray-100"
                          >
                            Link
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block px-2 py-1 transition rounded-md hover:bg-gray-100"
                          >
                            Another Link
                          </a>
                        </li>
                      </ul>
                      <div className="flex items-center justify-center p-4 text-blue-700 underline border-t">
                        <a href="#">See All</a>
                      </div>
                    </div>
                  )}
                </div>

                {/* Avatar button */}
                <div className="relative">
                  <button
                    onClick={() => setIsAvatarOpen(!isAvatarOpen)}
                    className="p-1 bg-gray-200 rounded-full focus:outline-none focus:ring"
                  >
                    <img
                      className="object-cover w-8 h-8 rounded-full"
                      src="https://afriaminternational.com/wp-content/uploads/2024/06/Mandy.jpg"
                      alt="Ahmed Kamel"
                    />
                  </button>
                  {/* Green dot */}
                  <div className="absolute right-0 p-1 bg-green-400 rounded-full bottom-3 animate-ping"></div>
                  <div className="absolute right-0 p-1 bg-green-400 border border-white rounded-full bottom-3"></div>

                  {/* Dropdown card */}
                  {isAvatarOpen && (
                    <div className="absolute w-48 max-w-md mt-3 transform bg-white rounded-md shadow-lg -translate-x-3/4 min-w-max">
                      <div className="p-4 font-medium border-b">
                        <span className="text-gray-800">Amanda Nuamah</span>
                      </div>
                      <ul className="flex flex-col p-2 my-2 space-y-1">
                        <li>
                          <a
                            href="/profile"
                            className="block px-2 py-1 transition rounded-md hover:bg-gray-100"
                          >
                            Profile
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block px-2 py-1 transition rounded-md hover:bg-gray-100"
                          >
                            Account Settings
                          </a>
                        </li>
                        <li>
                          <a
                            href="/"
                            className="block px-2 py-1 transition rounded-md hover:bg-gray-100"
                          >
                            Log Out
                          </a>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </header>

  );
};

export default Header;
