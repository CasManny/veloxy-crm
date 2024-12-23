import CostCard from "@/components/cards/cost-card";
import ProjectCard from "@/components/cards/project-card";
import RevenueCard from "@/components/cards/revenue-card";
import { SalesCard } from "@/components/cards/sales-card";
import StatusCard from "@/components/cards/status-card";

export default function Home() {
  return (
    <div className="p-5 w-full">
      <div className="w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-10">
          <RevenueCard />
          <CostCard />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10">
          <StatusCard />
          <SalesCard />
        </div>
        {/* <ProjectCard /> */}
      </div>
    </div>
  );
}
