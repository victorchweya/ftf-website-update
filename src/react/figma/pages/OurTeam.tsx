import * as OurTeamSvgs from "../imports/OurTeam/ourTeam-inline-svgs";
import { useMemo, useState } from "react";
import {
	Frame39,
	Frame38,
	Frame37,
	Frame40,
	Frame41,
	Frame42,
	Frame43,
	Frame44,
	Frame25,
	Frame28,
	Frame24,
	Frame33,
	Frame49,
} from "../imports/OurTeam/OurTeam-33-8151";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Button } from "../components/Button";
import { ContentContainer } from "../components/layout/ContentContainer";
import svgPaths from "../imports/OurTeam/svg-jwjuc7xr3o";
import { BottomLandscapeSvg } from "../imports/SellWithUs-3/bottom-landscape";
import imgTeamphoto1 from "../../../assets/figma/242cf24e7f30319a88573a80a38537cb6654b299.png?url";
import imgClaireVanEnkFounderManagingDirector1 from "../../../assets/figma/6f453f6615e2a5e3c0a7bdac13d8a20d314621aa.png?url";
import imgAnoukBoertienCoFounderDirectorOfProductAndSustainability1 from "../../../assets/figma/5e79e989cafc30f3ead138dc6dd2a48d926406dc.png?url";
import imgZaraBenosaDirectorBusinessDevelopment from "../../../assets/figma/ee6a7fa201209c38d8a264da6e9dac0c65a747c4.png?url";
import imgChristineKiraithePentingaDirectorOperations from "../../../assets/figma/ccad2334d70ed61ee66a7aa525ed90afeb253a36.png?url";
import imgLucyWainainaFinanceOfficer from "../../../assets/figma/1cd102cc386439295baffcc4bdf0bdd90991a5ad.png?url";
import imgDavidChegeLeadSupplyHubCoordinator from "../../../assets/figma/dc4a287111b7d67d716a27d692faf13e561b8ea1.png?url";
import imgStellaMbunguSalesAndCustomerCareManager from "../../../assets/figma/afec47f7564d6daba8a0ee3f9c27e411d6049d23.png?url";
import imgSamuelMburuSourcingLead from "../../../assets/figma/a3940b82706c2877d7fcbf859cd21e5d7aac40c0.png?url";
import {
	imgClaireVanEnkFounderManagingDirector,
	imgAnoukBoertienCoFounderDirectorOfProductAndSustainability,
} from "../imports/OurTeam/svg-1h0q8";
import { sectionSpacing } from "../components/layout/spacing";
import { typeStyles } from "../components/layout/typography";

type TeamFilter = "all" | "team-members" | "advisors";
type TeamGroup = Exclude<TeamFilter, "all">;

type CmsTeamMember = {
	bio?: string;
	group?: TeamGroup;
	name: string;
	photo: string;
	position: string;
	slug?: string;
};

type StaticTeamMember = {
	Photo: React.ComponentType;
	group?: TeamGroup;
	name: string;
	role: string;
};

type DisplayTeamMember = CmsTeamMember | StaticTeamMember;

const staticTeamRows: StaticTeamMember[][] = [
	[
		{
			Photo: Frame39,
			group: "team-members",
			name: "Claire van Enk",
			role: "Managing Director",
		},
		{
			Photo: Frame38,
			group: "team-members",
			name: "Anouk Boertien",
			role: "Director of Product and Sustainability",
		},
		{
			Photo: Frame37,
			group: "team-members",
			name: "Zara Benosa",
			role: "Director business development",
		},
		{
			Photo: Frame40,
			group: "team-members",
			name: "Christine Kiraithe Pentinga",
			role: "Director Operations",
		},
	],
	[
		{
			Photo: Frame41,
			group: "team-members",
			name: "Lucy Wainaina",
			role: "Finance officer",
		},
		{
			Photo: Frame42,
			group: "team-members",
			name: "David Chege",
			role: "Lead Supply Hub Coordinator",
		},
		{
			Photo: Frame43,
			group: "team-members",
			name: "Stella Mbungu",
			role: "Sales and Customer Care Manager",
		},
		{
			Photo: Frame44,
			group: "team-members",
			name: "Samuel Mburu",
			role: "Sourcing lead",
		},
	],
];

function chunkMembers(members: DisplayTeamMember[]) {
	const rows: DisplayTeamMember[][] = [];

	for (let index = 0; index < members.length; index += 4) {
		rows.push(members.slice(index, index + 4));
	}

	return rows;
}

