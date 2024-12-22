import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const RecentProjects = () => {
  return (
    <Select>
      <SelectTrigger className="w-[180px] bg-transparent outline-none border-none focus:ring-0 my-2">
        <SelectValue placeholder="Recent project" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="light">TechJunt</SelectItem>
        <SelectItem value="dark">Digital Marketting</SelectItem>
        <SelectItem value="system">Field Innovation</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default RecentProjects;
