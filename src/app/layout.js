import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Mukul Rai | Full Stack Developer",
  description:
    "Portfolio of Mukul Rai, a full-stack web developer specializing in React, Node.js, TypeScript, and scalable application design.",
  keywords: [
    "Mukul Rai",
    "Full Stack Developer",
    "React Developer",
    "Node.js",
    "JavaScript",
    "TypeScript",
    "Portfolio",
    "Web Developer",
  ],
  authors: [{ name: "Mukul Rai", url: "https://portfolio.mukulrai.co.in" }],
  creator: "Mukul Rai",
  openGraph: {
    title: "Mukul Rai | Full Stack Developer",
    description:
      "Explore Mukul Rai’s portfolio projects built with cutting-edge web technologies.",
    url: "https://portfolio.mukulrai.co.in",
    siteName: "Mukul Rai Portfolio",
    images: [
      {
        url: "https://portfolio.mukulrai.co.in/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mukul Rai Portfolio Screenshot",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mukul Rai | Full Stack Developer",
    description:
      "Explore Mukul Rai’s web development portfolio and featured projects.",
    creator: "@mukulrai04",
    images: ["https://portfolio.mukulrai.co.in/og-image.png"],
  },
  metadataBase: new URL("https://portfolio.mukulrai.co.in/"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
