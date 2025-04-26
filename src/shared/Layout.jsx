import React from "react";
import Header from "../components/ui/Header/Header";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      {/* component that persists header and footer in all pages */}
      <Header />

      <div>
        <Outlet />
      </div>

      <div className="cookies_btn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#0e0e0e"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        </svg>
      </div>
    </>
  );
}

export default Layout;
