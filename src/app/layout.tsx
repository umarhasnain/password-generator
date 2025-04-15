import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Free Random Password Generator | Create Strong & Secure Passwords",
  description:
    "Need a secure password? Use our free random password generator to create strong and unique passwords in seconds. Secure your accounts instantly!",
    other: {
      'google-site-verification': 'Pxi-Xb83qkGcWaAvErZAxnlKkr5RTWEzghOcwqkyq_4',
    },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
