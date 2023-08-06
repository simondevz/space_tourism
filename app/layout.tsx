import "./globals.css";
import type { Metadata } from "next";
import Navbar from "./navbar";
import Background from "./background";

export const metadata: Metadata = {
  title: "Space Torism",
  description: "A Challenge by frontendmentor.io",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Background>
          <Navbar />
          {children}
        </Background>
      </body>
    </html>
  );
}
