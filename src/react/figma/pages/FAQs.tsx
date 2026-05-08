import * as FAQsSvgs from "../imports/FaQs/fAQs-inline-svgs";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Button } from "../components/Button";
import { SectionHeader } from "../components/layout/SectionHeader";
import { SectionShell } from "../components/layout/SectionShell";
import { typeStyles } from "../components/layout/typography";
const faqFilters = ["General", "Buyers", "Farmers"];
const faqItems = [
	"What is the effect of food loss and waste on the environment?",
	"How does Farm to Feed tackle food loss?",
	"How do you measure your environmental impact?",
	"How can I get involved with Farm to Feed?",
	"What is Farm to Feed's track record?",
	"What is the impact of investing in Farm to Feed?",
];
export default function FAQs() {
	return (
		<div className="bg-indigo-300 flex flex-col items-start relative w-full">
			{/* FAQ */}
			<main className="bg-violet-300 overflow-clip relative shrink-0 w-full">
				<Header />
				<div className="absolute inset-[97.23%_0_0_0]">
					<FAQsSvgs.FAQsSvg01 />
				</div>
				<SectionShell
					className="bg-[#fefcf5]"
					containerClassName="grid gap-12 lg:grid-cols-[minmax(260px,360px)_minmax(0,1fr)] lg:gap-[72px] lg:pl-[120px] xl:pl-[160px]"
					size="wide"
					spacing="hero">
					<div className="flex flex-col gap-12 lg:min-h-full lg:justify-between">
						<SectionHeader
							className="max-w-[544px]"
							title="Frequently asked questions"
						/>
						<div className="hidden flex-col gap-4 items-start relative lg:flex">
							<p
								className={`${typeStyles.bodyLead} font-medium leading-normal relative shrink-0 text-[#0f251b] whitespace-nowrap`}>
								Have more questions?
							</p>
							<Button
								href="/contact-us"
								size="sm"
								className="relative shrink-0 text-[#eee]">
								Contact Us
							</Button>
						</div>
					</div>
					<div className="flex flex-col gap-10 pt-0 md:gap-14 lg:pt-[112px]">
						<div className="flex flex-wrap gap-4 md:gap-[25px] items-center py-[24px] relative w-full">
							<div
								aria-hidden="true"
								className="absolute border-[#dfeddf] border-b border-dashed inset-0 pointer-events-none"
							/>
							<div className="flex items-start p-2 relative shrink-0">
								<p
									className={`${typeStyles.body} leading-6 relative shrink-0 text-black text-center whitespace-nowrap`}>
									Filter By:
								</p>
							</div>
							{faqFilters.map((filter, index) => (
								<Button
									type="button"
									variant={index === 0 ? "primary" : "none"}
									size="sm"
									className={`relative shrink-0 ${index === 0 ? "text-[#eee]" : "bg-[#eff6ef] text-[#0f251b]"}`}
									key={filter}>
									{filter}
								</Button>
							))}
						</div>
						<div className="flex flex-col gap-px items-start relative w-full">
							{faqItems.map((question) => (
								<div
									className="flex gap-6 items-center py-4 relative shrink-0 w-full md:gap-16"
									data-name="faq-card"
									key={question}>
									<div
										aria-hidden="true"
										className="absolute border-[#f7f7f7] border-b border-solid border-t inset-[-1px_0] pointer-events-none"
									/>
									<div className="flex flex-[1_0_0] flex-col gap-4 items-start min-w-px relative">
										<p
											className={`${typeStyles.cardTitle} leading-copy relative shrink-0 text-[#0f251b] w-full`}>
											{question}
										</p>
									</div>
									<div
										className="overflow-clip relative shrink-0 size-6"
										data-name="plus">
										<div
											className="absolute inset-[20.83%]"
											data-name="Icon">
											<div className="absolute inset-[-7.14%]">
												<FAQsSvgs.FAQsSvg02 />
											</div>
										</div>
									</div>
								</div>
							))}
						</div>
						<div className="flex flex-col gap-4 items-start relative pt-6 lg:hidden">
							<p
								className={`${typeStyles.bodyLead} font-medium leading-normal relative shrink-0 text-[#0f251b]`}>
								Have more questions?
							</p>
							<Button
								href="/contact-us"
								size="sm"
								className="relative shrink-0 text-[#eee]">
								Contact Us
							</Button>
						</div>
					</div>
				</SectionShell>
				<div
					className="absolute flex h-[360px] items-center justify-center left-[-52%] right-[70%] top-[132px] opacity-45 md:h-[520px] md:left-[-32%] md:right-[72%] md:opacity-70 lg:h-[620.8px] lg:left-[-21.25%] lg:right-[76.15%] lg:top-[150.83px] lg:opacity-100"
					style={{
						containerType: "size",
					}}>
					<div className="flex-none h-[100cqw] rotate-90 w-[100cqh]">
						<div className="relative size-full">
							<FAQsSvgs.FAQsSvg03 />
						</div>
					</div>
				</div>
			</main>
			{/* Footer */}
			<Footer />
		</div>
	);
}
