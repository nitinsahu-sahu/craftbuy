"use client";
import { AlignJustify, Bell, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { BsMoon, BsSun } from "react-icons/bs";

const NavBar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggleDropdown = (dropdownId) => {
    setOpenDropdown(openDropdown === dropdownId ? null : dropdownId);
  };

  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) null;
  return (
    <div
      className='flex items-center justify-between py-8 h-14 px-12 fixed top-0 w-full dark:bg-slate-800 bg-slate-300'
    >
      {/* Icon */}
      <button>
        <AlignJustify />
      </button>
      {/* 3 Icons */}
      <div className="flex space-x-6">
        <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
          {theme === "light" ? (
            <BsMoon title="dark" />
          ) : (
            <BsSun title="light" />
          )}
        </button>
        <button
          type="button"
          id="dropdownNotification"
          onClick={() => toggleDropdown("dropdownNotification")}
          className={`relative inline-flex items-center p-2 text-sm font-medium text-center rounded-lg focus:ring-4 focus:outline-none ${
            theme === "dark"
              ? "text-white bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
              : "text-gray-900 bg-blue-700 hover:bg-blue-800 focus:ring-blue-300"
          }`}
        >
          <Bell />
          <span className="sr-only">Notifications</span>
          <div
            className={`absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold border-2 rounded-full -top-2 -end-2 ${
              theme === "dark"
                ? "text-white bg-red-500 border-gray-900"
                : "text-white bg-red-500 border-white"
            }`}
          >
            20
          </div>
        </button>
        <button
          onClick={() => toggleDropdown("dropdownUserAvatar")}
          id="dropdownUserAvatarButton"
          className={`flex text-sm rounded-full focus:ring-4 ${
            theme === "dark"
              ? "dark:focus:ring-gray-600"
              : "focus:ring-gray-300"
          }`}
          type="button"
        >
          <span className="sr-only">Open user menu</span>
          <Image
            src="/next.svg"
            height={80}
            width={200}
            alt="profile img"
            className={`w-10 h-10 rounded-full ${
              theme === "dark" ? "bg-gray-700" : "bg-white"
            }`}
          />
        </button>
        {openDropdown === "dropdownUserAvatar" && (
          <div
            id="dropdownInformation"
            className={`z-10 mt-16 right-6 divide-y rounded-lg shadow px-4 text-center absolute ${
              theme === "dark"
                ? "bg-gray-700 divide-gray-600 text-white"
                : "bg-white divide-gray-100 text-gray-900"
            }`}
          >
            <div className="px-4 py-3 text-sm">
              <div>My account</div>
            </div>
            <ul
              className="py-2 text-sm"
              aria-labelledby="dropdownInformationButton"
            >
              <li>
                <a
                  href="#"
                  className={`block px-4 py-2 hover:bg-gray-100 ${
                    theme === "dark"
                      ? "dark:hover:bg-gray-600 dark:hover:text-white"
                      : "hover:bg-gray-200"
                  }`}
                >
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={`block px-4 py-2 hover:bg-gray-100 ${
                    theme === "dark"
                      ? "dark:hover:bg-gray-600 dark:hover:text-white"
                      : "hover:bg-gray-200"
                  }`}
                >
                  Settings
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={`block px-4 py-2 hover:bg-gray-100 ${
                    theme === "dark"
                      ? "dark:hover:bg-gray-600 dark:hover:text-white"
                      : "hover:bg-gray-200"
                  }`}
                >
                  Profile
                </a>
              </li>
            </ul>
            <div className="py-2">
              <a
                href="#"
                className={`block px-4 py-2 text-sm hover:bg-gray-100 ${
                  theme === "dark"
                    ? "dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    : "hover:bg-gray-200 text-gray-700"
                }`}
              >
                Sign out
              </a>
            </div>
          </div>
        )}
        {openDropdown === "dropdownNotification" && (
          <div
            id="dropdownNotification"
            className={`z-10 right-8 mt-16 w-full max-w-sm divide-y rounded-lg shadow absolute ${
              theme === "dark"
                ? "bg-gray-800 divide-gray-700"
                : "bg-white divide-gray-100"
            }`}
            aria-labelledby="dropdownNotificationButton"
          >
            <div
              className={`block px-4 py-2 font-medium text-center rounded-t-lg ${
                theme === "dark"
                  ? "bg-gray-800 text-white"
                  : "bg-gray-50 text-gray-700"
              }`}
            >
              Notifications
            </div>
            <div
              className={`divide-y ${
                theme === "dark" ? "divide-gray-700" : "divide-gray-100"
              }`}
            >
              <a
                href="#"
                className={`flex px-4 py-3 ${
                  theme === "dark"
                    ? "dark:hover:bg-gray-700"
                    : "hover:bg-gray-100"
                }`}
              >
                <div className="flex-shrink-0">
                  <Image
                    src="/next.svg"
                    height={80}
                    width={200}
                    alt="profile img"
                    className={`w-10 h-10 rounded-full ${
                      theme === "dark" ? "bg-gray-700" : "bg-white"
                    }`}
                  />
                  <div
                    className={`absolute flex items-center justify-center w-5 h-5 ms-6 -mt-5 border rounded-full ${
                      theme === "dark"
                        ? "bg-blue-600 border-gray-800"
                        : "bg-blue-600 border-white"
                    }`}
                  >
                    <svg
                      className="w-2 h-2 text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 18 18"
                    >
                      <path d="M1 18h16a1 1 0 0 0 1-1v-6h-4.439a.99.99 0 0 0-.908.6 3.978 3.978 0 0 1-7.306 0 .99.99 0 0 0-.908-.6H0v6a1 1 0 0 0 1 1Z" />
                      <path d="M4.439 9a2.99 2.99 0 0 1 2.742 1.8 1.977 1.977 0 0 0 3.638 0A2.99 2.99 0 0 1 13.561 9H17.8L15.977.783A1 1 0 0 0 15 0H3a1 1 0 0 0-.977.783L.2 9h4.239Z" />
                    </svg>
                  </div>
                </div>
                <div className="w-full ps-3">
                  <div
                    className={`text-sm mb-1.5 ${
                      theme === "dark" ? "dark:text-gray-400" : "text-gray-500"
                    }`}
                  >
                    New message from{" "}
                    <span
                      className={`font-semibold ${
                        theme === "dark" ? "dark:text-white" : "text-gray-900"
                      }`}
                    >
                      Jese Leos
                    </span>
                  </div>
                  <div
                    className={`text-xs ${
                      theme === "dark" ? "dark:text-blue-500" : "text-blue-600"
                    }`}
                  >
                    a few moments ago
                  </div>
                </div>
              </a>
              <a
                href="#"
                className={`flex px-4 py-3 ${
                  theme === "dark"
                    ? "dark:hover:bg-gray-700"
                    : "hover:bg-gray-100"
                }`}
              >
                <div className="flex-shrink-0">
                  <Image
                    src="/next.svg"
                    height={80}
                    width={200}
                    alt="profile img"
                    className={`w-10 h-10 rounded-full ${
                      theme === "dark" ? "bg-gray-700" : "bg-white"
                    }`}
                  />
                  <div
                    className={`absolute flex items-center justify-center w-5 h-5 ms-6 -mt-5 border rounded-full ${
                      theme === "dark"
                        ? "bg-gray-900 border-gray-800"
                        : "bg-gray-900 border-white"
                    }`}
                  >
                    <svg
                      className="w-2 h-2 text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 18"
                    >
                      <path d="M6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Zm11-3h-2V5a1 1 0 0 0-2 0v2h-2a1 1 0 1 0 0 2h2v2a1 1 0 0 0 2 0V9h2a1 1 0 1 0 0-2Z" />
                    </svg>
                  </div>
                </div>
                <div className="w-full ps-3">
                  <div
                    className={`text-sm mb-1.5 ${
                      theme === "dark" ? "dark:text-gray-400" : "text-gray-500"
                    }`}
                  >
                    <span
                      className={`font-semibold ${
                        theme === "dark" ? "dark:text-white" : "text-gray-900"
                      }`}
                    >
                      Joseph Mcfall
                    </span>{" "}
                    and{" "}
                    <span
                      className={`font-medium ${
                        theme === "dark" ? "dark:text-white" : "text-gray-900"
                      }`}
                    >
                      5 others
                    </span>{" "}
                    started following you.
                  </div>
                  <div
                    className={`text-xs ${
                      theme === "dark" ? "dark:text-blue-500" : "text-blue-600"
                    }`}
                  >
                    10 minutes ago
                  </div>
                </div>
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
