import "./globals.css";
import { Figtree } from "next/font/google";

const figtree = Figtree({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-figtree",
});

export const metadata = {
  title: "Kai",
  description: "Learning language with Ai",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${figtree.variable} bg-linear-to-b from-nav-bar to-white`}>
        {children}
      </body>
    </html>
  );
}
