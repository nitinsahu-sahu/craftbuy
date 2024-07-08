"use client";
import { AlignJustify, Bell, Sun } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

const NavBar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (dropdownId) => {
    setOpenDropdown(openDropdown === dropdownId ? null : dropdownId);
  };

  return (
    <div className="flex items-center justify-between bg-slate-800 text-slate-50 py-8 h-14 px-12 fixed top-0 w-full">
      {/* Icon */}
      <button>
        <AlignJustify />
      </button>
      {/* 3 Icons */}
      <div className="flex space-x-6">
        <button>
          <Sun />
        </button>
        <button
          type="button"
          id="dropdownNotification"
          onClick={() => toggleDropdown("dropdownNotification")}
          className="relative inline-flex items-center p-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <Bell />
          <span className="sr-only">Notifications</span>
          <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">
            20
          </div>
        </button>
        <button
          onClick={() => toggleDropdown("dropdownUserAvatar")}
          id="dropdownUserAvatarButton"
          className="flex text-sm rounded-full md:me-0 focus:ring-4 dark:focus:ring-gray-600"
          type="button"
        >
          <span className="sr-only">Open user menu</span>
          <Image
            src="/next.svg"
            height={80}
            width={200}
            alt="profile img"
            className="bg-white w-10 h-10 rounded-full"
          />
        </button>
        {openDropdown === "dropdownUserAvatar" && (
          <div
            id="dropdownInformation"
            className="z-10 mt-16 right-6 bg-white divide-y divide-gray-100 rounded-lg shadow px-4 text-center dark:bg-gray-700 dark:divide-gray-600 absolute"
          >
            <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
              <div>My account</div>
            </div>
            <ul
              className="py-2 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownInformationButton"
            >
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Settings
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Profile
                </a>
              </li>
            </ul>
            <div className="py-2">
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
              >
                Sign out
              </a>
            </div>
          </div>
        )}
        {openDropdown === "dropdownNotification" && (
          <div
            id="dropdownNotification"
            className="z-10 right-8 mt-16 w-full max-w-sm bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-800 dark:divide-gray-700 absolute"
            aria-labelledby="dropdownNotificationButton"
          >
            <div className="block px-4 py-2 font-medium text-center text-gray-700 rounded-t-lg bg-gray-50 dark:bg-gray-800 dark:text-white">
              Notifications
            </div>
            <div className="divide-y divide-gray-100 dark:divide-gray-700">
              <a
                href="#"
                className="flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <div className="flex-shrink-0">
                  <Image
                    src="/next.svg"
                    height={80}
                    width={200}
                    alt="profile img"
                    className="bg-white w-10 h-10 rounded-full"
                  />
                  <div className="absolute flex items-center justify-center w-5 h-5 ms-6 -mt-5 bg-blue-600 border border-white rounded-full dark:border-gray-800">
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
                  <div className="text-gray-500 text-sm mb-1.5 dark:text-gray-400">
                    New message from{" "}
                    <span className="font-semibold text-gray-900 dark:text-white">
                      Jese Leos
                    </span>
                  </div>
                  <div className="text-xs text-blue-600 dark:text-blue-500">
                    a few moments ago
                  </div>
                </div>
              </a>
              <a
                href="#"
                className="flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <div className="flex-shrink-0">
                  <Image
                    src="/next.svg"
                    height={80}
                    width={200}
                    alt="profile img"
                    className="bg-white w-10 h-10 rounded-full"
                  />
                  <div className="absolute flex items-center justify-center w-5 h-5 ms-6 -mt-5 bg-gray-900 border border-white rounded-full dark:border-gray-800">
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
                  <div className="text-gray-500 text-sm mb-1.5 dark:text-gray-400">
                    <span className="font-semibold text-gray-900 dark:text-white">
                      Joseph Mcfall
                    </span>{" "}
                    and{" "}
                    <span className="font-medium text-gray-900 dark:text-white">
                      5 others
                    </span>{" "}
                    started following you.
                  </div>
                  <div className="text-xs text-blue-600 dark:text-blue-500">
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
