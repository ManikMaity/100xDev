import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div
      style={{ }}
    >
      <div style={{height: "5%"}}>
        <Navbar />
      </div>

      <div style={{height: "90%"}}>
        <Outlet/>
      </div>

    </div>
  );
}

export default Layout;
