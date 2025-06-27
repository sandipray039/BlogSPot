import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="px-4 py-10 sm:px-6 lg:px-20 bg-white text-gray-800">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center">Privacy Policy</h1>

        <p className="mb-4">
          Welcome to our website. Your privacy is important to us, and this Privacy Policy explains how we collect, use, and protect your personal information.
        </p>

        <section className="mb-6">
          <h2 className="text-xl sm:text-2xl font-semibold mb-2">1. Information We Collect</h2>
          <p>
            We may collect personal details such as your name, email address, login information, and any other data you provide through contact forms or blog interactions.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl sm:text-2xl font-semibold mb-2">2. How We Use Your Information</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>To provide and maintain our services.</li>
            <li>To improve website functionality and user experience.</li>
            <li>To respond to inquiries and support requests.</li>
            <li>To send updates or marketing emails (if you opt-in).</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl sm:text-2xl font-semibold mb-2">3. Cookies</h2>
          <p>
            We use cookies to enhance your browsing experience. You can choose to disable cookies through your browser settings.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl sm:text-2xl font-semibold mb-2">4. Third-Party Services</h2>
          <p>
            We may use third-party tools for analytics or hosting. These services may collect data as per their own privacy policies.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl sm:text-2xl font-semibold mb-2">5. Your Rights</h2>
          <p>
            You have the right to access, update, or delete your personal information. Please contact us if you have any concerns regarding your data.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl sm:text-2xl font-semibold mb-2">6. Changes to This Policy</h2>
          <p>
            We may update our Privacy Policy occasionally. Any changes will be posted on this page with the updated date.
          </p>
        </section>

        <p className="text-sm text-gray-500 mt-8">
          Last updated: June 24, 2025
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
