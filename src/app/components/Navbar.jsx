'use client'

import { LogIn, ShoppingCart, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext } from "react";
import { InstallContext } from "../context/InstallContextProvider";



const Navbar = () => {
  const {cart}=useContext(InstallContext)
  console.log(cart.length,"navbar")
      const pathname = usePathname()
    const links = (
    <>
      <li>
        <Link
          href="/"
          className={pathname === "/" ? "text-blue-500 font-semibold" : ""}
        >
          Home
        </Link>
      </li>

      <li>
        <Link
          href="/products"
          className={pathname === "/products" ? "text-blue-500 font-semibold" : ""}
        >
          Products
        </Link>
      </li>

      <li>
        <Link
          href="/dashboard/analytics"
          className={pathname === "/dashboard/analytics" ? "text-blue-500 font-semibold" : ""}
        >
          Dashboard
        </Link>
      </li>
    </>
  );

  return (
    <div className="navbar bg-gray-900 text-white shadow-md sticky top-0 z-50 px-4">

      {/* LEFT SIDE */}
      <div className="navbar-start">

        {/* MOBILE MENU */}
        <div className="dropdown lg:hidden">
          <label tabIndex={0} className="btn btn-ghost text-white text-2xl">
            ☰
          </label>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 w-52 bg-gray-900 text-white rounded-box shadow z-[100]"
          >
            {links}
          </ul>
        </div>

        {/* LOGO */}
        <Link href="/" className="btn btn-ghost text-xl text-white">
          <span className="text-3xl font-bold">FretNest</span>
        </Link>
      </div>

      {/* CENTER (DESKTOP ONLY) */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-4 px-1">
          {links}
        </ul>
      </div>

      {/* RIGHT SIDE */}
      <div className="navbar-end flex items-center gap-3">

        {/* CART DROPDOWN */}
        <Link href="/Viewcart" className="dropdown dropdown-end">
          <label tabIndex={0} className="btn relative btn-ghost btn-circle text-white">
            <ShoppingCart />
          </label>

         

  {/* Badge (cart count) */}
  {cart?.length > 0 && (
    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
      {cart.length}
    </span>
  )}

        </Link>

        {/* LOGIN */}
        <button className="hidden sm:flex btn btn-outline btn-sm text-white border-white">
          <LogIn size={16} />
          Login
        </button>n

        {/* SIGNUP */}
        <button className="hidden sm:flex btn btn-primary btn-sm">
          <User size={16} />
          Sign Up
        </button>

      </div>
    </div>
    );
};

export default Navbar;