import LeadClientTable from "@/app/(dashboard)/sales/leads/_components/lead-client-table";
import {
    Drawer,
    DrawerContent,
    DrawerTrigger
} from "@/components/ui/drawer";
import { Button } from "./ui/button";

const Table = () => {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button className="bg-brand-1 text-white">
          Show Lead Client Table
        </Button>
      </DrawerTrigger>
      <DrawerContent className="max-h-[70vh]">
        <div className="overflow-auto scrollbar-hidden">
          <LeadClientTable />
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default Table;
