import { Geist, Geist_Mono } from "next/font/google"; // Corrected import
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/next";
import { URL } from "url"; // Import URL for clarity, though Next.js handles it

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
    "TypeScript",
    "Portfolio",
    "Web Developer",
  ],
  authors: [{ name: "Mukul Rai", url: "https://mukulrai.me" }],
  creator: "Mukul Rai",
  metadataBase: new URL("https://mukulrai.me/"),

  // -------------------------------------------------------------------
  // 🔑 1. ADDED/IMPROVED ICONS FOR FAVICON/SOCIAL CARD
  // -------------------------------------------------------------------
  icons: {
    // Main favicon
    icon: "/favicon.ico",
    // Shortcut icon for older browsers
    shortcut: "/favicon.ico",
    // Apple touch icon - using og-image as fallback until you add a proper one
    apple: "/og-image.png",
  },
  openGraph: {
    title: "Mukul Rai | Full Stack Developer",
    description:
      "Explore Mukul Rai’s portfolio projects built with cutting-edge web technologies.",
    url: "https://mukulrai.me",
    siteName: "Mukul Rai Portfolio",
    images: [
      {
        url: "https://mukulrai.me/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mukul Rai Portfolio Screenshot",
        type: "image/png",
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
    images: ["https://mukulrai.me/og-image.png"],
    site: "@mukulrai04",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} antialiased`} // Added font classes to html tag
      style={{ overflowY: "auto", overflowX: "hidden" }}
    >
      <body style={{ overflowY: "visible", overflowX: "hidden" }}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
