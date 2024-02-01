import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

const mont = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" rel="stylesheet"></link>

      <body className={mont.className}>{children}</body>
    </html>
  );
}
