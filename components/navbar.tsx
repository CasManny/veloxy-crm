import Link from "next/link";
import React from "react";
import { HelpCircle, Lightbulb, Mail, Plus, Settings } from "lucide-react";
import Hint from "./custom-hint";
import UserButton from "./user-button";

const TopNavbar = () => {
  return (
    <nav className="p-3 bg-neutral-800/90">
      <div className="flex justify-between items-center">
        <Link href={"/"} className="flex gap-1 text-white font-extrabold">
          <div className="size-5 bg-gradient-to-tr from-brand-7 to-brand-6 flex-center rounded">
            <p className="font-extrabold">V</p>
          </div>
          Veloxy
        </Link>
        <div className="flex gap-5">
          <Hint Icon={<Lightbulb className="text-white" />} tip="Nofication" />
          <Hint Icon={<Plus className="text-white" />} tip="Add Project" />
          <Hint Icon={<Settings className="text-white" />} tip="Settings" />
          <Hint Icon={<HelpCircle className="text-white" />} tip="support" />
          <Hint Icon={<Mail className="text-white" />} tip="member messages" />
          <UserButton />
        </div>
      </div>
    </nav>
  );
};

export default TopNavbar;
