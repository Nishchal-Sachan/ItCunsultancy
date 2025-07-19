import React from 'react';

const Privacy: React.FC = () => {
  return (
    <div>
      <section className="py-20 bg-white dark:bg-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Last updated: December 2024
            </p>
          </div>

          <div className="prose prose-slate dark:prose-invert max-w-none">
            <h2>Information We Collect</h2>
            <p>
              We collect information you provide directly to us, such as when you create an account, 
              contact us, or use our services. This may include your name, email address, phone number, 
              company information, and any other information you choose to provide.
            </p>

            <h2>How We Use Your Information</h2>
            <p>
              We use the information we collect to:
            </p>
            <ul>
              <li>Provide, maintain, and improve our services</li>
              <li>Process transactions and send related information</li>
              <li>Send technical notices, updates, security alerts, and support messages</li>
              <li>Respond to your comments, questions, and customer service requests</li>
              <li>Communicate with you about products, services, offers, and events</li>
            </ul>

            <h2>Information Sharing</h2>
            <p>
              We do not sell, trade, or otherwise transfer your personal information to third parties 
              without your consent, except as described in this policy. We may share your information in 
              the following circumstances:
            </p>
            <ul>
              <li>With your consent</li>
              <li>For legal reasons</li>
              <li>To protect rights and safety</li>
              <li>In connection with a business transfer</li>
            </ul>

            <h2>Data Security</h2>
            <p>
              We implement appropriate technical and organizational security measures to protect your 
              personal information against unauthorized access, alteration, disclosure, or destruction.
            </p>

            <h2>Your Rights</h2>
            <p>
              You have the right to:
            </p>
            <ul>
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Delete your personal information</li>
              <li>Object to or restrict processing</li>
              <li>Data portability</li>
            </ul>

            <h2>Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <ul>
              <li>Email: privacy@techflow.dev</li>
              <li>Phone: +1 (555) 123-4567</li>
              <li>Address: San Francisco, CA</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;
