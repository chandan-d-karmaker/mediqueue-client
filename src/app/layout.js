import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Mediqueue",
  description: "A tutor finding and appointment scheduling application for students.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en" data-theme="light" scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className=" flex flex-col">

        <main>
          {children}
        </main>
        <Toaster />
      </body>
    </html>
  );
}
