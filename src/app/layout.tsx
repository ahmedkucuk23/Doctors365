import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Doctors 365 | Find Online Doctor in Your Language",
  description: "Doctors 365 is a multilingual online medical platform for real-time telemedicine. Connect with 600+ verified specialists across 28+ departments in 11+ languages. Video consultations available 24/7.",
  keywords: ["online doctor", "telemedicine", "video consultation", "second opinion", "online prescription", "multilingual healthcare"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-body">{children}</body>
    </html>
  );
}
