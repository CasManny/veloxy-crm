"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowDown, ArrowUpDown, ChevronDown } from "lucide-react";
import dayjs from "dayjs";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  id: string;
  name: string;
  topic: string;
  statusReason: string;
  date: string; // Keep the date as a string in "4/10/2024 12PM" format
};

export const LeadClientcolumns: ColumnDef<Payment>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        className="text-2xl"
      >
        Name
        <ChevronDown />
      </Button>
    ),
    cell: ({ row }) => (
      <div className="capitalize text-brand-1">{row.getValue("name")}</div>
    ),
  },
  {
    accessorKey: "topic",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        className="text-2xl"

      >
        Topic
        <ChevronDown />
      </Button>
    ),
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("topic")}</div>
    ),
  },
  {
    accessorKey: "statusReason",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        className="text-2xl"

      >
        Status Reason
        <ChevronDown />
      </Button>
    ),
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("statusReason")}</div>
    ),
  },
  {
    accessorKey: "date",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        className="text-2xl"
      >
        Created on
        <ArrowDown />
        <ChevronDown className="ml-2" />
      </Button>
    ),
    cell: ({ row }) => {
      return <div className="capitalize">{row.getValue("date")}</div>;
    },
  },
];
