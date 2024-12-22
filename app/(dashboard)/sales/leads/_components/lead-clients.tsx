"use client";
import { Card } from "@/components/ui/card";
import {
  ArrowLeft,
  ArrowRight,
  Award,
  Badge,
  CheckCircle,
  ChevronDown,
  Dot,
  LucideIcon,
  MonitorDot,
  Pen,
  RecycleIcon,
  SendHorizonal,
  Stars,
  ThumbsDown,
  ThumbsUp,
  User,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import React, { Dispatch, SetStateAction, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ResponsiveModal } from "@/components/responsive-modal";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

const leadClients = [
  {
    image: "/testimonials-1.jpg",
    name: "Sabastine Adewale",
    position: "CTO",
    country: "Nigeria",
    reasonforrecommending:
      "Sabastine is looking to scale his company and increase his sales this quarter.",
    icon: User,
    task: "Engage with Sabastine and discuss future product strategies.",
    category: "Upcoming Event",
    socialMedia: "LinkedIn",
    reasonForSelection: [
      {
        decisionMaker: "Yes",
        potentialDeal: "15M",
        intent: "High",
      },
    ],
    about:
      "Sabastine is a renowned CTO with a passion for driving innovation in the tech space. He works with numerous startups in the tech ecosystem, offering advice and funding to the most promising ones.",
    fact: [
      "Sabastine has successfully raised over $50M in venture capital for startups.",
      "He is a keynote speaker at major tech conferences in Africa.",
      "Sabastine's network includes over 200 high-profile entrepreneurs and investors.",
    ],
    engage: [
      "Invite Sabastine to a webinar on scaling startups.",
      "Schedule a one-on-one strategy call to discuss his scaling goals.",
      "Share case studies of companies that have successfully scaled using your solutions.",
      "Connect him with investors or industry leaders in your network.",
    ],
  },
  {
    image: "/testimonials-2.jpg",
    name: "John Doe",
    position: "Founder",
    country: "United States",
    reasonforrecommending:
      "John is looking for new partnerships and investors for his emerging AI startup.",
    icon: User,
    task: "Prepare a proposal for John and connect him with potential investors.",
    category: "Partnership Opportunity",
    socialMedia: "Twitter",
    reasonForSelection: [
      {
        decisionMaker: "Yes",
        potentialDeal: "8M",
        intent: "Medium",
      },
    ],
    about:
      "John Doe is the founder of an AI startup that is revolutionizing the healthcare industry by integrating artificial intelligence into diagnostics and patient care. He's actively seeking new partners.",
    fact: [
      "John's startup is already being piloted in 20 major hospitals across the U.S.",
      "He previously sold a startup to a Fortune 500 company for $10M.",
      "John is featured in Forbes' '30 Under 30' for his contributions to AI in healthcare.",
    ],
    engage: [
      "Send John a personalized pitch showcasing how your solutions can help his AI startup grow.",
      "Invite him to a healthcare-focused AI panel discussion where you can introduce him to potential partners.",
      "Offer to connect him with investors who specialize in healthcare technology.",
      "Provide him with market insights and competitive analysis for his industry.",
    ],
  },
  {
    image: "/testimonials-3.jpg",
    name: "Elaine Smith",
    position: "Marketing Director",
    country: "Canada",
    reasonforrecommending:
      "Elaine wants to improve her company's marketing strategy by investing in digital advertising.",
    icon: User,
    task: "Help Elaine with digital marketing strategy and introduce her to leading ad agencies.",
    category: "Marketing Strategy",
    socialMedia: "LinkedIn",
    reasonForSelection: [
      {
        decisionMaker: "Yes",
        potentialDeal: "500K",
        intent: "Medium",
      },
    ],
    about:
      "Elaine Smith is a well-respected Marketing Director at a fast-growing e-commerce company. She has been focusing on increasing brand visibility and customer acquisition through targeted ad campaigns.",
    fact: [
      "Elaine increased her company's online sales by 35% within one year.",
      "She has collaborated with top influencers to grow brand reach by 50%.",
      "Elaine is a certified Google Ads expert with over 10 years of experience.",
    ],
    engage: [
      "Offer Elaine a free audit of her current digital marketing strategy.",
      "Invite her to a workshop on advanced digital advertising techniques.",
      "Share success stories of companies that improved ROI through your strategies.",
      "Introduce her to trusted ad agencies that specialize in her industry.",
    ],
  },
  {
    image: "/testimonials-4.jpg",
    name: "Michael Jones",
    position: "CEO",
    country: "UK",
    reasonforrecommending:
      "Michael is planning a major expansion and needs strategic business advice.",
    icon: User,
    task: "Assist Michael in identifying key expansion markets and facilitate partnerships with relevant businesses.",
    category: "Business Expansion",
    socialMedia: "Twitter",
    reasonForSelection: [
      {
        decisionMaker: "Yes",
        potentialDeal: "25M",
        intent: "High",
      },
    ],
    about:
      "Michael Jones is a visionary CEO, leading a high-growth tech company specializing in cloud solutions. He is focused on expanding into new regions and seeking partners for strategic growth.",
    fact: [
      "Michael's company has achieved 300% revenue growth in the last three years.",
      "He has successfully launched operations in 10 countries across Europe and Asia.",
      "Michael is recognized as one of the top 50 tech CEOs in the UK.",
    ],
    engage: [
      "Provide Michael with an in-depth report on potential expansion markets.",
      "Organize a meeting with potential strategic partners in his target regions.",
      "Host a roundtable discussion on cloud solutions with other industry leaders.",
      "Offer to create a tailored roadmap for his expansion strategy.",
    ],
  },
  {
    image: "/testimonials-5.jpg",
    name: "Emma Davis",
    position: "Head of Product",
    country: "Australia",
    reasonforrecommending:
      "Emma is looking for new product management strategies to enhance her product portfolio.",
    icon: User,
    task: "Discuss product optimization strategies and identify potential collaborators for Emma.",
    category: "Product Development",
    socialMedia: "LinkedIn",
    reasonForSelection: [
      {
        decisionMaker: "Yes",
        potentialDeal: "2M",
        intent: "Low",
      },
    ],
    about:
      "Emma Davis is a strategic product leader in a fast-growing SaaS company. She is focused on improving product offerings and ensuring customer satisfaction across various product lines.",
    fact: [
      "Emma has launched five successful SaaS products in the last five years.",
      "Her team consistently achieves a 95% customer satisfaction rate.",
      "Emma is a regular contributor to leading product management blogs and conferences.",
    ],
    engage: [
      "Invite Emma to a product innovation workshop.",
      "Offer to perform a competitive analysis of her product portfolio.",
      "Provide her with a demo of tools that could streamline her product management process.",
      "Connect her with successful product managers in your network for collaboration.",
    ],
  },
  {
    image: "/images/david_brown.jpeg",
    name: "David Brown",
    position: "COO",
    country: "Germany",
    reasonforrecommending:
      "David is looking to streamline operations and reduce costs through innovative supply chain solutions.",
    icon: User,
    task: "Provide David with a roadmap to enhance supply chain efficiency and introduce potential solutions.",
    category: "Operational Efficiency",
    socialMedia: "LinkedIn",
    reasonForSelection: [
      {
        decisionMaker: "Yes",
        potentialDeal: "10M",
        intent: "High",
      },
    ],
    about:
      "David Brown is the COO of a global logistics company, specializing in supply chain optimization. He is looking for ways to increase operational efficiency and reduce costs in the supply chain.",
    fact: [
      "David has reduced operational costs by 20% through advanced supply chain strategies.",
      "He implemented an AI-driven logistics system now used by 50+ companies.",
      "David has been awarded 'Supply Chain Innovator of the Year' twice.",
    ],
    engage: [
      "Offer David a free consultation to assess his supply chain challenges.",
      "Invite him to a seminar on leveraging AI in supply chain optimization.",
      "Present a case study showing the impact of your solutions on operational costs.",
      "Organize a demo of tools that can enhance his supply chain operations.",
    ],
  },
];

interface ReasonForSelection {
  decisionMaker: string;
  potentialDeal: string; // assuming the potential deal is a string (e.g. "15M")
  intent: string; // the potential intent of the client
}

interface LeadClientProps {
  image: string; // URL or path to the client's image
  name: string; // Client's name
  fact: string[];
  engage: string[];
  position: string; // Client's position
  country: string; // Client's country
  reasonforrecommending: string;
  icon: LucideIcon; // URL or path to the social media icon (LinkedIn, Twitter, etc.)
  task: string; // The task to be done for the client
  category: string; // Category of the client, like "upcoming event"
  socialMedia: string; // Social media platform (LinkedIn, Twitter, etc.)
  reasonForSelection: ReasonForSelection[]; // Array of reasons why the client was selected
  about: string; // A brief description or background about the client
}

const LeadClients = () => {
  return (
    <div className="mt-2 flex-1">
      <h1 className="font-bold mb-2">
        Copilot have pinpointed 20 key leads that shows strong purchase intent
        and are actively engaging. This leads needs your focus
      </h1>
      <div className="flex gap-4">
        {leadClients.slice(0, 2).map((client, index) => (
          <LeadClientCard key={index} {...client} />
        ))}
      </div>
    </div>
  );
};

export default LeadClients;

const LeadClientCard = ({
  image,
  name,
  position,
  country,
  icon: Icon,
  task,
  category,
  socialMedia,
  reasonForSelection,
  reasonforrecommending,
  fact,
  engage,
  about,
}: LeadClientProps) => {
  const [modalOpen, setModalOpen] = useState(false); // Modal state for each card

  const toggleModal = () => setModalOpen(!modalOpen);
  return (
    <>
      <ResponsiveModal open={modalOpen} onOpenChange={setModalOpen}>
        <div className="p-1 ">
          <div className="w-full h-full p-3 bg-white">
            <div className="flex items-center font-bold text-lg">
              <MonitorDot className="text-brand-1 mr-2" />
              <p>
                Engage with <span>{name}</span>
              </p>
            </div>
            <div className="flex items-center border bg-white rounded-md  p-3 shadow-lg my-5">
              <Avatar className="size-16">
                <AvatarImage src={image} />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="ml-2 flex flex-col">
                <h1 className="font-bold">{name}</h1>
                <div className="flex">
                  {socialMedia}
                  <Separator orientation="vertical" className="h-5 mx-3" />
                  {position}
                  <Dot className="" />
                  {country}
                </div>
              </div>
            </div>
            <div className="">
              <Card className="p-5 shadow-lg">
                <div className="p-4 flex justify-between items-center bg-gradient-to-t from-brand-1/20 to-brand-2/20">
                  <div className="item-center text-brand-1">
                    <Stars className="mr-2" />
                    <p>{reasonforrecommending}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button
                      size={"sm"}
                      className="item-center bg-white font-bold text-black"
                    >
                      <Pen />
                      Edit
                    </Button>
                    <Button
                      size={"sm"}
                      className="item-center font-bold bg-brand-1"
                    >
                      <SendHorizonal />
                      Approve and send
                    </Button>
                  </div>
                </div>
                <div className="my-10">
                  <Tabs defaultValue="research" className="w-full">
                    <TabsList>
                      <TabsTrigger value="engage">Engage</TabsTrigger>
                      <TabsTrigger value="research">Research</TabsTrigger>
                    </TabsList>
                    <TabsContent value="engage">
                      <div className="p-5 mt-5 bg-gradient-to-r from-brand-1/30 to-brand-2/10 rounded-lg">
                        <h1 className="text-brand-1 font-extrabold text-lg mb-2">
                          How to engage with{" "}
                          <span className="uppercase">{name}</span>
                        </h1>
                        <div className="flex flex-col gap-1 ">
                          {engage.map((item, index) => (
                            <div
                              className="item-center text-neutral-900"
                              key={index}
                            >
                              <Dot className="mr-1" />
                              <p className="font-semibold">{item}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </TabsContent>
                    <TabsContent value="research">
                      <div className="p-5 mt-5 bg-gradient-to-r from-brand-1/30 to-brand-2/10 rounded-lg">
                        <h1 className="text-brand-1 font-extrabold text-lg mb-2">
                          Why i picked this Lead
                        </h1>
                        <div className="flex flex-col gap-1 ">
                          {fact.map((item, index) => (
                            <div
                              className="item-center text-neutral-900"
                              key={index}
                            >
                              <Dot className="mr-1" />
                              <p className="font-semibold">{item}</p>
                            </div>
                          ))}
                        </div>
                        <div className="my-5">
                          {reasonForSelection.map((item, index) => (
                            <div className="flex items-center gap-2">
                              <div className="item-center gap-3 bg-white p-5 rounded-lg">
                                <CheckCircle className="size-14 text-brand-1" />
                                <div className="">
                                  <p className="font-extrabold">
                                    Decison Maker
                                  </p>
                                  <span className="text-brand-1 text-lg font-bold">
                                    {item.decisionMaker}
                                  </span>
                                </div>
                              </div>
                              <div className="item-center gap-3 bg-white p-5 rounded-lg">
                                <Award className="size-14 text-brand-7" />
                                <div className="">
                                  <p className="font-extrabold">
                                    Potential Deal value
                                  </p>
                                  <span className="text-brand-1 text-lg font-bold">
                                    ${item.potentialDeal}
                                  </span>
                                </div>
                              </div>
                              <div className="item-center gap-3 bg-white p-5 rounded-lg">
                                <RecycleIcon className="size-14 text-brand-10" />
                                <div className="">
                                  <p className="font-extrabold">Intent</p>
                                  <span className="text-brand-1 text-lg font-bold">
                                    {item.intent}
                                  </span>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </div>
                <div className="my-10 flex justify-between">
                  <div className="item-center gap-2">
                    <Button
                      size={"icon"}
                      variant={"ghost"}
                      className="border bg-gray-100"
                    >
                      <Badge />
                    </Button>
                    <div className="bg-gray-100 gap-1 p-2 item-center rounded-lg">
                      1
                      <div className="item-center">
                        <Separator orientation="vertical" className="h-5 w-1" />
                        D366 Sales
                      </div>
                    </div>
                    <Button
                      variant={"ghost"}
                      size={"icon"}
                      className="border bg-gray-100"
                    >
                      +2
                    </Button>
                  </div>
                  <div className="item-center gap-2">
                    <div className="bg-neutral-100 p-1 rounded-lg">
                      AI-generated content may be incorrect
                    </div>
                    <ThumbsUp />
                    <ThumbsDown />
                  </div>
                </div>
              </Card>
            </div>
            <div className="bg-white shadow-lg rounded-lg my-5 p-5 border">
              <div className="flex items-center justify-between mb-2">
                <h1 className="font-bold">About {name}</h1>
                <ChevronDown />
              </div>
              <p>{about}</p>
            </div>
            <div className="flex justify-between items-center">
              <div className="item-center justify-between gap-4">
                <h1>show 1 of 9</h1>
                <Separator orientation="vertical" className="h-5" />
                <p className="text-brand-1 font-bold">show all</p>
              </div>
              <div className="item-center gap-1">
                <div className="h-2 w-10 bg-brand-1 rounded-lg" />
                <div className="size-2 rounded-full bg-neutral-300" />
                <div className="size-2 rounded-full bg-neutral-300" />
                <div className="size-2 rounded-full bg-neutral-300" />
              </div>
              <div className="item-center gap-2">
                <ThumbsUp />
                <ThumbsDown />
              </div>
            </div>
          </div>
        </div>
      </ResponsiveModal>
      <Card className="cursor-pointer" onClick={() => setModalOpen(true)}>
        <div className="p-5">
          <div className="flex items-center">
            <Avatar className="size-16">
              <AvatarImage src={image} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="ml-2 flex flex-col">
              <h1 className="font-bold">{name}</h1>
              <div className="flex">
                {position}
                <Dot className="" />
                {country}
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-r from-brand-9/50 to-brand-9/20 my-2 p-5 rounded-md">
            <div className="flex items-center gap-2">
              <Icon />
              <p className="font-bold">{category}</p>
            </div>
            <p>{reasonforrecommending}</p>
          </div>
          <div className="flex items-center gap-1">
            <p>{task}</p>
            <Dot />
            <p>{category}</p>
          </div>
        </div>
      </Card>
    </>
  );
};
