import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { SectionHeader } from "../components/layout/SectionHeader";
import { SectionShell } from "../components/layout/SectionShell";
import svgPaths from "../imports/FaQs/svg-af2ylmx84r";

const faqFilters = ["General", "Buyers", "Farmers"];

const faqItems = [
  "What is the effect of food loss and waste on the environment?",
  "How does Farm to Feed tackle food loss?",
  "How do you measure your environmental impact?",
  "How can I get involved with Farm to Feed?",
  "What is Farm to Feed's track record?",
  "What is the impact of investing in Farm to Feed?",
];

function BottomDivider() {
  return (
    <div className="absolute inset-[97.23%_0_0_0]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1440 40">
        <g id="Group 157">
          <path d={svgPaths.paeb3800} fill="var(--fill-0, black)" id="Subtract" />
          <path d={svgPaths.p353afe00} fill="var(--fill-0, black)" id="Subtract_2" />
        </g>
      </svg>
    </div>
  );
}

function FaqDecoration() {
  return (
    <div className="relative size-full">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 620.8 649.456">
        <g id="Group 158">
          <path d={svgPaths.pc81180} fill="var(--fill-0, #B58BBB)" id="Vector" />
          <path d={svgPaths.p324a6f00} fill="var(--fill-0, #D3B9D6)" id="Vector_2" />
          <path d={svgPaths.p1e08e100} fill="var(--fill-0, #D3B9D6)" id="Vector_3" />
          <path d={svgPaths.p1d051100} fill="var(--fill-0, #B58BBB)" id="Vector_4" />
          <path d={svgPaths.p340be700} fill="var(--fill-0, #D3B9D6)" id="Vector_5" />
        </g>
      </svg>
    </div>
  );
}

function PlusIcon() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="plus">
      <div className="absolute inset-[20.83%]" data-name="Icon">
        <div className="absolute inset-[-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
            <path d="M8 1V15M1 8H15" stroke="var(--stroke-0, #85A687)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function FaqFilterBar() {
  return (
    <div className="content-stretch flex flex-wrap gap-[16px] md:gap-[25px] items-center py-[24px] relative w-full">
      <div aria-hidden="true" className="absolute border-[#dfeddf] border-b border-dashed inset-0 pointer-events-none" />
      <div className="content-stretch flex items-start p-[8px] relative shrink-0">
        <p className="font-['Rubik',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-black text-center whitespace-nowrap">
          Filter By:
        </p>
      </div>
      {faqFilters.map((filter, index) => (
        <div
          className={`content-stretch flex items-start px-[16px] py-[8px] relative rounded-[40px] shrink-0 ${
            index === 0 ? "bg-[#1e4a35]" : "bg-[#eff6ef]"
          }`}
          key={filter}
        >
          <p className={`font-['Rubik',sans-serif] font-normal leading-[1.68] relative shrink-0 text-[16px] text-center tracking-[0.48px] whitespace-nowrap ${
            index === 0 ? "text-[#eee]" : "text-[#0f251b]"
          }`}>
            {filter}
          </p>
        </div>
      ))}
    </div>
  );
}

function FaqItem({ question }: { question: string }) {
  return (
    <div className="content-stretch flex gap-[120px] items-center py-[16px] relative shrink-0 w-full" data-name="faq-card">
      <div aria-hidden="true" className="absolute border-[#f7f7f7] border-b border-solid border-t inset-[-1px_0] pointer-events-none" />
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-px relative">
        <p className="font-['Fraunces',serif] font-normal leading-[1.68] relative shrink-0 text-[#0f251b] text-[24px] tracking-[0.72px] w-full">
          {question}
        </p>
      </div>
      <PlusIcon />
    </div>
  );
}

function FaqList() {
  return (
    <div className="content-stretch flex flex-col gap-px items-start relative w-full">
      {faqItems.map((question) => (
        <FaqItem key={question} question={question} />
      ))}
    </div>
  );
}

function FaqContactCta() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative">
      <p className="font-['Rubik',sans-serif] font-medium leading-normal relative shrink-0 text-[#0f251b] text-[20px] tracking-[0.6px] whitespace-nowrap">
        Have more questions?
      </p>
      <div className="bg-[#1e4a35] content-stretch flex items-start px-[16px] py-[8px] relative rounded-[40px] shrink-0">
        <p className="font-['Rubik',sans-serif] font-normal leading-[1.68] relative shrink-0 text-[#eee] text-[16px] text-center tracking-[0.48px] whitespace-nowrap">
          Contact Us
        </p>
      </div>
    </div>
  );
}

function FaqPage() {
  return (
    <main className="bg-[#fefcf5] overflow-clip relative shrink-0 w-full">
      <Header />
      <BottomDivider />
      <SectionShell
        className="min-h-[900px] md:min-h-[1200px] lg:min-h-[1442px] pt-[216px] pb-[220px]"
        containerClassName="grid gap-16 lg:grid-cols-[247px_minmax(0,951px)] lg:gap-[80px]"
        size="wide"
      >
        <div className="flex flex-col gap-[420px] lg:gap-[480px]">
          <SectionHeader
            className="max-w-[544px]"
            title="Frequently asked questions"
          />
          <FaqContactCta />
        </div>
        <div className="flex flex-col gap-[56px] pt-[158px]">
          <FaqFilterBar />
          <FaqList />
        </div>
      </SectionShell>
      <div className="absolute flex h-[620.8px] items-center justify-center left-[-21.25%] right-[76.15%] top-[150.83px]" style={{ containerType: "size" }}>
        <div className="flex-none h-[100cqw] rotate-90 w-[100cqh]">
          <FaqDecoration />
        </div>
      </div>
    </main>
  );
}

export default function FAQs() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative w-full">
      <FaqPage />
      <Footer />
    </div>
  );
}
