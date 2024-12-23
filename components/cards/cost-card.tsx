import { Card } from "@/components/ui/card";
import { Button } from "../ui/button";
import NumberTicker from "../ui/number-ticker";
import { ChevronDown } from "lucide-react";
const intervals = ["1W", "1M", "1Y"];

const CostCard = () => {
  return (
    <div className="p-2 py-3 px-4 w-full border shadow-lg bg-white rounded-lg">
      <div className="">
        <div className="flex justify-between items-center">
          <h1 className="text-xl sm:text-3xl font-bold">Cost</h1>
          <div className="flex gap-2">
            {intervals.map((interval, index) => (
              <Button
                key={index}
                className="hover:bg-brand-1 border hover:text-white"
                variant={"ghost"}
                size={"sm"}
              >
                {interval}
              </Button>
            ))}
          </div>
        </div>
        <div className="mt-20 flex justify-between items-center">
          <NumberTicker value={485500} className="text-2xl lg:text-5xl" />
          <div className="">
            <div className="text-red-500 flex">
              <ChevronDown className="mr-2" />
              <p>32%</p>
            </div>
            <p className="font-bold text-sm sm:text-base">From last month</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CostCard;
