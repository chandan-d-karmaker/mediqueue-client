import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import ThemeProviders from "./providers/ThemeProvider";

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
      lang="en" scroll-behavior="smooth" suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className=" flex flex-col">
        <ThemeProviders>
          <main>{children}</main>
        </ThemeProviders>
        <Toaster />
      </body>
    </html>
  );
}
