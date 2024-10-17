import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <Link href="/" className="text-xl font-bold">
      FA Marketing Agency
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
