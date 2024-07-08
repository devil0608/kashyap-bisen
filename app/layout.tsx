import type { Metadata } from "next";
import "./globals.css";

import localFont from "next/font/local";

const helvetica = localFont({
  src: "../fonts/Helvetica.ttf",
  variable: "--helvetica",
});

const machina = localFont({
  src: "../fonts/Machina.ttf",
  variable: "--machina",
});
export const metadata: Metadata = {
  title: "Kashyap Bisen",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      suppressHydrationWarning
      className={`${helvetica.variable} ${machina.variable} `}
      lang="en"
    >
      <body className={machina.className}>{children}</body>
    </html>
  );
}