function TeamMemberPhoto({ member }: { member: DisplayTeamMember }) {
	if ("Photo" in member) {
		const Photo = member.Photo;
		return <Photo />;
	}

	const maskId = `team-member-mask-${getTeamMemberKey(member).replace(/[^a-zA-Z0-9_-]/g, "-")}`;

	return (
		<svg
			aria-label={member.name}
			className="block aspect-[204/199] w-full"
			fill="none"
			role="img"
			viewBox="0 0 204 199"
			xmlns="http://www.w3.org/2000/svg">
			<defs>
				<clipPath id={maskId}>
					<path d="M158.242 184.195L157.667 184.519L157.708 184.561C133.234 200.738 104.324 199.407 76.6727 195.189L76.6316 195.183L76.59 195.184C75.0281 195.207 73.2119 194.855 71.2734 194.323C69.6551 193.879 67.9801 193.318 66.3219 192.762C65.996 192.653 65.6707 192.544 65.3466 192.436C63.3852 191.783 61.4652 191.172 59.7647 190.836C58.202 190.528 56.7415 190.434 55.5782 190.821C50.9113 187.556 45.514 184.974 40.1545 182.41C38.8122 181.768 37.4722 181.126 36.1467 180.476C29.4332 177.182 23.0699 173.642 18.4157 168.489C11.4973 156.835 3.76174 143.259 1.18078 129.418C-1.36234 111.136 3.33043 84.9394 13.3977 61.6234C23.4725 38.2901 38.859 18.0023 57.5763 11.3583C77.2523 5.09241 102.809 -0.723599 126.066 0.723469C149.313 2.16993 170.17 10.8601 180.651 33.5199C182.461 37.7206 184.727 41.8454 187.093 45.951C187.779 47.1416 188.473 48.3297 189.167 49.5177C190.872 52.4364 192.576 55.3546 194.164 58.309C198.628 66.6186 202.107 75.1117 201.918 84.3534L201.917 84.393L201.923 84.4322C207.46 124.427 195.498 163.233 158.242 184.195Z" />
				</clipPath>
			</defs>
			<rect
				clipPath={`url(#${maskId})`}
				fill="#eff6ef"
				height="199"
				width="204"
			/>
			<image
				clipPath={`url(#${maskId})`}
				height="199"
				href={member.photo}
				preserveAspectRatio="xMidYMid slice"
				width="204"
			/>
		</svg>
	);
}

function getTeamMemberRole(member: DisplayTeamMember) {
	return "role" in member ? member.role : member.position;
}

function getTeamMemberKey(member: DisplayTeamMember) {
	return "slug" in member && member.slug ? member.slug : member.name;
}

function getTeamMemberGroup(member: DisplayTeamMember) {
	return member.group ?? "team-members";
}

const valueRows = [
	[
		{
			Header: Frame25,
			body: "We challenge conventions, embrace innovation, and push the boundaries. Our core purpose is to create lasting value for our farmers, the environment, and the communities we serve. We come back to the big picture to ensure our efforts maximise impact",
			color: "bg-[#f7e6d4]",
			variant: "fluid",
		},
		{
			Header: Frame28,
			body: "We believe that working together unlocks the full potential of our team, our farmers, and our partners. We align individual responsibility with company strategy to create a clear path forward. We are caring and candid with our feedback to become better, together.",
			color: "bg-[#eddde6]",
			variant: "fluid",
		},
		{
			Header: Frame24,
			body: "Honesty and openness are the cornerstones of our work. We build trust through clear communication, ethical decision-making, and transparency in our relationships with farmers, customers, and partners.",
			color: "bg-[#e8eafc]",
			variant: "fluid",
		},
	],
	[
		{
			Header: Frame33,
			body: "Customer success unlocks our positive impact on our farmers and the planet. We are continuously connecting with our customers to deepen our understanding. We think proactively and anticipate our customers' evolving needs. Customer satisfaction & feedback guide our strategy.",
			color: "bg-[#f3f5e7]",
			variant: "fixed",
		},
		{
			Header: Frame49,
			body: "We uphold the highest standards to build a supply chain that's responsible, sustainable, and driven by quality. Our dedication to our shared mission is shown in our individual action. We identify and action improvements to set the bar for excellence - for ourselves and others.",
			color: "bg-[#efedec]",
			variant: "fixed",
		},
	],
];

