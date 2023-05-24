import "./main.css";
import { Inter } from "next/font/google";
import MainNavigation from "@/components/navigation/MainNavigation";
import AppFooter from "@/components/footer/AppFooter";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-900 min-h-screen`}>
        <MainNavigation />
        <main className="py-12 bg-gray-300">{children}</main>
        <AppFooter />
      </body>
    </html>
  );
}
