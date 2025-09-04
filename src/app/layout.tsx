import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { getServerContext } from "@remkoj/optimizely-cms-react/rsc";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Optimizely CMS SaaS Integration",
  description: "Next.js application integrated with Optimizely CMS SaaS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const context = getServerContext();
  
  return (
    <html lang={context.locale ?? "en"}>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
