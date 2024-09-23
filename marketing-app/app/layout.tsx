import './globals.css';
import { ReactNode } from 'react';
import Navbar from './/components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

export const metadata = {
  title: 'Free Future Marketing',
  description: 'Helping businesses grow through innovative marketing solutions.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}