// Disclaimer.js
import React from "react";

const Disclaimer = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-gray-100 rounded-lg shadow-lg mt-10 mb-9">
      <h1 className="text-4xl font-bold text-center mb-8">Disclaimer</h1>

      <p className="text-lg mb-6">
        The information provided by Mystivibes on this website is for general
        informational purposes only. All information on the site is provided in
        good faith; however, we make no representation or warranty of any kind,
        express or implied, regarding the accuracy, adequacy, validity,
        reliability, availability, or completeness of any information on the
        site.
      </p>

      <h2 className="text-2xl font-semibold mb-4">External Links Disclaimer</h2>
      <p className="text-lg mb-6">
        This site may contain links to other websites or content belonging to or
        originating from third parties. Such external links are not monitored or
        checked for accuracy, adequacy, validity, reliability, availability, or
        completeness by us.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Professional Disclaimer</h2>
      <p className="text-lg mb-6">
        The information provided on this website is not intended as and should
        not be construed as professional advice. Please consult with a
        professional before taking any action based on the information found on
        this website.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Affiliates Disclaimer</h2>
      <p className="text-lg mb-6">
        This website may contain affiliate links, which means we may earn a
        commission if you click on or make a purchase through such links at no
        additional cost to you.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Testimonials Disclaimer</h2>
      <p className="text-lg mb-6">
        Any testimonials on this site are individual opinions and may not
        reflect your experience or the experience of others. The results you
        obtain from our services may vary.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Limitation of Liability</h2>
      <p className="text-lg mb-6">
        In no event shall MytiVibes.club, nor its directors, employees, or
        partners, be liable for any direct, indirect, incidental, special,
        consequential, or punitive damages, including, without limitation, loss
        of profits, data, or other intangible losses arising out of or in
        connection with your use of the site.
      </p>

      <p className="text-lg">
        If you have any questions about this disclaimer, feel free to contact us
        at:
        <br />
        {/* Email: support@example.com */}
      </p>
    </div>
  );
};

export default Disclaimer;
