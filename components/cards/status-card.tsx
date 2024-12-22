import React from "react";
import { Card } from "../ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CircleCheckBig, CircleOff, Container, HandCoins, LucideIcon, Radar, RefreshCwOff } from "lucide-react";

// Define types for the status review data
interface StatusItem {
    label: string;
    value: number;
    Icon: LucideIcon; // Accept a React component for the icon
    color?: string; // Optional property for icon color
}

interface StatusReview {
    name: string;
    data: StatusItem[];
}

// Dummy data for status review
const statusReview: StatusReview[] = [
    {
        name: "today",
        data: [
            { label: "To-Process shipment", value: 1520, Icon: Radar, color: "text-brand-4" },
            { label: "Proceed shipment", value: 56, Icon: Container, color: "text-brand-17" },
            { label: "Pending Retune refund", value: 32, Icon: HandCoins, color: "text-brand-18" },
            { label: "Pending cancellation", value: 121, Icon: RefreshCwOff, color: "text-brand-2" },
            { label: "Banned products", value: 860, Icon: CircleOff, color: "text-brand-6" },
            { label: "Sold out Products", value: 1520, Icon: CircleCheckBig, color: "text-green-500" }
        ]
    },
    {
        name: "weekly",
        data: [
            { label: "To-Process shipment", value: 12000, Icon: Radar, color: "text-brand-4" },
            { label: "Proceed shipment", value: 46, Icon: Container, color: "text-brand-17" },
            { label: "Pending Retune refund", value: 12, Icon: HandCoins, color: "text-brand-18" },
            { label: "Pending cancellation", value: 100, Icon: RefreshCwOff, color: "text-brand-2" },
            { label: "Banned products", value: 60, Icon: CircleOff, color: "text-brand-6" },
            { label: "Sold out Products", value: 1420, Icon: CircleCheckBig, color: "text-green-500" }
        ]
    },
    {
        name: "monthly",
        data: [
            { label: "To-Process shipment", value: 120, Icon: Radar, color:"text-brand-4"},
            { label:"Proceed shipment",value :56 ,Icon :Container,color:"text-brand-17"},
            {label : "Pending Retune refund",value :32 ,Icon :HandCoins,color :"text-brand-18"},
            {label :"Pending cancellation",value :131 ,Icon :RefreshCwOff,color :"text-brand-2"},
            {label :"Banned products",value :830 ,Icon :CircleOff,color :"text-brand-6"},
            {label :"Sold out Products",value :10 ,Icon :CircleCheckBig,color :"text-green-500"}
        ]
    },
    {
        name: "yearly",
        data: [
            { label:"To-Process shipment",value :1520 ,Icon :Radar,color:"text-brand-4"},
            {label:"Proceed shipment",value :56 ,Icon :Container,color:"text-brand-17"},
            {label:"Pending Retune refund",value :32 ,Icon :HandCoins,color :"text-brand-18"},
            {label :"Pending cancellation",value :121 ,Icon :RefreshCwOff,color :"text-brand-2"},
            {label :"Banned products",value :860 ,Icon :CircleOff,color :"text-brand-6"},
            {label :"Sold out Products",value :1520 ,Icon :CircleCheckBig,color :"text-green-500"}
        ]
    }
];

const StatusCard = () => {
    const renderData = (data?: StatusItem[]) => {
        if (!data) return null; // Handle case where no data is provided

        return (
            <div className="grid grid-cols-2 gap-4">
                {data.map((item) => {
                    const IconComponent = item.Icon; // Get the icon component
                    return (
                        <div key={item.label} className="flex items-center justify-between p-3 rounded-md bg-neutral-100">
                            <div className="flex items-center gap-1">
                                <IconComponent className={`${item.color} h-5 w-5`} /> {/* Use the specified color */}
                                <span className="font-bold">{item.label}</span>
                            </div>
                            <span className="text-brand-1 font-bold">{item.value}</span>
                        </div>
                    );
                })}
            </div>
        );
    };

    return (
        <Card className="py-3 px-4">
            <Tabs defaultValue="today" className="w-full mb-5">
                <TabsList className="w-full">
                    <TabsTrigger value="today">Today</TabsTrigger>
                    <TabsTrigger value="weekly">Weekly</TabsTrigger>
                    <TabsTrigger value="monthly">Monthly</TabsTrigger>
                    <TabsTrigger value="yearly">Yearly</TabsTrigger>
                </TabsList>

                {/* Render content based on selected tab */}
                <TabsContent value="today">
                    {renderData(statusReview.find(item => item.name === 'today')?.data)}
                </TabsContent>
                <TabsContent value="weekly">
                    {renderData(statusReview.find(item => item.name === 'weekly')?.data)}
                </TabsContent>
                <TabsContent value="monthly">
                    {renderData(statusReview.find(item => item.name === 'monthly')?.data)}
                </TabsContent>
                <TabsContent value="yearly">
                    {renderData(statusReview.find(item => item.name === 'yearly')?.data)}
                </TabsContent>
            </Tabs>
        </Card>
    );
};

export default StatusCard;
