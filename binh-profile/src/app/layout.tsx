import BFooter from "./components/common/Footer";
import Header from "./components/common/Header";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Bui Duc Binh",
  description: "Bui Duc Binh's personal website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <BFooter />
      </body>
    </html>
  );
}
