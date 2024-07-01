import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./styles/main.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Craftbuy",
  description: "CraftBuy is your go-to online marketplace for unique, handmade goods from artisans around the world. From exquisite jewelry and fashion to distinctive home décor, each piece is crafted with passion and skill. Shop now to find one-of-a-kind items that celebrate creativity and support small businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
