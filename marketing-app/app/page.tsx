export default function Home() {
  return (
    <div className="space-y-16 pb-16"> {/* Add padding-bottom to the parent container */}
      {/* Hero Image Section */}
      <section className="relative h-[60vh] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/hero-image.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white text-center">
            Welcome to Free Future Marketing
          </h1>
        </div>
      </section>

      {/* Title and Explanation Section */}
      <section className="max-w-4xl mx-auto text-center px-4">
        <h2 className="text-4xl font-semibold mb-4">Grow Your Brand With Us</h2>
        <p className="text-lg text-gray-600">
          At Free Future Marketing, we specialize in helping your business thrive in the digital space. From content creation to website development and maintenance, we offer comprehensive services to boost your brand visibility.
        </p>
      </section>

      {/* Explanation with Call to Action */}
      <section className="max-w-2xl mx-auto text-center px-4 py-12 bg-gray-100 rounded-lg shadow-lg mb-16">
        <h3 className="text-3xl font-semibold text-gray-900 mb-4">Ready to Boost Your Business?</h3>
        <p className="text-lg text-gray-700 mb-6">
          Our team of experts is ready to provide you with top-tier marketing services, tailored to your brand's needs. Let's collaborate and take your business to the next level.
        </p>
        <a href="/contact-us" className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700 transition">
          Contact Us
        </a>
      </section>
    </div>
  );
}
