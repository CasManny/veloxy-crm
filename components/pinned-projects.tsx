import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select";

const PinnedProjects = () => {
  return (
    <Select>
      <SelectTrigger className="w-[180px] bg-transparent outline-none border-none focus:ring-0">
        <SelectValue placeholder="Pinned project" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="dark">Digital Marketting</SelectItem>
        <SelectItem value="system">Field Innovation</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default PinnedProjects;
