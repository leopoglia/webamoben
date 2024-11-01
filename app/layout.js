import localFont from "next/font/local";
import "./globals.css";
import { Saira_Stencil_One } from 'next/font/google';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const sairaStencil = Saira_Stencil_One({
  subsets: ["latin"],
  variable: "--font-saira-stencil",
  weight: "400",
});

export const metadata = {
  title: "AMOBEN",
  description: "Site da Associação de Moradores do Bairro Estrada Nova"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,700;1,400&display=swap" rel="stylesheet" />
        
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${sairaStencil.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
