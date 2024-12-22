import type { Metadata } from "next";
import "./globals.css";

import { Montserrat } from "next/font/google";
import TopNavbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Veloxy | Elevate your customer Relationships with Veloxy ",
  description: "Transform Your business with intelligent CRM",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} antialiased`}>
        <TopNavbar />
        <main className="flex relative">
          <Sidebar />
          <section className="flex min-h-screen bg-brand-3/80 flex-1 flex-col pb-6 max-md:pb-14">
            <div className="w-full h-full">{children}</div>
          </section>
        </main>
      </body>
    </html>
  );
}
