import "./globals.css";
import { Karla } from "next/font/google";

const karla = Karla({ subsets: ["latin"] });

export const metadata = {
  title: "Jackson Garinger",
  description: "Howdy",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={karla.className}>{children}</body>
    </html>
  );
}
