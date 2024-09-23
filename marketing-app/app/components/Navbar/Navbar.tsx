// app/(components)/Navbar.js

import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-blue-300 text-white p-4 flex justify-between items-center">
      <Link href="/" className="text-xl font-bold">
      Free Future Marketing
      </Link>
      <div className="space-x-4">
        <Link href="/about" className="">About</Link>
        <Link href="/products-and-services" className="">Products and Services</Link>
        <Link href="/contact-us" className="">Contact Us</Link>
      </div>
    </nav>
  );
};

export default Navbar;
