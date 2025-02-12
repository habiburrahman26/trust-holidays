import { Geist, Geist_Mono } from 'next/font/google';
import Navbar from '@/components/ui/navbar';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './globals.css';
import Footer from '@/components/ui/footer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata = {
  title: 'Trust Holidays',
  description: 'This is Trust Holidays application',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />

        <main>{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
