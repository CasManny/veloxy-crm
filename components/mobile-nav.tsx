"use client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Lightbulb,
  LogOut,
  Mail,
  Menu,
  MessageSquare,
  MessagesSquare,
  Phone,
  Plus,
  Proportions,
  Settings,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
const icons = [
  {
    icon: Proportions,
  },
  {
    icon: MessageSquare,
  },
  {
    icon: Phone,
  },
  {
    icon: MessagesSquare,
  },
];

const navLinks = [
  {
    label: "Notifications",
    Icon: Lightbulb,
  },
  {
    label: "Add Project",
    Icon: Plus,
  },
  {
    label: "Settings",
    Icon: Settings,
  },
  {
    label: "Messages",
    Icon: Mail,
  },
  {
    label: "Logout",
    Icon: LogOut,
  },
];

const MobileNavBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger>
        <Avatar className="outline-none">
          <AvatarImage src="/testimonials-1.jpg" />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
      </SheetTrigger>
      <SheetContent>
        <div className="flex flex-col justify-between h-full">
          <div className="flex flex-col gap-4">
            {navLinks.map((link, index) => (
              <Link
                href={"/"}
                key={index}
                className="flex gap-2"
                onClick={() => setOpen(false)}
              >
                <link.Icon />
                {link.label}
              </Link>
            ))}
          </div>
          <div className="mt-auto">
            <div className="flex items-center justify-between">
              <div className="rounded-full">
                <Avatar className="outline-none">
                  <AvatarImage src="/testimonials-1.jpg" />
                  <AvatarFallback>U</AvatarFallback>
                </Avatar>
              </div>
              <div className="flex gap-2">
                {icons.map((icon, index) => (
                  <div className="" key={index}>
                    <icon.icon />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavBar;
