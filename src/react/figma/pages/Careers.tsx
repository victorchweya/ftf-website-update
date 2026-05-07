import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ContentContainer } from "../components/layout/ContentContainer";
const careerOpenings: Array<{
  title: string;
  location: string;
  href: string;
}> = [];
export default function Careers() {
  return <div className="bg-white content-stretch flex flex-col items-start relative w-full">
       {/* Hero */}<Header />
       {/* Openings */}<main className="w-full">
        <section className="bg-[#fefcf5] min-h-[640px] overflow-hidden relative w-full">
      <ContentContainer size="wide" className="pt-[184px] pb-24">
        <div className="max-w-[760px]">
          <p className="font-['Rubik',sans-serif] font-medium leading-[1.68] mb-5 text-[#d78228] text-[16px] tracking-[0.48px]">
            Careers
          </p>
          <h1 className="font-['Fraunces',serif] font-normal leading-tight text-[#0f251b] text-4xl md:text-5xl lg:text-6xl tracking-wide">
            Join the team reshaping food systems
          </h1>
          <p className="font-['Rubik',sans-serif] font-normal leading-[1.68] mt-8 max-w-[620px] text-[#1e4a35] text-[18px] tracking-[0.54px]">
            Explore open roles and learn how to join Farm to Feed as we build a more resilient, less wasteful fresh produce supply chain.
          </p>
        </div>
      </ContentContainer>
    </section>
        {careerOpenings.length === 0 ? null : <section className="bg-white py-20 w-full">
      <ContentContainer size="wide">
        <div className="grid gap-6 md:grid-cols-2">
          {careerOpenings.map(opening => <article className="border border-[#dfeddf] p-8 rounded-lg" key={opening.title}>
              <h2 className="font-['Fraunces',serif] text-2xl text-[#0f251b]">{opening.title}</h2>
              <p className="font-['Rubik',sans-serif] mt-3 text-[#1e4a35] text-[16px]">{opening.location}</p>
              <a className="font-['Rubik',sans-serif] mt-6 inline-block text-[#1e4a35]" href={opening.href}>
                View role
              </a>
            </article>)}
        </div>
      </ContentContainer>
    </section>}
      </main>
       {/* Footer */}<Footer />
    </div>;
}