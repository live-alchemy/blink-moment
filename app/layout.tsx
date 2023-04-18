import "./globals.css";
import Nav from "./components/Nav";

export const metadata = {
  title: "Blink Moment",
  description: "Guess who, with astrology charts",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="pt-16 overflow-hidden h-screen">
        <Nav />
        {children}
      </body>
    </html>
  );
}
