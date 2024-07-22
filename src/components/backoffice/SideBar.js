import Image from "next/image";
import Link from "next/link";
import React from "react";

const SideBar = () => {
  return (
    <div className="dark:bg-slate-700 bg-white-700 space-y-6 w-60 min-h-screen text-slate-50 p-3 fixed left-0 top-0">
      <Link className="mb-6" href="#">
        <Image src="/cb-logo.png" height={80} width={200} alt="logo"/>
      </Link>
      <div className="space-y-3 flex flex-col text-black dark:text-white">
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/dashboard/catalogue">Catalogue</Link>
        <Link href="/dashboard/customers">Customers</Link>
        <Link href="/dashboard/markets">Markets</Link>
        <Link href="/dashboard/stuff">Stuff</Link>
        <Link href="/dashboard/farmers">Farmers</Link>
        <Link href="/dashboard/orders">Orders</Link>
        <Link href="/dashboard/settings">Settings</Link>
        <Link href="/dashboard/online">Online Store</Link>
      </div>
    </div>
  );
};

export default SideBar;
