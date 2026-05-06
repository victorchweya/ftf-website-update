import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ContentContainer } from "../components/layout/ContentContainer";

export default function Careers() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative w-full">
      <section className="bg-[#fefcf5] min-h-[640px] overflow-hidden relative w-full">
        <Header />
        <ContentContainer size="wide" className="pt-[184px] pb-24">
          <div className="max-w-[760px]">
            <p className="font-['Rubik',sans-serif] font-medium leading-[1.68] mb-5 text-[#d78228] text-[16px] tracking-[0.48px]">
              Careers
            </p>
            <h1 className="font-['Fraunces',serif] font-normal leading-[1.05] text-[#0f251b] text-[48px] tracking-[1.44px] md:text-[64px] md:tracking-[1.92px]">
              Join the team reshaping food systems
            </h1>
            <p className="font-['Rubik',sans-serif] font-normal leading-[1.68] mt-8 max-w-[620px] text-[#1e4a35] text-[18px] tracking-[0.54px]">
              Explore open roles and learn how to join Farm to Feed as we build a more resilient, less wasteful fresh produce supply chain.
            </p>
          </div>
        </ContentContainer>
      </section>
      <Footer />
    </div>
  );
}
