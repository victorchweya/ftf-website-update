import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export default function NewsAndEvents() {
  return (
    <div className="relative w-full">
      <Header />
      <div className="min-h-screen pt-32 px-4 md:px-8 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <h1 className="font-['Fraunces',serif] text-4xl md:text-5xl lg:text-6xl text-[#1e4a35] mb-6">
            News and Events
          </h1>
          <p className="font-['Rubik',sans-serif] text-lg text-gray-700 mb-8">
            Stay updated with our latest news and upcoming events.
          </p>
          <div className="bg-[#fefcf5] p-8 rounded-lg">
            <p className="font-['Rubik',sans-serif] text-base text-gray-600">
              Content coming soon...
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
