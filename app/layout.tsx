import type { Metadata } from "next";
import { Inter, IBM_Plex_Serif} from "next/font/google";
import "./globals.css";
import { icons } from "lucide-react";

const inter = Inter({ subsets: ["latin"] , variable:'--font-inter' });
const ibmPlexSenserif = IBM_Plex_Serif({
  subsets: ['latin'],
  weight:['400', '700'],
  variable:'--font-ibm-plex-serif'
})


export const metadata: Metadata = {
  title: "Horizon",
  description: "Horizon a mordern bancking platform for everyone! ",
  icons : 'icons/logo.svg',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${ibmPlexSenserif.variable}`}>{children}</body>
    </html>
  );
}
