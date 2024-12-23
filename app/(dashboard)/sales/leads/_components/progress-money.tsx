const ProgressMoney = () => {
  return (
    <div className="">
      <div className="flex justify-between gap-5 text-xs">
        <div className="flex items-center gap-4 justify-between">
          <span>Target</span>
          <span className="font-bold">$45 million</span>
        </div>
        <p>68% of target achieved</p>
      </div>
      <div className="bg-neutral-200 w-full h-1 sm:h-2 rounded-r" />
    </div>
  );
};

export default ProgressMoney;
