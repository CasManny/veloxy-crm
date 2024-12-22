import React from "react";
import OpenLeads from "./open-leads";
import NavbarLeadsOptions from "./navbar-options";

const NavbarLeads = () => {
  return (
    <div className="bg-white w-full p-2 flex justify-between rounded-sm shadow-lg">
          <OpenLeads />
          <NavbarLeadsOptions />
    </div>
  );
};

export default NavbarLeads;
