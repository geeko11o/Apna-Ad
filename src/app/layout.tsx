import type { Metadata } from "next";
import { Inter, Outfit, Pacifico } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });
const logoFont = Pacifico({ weight: "400", subsets: ["latin"], variable: "--font-logo" });

export const metadata: Metadata = {
    title: "Apna Ad | Scale Your Affiliate Business 3X Faster",
    description: "Learn the proven Meta Ads system to scale your business and generate high-quality leads without getting banned.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${inter.variable} ${outfit.variable} ${logoFont.variable} antialiased`}>
                {children}
            </body>
        </html>
    );
}
