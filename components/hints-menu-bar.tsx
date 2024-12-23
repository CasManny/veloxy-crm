import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarTrigger
} from "@/components/ui/menubar";
import {
    ClockArrowUp,
    Combine,
    Ellipsis,
    ImageIcon,
    ListFilter,
    Logs,
    Plus,
    RotateCw,
    SquarePen,
    Trash2,
} from "lucide-react";

const tabs = [
  {
    label: "Smart data",
    Icon: ClockArrowUp,
  },
  {
    label: "Edit filters",
    Icon: ListFilter,
  },
  {
    label: "Edit columns",
    Icon: SquarePen,
  },
  {
    label: "Show chart",
    Icon: ImageIcon,
  },
  {
    label: "Focused View",
    Icon: Logs,
  },
  {
    label: "New",
    Icon: Plus,
    },
    {
        label: "Refresh",
        Icon: RotateCw
    },
    {
        label: "Collaborate",
        Icon: Combine
    },
    {
        label: "Delete",
        Icon: Trash2
    }
];

const HintsMenusBar = () => {
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>
          <Ellipsis />
        </MenubarTrigger>
        <MenubarContent className="flex flex-col gap-4">
          {tabs.map((item, index) => (
            <MenubarItem className="flex gap-2 items-center" key={index}>
              <item.Icon />
              {item.label}
            </MenubarItem>
          ))}
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};

export default HintsMenusBar;
