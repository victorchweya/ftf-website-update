import { useMemo, useState } from "react";

type FAQCategory = "general" | "buyers" | "farmers";

type FAQItem = {
	answer?: string;
	answerHtml?: string;
	category?: FAQCategory;
	question: string;
	slug?: string;
};

const faqFilters: { id: FAQCategory; label: string }[] = [
	{ id: "general", label: "General" },
	{ id: "buyers", label: "Buyers" },
	{ id: "farmers", label: "Farmers" },
];

function getFaqId(item: FAQItem, index: number) {
	return (item.slug ?? `${index}-${item.question}`)
		.toLowerCase()
		.replace(/[^a-z0-9_-]+/g, "-")
		.replace(/^-|-$/g, "");
}

export default function FaqExplorer({ faqItems }: { faqItems: FAQItem[] }) {
	const [activeCategory, setActiveCategory] = useState<FAQCategory>("general");
	const [openFaqId, setOpenFaqId] = useState<string | null>(null);
	const filteredFaqItems = useMemo(
		() => faqItems.filter((item) => (item.category ?? "general") === activeCategory),
		[activeCategory, faqItems],
	);

	return (
		<div className="flex flex-col lg:max-w-[980px]">
			<div className="mt-12 flex flex-wrap items-center gap-3 border-b border-dashed border-green-100 pb-5 md:mt-16 md:gap-5">
				<p className="py-2 pr-2 font-sans text-body leading-6 text-black">Filter By:</p>
				{faqFilters.map((filter) => (
					<button
						aria-pressed={activeCategory === filter.id}
						className={`inline-flex h-10 items-center justify-center rounded-full px-4 font-sans text-xs font-normal transition-colors ${
							activeCategory === filter.id
								? "bg-green-500 text-[#eee]"
								: "bg-green-50 text-green-900 hover:bg-green-100"
						}`}
						key={filter.id}
						onClick={() => {
							setActiveCategory(filter.id);
							setOpenFaqId(null);
						}}
						type="button">
						{filter.label}
					</button>
				))}
			</div>

			<div className="flex w-full flex-col pt-8 md:pt-9">
				{filteredFaqItems.map((item, index) => {
					const faqId = getFaqId(item, index);
					const answerId = `${faqId}-answer`;
					const isOpen = openFaqId === faqId;

					return (
						<article className="relative w-full border-b border-neutral-200" key={item.slug ?? item.question}>
							<button
								aria-controls={answerId}
								aria-expanded={isOpen}
								className="flex w-full items-center gap-6 py-4 text-left md:gap-16"
								onClick={() => setOpenFaqId((currentFaqId) => (currentFaqId === faqId ? null : faqId))}
								type="button">
								<span className="flex-1 font-serif text-subtitle font-normal leading-normal tracking-card text-green-900">
									{item.question}
								</span>
								<span className="relative size-6 shrink-0 text-green-300" aria-hidden="true">
									<span className="absolute left-0 right-0 top-1/2 h-0.5 -translate-y-1/2 rounded-full bg-current" />
									<span className={`absolute bottom-0 left-1/2 top-0 w-0.5 -translate-x-1/2 rounded-full bg-current transition-transform ${isOpen ? "scale-y-0" : "scale-y-100"}`} />
								</span>
							</button>
							<div className={`${isOpen ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"} grid transition-[grid-template-rows,padding-bottom] duration-200 ease-out`} id={answerId}>
								<div className="overflow-hidden">
									{item.answerHtml ? (
										<div
											className="max-w-[760px] font-sans text-body font-normal leading-copy tracking-body text-green-500 [&_a]:text-violet-500 [&_a]:underline [&_ol]:list-decimal [&_ol]:pl-6 [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-6"
											dangerouslySetInnerHTML={{ __html: item.answerHtml }}
										/>
									) : (
										<p className="max-w-[760px] whitespace-pre-wrap font-sans text-body leading-copy tracking-body text-green-500">
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
	);
}
