import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black flex min-h-screen flex-col items-center justify-between p-24 bg-black`}>
        <div >
          <h1 className=" text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
              A Casual Dive
            </span>{" "}
            into Horror .
          </h1>
        </div>
        {children}
      </body>
    </html>
  );
}