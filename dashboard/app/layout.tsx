import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>

          <nav className="bg-white border-gray-200 dark:bg-gray-900"> {/* Navigation bar */}
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"> {/* Container for navigation bar content */}
              <a href="https://github.com/amn-d" target="_blank" className="flex items-center space-x-3 rtl:space-x-reverse"> {/* Logo or brand */}
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Three</span> {/* Brand text */}
              </a>
              <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse"> {/* Right-side content */}
                <button type="button" className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"> {/* User menu button */}
                  <img className="w-8 h-8 rounded-full" src="https://avatars.githubusercontent.com/u/129135638?s=400&u=4a7f06cc6b95872f1fd53ff2b993c6ca95f0dc49&v=4" alt="user photo"/> {/* User photo */}
                </button>
              </div>
              <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user"> {/* Additional navigation links */}
                {/* Add your additional navigation links here */}
              </div>
            </div>
          </nav>

        </main>
        {children}
      </body>
    </html>
  );
}
