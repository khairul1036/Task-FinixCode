import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Football Finals",
  description: "Road to the Football Finals",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.cdnfonts.com/css/satoshi" rel="stylesheet" />
      </head>
      <body className="font-satoshi antialiased bg-[#F4F5EF]">
        <nav>
          <Navbar/>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
}
