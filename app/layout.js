import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Amarjit Gupta | Portfolio",
    template: "%s | Amarjit Gupta",
  },
  description:
    "Amarjit Gupta | Web Developer Portfolio showcasing projects, skills, and expertise in React, Next.js, and full-stack development.",
  keywords: ["Amarjit Gupta", "Portfolio", "Web Developer", "React", "Next.js", "MERN Stack","Amarjit gupta Portfolio"],
  icons: {
    icon: "/images/kody.png",
  },
  metadataBase: new URL("https://amarjitgupta.com"),
  openGraph: {
    title: "Amarjit Gupta Portfolio",
    description: "Amarjit Gupta | Web Developer Portfolio showcasing projects, skills, and expertise in React, Next.js, and full-stack development.",
    url: "https://amarjit-portfolio-012.vercel.app/",
    siteName: "Amarjit Gupta",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Amarjit Gupta Portfolio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amarjit Gupta Portfolio",
    description: "Amarjit Gupta | Web Developer Portfolio showcasing projects, skills, and expertise in React, Next.js, and full-stack development.",
    creator: "@amarjitgupta",
    images: ["/og-image.png"],
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}






