// pages/TermsOfService.jsx
import Footer from '../components/Footer';

export default function TermsOfService() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white shadow-sm py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold text-gray-800">Terms of Service</h1>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8 max-w-4xl">
        <section className="prose">
          <p>
            By using our app, you agree to the following terms and conditions. If you do not agree,
            please do not use the app.
          </p>

          <h2>Use of Content</h2>
          <p>
            All Quranic content is for spiritual and personal use only. Commercial redistribution or
            modification is not permitted.
          </p>

          <h2>Access and Availability</h2>
          <p>
            We strive to ensure uninterrupted access, but there may be occasional downtimes for updates
            or server maintenance.
          </p>

          <h2>Feedback</h2>
          <p>
            You may submit feedback through the in-app form. Feedback is used to improve our services
            and may be stored securely.
          </p>

          <h2>Modifications to Terms</h2>
          <p>
            We may update these terms as needed. Continued use of the app after changes implies
            acceptance of the revised terms.
          </p>

          <h2>Contact</h2>
          <p>
            For questions or concerns, contact us at <strong>blissapps2025@gmail.com</strong>.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}
