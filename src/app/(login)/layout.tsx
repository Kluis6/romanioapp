import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Romaneio App",
  description: "Seu app de gestão",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative overflow-hidden bg-neutral-300 w-screen h-screen`}
      >
        {children}
        <footer className="flex justify-center py-4  absolute bottom-0 w-full">
          <p className="text-neutral-600 text-sm">Desenvolvido por <a href="https://www.graficonauta.com.br/" target="_blank" className="font-bold">Graficonauta</a> &#169; 2024</p>
        </footer>
      </body>
    </html>
  );
}
