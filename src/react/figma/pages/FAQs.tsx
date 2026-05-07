import * as FAQsSvgs from "../imports/FaQs/fAQs-inline-svgs";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { SectionHeader } from "../components/layout/SectionHeader";
import { SectionShell } from "../components/layout/SectionShell";
import { Link } from "../components/Link";
import svgPaths from "../imports/FaQs/svg-af2ylmx84r";
const faqFilters = ["General", "Buyers", "Farmers"];
const faqItems = ["What is the effect of food loss and waste on the environment?", "How does Farm to Feed tackle food loss?", "How do you measure your environmental impact?", "How can I get involved with Farm to Feed?", "What is Farm to Feed's track record?", "What is the impact of investing in Farm to Feed?"];
export default function FAQs() {
  return <div className="bg-white content-stretch flex flex-col items-start relative w-full">
      {/* FAQ */}<main className="bg-[#fefcf5] overflow-clip relative shrink-0 w-full">
      <Header />
      <div className="absolute inset-[97.23%_0_0_0]">
      <FAQsSvgs.FAQsSvg01 />
    </div>
      <SectionShell className="pt-[180px] pb-[120px] md:pt-[216px] md:pb-[180px] lg:pb-[220px]" containerClassName="grid gap-12 lg:grid-cols-[minmax(260px,360px)_minmax(0,1fr)] lg:gap-[72px] lg:pl-[120px] xl:pl-[160px]" size="wide">
        <div className="flex flex-col gap-[48px] lg:min-h-full lg:justify-between">
          <SectionHeader className="max-w-[544px]" title="Frequently asked questions" />
          <div className="content-stretch hidden flex-col gap-[16px] items-start relative lg:flex">
      <p className="font-['Rubik',sans-serif] font-medium leading-normal relative shrink-0 text-[#0f251b] text-[20px] tracking-[0.6px] whitespace-nowrap">
        Have more questions?
      </p>
      <Link to="/contact-us" className="bg-[#1e4a35] content-stretch flex items-start px-[16px] py-[8px] relative rounded-[40px] shrink-0">
        <p className="font-['Rubik',sans-serif] font-normal leading-[1.68] relative shrink-0 text-[#eee] text-[16px] text-center tracking-[0.48px] whitespace-nowrap">
          Contact Us
        </p>
      </Link>
    </div>
        </div>
        <div className="flex flex-col gap-[40px] pt-0 md:gap-[56px] lg:pt-[112px]">
          <div className="content-stretch flex flex-wrap gap-[16px] md:gap-[25px] items-center py-[24px] relative w-full">
      <div aria-hidden="true" className="absolute border-[#dfeddf] border-b border-dashed inset-0 pointer-events-none" />
      <div className="content-stretch flex items-start p-[8px] relative shrink-0">
        <p className="font-['Rubik',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-black text-center whitespace-nowrap">
          Filter By:
        </p>
      </div>
      {faqFilters.map((filter, index) => <div className={`content-stretch flex items-start px-[16px] py-[8px] relative rounded-[40px] shrink-0 ${index === 0 ? "bg-[#1e4a35]" : "bg-[#eff6ef]"}`} key={filter}>
          <p className={`font-['Rubik',sans-serif] font-normal leading-[1.68] relative shrink-0 text-[16px] text-center tracking-[0.48px] whitespace-nowrap ${index === 0 ? "text-[#eee]" : "text-[#0f251b]"}`}>
            {filter}
          </p>
        </div>)}
    </div>
          <div className="content-stretch flex flex-col gap-px items-start relative w-full">
      {faqItems.map(question => <div className="content-stretch flex gap-[24px] items-center py-[16px] relative shrink-0 w-full md:gap-[64px]" data-name="faq-card" key={question}>
      <div aria-hidden="true" className="absolute border-[#f7f7f7] border-b border-solid border-t inset-[-1px_0] pointer-events-none" />
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-px relative">
        <p className="font-['Fraunces',serif] font-normal leading-[1.68] relative shrink-0 text-[#0f251b] text-[24px] tracking-[0.72px] w-full">
          {question}
        </p>
      </div>
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="plus">
      <div className="absolute inset-[20.83%]" data-name="Icon">
        <div className="absolute inset-[-7.14%]">
          <FAQsSvgs.FAQsSvg02 />
        </div>
      </div>
    </div>
    </div>)}
    </div>
          <div className="content-stretch flex flex-col gap-[16px] items-start relative pt-[24px] lg:hidden">
      <p className="font-['Rubik',sans-serif] font-medium leading-normal relative shrink-0 text-[#0f251b] text-[20px] tracking-[0.6px]">
        Have more questions?
      </p>
      <Link to="/contact-us" className="bg-[#1e4a35] content-stretch flex items-start px-[16px] py-[8px] relative rounded-[40px] shrink-0">
        <p className="font-['Rubik',sans-serif] font-normal leading-[1.68] relative shrink-0 text-[#eee] text-[16px] text-center tracking-[0.48px] whitespace-nowrap">
          Contact Us
        </p>
      </Link>
    </div>
        </div>
      </SectionShell>
      <div className="absolute flex h-[360px] items-center justify-center left-[-52%] right-[70%] top-[132px] opacity-45 md:h-[520px] md:left-[-32%] md:right-[72%] md:opacity-70 lg:h-[620.8px] lg:left-[-21.25%] lg:right-[76.15%] lg:top-[150.83px] lg:opacity-100" style={{
        containerType: "size"
      }}>
        <div className="flex-none h-[100cqw] rotate-90 w-[100cqh]">
          <div className="relative size-full">
      <FAQsSvgs.FAQsSvg03 />
    </div>
        </div>
      </div>
    </main>
{/* Footer */}<Footer />
    </div>;
}
