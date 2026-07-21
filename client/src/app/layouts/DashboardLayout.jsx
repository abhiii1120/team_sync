import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router";
import AsideNav from "../../features/dashboard/ui/components/AsideNav";
import TopNav from "../../features/dashboard/ui/components/TopNav";

const DashboardLayout = () => {
  let { mode } = useSelector((store) => store.theme);

  useEffect(() => {
    if (mode === "light") {
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
    }
  }, [mode]);
  return (
    <div className="h-screen grid grid-cols-[1fr_7fr]">
      <AsideNav />
      <div className="flex flex-col gap-2 p-4">
        <TopNav/>
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
