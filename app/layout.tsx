import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Andy Phu — Software Engineer",
  description:
    "Software engineer at Uber building backend systems, machine learning applications, and data pipelines.",
  icons: { icon: "/portfolioLogo.ico" },
  openGraph: {
    title: "Andy Phu — Software Engineer",
    description: "Thoughtful software. Real-world impact.",
    type: "website",
  },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
