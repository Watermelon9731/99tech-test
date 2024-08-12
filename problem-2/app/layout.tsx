import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Currency Convert",
  description: "Currency Convert site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head></head>
      <body
        className={cn(
          "font-sans max-h-screen overflow-hidden p-10",
          fontSans.variable
        )}
      >
        <div className="w-2/3 max-h-fit m-auto border rounded-lg p-10">
          <h1 className="text-center text-3xl font-extrabold tracking-tight">
            Currency Swap
          </h1>
          <div>{children}</div>
        </div>
      </body>
    </html>
  );
}
