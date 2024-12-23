import React from "react";
import OpenLeads from "./open-leads";
import NavbarLeadsOptions from "./navbar-options";

const NavbarLeads = () => {
  return (
    <div className="bg-white hidden xl:flex w-full p-2 justify-between rounded-sm shadow-lg">
          <OpenLeads />
          <NavbarLeadsOptions />
    </div>
  );
};

export default NavbarLeads;
