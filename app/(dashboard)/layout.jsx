import React from "react";
import Sidebar from "./_components/sidebar/sidebar";
import OrgSidebar from "./_components/sidebar/org-sidebar";
import Navbar from "./_components/sidebar/navbar";

function Dashboardlayout({ children }) {
  return (
    <main className="h-full">
      <Sidebar />
      <div className="pl-[60px]">
        <div className="flex gap-x-3 h-full">
            <OrgSidebar/>
          <div className="h-full flex-1 bg-black">
           <Navbar/>
            {children}
            </div>
        </div>
      </div>
    </main>
  );
}

export default Dashboardlayout;
