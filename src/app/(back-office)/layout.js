import React from "react";
import SideBar from "@/components/backoffice/SideBar";
import NavBar from "@/components/backoffice/NavBar";
import BreadCrumbs from "@/components/BreadCrumbs/BreadCrumbs";
const Layout = ({ children }) => {
  return (
    <div className="flex">
      {/* sidebar */}
      <SideBar />
      <div className="w-full ">
        {/* navbar */}
        <NavBar />
        {/* <BreadCrumbs /> */}
        {/* main content */}
        <main className="p-8 bg-slate-950 text-slate-50 min-h-screen mt-16 ml-60">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
