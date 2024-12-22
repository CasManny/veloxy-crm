import { sidebarLinks } from "@/data/constants";
import { Home } from "lucide-react";
import Link from "next/link";
import RecentProjects from "./recent-projects";
import PinnedProjects from "./pinned-projects";

const Sidebar = () => {
  return (
    <section className="sticky left-0 top-0 flex h-screen overflow-y-auto w-fit flex-col justify-between pl-4 pt-10 pb-8  max-sm:hidden lg:w-[200px] bg-brand-3 scrollbar-hidden">
      <div className="space-y-5">
        <div className="">
          <Link href={"/"} className="flex items-center gap-2">
            <Home />
            <span>Home</span>
          </Link>
          <RecentProjects />
          <PinnedProjects />
        </div>
        {sidebarLinks.map((link, index) => (
          <div className="" key={index}>
            <h1 className="font-bold mb-2">{link.name}</h1>
            <div className="space-y-3">
              {link.links.map((item, index) => (
                <div className="hover:bg-white p-1 rounded-md ml-2">
                  <Link
                    href={`/${link.name
                      .toLowerCase()
                      .replace(" ", "-")}/${item.label
                      .toLowerCase()
                      .replace(" ", "-")}`}
                    className="flex items-center gap-2 "
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
    </section>
  );
};

export default Sidebar;
