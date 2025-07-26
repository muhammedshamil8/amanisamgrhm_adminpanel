import Logo from "@/assets/logo.png";
import AppScreenshot from "@/assets/amani.jpeg";
import GooglePlay from "@/assets/google-play-badge.png";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

function App() {
    const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <img src={Logo} alt="Qurhan Logo" className="h-10" />
          <nav className="hidden md:flex space-x-6">
            <a href="#features" className="text-gray-600 hover:text-blue-500 cursor-pointer">
              Features
            </a>
            <a href="#download" className="text-gray-600 hover:text-blue-500 cursor-pointer">
              Download
            </a>
            <a onClick={() => navigate('/privacy-policy')} className="text-gray-600 hover:text-blue-500 cursor-pointer">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-8">
        <section className="flex flex-col md:flex-row items-center justify-between gap-8 mb-16">
          <div className="md:w-1/2">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Qurhan App
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              The complete solution for your Quranic studies and daily prayers.
              Access anytime, anywhere with our mobile application.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://play.google.com/store/apps/details?id=com.appletsolution.amanisamgraham"
                className=" text-white  rounded-lg text-center transition p-0 m-0 h-20 relative"
              >
                <img
                  src={GooglePlay}
                  alt="Download on Google Play"
                  className=" p-0 m-0 w-full h-full object-cover rounded-lg"
                />
              </a>
            </div>
          </div>
          <div className="md:w-1/2">
            <img
              src={AppScreenshot}
              alt="Qurhan App Screenshot"
              className="rounded-lg shadow-lg max-w-full h-auto"
            />
          </div>
        </section>

        <section id="features" className="mb-16">
  <h2 className="text-2xl font-bold text-gray-800 mb-6">
    Key Features
  </h2>
  <div className="grid md:grid-cols-3 gap-6">
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h3 className="font-semibold text-lg mb-2">Complete Quran</h3>
      <p className="text-gray-600">
        Access the full Quran with high-quality translations, loaded dynamically from our secure server.
      </p>
    </div>
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h3 className="font-semibold text-lg mb-2">Play Quran Audio</h3>
      <p className="text-gray-600">
        Stream Quran recitations from renowned Qaris directly from our backend server — even while browsing verses.
      </p>
    </div>
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h3 className="font-semibold text-lg mb-2">Bookmarks & Progress</h3>
      <p className="text-gray-600">
        Bookmark your favorite Ayahs, and continue from where you left off — all synced across your devices.
      </p>
    </div>
  </div>
</section>

      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
