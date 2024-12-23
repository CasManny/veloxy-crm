"use client";
import { ResponsiveModal } from "@/components/responsive-modal";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Calendar1, Dot, FileText, LucideIcon, Mail, Phone } from "lucide-react";
import { useState } from "react";

const activities = [
  {
    image: "/book.jpeg",
    label: "Cafe A100 for WoodLand Bank",
    bank: "WoodLandBank",
    cash: 35000,
    days: "8 days to close",
    message: "Review draft and reply Chris Naido",
    icon: Mail,
  },
  {
    image: "/book.jpeg",
    label: "Partnership oppurtunity for Fabrikam",
    bank: "Fabrikam",
    cash: 5000000,
    days: "8 days to close",
    message: "Prepare me for Fabrikam stakeholder meeting",
    icon: Calendar1,
  },
];

const otherActivities = [
  {
    image: "/contract.jpeg",
    label: "Consultation meeting for TechCorp",
    bank: "TechCorp Bank",
    cash: 200000,
    days: "5 days to close",
    message: "Schedule follow-up with the product team",
    icon: Mail,
  },
  {
    image: "/report.jpeg",
    label: "Investment proposal for FinTech Inc.",
    bank: "FinTech Inc.",
    cash: 1200000,
    days: "15 days to close",
    message: "Finalize financial report and send for approval",
    icon: Calendar1,
  },
  {
    image: "/project.jpeg",
    label: "Web app launch for StellarWorks",
    bank: "StellarWorks",
    cash: 850000,
    days: "2 weeks to close",
    message: "Prepare demo presentation for the stakeholders",
    icon: Phone,
  },
  {
    image: "/presentation.jpeg",
    label: "Marketing partnership with GreenLeaf",
    bank: "GreenLeaf",
    cash: 150000,
    days: "3 days to close",
    message: "Review campaign materials and confirm launch date",
    icon: FileText,
  },
  {
    image: "/contract2.jpeg",
    label: "Contract negotiation with BrightTech",
    bank: "BrightTech",
    cash: 750000,
    days: "1 week to close",
    message: "Discuss final terms and send signed agreement",
    icon: Mail,
  },
];

const OtherKeyActivities = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <h1 className="sm:text-lg text-sm my-2 font-bold">Other key activities</h1>
      <div className="space-y-4">
        {activities.map((activity, index) => (
          <OtherActivitiesCard key={index} {...activity} />
        ))}
      </div>
      <p
        className="text-brand-1 text-sm sm:text-base animate-pulse font-bold my-2 cursor-pointer"
        onClick={() => setOpen(true)}
      >
        Show all key activities
      </p>
      <ResponsiveModal open={open} onOpenChange={setOpen}>
        <div className="p-10 space-y-4 bg-white">
          {otherActivities.map((activity, index) => (
            <OtherActivitiesCard key={index} {...activity} />
          ))}
        </div>
      </ResponsiveModal>
    </div>
  );
};

export default OtherKeyActivities;

interface OtherActivitiesCardProps {
  image: string;
  label: string;
  bank: string;
  cash: number;
  days: string;
  message: string;
  icon: LucideIcon;
}

const OtherActivitiesCard = ({
  image,
  label,
  bank,
  cash,
  days,
  icon: Icon,
  message,
}: OtherActivitiesCardProps) => {
  return (
    <Card className="flex flex-col gap-2 p-1 sm:p-2 cursor-pointer">
      <div className="flex items-center">
        <div className="mr-2">
          <Avatar>
            <AvatarImage src={image} />
            <AvatarFallback>AC</AvatarFallback>
          </Avatar>
        </div>
        <div className="">
          <p className="font-bold text-xs sm:text-base">{label}</p>
          <div className="flex text-xs sm:text-base items-center gap-0.5">
            <p>{bank}</p>
            <Dot />
            <p>${cash}</p>
            <Dot />
            <p>{days}</p>
          </div>
        </div>
      </div>
      <div className="bg-neutral-100 gap-1 rounded flex items-center p-2">
        <Icon className="size-3 sm:size-5" />
        <p className="text-xs sm:text-base">{message}</p>
      </div>
    </Card>
  );
};
