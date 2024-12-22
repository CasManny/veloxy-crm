import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const OpenLeads = () => {
  return (
    <Select>
      <SelectTrigger className="w-max p-5 text-lg outline-none border-none focus:ring-0 bg-transparent">
        <SelectValue placeholder="My open leads" className="" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="light">Light</SelectItem>
        <SelectItem value="dark">Dark</SelectItem>
        <SelectItem value="system">System</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default OpenLeads;
