// pages/PrivacyPolicy.jsx
import Footer from '../components/Footer';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white shadow-sm py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold text-gray-800">Privacy Policy</h1>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8 max-w-4xl">
        <section className="prose">
          <p>This Privacy Policy describes how we handle your information when you use our app.</p>

          <h2>Information We Collect</h2>
          <ul>
            <li>Basic device information for app performance and analytics</li>
            <li>App usage data to improve user experience</li>
            <li>Bookmark and preference data stored locally on your device</li>
            <li>User-submitted feedback via the feedback form</li>
          </ul>

          <h2>How We Use Your Information</h2>
          <ul>
            <li>To provide and maintain Quran audio, translation, and reading services</li>
            <li>To improve app functionality and user satisfaction</li>
            <li>To gather feedback and suggestions through the feedback form</li>
            <li>To load translations and other content from our secure server</li>
          </ul>

          <h2>Children’s Privacy</h2>
          <p>
            Our app is suitable for users of all ages, including children. We do not knowingly collect
            personal data from children under 13. If you believe we have unknowingly collected such data,
            please contact us immediately.
          </p>

          <h2>Data Security</h2>
          <p>
            We use secure protocols to protect your information. Quranic content and translations are
            securely fetched from our server. Locally stored data (e.g. bookmarks) never leaves your device.
          </p>

          <h2>Changes to This Privacy Policy</h2>
          <p>
            We may update this policy as necessary. All updates will be posted on this page.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy, please contact us at <strong>blissapps2025@gmail.com</strong>.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}
