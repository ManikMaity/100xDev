import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <div className="navbar h-16 bg-base-100">
      <div className="flex-1">
        <Link href={"/"} className="btn btn-ghost text-xl">
          TodoApp
        </Link>
      </div>
      
      <div className="flex-none gap-2">
      <ul className="menu menu-horizontal px-1">
        <li>
          <Link href={"/auth/signin"}>Signin</Link>
        </li>
        <li>
          <Link href={"/auth/signup"}>Signup</Link>
        </li>
      </ul>

        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link href="/user" className="justify-between">Profile</Link>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
