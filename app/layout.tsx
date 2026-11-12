import type { Metadata } from "next";
import { Inter, Roboto_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const space = Space_Grotesk({ subsets: ["latin"], variable: "--font-space" });
const mono = Roboto_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: { default: "NeuroTech @ UCSB", template: "%s | NeuroTech @ UCSB" },
  description: "UC Santa Barbara's neurotechnology club — bridging neuroscience and engineering.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body className={`${inter.variable} ${space.variable} ${mono.variable}`}><Navbar /><main className="site-main">{children}</main><Footer /></body></html>;
}
