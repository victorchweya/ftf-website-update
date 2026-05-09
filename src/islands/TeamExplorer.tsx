import { useMemo, useState } from "react";

type TeamMember = {
	bio?: string;
	name: string;
	photo: string;
	position: string;
	slug?: string;
	type?: "team-members" | "advisors";
};

type TeamFilter = "all" | "team-members" | "advisors";

const filters: { id: TeamFilter; label: string }[] = [
	{ id: "all", label: "All" },
	{ id: "team-members", label: "Team Members" },
	{ id: "advisors", label: "Advisors" },
];

export default function TeamExplorer({ people }: { people: TeamMember[] }) {
	const [activeFilter, setActiveFilter] = useState<TeamFilter>("all");
	const visibleFilters = useMemo(() => {
		const hasAdvisors = people.some((person) => person.type === "advisors");
		return hasAdvisors ? filters : filters.filter((filter) => filter.id !== "advisors");
	}, [people]);
	const filteredPeople =
		activeFilter === "all"
			? people
			: people.filter((person) => (person.type ?? "team-members") === activeFilter);

	return (
		<div className="flex flex-col gap-12">
			<div className="flex flex-wrap items-center gap-3 border-b border-dashed border-green-100 pb-5 md:gap-5">
				<p className="py-2 pr-2 font-sans text-body leading-6 text-black">Filter By:</p>
				{visibleFilters.map((filter) => (
					<button
						aria-pressed={activeFilter === filter.id}
						className={`inline-flex h-10 items-center justify-center rounded-full px-4 font-sans text-xs font-normal transition-colors ${
							activeFilter === filter.id
								? "bg-green-500 text-[#eee]"
								: "bg-green-50 text-green-900 hover:bg-green-100"
						}`}
						key={filter.id}
						onClick={() => setActiveFilter(filter.id)}
						type="button">
						{filter.label}
					</button>
				))}
			</div>
			<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
				{filteredPeople.map((person) => (
					<article className="overflow-hidden rounded-[30px] bg-white shadow-xl shadow-green-900/5" key={person.slug ?? person.name}>
						<img alt={person.name} className="aspect-[4/3] w-full object-cover" src={person.photo} />
						<div className="flex flex-col gap-3 p-6">
							<h2 className="font-serif text-subtitle font-normal leading-normal tracking-card text-green-900">{person.name}</h2>
							<p className="font-sans text-caption font-medium leading-normal tracking-caption text-orange-500">{person.position}</p>
							{person.bio && <p className="font-sans text-body font-normal leading-copy tracking-body text-green-500">{person.bio}</p>}
						</div>
					</article>
				))}
			</div>
		</div>
	);
}
