import MainHeader from "@/components/main-header/main-header";
import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "NextJS App",
  description: "My NextJS App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
