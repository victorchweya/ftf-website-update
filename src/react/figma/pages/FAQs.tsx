import { useMemo, useState } from "react";
import * as FAQsSvgs from "../imports/FaQs/fAQs-inline-svgs";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Button } from "../components/Button";
import { SectionHeader } from "../components/layout/SectionHeader";
import { SectionShell } from "../components/layout/SectionShell";
import { typeStyles } from "../components/layout/typography";

type FAQCategory = "general" | "buyers" | "farmers";

const faqFilters: { id: FAQCategory; label: string }[] = [
	{ id: "general", label: "General" },
	{ id: "buyers", label: "Buyers" },
	{ id: "farmers", label: "Farmers" },
];

type FAQItem = {
	answer?: string;
	answerHtml?: string;
	category?: FAQCategory;
	question: string;
	slug?: string;
};

const faqItems: FAQItem[] = [
	{
		category: "general",
		question:
			"What is the effect of food loss and waste on the environment?",
	},
	{
		category: "general",
		question: "How does Farm to Feed tackle food loss?",
	},
	{
		category: "general",
		question: "How do you measure your environmental impact?",
	},
	{
		category: "general",
		question: "How can I get involved with Farm to Feed?",
	},
	{ category: "general", question: "What is Farm to Feed's track record?" },
	{
		category: "general",
		question: "What is the impact of investing in Farm to Feed?",
	},
];

type FAQsProps = {
	faqItems?: FAQItem[];
};

function getFaqId(item: FAQItem, index: number) {
	return (item.slug ?? `${index}-${item.question}`)
		.toLowerCase()
		.replace(/[^a-z0-9_-]+/g, "-")
		.replace(/^-|-$/g, "");
}

export default function FAQs({ faqItems: cmsFaqItems }: FAQsProps) {
	const [activeCategory, setActiveCategory] =
		useState<FAQCategory>("general");
	const [openFaqId, setOpenFaqId] = useState<string | null>(null);
	const displayFaqItems = cmsFaqItems?.length ? cmsFaqItems : faqItems;
	const filteredFaqItems = useMemo(
		() =>
			displayFaqItems.filter(
				(item) => (item.category ?? "general") === activeCategory,
			),
		[activeCategory, displayFaqItems],
	);

	return (
		<div className="bg-brown-50 flex flex-col items-start relative w-full">
			{/* FAQ */}
			<main className="bg-brown-50 overflow-clip relative shrink-0 w-full">
				<Header />
				<div className="absolute inset-[97.23%_0_0_0]">
					<FAQsSvgs.FAQsSvg01 />
				</div>
				<SectionShell
					className="bg-brown-50 min-h-[680px] pb-20 pt-40 md:pb-28 md:pt-44 lg:pb-24 lg:pt-[138px]"
					containerClassName="grid gap-10 lg:grid-cols-[170px_minmax(0,1fr)] lg:gap-12 xl:grid-cols-[220px_minmax(0,1fr)]"
					size="wide"
					spacing="none">
					<aside className="relative order-2 flex flex-col gap-8 pt-2 lg:order-1 lg:min-h-[520px] lg:justify-end">
						<div
							aria-hidden="true"
							className="pointer-events-none absolute -left-[250px] top-0 hidden h-[500px] w-[360px] items-center justify-center opacity-80 lg:flex xl:-left-[300px] xl:h-[540px] xl:w-[400px]"
							style={{
								containerType: "size",
							}}>
							<div className="flex-none h-[100cqw] rotate-90 w-[100cqh]">
								<div className="relative size-full">
									<FAQsSvgs.FAQsSvg03 />
								</div>
							</div>
						</div>
						<div className="relative z-10 flex flex-col gap-3 items-start">
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
					</aside>
					<div className="order-1 flex flex-col lg:order-2 lg:max-w-[920px] xl:max-w-[980px]">
						<SectionHeader
							className="max-w-[520px]"
							title="Frequently asked questions"
						/>
						<div className="mt-12 flex flex-wrap gap-3 items-center border-[#dfeddf] border-b border-dashed pb-5 md:mt-16 md:gap-5">
							<div className="flex items-start py-2 pr-2 relative shrink-0">
								<p
									className={`${typeStyles.body} leading-6 relative shrink-0 text-black text-center whitespace-nowrap`}>
									Filter By:
								</p>
							</div>
							{faqFilters.map((filter) => (
								<Button
									type="button"
									aria-pressed={activeCategory === filter.id}
									onClick={() => {
										setActiveCategory(filter.id);
										setOpenFaqId(null);
									}}
									variant={
										activeCategory === filter.id
											? "primary"
											: "none"
									}
									size="sm"
									className={`relative shrink-0 ${activeCategory === filter.id ? "text-[#eee]" : "bg-[#eff6ef] text-[#0f251b]"}`}
									key={filter.id}>
									{filter.label}
								</Button>
							))}
						</div>
						<div className="flex flex-col items-start relative w-full pt-8 md:pt-9">
							{filteredFaqItems.map((item, index) => {
								const faqId = getFaqId(item, index);
								const answerId = `${faqId}-answer`;
								const isOpen = openFaqId === faqId;

								return (
									<article
										className="relative shrink-0 w-full"
										data-name="faq-card"
										key={item.slug ?? item.question}>
										<div
											aria-hidden="true"
											className="absolute border-[#f7f7f7] border-b border-solid inset-x-0 bottom-0 pointer-events-none"
										/>
										<button
											aria-controls={answerId}
											aria-expanded={isOpen}
											className="flex gap-6 items-center py-3.5 relative w-full text-left md:gap-16 md:py-4"
											onClick={() =>
												setOpenFaqId((currentFaqId) =>
													currentFaqId === faqId
														? null
														: faqId,
												)
											}
											type="button">
											<span className="flex flex-[1_0_0] flex-col gap-4 items-start min-w-px relative">
												<span
													className={`${typeStyles.cardTitle} leading-copy relative shrink-0 text-[#0f251b] w-full`}>
													{item.question}
												</span>
											</span>
											<span
												className="overflow-clip relative shrink-0 size-6"
												data-name="plus">
												<span
													className="absolute inset-[20.83%]"
													data-name="Icon">
													{isOpen ? (
														<span className="absolute left-0 right-0 top-1/2 block h-0.5 -translate-y-1/2 rounded-full bg-[#85A687]" />
													) : (
														<span className="absolute inset-[-7.14%]">
															<FAQsSvgs.FAQsSvg02 />
														</span>
													)}
												</span>
											</span>
										</button>
										<div
											aria-hidden={!isOpen}
											className={`${isOpen ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"} grid transition-[grid-template-rows,padding-bottom] duration-200 ease-out`}
											id={answerId}>
											<div className="overflow-hidden">
												{item.answerHtml ? (
													<div
														className={`${typeStyles.body} max-w-[760px] text-green-500 [&_a]:text-[#916f96] [&_a]:underline [&_ol]:list-decimal [&_ol]:pl-6 [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-6`}
														dangerouslySetInnerHTML={{
															__html: item.answerHtml,
														}}
													/>
												) : (
													<p
														className={`${typeStyles.body} max-w-[760px] whitespace-pre-wrap text-green-500`}>
														{item.answer}
													</p>
												)}
											</div>
										</div>
									</article>
								);
							})}
						</div>
					</div>
				</SectionShell>
			</main>
			{/* Footer */}
			<Footer />
		</div>
	);
}
