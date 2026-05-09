import { useEffect, useState } from "react";

type Testimonial = {
	company: string;
	name: string;
	quote: string;
};

export default function TestimonialCarousel({ items }: { items: Testimonial[] }) {
	const [activeIndex, setActiveIndex] = useState(0);
	const active = items[activeIndex] ?? items[0];

	useEffect(() => {
		if (items.length < 2) return;
		const timer = window.setInterval(() => {
			setActiveIndex((current) => (current + 1) % items.length);
		}, 4500);
		return () => window.clearInterval(timer);
	}, [items.length]);

	if (!active) return null;

	return (
		<div className="rounded-[32px] bg-white p-6 shadow-xl shadow-green-900/5 md:p-10">
			<p className="font-serif text-callout font-normal leading-callout tracking-section text-green-900 md:text-section-sm">"{active.quote}"</p>
			<div className="mt-8 flex flex-wrap items-center justify-between gap-6">
				<div>
					<p className="font-sans text-body-lg font-medium leading-copy tracking-body text-green-500">{active.name}</p>
					<p className="font-sans text-caption font-normal leading-normal tracking-caption text-brown-500">{active.company}</p>
				</div>
				<div className="flex gap-3">
					<button className="size-11 rounded-full bg-green-50 text-green-500 hover:bg-green-100" onClick={() => setActiveIndex((current) => (current === 0 ? items.length - 1 : current - 1))} type="button" aria-label="Previous testimonial">
						-
					</button>
					<button className="size-11 rounded-full bg-green-500 text-white hover:bg-green-600" onClick={() => setActiveIndex((current) => (current + 1) % items.length)} type="button" aria-label="Next testimonial">
						+
					</button>
				</div>
			</div>
		</div>
	);
}
