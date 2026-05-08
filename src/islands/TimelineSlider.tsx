import { useRef, useState } from "react";

const storySlides = [
	{
		label: "Then",
		body: "In April 2020, Farm to Feed started as a COVID food relief effort. We bought farmers' produce that was at risk of going to waste and donated to food insecure communities who were made more vulnerable at the height of the pandemic.",
	},
	{
		label: "2020",
		body: "We catered to ten reliable charities and provided additional income for up to 400 smallholder farmers. We soon realized that the problem of food loss was only exacerbated by the pandemic but existed before and will long outlast it.",
	},
	{
		label: "2021",
		body: "A few months later, we developed and piloted our scalable model with the purpose of transforming our food systems for the better.",
	},
	{
		label: "Now",
		body: "We now boast a network of thousands of farmers across Kenya and deliver up to 15,000 kgs of fresh food each week. And we're just getting started!",
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
					<div className="mt-5 grid grid-cols-4 gap-3">
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
