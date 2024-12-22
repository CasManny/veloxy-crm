import React from "react";
import NavbarLeads from "./_components/navbar-leads";
import {
  MessageSquare,
  MessagesSquare,
  Phone,
  Proportions,
} from "lucide-react";
import ProgressBars from "./_components/progress-bars";
import ProgressMoney from "./_components/progress-money";
import { Separator } from "@/components/ui/separator";
import LeadClients from "./_components/lead-clients";
import OtherKeyActivities from "./_components/other-key-activities";
import LeadClientTable from "./_components/lead-client-table";
import Image from "next/image";

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
    <section className="flex h-full">
      <div className="flex-1 p-5">
        <NavbarLeads />
        <div className="bg-brand-1/70 p-1 w-full shadow-sm my-10 rounded-md">
          <div className="w-full p-5 bg-white">
            <div className="">
              <div className="flex justify-between items-center gap-4">
                <div className="item-center gap-1">
        <Image src={'/ai-logo.jpeg'} alt="ai-logo" height={20} width={20} className="size-10 rounded-full" />
                <p className="font-bold text-lg">
                  Hi Mona,
                  <span className="text-brand-1 px-1">68%</span> of goal
                  achieved and rest can be achieved by focusing on 20 top leads.
                </p>

                </div>
                <div className="flex items-center">
                  {/* <ProgressBars /> */}
                  <Separator orientation="vertical" className="h-5 w-1" />
                  <ProgressMoney />
                </div>
              </div>
            </div>
            <div className="flex justify-between gap-5 my-5">
              <LeadClients />
              <OtherKeyActivities />
            </div>
          </div>
        </div>
        <div className="bg-white p-5">
          <LeadClientTable />
        </div>
      </div>
      <div className="flex flex-col gap-5 h-full p-2 bg-brand-3">
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
