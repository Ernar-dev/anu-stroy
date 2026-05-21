import "./globals.css";
import { Oswald } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata = {
  title: "ANUSTROY | Высотные работы Алматы",
  description:
    "Промышленный альпинизм, утепление фасадов, герметизация швов и высотные работы.",
};

const oswald = Oswald({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="kz">
      <body className={oswald.className}>
        {children}
      </body>
      <GoogleAnalytics gaId="G-XXXXXXXXXX" />
    </html>
  );
}