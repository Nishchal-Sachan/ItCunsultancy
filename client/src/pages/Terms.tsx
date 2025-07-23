import React from 'react';

const Terms: React.FC = () => {
  return (
    <div>
      <section className="py-20 bg-white dark:bg-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl mb-4">
              Terms of Service
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Last updated: December 2024
            </p>
          </div>

          <div className="prose prose-slate dark:prose-invert max-w-none">
            <h2>Agreement to Terms</h2>
            <p>
              By accessing and using ClatterChatter EdTech services, you accept and agree to be bound 
              by the terms and provision of this agreement.
            </p>

            <h2>Services</h2>
            <p>
              ClatterChatter EdTech provides IT consulting services including but not limited to:
            </p>
            <ul>
              <li>IT Strategy Consulting</li>
              <li>Cloud Architecture Design</li>
              <li>MVP Development</li>
              <li>UI/UX Design Services</li>
            </ul>

            <h2>User Responsibilities</h2>
            <p>
              You agree to:
            </p>
            <ul>
              <li>Provide accurate and complete information</li>
              <li>Maintain the confidentiality of your account</li>
              <li>Use our services in compliance with applicable laws</li>
              <li>Not interfere with or disrupt our services</li>
            </ul>

            <h2>Intellectual Property</h2>
            <p>
              The service and its original content, features, and functionality are and will remain 
              the exclusive property of ClatterChatter EdTech and its licensors. The service is protected by 
              copyright, trademark, and other laws.
            </p>

            <h2>Payment Terms</h2>
            <p>
              Payment terms will be specified in individual service agreements. Generally:
            </p>
            <ul>
              <li>Invoices are due within 30 days of receipt</li>
              <li>Late payments may incur additional fees</li>
              <li>Refunds are subject to our refund policy</li>
            </ul>

            <h2>Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, ClatterChatter EdTech shall not be liable for any indirect, 
              incidental, special, consequential, or punitive damages, or any loss of profits or 
              revenues, whether incurred directly or indirectly.
            </p>

            <h2>Termination</h2>
            <p>
              We may terminate or suspend your access immediately, without prior notice or liability, 
              for any reason whatsoever, including without limitation if you breach the Terms.
            </p>

            <h2>Contact Information</h2>
            <p>
              Questions about the Terms of Service should be sent to us at:
            </p>
            <ul>
              <li>Email:helpdesk@clatterchatteredtech.com</li>
              <li>Phone (US): +1 (917) 521-4004</li>
              <li>Phone (IN): +91 (885) 815-1144</li>
              <li>
                Address: 14 Singh Villa, Gangapur Colony,
                <br /> Yashoda Nagar, Kanpur Nagar-208011,
                <br /> Uttar Pradesh
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Terms;
