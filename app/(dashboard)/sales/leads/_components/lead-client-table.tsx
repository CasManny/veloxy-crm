import { LeadClientcolumns } from "./lead-client-columns";
import { LeadClientDataTable } from "./lead-client-data-table"

const data = [
  {
    id: "1",
    name: "Alice Johnson",
    topic: "Marketing Strategy",
    statusReason: "Pending Approval",
    date: "3/22/2024 9AM",
  },
  {
    id: "2",
    name: "Bob Smith",
    topic: "Product Launch",
    statusReason: "Completed",
    date: "4/10/2024 12PM",
  },
  {
    id: "3",
    name: "Charlie Adams",
    topic: "Partnership Opportunities",
    statusReason: "In Progress",
    date: "2/15/2024 3PM",
  },
  {
    id: "4",
    name: "Diana Carter",
    topic: "Market Expansion",
    statusReason: "Pending",
    date: "5/12/2024 10AM",
  },
  {
    id: "5",
    name: "Ethan Brown",
    topic: "Customer Retention",
    statusReason: "In Progress",
    date: "1/30/2024 2PM",
  },
  {
    id: "6",
    name: "Fiona Davis",
    topic: "SaaS Optimization",
    statusReason: "Completed",
    date: "2/28/2024 11AM",
  },
  {
    id: "7",
    name: "George Edwards",
    topic: "Hiring Strategies",
    statusReason: "Pending Approval",
    date: "6/15/2024 4PM",
  },
  {
    id: "8",
    name: "Hannah Scott",
    topic: "Diversity Initiatives",
    statusReason: "Completed",
    date: "4/25/2024 1PM",
  },
  {
    id: "9",
    name: "Ian Wilson",
    topic: "AI Integration",
    statusReason: "Pending",
    date: "3/10/2024 8AM",
  },
  {
    id: "10",
    name: "Julia Roberts",
    topic: "Workflow Optimization",
    statusReason: "In Progress",
    date: "2/5/2024 5PM",
  },
  {
    id: "11",
    name: "Kevin White",
    topic: "Investor Relations",
    statusReason: "Completed",
    date: "5/3/2024 9AM",
  },
  {
    id: "12",
    name: "Laura Green",
    topic: "Risk Management",
    statusReason: "In Progress",
    date: "3/18/2024 10AM",
  },
  {
    id: "13",
    name: "Michael Clarke",
    topic: "Financial Planning",
    statusReason: "Pending",
    date: "1/22/2024 12PM",
  },
  {
    id: "14",
    name: "Nina Taylor",
    topic: "Team Building",
    statusReason: "Completed",
    date: "4/8/2024 11AM",
  },
  {
    id: "15",
    name: "Oliver Harris",
    topic: "Growth Hacking",
    statusReason: "In Progress",
    date: "2/20/2024 3PM",
  },
  {
    id: "16",
    name: "Paula Moore",
    topic: "Brand Development",
    statusReason: "Pending Approval",
    date: "5/1/2024 2PM",
  },
  {
    id: "17",
    name: "Quincy Lee",
    topic: "Sales Optimization",
    statusReason: "Completed",
    date: "3/25/2024 4PM",
  },
  {
    id: "18",
    name: "Rachel Kim",
    topic: "Software Development",
    statusReason: "Pending",
    date: "4/2/2024 9AM",
  },
  {
    id: "19",
    name: "Sam Rogers",
    topic: "Market Analysis",
    statusReason: "Completed",
    date: "5/9/2024 1PM",
  },
  {
    id: "20",
    name: "Tina Baker",
    topic: "Cost Reduction",
    statusReason: "In Progress",
    date: "2/10/2024 11AM",
  },
];


const LeadClientTable = () => {
  return (
    <LeadClientDataTable data={data} columns={LeadClientcolumns} />
    
  )
}

export default LeadClientTable