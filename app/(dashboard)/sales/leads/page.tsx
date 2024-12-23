import AgentDrawer from "@/components/agent-drawer";
import HintsMenusBar from "@/components/hints-menu-bar";
import Table from "@/components/table";
import {
  MessageSquare,
  MessagesSquare,
  Phone,
  Proportions,
} from "lucide-react";
import Image from "next/image";
import LeadClientTable from "./_components/lead-client-table";
import LeadClients from "./_components/lead-clients";
import NavbarLeads from "./_components/navbar-leads";
import OpenLeads from "./_components/open-leads";
import OtherKeyActivities from "./_components/other-key-activities";
import ProgressMoney from "./_components/progress-money";

const icons = [
  {
    icon: Proportions,
  },
  {
    icon: MessageSquare,
  },
  {
    icon: Phone,
  },
  {
    icon: MessagesSquare,
  },
];

const page = () => {
  return (
    <section className="flex p-2">
      <div className="flex-1 flex-col lg:flex-row sm:p-3 w-full">
        <div className="xl:hidden flex justify-between items-center">
          <OpenLeads />
          <div className="flex gap-2 xl:hidden items-center">
            <AgentDrawer />
            <HintsMenusBar />
          </div>
        </div>
        <NavbarLeads />
        <div className="bg-brand-1/70 p-1 w-full shadow-sm my-5 sm:my-10 rounded-md">
          <div className="w-full p-5 bg-white">
            <div className="">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="item-center gap-1">
                  <Image
                    src={"/ai-logo.jpeg"}
                    alt="ai-logo"
                    height={20}
                    width={20}
                    className="size-5 sm:size-10 rounded-full"
                  />
                  <p className="font-bold text-xs sm:text-lg w-full">
                    Hi Mona,
                    <span className="text-brand-1 px-1">68%</span> of goal
                    achieved and rest can be achieved by focusing on 20 top
                    leads.
                  </p>
                </div>
                <div className="items-center">
                  <ProgressMoney />
                </div>
              </div>
            </div>
            <div className="flex-col flex lg:flex-row justify-between gap-5 my-5">
              <LeadClients />
              <OtherKeyActivities />
            </div>
          </div>
        </div>
        <div className="bg-white md:p-5">
          <div className="hidden lg:flex">
            <LeadClientTable />
          </div>
          <div className="lg:hidden">
            <Table />
          </div>
        </div>
      </div>
      <div className="flex-col gap-5 h-full hidden xl:flex p-2 bg-brand-3">
        {icons.map((icon, index) => (
          <div className="" key={index}>
            <icon.icon />
          </div>
        ))}
      </div>
    </section>
  );
};

export default page;
