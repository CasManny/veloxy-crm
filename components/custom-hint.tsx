import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip";
  
  interface HintProps {
    Icon: React.ReactNode;
    tip: string;
  }
  
  const Hint = ({ Icon, tip }: HintProps) => {
    return (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>{Icon}</TooltipTrigger>
          <TooltipContent>
            <p>{tip}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  };
  
  export default Hint;