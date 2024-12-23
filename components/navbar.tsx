import Link from "next/link";
import React from "react";
import { HelpCircle, Lightbulb, Mail, Plus, Settings } from "lucide-react";
import Hint from "./custom-hint";
import UserButton from "./user-button";
import MobileNavBar from "./mobile-nav";
import MobileNavbarDrawer from "./mobile-nav-drawer";

const TopNavbar = () => {
  return (
    <nav className="p-3 bg-neutral-800/90 w-full sticky z-50 top-0 right-0 left-0">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <MobileNavbarDrawer />
          <Link href={"/"} className="flex gap-1 text-white font-extrabold">
            <div className="size-5 bg-gradient-to-tr from-brand-7 to-brand-6 flex-center rounded">
              <p className="font-extrabold">V</p>
            </div>
            Veloxy
          </Link>
        </div>
        <div className="gap-5 hidden lg:flex">
          <Hint Icon={<Lightbulb className="text-white" />} tip="Nofication" />
          <Hint Icon={<Plus className="text-white" />} tip="Add Project" />
          <Hint Icon={<Settings className="text-white" />} tip="Settings" />
          <Hint Icon={<HelpCircle className="text-white" />} tip="support" />
          <Hint Icon={<Mail className="text-white" />} tip="member messages" />
          <UserButton />
        </div>
        <div className="lg:hidden">
          <MobileNavBar />
        </div>
      </div>
    </nav>
  );
};

export default TopNavbar;
