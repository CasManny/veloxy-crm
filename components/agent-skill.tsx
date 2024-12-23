import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import Image from "next/image";
import {
  House,
  Mail,
  Paperclip,
  ReceiptIcon,
  Scroll,
  Ship,
  User,
  X,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const AgentSkill = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-brand-1 text-white w-full" size={"sm"}>
          Agent Skill
        </Button>
      </DialogTrigger>
      <DialogContent>
        <div className="p-5">
          <div className="flex items-center">
            <Image
              src={"/ai-logo.jpeg"}
              alt="ai-logo"
              height={20}
              width={20}
              className="size-5 sm:size-10 rounded-full"
            />
            <h1 className="font-bold text-2xl sm:text-3xl">Agent Skill</h1>
          </div>
          <div className="">
            <p className="font-bold text-lg my-2">
              check if on-hand inventories will allow all sales order to ship
              without delay
            </p>
            <div className="bg-white gap-2 flex-wrap items-center text-lg inline-flex p-4 border shadow-lg rounded-lg">
              when{" "}
              <span className="span">
                {" "}
                <User className="icon" /> any vendor
              </span>
              sends an email with charges to{" "}
              <span className="span">
                <Paperclip className="icon" />
                confirm purchase orders,
              </span>
              check if the resulting
              <span className="span">
                <House className="icon" />
                on-hand inventory
              </span>
              will allow
              <span className="span">
                <Scroll className="icon" />
                all sales orders
              </span>
              <span className="span">
                {" "}
                <Ship className="icon" /> to ship without delays
              </span>{" "}
              if so{" "}
              <span className="span">
                <ReceiptIcon className="icon" /> update the purchase order
              </span>
              to reflect the change
            </div>
          </div>
          <div className="my-10">
            <div className="item-center gap-2 mb-3">
              <Mail className="text-brand-1 size-8 sm:size-10" />
              <p className="text-3xl">Enable email access</p>
            </div>
            <p className="font-semibold text-lg">
              Allow the agent to access email inboxes to read mail from known
              vendors
            </p>
            <div className="flex justify-between items-center gap-4">
              <div className="border w-full p-2">
                <div className="flex items-center bg-gray-200 w-fit rounded-lg gap-1">
                  <Avatar>
                    <AvatarFallback>P</AvatarFallback>
                  </Avatar>
                  <p>purchasingcongo.com</p>
                  <Button size={"icon"} variant={"ghost"} className="border">
                    <X />
                  </Button>
                </div>
              </div>
              <Button className="bg-brand-1 text-white p-5">
                Allow Access
              </Button>
            </div>
          </div>
          <div className="flex justify-end  gap-2 items-center">
            <Button disabled className="bg-gray-300">Activate</Button>
            <Button className="bg-white text-black border hover:text-white">Close</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AgentSkill;
