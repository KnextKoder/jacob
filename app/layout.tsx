import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Student Energy OAU",
  description: "Join a passionate community of changemakers driving sustainability and energy innovation at Obafemi Awolowo University. Empower yourself, build your network, and make a real impact.",
  icons: {
    icon: "/student enrgy oau logo/STUDENT ENERGY OAU logo.png",
    apple: "/student enrgy oau logo/STUDENT ENERGY OAU logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-yellow-100/30`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