type OurTeamProps = {
	advisors?: CmsTeamMember[];
	teamMembers?: CmsTeamMember[];
};

export default function OurTeam({
	advisors = [],
	teamMembers: cmsTeamMembers,
}: OurTeamProps) {
	const [activeFilter, setActiveFilter] = useState<TeamFilter>("all");
	const people = useMemo<DisplayTeamMember[]>(() => {
		const cmsPeople: CmsTeamMember[] = [
			...(cmsTeamMembers ?? []).map((member) => ({
				...member,
				group: "team-members" as const,
			})),
			...advisors.map((member) => ({
				...member,
				group: "advisors" as const,
			})),
		];

		return cmsPeople.length ? cmsPeople : staticTeamRows.flat();
	}, [advisors, cmsTeamMembers]);
	const teamFilters = useMemo(() => {
		const filters: { id: TeamFilter; label: string }[] = [
			{ id: "all", label: "All" },
			{ id: "team-members", label: "Team Members" },
		];

		if (people.some((member) => getTeamMemberGroup(member) === "advisors")) {
			filters.push({ id: "advisors", label: "Advisors" });
		}

		return filters;
	}, [people]);
	const filteredPeople =
		activeFilter === "all"
			? people
			: people.filter((member) => getTeamMemberGroup(member) === activeFilter);
	const displayTeamRows = chunkMembers(filteredPeople);

	return (
		<div className="bg-white flex flex-col items-start relative w-full">
			{/* Hero */}
			<div
				className="bg-[#fcfdf9] min-h-[500px] md:min-h-[600px] lg:min-h-[742px] overflow-clip relative shrink-0 w-full"
				data-name="Wireframe - 53">
				<Header />
				<ContentContainer
					size="wide"
					className="flex justify-center pt-[180px] pb-[96px] md:pt-[240px] md:pb-30 lg:pt-[282px] lg:pb-[140px]">
					<div className="flex flex-col gap-12 items-center not-italic text-center relative w-full max-w-[624px]">
						<p className={`${typeStyles.heroTitleLarge} relative shrink-0 text-[#0f251b] w-full`}>
							Meet the A-team
						</p>
						<p className="text-xl tracking-wide relative shrink-0 text-green-500  w-full whitespace-pre-wrap">
							Our team is global, women-founded, and brought
							together by a shared drive for transformative impact
							and a bold vision to reshape food systems in Kenya
							and across Sub-Saharan Africa.
						</p>
						<p className="text-xl tracking-wide relative shrink-0 text-green-500  w-full whitespace-pre-wrap ">
							By combining international expertise with deep local
							knowledge, we continue to build and scale a business
							that delivers both commercial value and meaningful
							impact.
						</p>
					</div>
				</ContentContainer>
				<div
					className="absolute hidden h-[506.262px] items-center justify-center right-[-302.73px] top-[226px] w-[594.002px] lg:flex"
					style={
						{
							"--transform-inner-width": "1185",
							"--transform-inner-height": "21",
						} as React.CSSProperties
					}>
					<div className="-rotate-90 flex-none">
						<div className="h-[594.002px] relative w-[506.262px]">
							<OurTeamSvgs.OurTeamSvg01 />
						</div>
					</div>
				</div>
				<div
					className="absolute hidden h-[506.262px] items-center justify-center right-[calc(75%+49.3px)] top-[133px] w-[594.001px] lg:flex"
					style={
						{
							"--transform-inner-width": "1185",
							"--transform-inner-height": "21",
						} as React.CSSProperties
					}>
					<div className="-rotate-90 flex-none">
						<div className="h-[594.001px] relative w-[506.262px]">
							<OurTeamSvgs.OurTeamSvg02 />
						</div>
					</div>
				</div>
			</div>
			{/* Intro */}
			<div
				className="bg-[#f3f5e7] overflow-clip relative rounded-bl-[40px] rounded-br-[40px] shrink-0 w-full"
				data-name="Team CTA">
				<ContentContainer
					size="wide"
					className="py-[96px] md:py-[142px] lg:pt-[132px] lg:pb-[160px]">
					<div className="flex flex-col gap-[56px] md:gap-16">
						<p className="relative font-serif font-normal leading-zero not-italic text-[0px] text-white tracking-section-lg w-full max-w-[605px]">
							<span className="leading-normal text-green-500 text-section md:text-section-lg">
								Global in perspective
								<br aria-hidden="true" />
								Local in expertise
								<br aria-hidden="true" />
								United by
							</span>
							<span className="leading-normal text-section md:text-section-lg">{` `}</span>
							<span className={`${typeStyles.sectionTitleLarge} italic text-orange-500`}>
								impact
							</span>
						</p>
						<div className="relative mx-auto w-full max-w-[1004px] lg:ml-[104px] lg:mr-0">
							<div className="overflow-hidden rounded-[8px_8px_32px_32px] w-full">
								<img
									alt=""
									className="block aspect-[1004/377] w-full object-cover"
									src={imgTeamphoto1}
								/>
							</div>
							<div className="absolute -bottom-[52px] right-[4%] hidden h-[198px] w-[204px] md:block lg:-right-[78px]">
								<div
									className="absolute h-[198.445px] left-0 top-0 w-[203.707px]"
									data-name="Vector">
									<OurTeamSvgs.OurTeamSvg03 />
								</div>
								<div
									className="absolute flex items-center justify-center left-[67.71px] size-[68.586px] top-[64.71px]"
									style={
										{
											"--transform-inner-width": "1185",
											"--transform-inner-height": "21",
										} as React.CSSProperties
									}>
									<div className="flex-none rotate-165">
										<div
											className="overflow-clip relative size-[56px]"
											data-name="arrow-up-right">
											<div
												className="absolute inset-[29.17%]"
												data-name="Icon">
												<div className="absolute inset-[-4.29%]">
													<OurTeamSvgs.OurTeamSvg04 />
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</ContentContainer>
				<div
					className="absolute hidden h-[572.259px] items-center justify-center left-0 right-0 -top-121.5 w-full lg:flex"
					style={
						{
							"--transform-inner-width": "1185",
							"--transform-inner-height": "21",
						} as React.CSSProperties
					}>
					<div className="flex-none rotate-90">
						<div
							className="h-[1477px] relative w-[572.259px]"
							data-name="Vector">
							<OurTeamSvgs.OurTeamSvg05 />
						</div>
					</div>
				</div>
			</div>
			{/* Team members */}
			<div
				className="bg-white min-h-[800px] md:min-h-[1000px] overflow-clip relative shrink-0 w-full"
				data-name="Wireframe - 31">
				<ContentContainer size="wide" className={sectionSpacing.default}>
					<div className="relative flex flex-col items-center gap-[92px]">
						<div className="flex flex-wrap gap-[25px] items-center relative py-[24px] w-full max-w-7xl">
							<div
								aria-hidden="true"
								className="absolute border-[#dfeddf] border-b border-dashed inset-0 pointer-events-none"
							/>
							<div className="flex items-start p-2 relative shrink-0">
								<p className={`${typeStyles.body} leading-6 relative shrink-0 text-black text-center whitespace-nowrap`}>
									Filter By:
								</p>
							</div>
							{teamFilters.map((filter) => (
								<Button
									type="button"
									aria-pressed={activeFilter === filter.id}
									onClick={() => setActiveFilter(filter.id)}
									variant={activeFilter === filter.id ? "primary" : "none"}
									size="sm"
									className={`relative shrink-0 ${activeFilter === filter.id ? "text-[#eee]" : "bg-[#eff6ef] text-[#0f251b]"}`}
									key={filter.id}>
									{filter.label}
								</Button>
							))}
						</div>
						<div className="flex flex-col gap-8 items-start relative w-full max-w-[1276px]">
							{displayTeamRows.map((row, index) => (
								<div
									className={`flex flex-wrap items-start justify-center relative shrink-0 w-full ${index === 0 ? "gap-8" : "gap-8 lg:gap-[108px]"}`}
									key={index}>
									{row.map((member) => (
										<div
											className="flex flex-col gap-6 items-center relative w-full max-w-[260px] sm:w-[calc(50%-16px)] lg:flex-[1_0_0] lg:min-w-px lg:max-w-none"
											key={getTeamMemberKey(member)}>
											<TeamMemberPhoto member={member} />
											<div className={`${typeStyles.body} flex flex-col min-h-[54px] items-center relative shrink-0 text-center w-full max-w-[220px]`}>
												<p className="relative shrink-0 text-black">
													{member.name}
												</p>
												<p className="relative shrink-0 text-[#916f96]">
													{getTeamMemberRole(member)}
												</p>
											</div>
										</div>
									))}
								</div>
							))}
						</div>
					</div>
				</ContentContainer>
				<div className="absolute hidden inset-x-0 top-[906px] h-[362px] w-full lg:block">
					<BottomLandscapeSvg
						className="block size-full pointer-events-none select-none"
						preserveAspectRatio="none"
					/>
				</div>
			</div>
			{/* Values */}
			<div
				className="bg-[#122c20] min-h-[800px] md:min-h-[1000px] overflow-clip relative shrink-0 w-full"
				data-name="Wireframe - 11">
				<ContentContainer
					size="wide"
					className={sectionSpacing.default}>
					<div className="relative flex flex-col items-center gap-12">
						<div className="flex flex-col gap-16 items-center relative w-full max-w-7xl">
							<div className="flex flex-col items-center relative shrink-0 w-full max-w-[1052px]">
								<p className={`${typeStyles.sectionTitle} not-italic relative shrink-0 text-[#eff6ef] text-center w-full`}>
									We live by our values
								</p>
							</div>
							<div className="flex flex-col gap-8 items-start relative shrink-0 w-full">
								{valueRows.map((row, index) => (
									<div
										className={`flex flex-col gap-8 items-start relative shrink-0 w-full lg:flex-row ${index === 1 ? "lg:justify-center" : ""}`}
										key={index}>
										{row.map((value) =>
											value.variant === "fixed" ? (
												<div
													className={`${value.color} flex flex-col gap-[27px] items-start px-6 py-[36px] md:px-[32px] md:py-[48px] relative rounded-[30px] shrink-0 w-full lg:w-[405.333px]`}>
													{
														<>
															<value.Header />
															<p className={`${typeStyles.body} relative shrink-0 text-green-500 text-center w-full`}>
																{value.body}
															</p>
														</>
													}
												</div>
											) : (
												<div
													className={`${value.color} relative rounded-[30px] w-full lg:flex-[1_0_0] lg:min-w-px`}>
													<div className="flex flex-col gap-[27px] items-start px-6 py-[36px] md:px-[32px] md:py-[48px] relative size-full">
														{
															<>
																<value.Header />
																<p className={`${typeStyles.body} relative shrink-0 text-green-500 text-center w-full`}>
																	{value.body}
																</p>
															</>
														}
													</div>
												</div>
											),
										)}
									</div>
								))}
							</div>
						</div>
					</div>
				</ContentContainer>
				<div className="absolute hidden h-[362px] left-0 top-[-271px] w-[1437px] lg:block">
					<OurTeamSvgs.OurTeamSvg06 />
				</div>
			</div>
			{/* Careers CTA */}
			<div
				className="bg-[#122c20] min-h-[500px] md:min-h-[600px] lg:min-h-[696px] overflow-clip relative rounded-bl-[40px] rounded-br-[40px] shrink-0 w-full"
				data-name="Wireframe - 36">
				<div className="absolute inset-[94.25%_0_0_0]">
					<OurTeamSvgs.OurTeamSvg07 />
				</div>
				<ContentContainer
					size="wide"
					className={`${sectionSpacing.cta} flex justify-center`}>
					<div
						className="bg-[#4c352b] min-h-[520px] max-w-[1216px] overflow-clip relative rounded-4xl md:rounded-[40px] w-full flex items-center justify-center p-[28px] md:p-10"
						data-name="CTA">
						<div
							className="absolute hidden h-[663px] left-[7px] top-[-86px] w-[1205px] md:block"
							data-name="Capa_1">
							<OurTeamSvgs.OurTeamSvg08 />
						</div>
						<div className="flex flex-col gap-10 items-center relative rounded-[40px] z-10 w-full">
							<p className={`${typeStyles.sectionTitle} leading-zero not-italic relative shrink-0 text-orange-500 text-center w-full max-w-[800px]`}>
								<span className="leading-normal text-[#f5e091]">{`We’re always looking for like-minded people to join our `}</span>
								<span className="font-serif font-normal italic leading-normal">
									odd
								</span>
								<span className="leading-normal text-[#f5e091]">{` team.`}</span>
							</p>
							<p className={`${typeStyles.bodyLarge} not-italic relative shrink-0 text-center text-white w-full max-w-148`}>{`Come work with us if that sounds like you. `}</p>
							<Button
								href="/careers"
								variant="none"
								size="lg"
								className="relative shrink-0 bg-white text-[#122c20]"
								data-name="Button / Primary">
								Current openings
							</Button>
						</div>
					</div>
				</ContentContainer>
			</div>
			{/* Footer */}
			<Footer />
		</div>
	);
}
