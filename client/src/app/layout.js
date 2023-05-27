import "./../styles/globals.css";
import { Manrope } from "next/font/google";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { AuthContextProvider } from "./context/context";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        <AuthContextProvider>
          <Header />
          {children}
        </AuthContextProvider>
        <Footer />
      </body>
    </html>
  );
}
