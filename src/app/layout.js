import "./globals.css";


export const metadata = {
  title: "Kai",
  description: "Learning language with Ai",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-linear-to-b from-nav-bar to-white">
        {children}
      </body>
    </html>
  );
}
