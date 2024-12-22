import {
  CakeSlice,
  ClipboardList,
  Container,
  LayoutDashboard,
  ListChecks,
  Paperclip,
  Phone,
  ReceiptText,
  Rocket,
  TicketCheck,
  User,
  UserRoundSearch,
  Volume2,
} from "lucide-react";

export const sidebarLinks = [
  {
    name: "My Work",
    links: [
      {
        label: "Sales accelerator",
        Icon: Rocket,
      },
      {
        label: "Dashboard",
        Icon: LayoutDashboard,
      },
      {
        label: "Activities",
        Icon: Container,
      },
    ],
  },
  {
    name: "Customers",
    links: [
      {
        label: "Accounts",
        Icon: Paperclip,
      },
      {
        label: "Contacts",
        Icon: User,
      },
    ],
  },
  {
    name: "Sales",
    links: [
      {
        label: "Leads",
        Icon: Phone,
      },
      {
        label: "opportunities",
        Icon: CakeSlice,
      },
      {
        label: "competitions",
        Icon: UserRoundSearch,
      },
    ],
  },
  {
    name: "Collateral",
    links: [
      {
        label: "Quotes",
        Icon: ClipboardList,
      },
      {
        label: "Orders",
        Icon: CakeSlice,
      },
      {
        label: "Invoices",
        Icon: ReceiptText,
      },
      {
        label: "Products",
        Icon: TicketCheck,
      },
      {
        label: "Sales Literature",
        Icon: TicketCheck,
      },
    ],
  },
  {
    name: "Marketing",
    links: [
      {
        label: "Marketing List",
        Icon: ListChecks
      },
      {
        label: "Quick Campaigns",
        Icon: Volume2
      },
      
    ],
  },
];
