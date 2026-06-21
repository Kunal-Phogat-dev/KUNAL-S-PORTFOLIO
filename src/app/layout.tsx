import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { LenisProvider } from "@/components/lenis-provider";
import { MouseTracker } from "@/components/mouse-tracker";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kunal Phogat | 18yo Developer. 7-Day Delivery. Real Results.",
  description: "18-year-old Indian web developer specializing in high-converting websites, AI tools, and modern web applications. I ship fast and deliver results.",
  keywords: ["web developer", "next.js developer", "freelance web developer", "full stack developer", "AI developer", "india", "high-converting websites"],
  authors: [{ name: "Kunal Phogat" }],
  openGraph: {
    title: "Kunal Phogat | 18yo Developer. 7-Day Delivery. Real Results.",
    description: "I build blazing-fast, high-converting websites and AI tools that make you money.",
    images: [
      {
        url: "/avatar.jpg",
        width: 1200,
        height: 630,
        alt: "Kunal Phogat",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kunal Phogat | 18yo Developer. 7-Day Delivery. Real Results.",
    description: "18yo developer from India shipping high-converting websites and AI tools extremely fast.",
    images: ["/avatar.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen bg-background text-foreground antialiased`}>
        <MouseTracker />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
        >
          <LenisProvider>
            {children}
          </LenisProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
