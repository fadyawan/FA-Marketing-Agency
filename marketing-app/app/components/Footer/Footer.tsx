import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white p-4 text-center">
      <p>&copy; {new Date().getFullYear()} FA Marketing. All rights reserved.</p>
      <div className="mt-2 space-x-4">
        <Link href="/" className="">Home</Link>
        <Link href="/products-and-services" className="">Products and Services</Link>
        <Link href="/contact" className="">Contact Us</Link>
      </div>
    </footer>
  );
};

export default Footer;
