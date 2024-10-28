import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div
      style={{ height: "100vh", backgroundColor: "#252525", color: "white" }}
    >
      <div style={{height: "10%"}}>
        <Navbar />
      </div>

      <div style={{height: "90%"}}>
        <Outlet/>
      </div>

    </div>
  );
}

export default Layout;
