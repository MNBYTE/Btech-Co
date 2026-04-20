import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans bg-white text-[#1D1D1D]">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
