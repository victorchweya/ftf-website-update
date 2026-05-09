import { useRef, useState } from "react";

const storySlides = [
	{
		label: "The start",
		body: "In April 2020, Farm to Feed started as a COVID food relief effort. We bought farmers' produce that was at risk of going to waste and donated to food insecure communities who were made more vulnerable at the height of the pandemic.",
	},
	{
		label: "2020",
		body: "We catered to 10 charities and provided additional income for up to 400 smallholder farmers. We soon realized that the problem of food loss was only exacerbated by the pandemic but existed before and will long outlast it.",
	},
	{
		label: "2021",
		body: "In May 2021, we pivoted to our scalable model with the purpose of transforming our food systems for the better.",
	},
	{
		label: "2022",
		body: "Closed our pre-seed round. We quickly scaled our operations to 15,000 kgs of fresh produce per week and have onboarded thousands of farmers across Kenya.",
	},
	{
		label: "2023",
		body: "We launched our e-commerce platform providing easy and transparent buying for our customers.",
	},
	{
		label: "2024",
		body: "Our in-house built ERP system and farmer mobile app are live. We continue to grow the FTF team, hiring our 16th employee.",
	},
	{
		label: "2025",
		body: "We delivered our one millionth kg of rescued produce. We broadened our offering with value-added produce, such as peeled garlic, and started partnering with dry foods businesses to become the one-stop shop for all our customers.",
	},
	{
		label: "Now",
		body: "We are about to launch our export line of dried ingredients and have just moved into our new warehouse.",
	},
];

export default function TimelineSlider() {
	const [activeStoryIndex, setActiveStoryIndex] = useState(0);
	const isDraggingRef = useRef(false);
	const trackRef = useRef<HTMLDivElement>(null);
	const activeStory = storySlides[activeStoryIndex] ?? storySlides[0];

	const updateFromPointer = (clientX: number) => {
		const track = trackRef.current;
		if (!track) return;
		const { left, width } = track.getBoundingClientRect();
		const progress = Math.min(Math.max((clientX - left) / width, 0), 1);
		setActiveStoryIndex(Math.round(progress * (storySlides.length - 1)));
	};

	return (
		<div className="rounded-[32px] bg-green-50 p-6 md:p-10">
			<div className="grid gap-8 lg:grid-cols-[0.4fr_0.6fr] lg:items-center">
				<div>
					<p className="font-sans text-caption font-medium tracking-caption text-olive-500">Our Journey</p>
					<h2 className="mt-3 font-serif text-section-sm font-normal leading-heading tracking-section text-green-900 md:text-section">{activeStory.label}</h2>
					<p className="mt-6 font-sans text-body-lg leading-copy tracking-body text-green-500">{activeStory.body}</p>
				</div>
				<div>
					<div
						className="relative h-3 cursor-pointer rounded-full bg-white"
						onPointerCancel={() => {
							isDraggingRef.current = false;
						}}
						onPointerDown={(event) => {
							isDraggingRef.current = true;
							event.currentTarget.setPointerCapture(event.pointerId);
							updateFromPointer(event.clientX);
						}}
						onPointerMove={(event) => {
							if (isDraggingRef.current) updateFromPointer(event.clientX);
						}}
						onPointerUp={(event) => {
							isDraggingRef.current = false;
							if (event.currentTarget.hasPointerCapture(event.pointerId)) {
								event.currentTarget.releasePointerCapture(event.pointerId);
							}
						}}
						ref={trackRef}>
						<div className="absolute inset-y-0 left-0 rounded-full bg-green-500" style={{ width: `${(activeStoryIndex / (storySlides.length - 1)) * 100}%` }} />
					</div>
					<div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">
						{storySlides.map((slide, index) => (
							<button
								className={`rounded-full px-3 py-2 font-sans text-caption transition-colors ${
									activeStoryIndex === index
										? "bg-green-500 text-white"
										: "bg-white text-green-500 hover:bg-green-100"
								}`}
								key={slide.label}
								onClick={() => setActiveStoryIndex(index)}
								type="button">
								{slide.label}
							</button>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
