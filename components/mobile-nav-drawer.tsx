"use client";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { sidebarLinks } from "@/data/constants";
import { Home, Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import PinnedProjects from "./pinned-projects";
import RecentProjects from "./recent-projects";

const MobileNavbarDrawer = () => {
  const [open, setOpen] = useState(false);
  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger>
        <Menu className="size-8 text-white xl:hidden" />
      </DrawerTrigger>
      <DrawerContent>
        <div className="max-h-[70vh] overflow-y-auto p-5 scrollbar-hidden">
          <div className="">
            <div className="">
              <Link
                href={"/"}
                className="flex items-center gap-2"
                onClick={() => setOpen(false)}
              >
                <Home />
                <span>Home</span>
              </Link>
              <RecentProjects />
              <PinnedProjects />
            </div>
            {sidebarLinks.map((link, index) => (
              <div className="" key={index}>
                <h1 className="font-bold mb-2">{link.name}</h1>
                <div className="">
                  {link.links.map((item, index) => (
                    <div className="p-1 rounded-md">
                      <Link
                        href={`/${link.name
                          .toLowerCase()
                          .replace(" ", "-")}/${item.label
                          .toLowerCase()
                          .replace(" ", "-")}`}
                        className="flex items-center gap-2 "
                        onClick={() => setOpen(false)}
                      >
                        <item.Icon className="size-4" />
                        <span className="text-sm">{item.label}</span>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default MobileNavbarDrawer;
