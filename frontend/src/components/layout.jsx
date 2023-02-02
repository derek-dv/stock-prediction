import React from "react";
import { Navbar } from "./navbar";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="w-10/12 mx-auto mt-2 h-full">{children}</div>
    </div>
  );
};

export default Layout;
