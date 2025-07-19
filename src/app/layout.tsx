import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NexTech - Geleceğin Teknolojisi",
  description: "Yenilikçi teknoloji çözümleri ile geleceği şekillendiriyoruz. AI, Blockchain, IoT ve daha fazlası.",
  keywords: "teknoloji, AI, blockchain, IoT, yazılım, inovasyon",
  authors: [{ name: "NexTech Team" }],
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="dark">
      <body className="bg-black text-white antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
