import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chat App",
  description: "Created by Anas and Aman",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container h-screen overflow-hidden max-w-full">
          <div className="flex justify-between h-full w-full">
            <div className="bg-gray-200 w-1/4 h-full">Left Content</div>
            <div className="w-2/4 h-full">{children}</div>
            <div className="bg-gray-300 w-1/4 h-full">Right Content</div>
          </div>
        </div>
      </body>
    </html>
  );
}