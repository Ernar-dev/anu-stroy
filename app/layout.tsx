import "./globals.css";

export const metadata = {
  title: "AnuStroy",
  description: "Industrial Construction Company",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="kz">
      <body>{children}</body>
    </html>
  );
}