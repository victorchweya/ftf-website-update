import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ContentContainer } from "../components/layout/ContentContainer";

const newsEvents: Array<{
  title: string;
  excerpt: string;
  href: string;
}> = [];

function NewsAndEventsHeroSection() {
  return (
    <section className="bg-white min-h-screen pt-32 pb-24">
      <ContentContainer size="wide">
        <div className="max-w-[760px]">
          <h1 className="font-['Fraunces',serif] text-4xl md:text-5xl lg:text-6xl text-[#1e4a35] mb-6">
            News and Events
          </h1>
          <p className="font-['Rubik',sans-serif] text-lg text-gray-700 mb-8">
            Stay updated with our latest news and upcoming events.
          </p>
        </div>
        <NewsEventsListSection />
      </ContentContainer>
    </section>
  );
}

function NewsEventsListSection() {
  if (newsEvents.length === 0) {
    return (
      <div className="bg-[#fefcf5] p-8 rounded-lg">
        <p className="font-['Rubik',sans-serif] text-base text-gray-600">
          Content coming soon...
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {newsEvents.map((item) => (
        <article className="bg-[#fefcf5] p-8 rounded-lg" key={item.title}>
          <h2 className="font-['Fraunces',serif] text-2xl text-[#1e4a35]">{item.title}</h2>
          <p className="font-['Rubik',sans-serif] mt-4 text-base text-gray-600">{item.excerpt}</p>
          <a className="font-['Rubik',sans-serif] mt-6 inline-block text-[#1e4a35]" href={item.href}>
            Read more
          </a>
        </article>
      ))}
    </div>
  );
}

export default function NewsAndEvents() {
  return (
    <div className="relative w-full">
      <Header />
      <main>
        <NewsAndEventsHeroSection />
      </main>
      <Footer />
    </div>
  );
}
