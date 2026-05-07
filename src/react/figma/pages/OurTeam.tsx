import * as OurTeamSvgs from "../imports/OurTeam/ourTeam-inline-svgs";
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
const teamFilters = [
	{
		label: "All",
		active: true,
	},
	{
		label: "Board",
	},
	{
		label: "Leadership",
	},
];
const teamMembers = [
	[
		{
			Photo: Frame39,
			name: "Claire van Enk",
			role: "Managing Director",
		},
		{
			Photo: Frame38,
			name: "Anouk Boertien",
			role: "Director of Product and Sustainability",
		},
		{
			Photo: Frame37,
			name: "Zara Benosa",
			role: "Director business development",
		},
		{
			Photo: Frame40,
			name: "Christine Kiraithe Pentinga",
			role: "Director Operations",
		},
	],
	[
		{
			Photo: Frame41,
			name: "Lucy Wainaina",
			role: "Finance officer",
		},
		{
			Photo: Frame42,
			name: "David Chege",
			role: "Lead Supply Hub Coordinator",
		},
		{
			Photo: Frame43,
			name: "Stella Mbungu",
			role: "Sales and Customer Care Manager",
		},
		{
			Photo: Frame44,
			name: "Samuel Mburu",
			role: "Sourcing lead",
		},
	],
];
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
export default function OurTeam() {
	return (
		<div className="bg-white content-stretch flex flex-col items-start relative w-full">
			{/* Hero */}
			<div
				className="bg-[#fcfdf9] min-h-[500px] md:min-h-[600px] lg:min-h-[742px] overflow-clip relative shrink-0 w-full"
				data-name="Wireframe - 53">
				<Header />
				<ContentContainer
					size="wide"
					className="flex justify-center pt-[180px] pb-[96px] md:pt-[240px] md:pb-[120px] lg:pt-[282px] lg:pb-[140px]">
					<div className="content-stretch flex flex-col gap-12 items-center not-italic text-center relative w-full max-w-[624px]">
						<p className="font-['Fraunces',serif] font-normal leading-normal relative shrink-0 text-[#0f251b] text-4xl md:text-5xl lg:text-6xl tracking-wide w-full">
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
					<div className="flex flex-col gap-[56px] md:gap-[64px]">
						<p className="relative font-['Fraunces',serif] font-normal leading-[0] not-italic text-[0px] text-white tracking-[1.44px] w-full max-w-[605px]">
							<span className="leading-[normal] text-[#1e4a35] text-[40px] md:text-[48px]">
								Global in perspective
								<br aria-hidden="true" />
								Local in expertise
								<br aria-hidden="true" />
								United by
							</span>
							<span className="leading-[normal] text-[40px] md:text-[48px]">{` `}</span>
							<span className="font-['Fraunces',serif] font-normal italic leading-[normal] text-[#d78228] text-[40px] md:text-[48px]">
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
				<ContentContainer size="wide" className="py-[66px]">
					<div className="relative flex flex-col items-center gap-[92px]">
						<div className="content-stretch flex flex-wrap gap-[25px] items-center relative py-[24px] w-full max-w-[1280px]">
							<div
								aria-hidden="true"
								className="absolute border-[#dfeddf] border-b border-dashed inset-0 pointer-events-none"
							/>
							<div className="content-stretch flex items-start p-[8px] relative shrink-0">
								<p className="font-['Rubik',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-black text-center whitespace-nowrap">
									Filter By:
								</p>
							</div>
							{teamFilters.map((filter) => (
								<div
									className={`content-stretch flex items-start px-[16px] py-[8px] relative rounded-[40px] shrink-0 ${filter.active ? "bg-[#1e4a35]" : "bg-[#eff6ef]"}`}>
									<p
										className={`font-['Rubik',sans-serif] font-normal leading-[1.68] relative shrink-0 text-[16px] text-center tracking-[0.48px] whitespace-nowrap ${filter.active ? "text-[#eee]" : "text-[#0f251b]"}`}>
										{filter.label}
									</p>
								</div>
							))}
						</div>
						<div className="content-stretch flex flex-col gap-[32px] items-start relative w-full max-w-[1276px]">
							{teamMembers.map((row, index) => (
								<div
									className={`content-stretch flex flex-wrap items-start justify-center relative shrink-0 w-full ${index === 0 ? "gap-[32px]" : "gap-[32px] lg:gap-[108px]"}`}
									key={index}>
									{row.map((member) => (
										<div className="content-stretch flex flex-col gap-[24px] items-center relative w-full max-w-[260px] sm:w-[calc(50%-16px)] lg:flex-[1_0_0] lg:min-w-px lg:max-w-none">
											<member.Photo />
											<div className="content-stretch flex flex-col font-['Rubik',sans-serif] font-normal min-h-[54px] items-center leading-[1.68] relative shrink-0 text-[16px] text-center tracking-[0.48px] w-full max-w-[220px]">
												<p className="relative shrink-0 text-black">
													{member.name}
												</p>
												<p className="relative shrink-0 text-[#916f96]">
													{member.role}
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
					className="py-[96px] md:py-[119px]">
					<div className="relative flex flex-col items-center gap-12">
						<div className="content-stretch flex flex-col gap-[64px] items-center relative w-full max-w-[1280px]">
							<div className="content-stretch flex flex-col items-center relative shrink-0 w-full max-w-[1052px]">
								<p className="font-['Fraunces',serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#eff6ef] text-[40px] text-center tracking-[1.2px] w-full">
									We live by our values
								</p>
							</div>
							<div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full">
								{valueRows.map((row, index) => (
									<div
										className={`content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full lg:flex-row ${index === 1 ? "lg:justify-center" : ""}`}
										key={index}>
										{row.map((value) =>
											value.variant === "fixed" ? (
												<div
													className={`${value.color} content-stretch flex flex-col gap-[27px] items-start px-[24px] py-[36px] md:px-[32px] md:py-[48px] relative rounded-[30px] shrink-0 w-full lg:w-[405.333px]`}>
													{
														<>
															<value.Header />
															<p className="font-['Rubik',sans-serif] font-normal leading-[1.68] relative shrink-0 text-[#1e4a35] text-[16px] text-center tracking-[0.48px] w-full">
																{value.body}
															</p>
														</>
													}
												</div>
											) : (
												<div
													className={`${value.color} relative rounded-[30px] w-full lg:flex-[1_0_0] lg:min-w-px`}>
													<div className="content-stretch flex flex-col gap-[27px] items-start px-[24px] py-[36px] md:px-[32px] md:py-[48px] relative size-full">
														{
															<>
																<value.Header />
																<p className="font-['Rubik',sans-serif] font-normal leading-[1.68] relative shrink-0 text-[#1e4a35] text-[16px] text-center tracking-[0.48px] w-full">
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
					className="flex justify-center py-[72px] md:pt-[56px] md:pb-[96px]">
					<div
						className="bg-[#4c352b] min-h-[520px] max-w-[1216px] overflow-clip relative rounded-[32px] md:rounded-[40px] w-full flex items-center justify-center p-[28px] md:p-10"
						data-name="CTA">
						<div
							className="absolute hidden h-[663px] left-[7px] top-[-86px] w-[1205px] md:block"
							data-name="Capa_1">
							<OurTeamSvgs.OurTeamSvg08 />
						</div>
						<div className="content-stretch flex flex-col gap-[40px] items-center relative rounded-[40px] z-10 w-full">
							<p className="font-['Fraunces',serif] font-normal leading-[0] not-italic relative shrink-0 text-[#d78228] text-[32px] md:text-[40px] text-center tracking-[1.2px] w-full max-w-[800px]">
								<span className="leading-[normal] text-[#f5e091]">{`We’re always looking for like-minded people to join our `}</span>
								<span className="font-['Fraunces',serif] font-normal italic leading-[normal]">
									odd
								</span>
								<span className="leading-[normal] text-[#f5e091]">{` team.`}</span>
							</p>
							<p className="font-['Rubik',sans-serif] font-normal leading-[1.68] not-italic relative shrink-0 text-[16px] md:text-[20px] text-center text-white tracking-[0.6px] w-full max-w-[592px]">{`Come work with us if that sounds like you. `}</p>
							<div
								className="bg-white relative rounded-[80px] shrink-0"
								data-name="Button / Primary">
								<div className="content-stretch flex items-center justify-center overflow-clip px-[20px] py-[12px] relative rounded-[inherit] size-full">
									<p className="font-['Rubik',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#122c20] text-[16px] whitespace-nowrap">
										Current openings
									</p>
								</div>
								<div
									aria-hidden="true"
									className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[80px]"
								/>
							</div>
						</div>
					</div>
				</ContentContainer>
			</div>
			{/* Footer */}
			<Footer />
		</div>
	);
}
