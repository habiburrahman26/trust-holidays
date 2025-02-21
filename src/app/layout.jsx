import { Geist, Geist_Mono,Radio_Canada } from 'next/font/google';
import Footer from '@/components/ui/footer';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './globals.css';
import Navbar from '@/components/navbar/navbar';

const radioCanada = Radio_Canada({
  weight:['300','400','500','600','700'],
  variable: '--font-radio-canada',
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
        className={`${radioCanada.variable} font-radio  antialiased`}
      >
        <Navbar />

        <main>{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
