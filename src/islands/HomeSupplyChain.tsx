import { useEffect, useRef, useState } from "react";
import farmerImage from "../assets/figma/c2c2df3bbbb24de92cb6c214b6dae6d9ec8411a0.png?url";
import businessImage from "../assets/figma/bde7cbc7ab76e8ddecbaf7d4c120dd2f2e62a08a.png?url";
import foodSystemsImage from "../assets/figma/69ef415b99d59a8e413a8dec8a5799dcd5f264d5.png?url";

const benefits = [
	{
		title: "Better Markets for Farmers",
		description: "We connect farmers to reliable buyers, turning harvests into stable income and reducing unnecessary food loss.",
		image: farmerImage,
	},
	{
		title: "Better Sourcing for Businesses",
		description: "Hotels, caterers, processors, and global buyers access quality produce and ingredients with full transparency and consistent supply.",
		image: businessImage,
	},
	{
		title: "Better Food Systems for Everyone",
		description: "By efficiently matching supply and demand, we ensure more food is consumed rather than wasted.",
		image: foodSystemsImage,
	},
];

export default function HomeSupplyChain() {
	const sectionRef = useRef<HTMLDivElement>(null);
	const frameRef = useRef<number | null>(null);
	const [activeIndex, setActiveIndex] = useState(0);
	const active = benefits[activeIndex] ?? benefits[0];

	useEffect(() => {
		const updateActiveBenefit = () => {
			const section = sectionRef.current;
			if (!section || window.innerWidth < 1024) {
				setActiveIndex(0);
				return;
			}
			const rect = section.getBoundingClientRect();
			const scrollDistance = section.offsetHeight - window.innerHeight;
			const rawProgress = scrollDistance > 0 ? -rect.top / scrollDistance : 0;
			const progress = Math.min(Math.max(rawProgress, 0), 1);
			setActiveIndex(Math.min(Math.floor(progress * benefits.length), benefits.length - 1));
		};

		const requestUpdate = () => {
			if (frameRef.current !== null) return;
			frameRef.current = window.requestAnimationFrame(() => {
				frameRef.current = null;
				updateActiveBenefit();
			});
		};

		updateActiveBenefit();
		window.addEventListener("scroll", requestUpdate, { passive: true });
		window.addEventListener("resize", requestUpdate);

		return () => {
			window.removeEventListener("scroll", requestUpdate);
			window.removeEventListener("resize", requestUpdate);
			if (frameRef.current !== null) window.cancelAnimationFrame(frameRef.current);
		};
	}, []);

	return (
		<div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center" ref={sectionRef}>
			<div className="flex flex-col gap-8">
				{benefits.map((benefit, index) => (
					<button
						className={`rounded-[28px] p-6 text-left transition-colors ${
							activeIndex === index ? "bg-white shadow-xl shadow-green-900/5" : "bg-white/40 hover:bg-white/70"
						}`}
						key={benefit.title}
						onClick={() => setActiveIndex(index)}
						type="button">
						<h3 className="font-serif text-section-sm font-normal leading-heading tracking-section text-green-900">{benefit.title}</h3>
						<p className="mt-4 font-sans text-body-lg leading-copy tracking-body text-green-500">{benefit.description}</p>
					</button>
				))}
			</div>
			<div className="relative overflow-hidden rounded-[40px] bg-olive-200 p-5">
				<img alt="" className="aspect-[4/3] w-full rounded-[32px] object-cover" src={active.image} />
			</div>
		</div>
	);
}
