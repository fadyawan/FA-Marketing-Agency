export default function SocialMediaManagement() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Main Heading */}
      <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">Social Media Account Management</h1>
      
      {/* Introduction Text */}
      <p className="text-gray-700 leading-relaxed mb-6">
        Our social media management services help you build and maintain a strong presence on social platforms. We handle everything from content creation to analytics.
      </p>
      
      {/* Content Creation Section */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Content Creation</h2>
        <p className="text-gray-700 leading-relaxed">
          We create engaging and relevant content for your social media profiles. This includes posts, stories, and multimedia content tailored to your audience.
        </p>
      </section>
      
      {/* Account Management Section */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Account Management</h2>
        <p className="text-gray-700 leading-relaxed">
          Our team manages your social media accounts, including scheduling posts, responding to comments, and interacting with followers to build a positive brand image.
        </p>
      </section>
      
      {/* Analytics and Reporting Section */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Analytics and Reporting</h2>
        <p className="text-gray-700 leading-relaxed">
          We track the performance of your social media efforts and provide detailed reports. This includes insights into engagement, reach, and growth, along with recommendations for improvement.
        </p>
      </section>
    </div>
  );
}
