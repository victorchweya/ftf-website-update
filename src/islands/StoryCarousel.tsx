import { useEffect, useState } from "react";

const stories = [
	{
		title: "Reliable markets",
		body: "Farmers can sell full harvests with clearer demand, better planning, and faster payment.",
	},
	{
		title: "All grades matter",
		body: "Odd-shaped and surplus produce can still stay in the human food chain when quality is fresh.",
	},
	{
		title: "Built with farmers",
		body: "Farm to Feed works with aggregators and farmer networks to make market access more dependable.",
	},
];

export default function StoryCarousel() {
	const [activeIndex, setActiveIndex] = useState(1);
	const active = stories[activeIndex] ?? stories[0];

	useEffect(() => {
		const timer = window.setInterval(() => {
			setActiveIndex((current) => (current + 1) % stories.length);
		}, 4500);
		return () => window.clearInterval(timer);
	}, []);

	return (
		<div className="rounded-[32px] bg-white p-6 shadow-xl shadow-green-900/5 md:p-10">
			<p className="font-sans text-caption font-medium tracking-caption text-orange-500">Supplier Story</p>
			<h2 className="mt-3 font-serif text-section-sm font-normal leading-heading tracking-section text-green-900">{active.title}</h2>
			<p className="mt-5 font-sans text-body-lg leading-copy tracking-body text-green-500">{active.body}</p>
			<div className="mt-8 flex gap-3">
				<button className="size-11 rounded-full bg-green-50 text-green-500 hover:bg-green-100" onClick={() => setActiveIndex((current) => (current === 0 ? stories.length - 1 : current - 1))} type="button" aria-label="Previous supplier story">
					-
				</button>
				<button className="size-11 rounded-full bg-green-500 text-white hover:bg-green-600" onClick={() => setActiveIndex((current) => (current + 1) % stories.length)} type="button" aria-label="Next supplier story">
					+
				</button>
			</div>
		</div>
	);
}
