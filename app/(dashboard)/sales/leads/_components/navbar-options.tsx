import Hint from "@/components/custom-hint";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { VscShare } from "react-icons/vsc";
import {
  ChevronDown,
  ClockArrowUp,
  Combine,
  EllipsisVertical,
  ImageIcon,
  ListFilter,
  Logs,
  Plus,
  RotateCw,
  SquarePen,
  Trash2,
} from "lucide-react";
import React from "react";

const tabs = [
  {
    label: "Smart data",
    Icon: ClockArrowUp,
  },
  {
    label: "Edit filters",
    Icon: ListFilter,
  },
  {
    label: "Edit columns",
    Icon: SquarePen,
  },
];

const NavbarLeadsOptions = () => {
  return (
    <div className="flex gap-2 items-center">
      <Hint
        Icon={
          <div className="flex items-center gap-1">
            <ImageIcon />
            show chart
          </div>
        }
        tip="show chat of promising leads"
      />
      <Hint
        Icon={
          <div className="flex items-center gap-1">
            <Logs />
            Focused View
          </div>
        }
        tip="Review secrets in the market"
      />
      <Hint
        Icon={
          <div className="flex items-center gap-1">
            <Plus />
            New
          </div>
        }
        tip="Add new Lead"
      />
      <Hint
        Icon={
          <div className="flex items-center gap-1">
            <RotateCw />
            Refresh
          </div>
        }
        tip="Refresh page"
      />
      <Hint
        Icon={
          <div className="flex items-center gap-1">
            <Combine />
            Collaborate
          </div>
        }
        tip="Work on thesame project with other members"
      />
      <Hint
        Icon={
          <div className="flex items-center gap-1">
            <Trash2 />
            Delete
          </div>
        }
        tip="Remove lead from list"
      />
      <div className="flex items-center">
        <Separator orientation="vertical" className="h-5" />
        <ChevronDown />
        <EllipsisVertical />
      </div>
      <div className="flex items-center gap-2">
        {tabs.map((tab, index) => (
          <div className="border flex items-center gap-1 rounded p-1" key={index}>
            <tab.Icon />
            <span>{tab.label}</span>
          </div>
        ))}
      </div>
      <div className="">
        <Button size={"sm"} className="bg-brand-1 text-white">
          <VscShare />
          <Separator orientation="vertical" className="h-5" />
          <ChevronDown />
        </Button>
      </div>
    </div>
  );
};

export default NavbarLeadsOptions;
