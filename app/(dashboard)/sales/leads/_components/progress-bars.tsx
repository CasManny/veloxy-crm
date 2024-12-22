import { Progress } from "@/components/ui/progress";

const ProgressBars = () => {
  return (
    <div className="flex items-center">
        <Progress value={50}  className="w-full bg-brand-1" />
        {/* <Progress value={20} color="green" className="w-full bg-brand-6" />
        <Progress value={10} color="red" className="w-full bg-brand-8" />
        <Progress value={5} color="purple" className="w-full bg-brand-10" /> */}
    </div>
  );
};

export default ProgressBars;
