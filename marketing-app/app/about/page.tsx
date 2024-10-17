export default function About() {
  return (
    <div>
      <section className="relative h-[60vh] bg-cover bg-center bg-no-repeat bg-black bg-opacity-50 mb-4" style={{ backgroundImage: "url('/images/about-image.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50" />
      </section>
      <div className="max-w-4xl mx-auto px-4 py-8">

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed">
            At FA Marketing, our mission is to empower businesses of all sizes to thrive in the digital landscape. We provide tailored marketing strategies, creative content, and comprehensive social media management to help you connect with your audience and achieve your business goals.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Story</h2>
          <p className="text-gray-700 leading-relaxed">
            Founded in 2024, FA Marketing was born out of a passion for innovative marketing solutions and a desire to help businesses succeed. Our team of experienced professionals brings together a wealth of knowledge in digital marketing, content creation, and strategic planning. We are dedicated to delivering exceptional results and fostering long-term relationships with our clients.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Team</h2>
          <p className="text-gray-700 leading-relaxed">
            Our team is a diverse group of marketing experts, designers, and strategists who are committed to excellence. We work collaboratively to ensure that every project receives the attention and expertise it deserves. Meet our talented team and learn more about the individuals who make Free Future Marketing a leader in the industry.
          </p>
        </section>
      </div>
    </div>
  );
}
