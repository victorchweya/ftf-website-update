import { useEffect, useRef, useState } from "react";
import heroHomeImage from "../imports/Home/hero-home.png?url";
import supplyChainImage from "../imports/Home/supply-chain.svg?url";
import imgVector1 from "../../../assets/figma/c2c2df3bbbb24de92cb6c214b6dae6d9ec8411a0.png?url";
import imgSupplyChainBusiness from "../../../assets/figma/bde7cbc7ab76e8ddecbaf7d4c120dd2f2e62a08a.png?url";
import imgSupplyChainFoodSystems from "../../../assets/figma/69ef415b99d59a8e413a8dec8a5799dcd5f264d5.png?url";
import imgPlaceholderImage from "../../../assets/figma/2dcd35f0969168b49576839a28be093481c42f9f.png?url";
import imgPlaceholderImage1 from "../../../assets/figma/df46db7e24c63bd9580267e4b92a177fae0edc68.png?url";
import imgPlaceholderImage2 from "../../../assets/figma/456b5ca63fec37944e95e90951a499a07680e2bd.png?url";
import { BackgroundBottomSvg } from "../imports/Home/background-bottom";
import * as HomeSvgs from "../imports/Home/home-inline-svgs";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Button } from "../components/Button";
import { ContentContainer } from "../components/layout/ContentContainer";
import { sectionSpacing } from "../components/layout/spacing";
import { typeStyles } from "../components/layout/typography";

type NewsItem = {
	date: string;
	excerpt?: string;
	href?: string;
	image: string;
	slug?: string;
	title: string;
};

type ImpactMetric = {
	description?: string;
	label: string;
	metric?: string;
	slug?: string;
	unit?: string;
	value: string;
};

type Testimonial = {
	company: string;
	name: string;
	quote: string;
	slug?: string;
};

const supplyChainBenefits = [
	{
		title: "Better Markets for Farmers",
		description:
			"We connect farmers to reliable buyers, turning harvests into stable income and reducing unnecessary food loss.",
		image: imgVector1,
		imageAlt: "Produce being loaded for market delivery",
	},
	{
		title: "Better Sourcing for Businesses",
		description:
			"Hotels, caterers, processors, and global buyers access quality produce and ingredients with full transparency and consistent supply.",
		image: imgSupplyChainBusiness,
		imageAlt: "Fresh vegetables handed over in a commercial kitchen",
	},
	{
		title: "Better Food Systems for Everyone",
		description:
			"By efficiently matching supply and demand, we ensure more food is consumed rather than wasted. Food systems will shape our planet's future, with Africa leading the way. At Farm to Feed, we create the infrastructure for a more inclusive, resilient, and waste-free future.",
		image: imgSupplyChainFoodSystems,
		imageAlt: "Fresh ingredients arranged on a chopping board",
	},
];

const newsItems: NewsItem[] = [
	{
		date: "09 Jan 2026",
		image: imgPlaceholderImage,
		title: "Farm to Feed has published their first Impact Report",
	},
	{
		date: "09 Jan 2026",
		image: imgPlaceholderImage1,
		title: "Farm to Feed Wins Global Startup Award and Secures New Investment",
	},
	{
		date: "09 Jan 2026",
		image: imgPlaceholderImage2,
		title: "Farm to Feed Expands Operations to New Region",
	},
];

const fallbackImpactMetrics: ImpactMetric[] = [
	{
		label: "tonnes of CO2e avoided",
		value: "1K",
	},
	{
		label: "KG of food saved",
		value: "920K",
	},
	{
		label: "increase in farmers' incomes",
		value: "37%",
	},
];

type HomeProps = {
	impactMetrics?: ImpactMetric[];
	newsItems?: NewsItem[];
	testimonials?: Testimonial[];
};

export default function Home({
	impactMetrics: cmsImpactMetrics,
	newsItems: cmsNewsItems,
}: HomeProps) {
	const supplyChainSectionRef = useRef<HTMLDivElement>(null);
	const frameRef = useRef<number | null>(null);
	const [activeBenefitIndex, setActiveBenefitIndex] = useState(0);
	const displayImpactMetrics = fallbackImpactMetrics.map(
		(fallbackMetric, index) => cmsImpactMetrics?.[index] ?? fallbackMetric,
	);
	const displayNewsItems = cmsNewsItems?.length
		? cmsNewsItems.slice(0, 3)
		: newsItems;

	useEffect(() => {
		const updateActiveBenefit = () => {
			const section = supplyChainSectionRef.current;

			if (!section || window.innerWidth < 1024) {
				setActiveBenefitIndex(0);
				return;
			}

			const rect = section.getBoundingClientRect();
			const scrollDistance = section.offsetHeight - window.innerHeight;
			const rawProgress = scrollDistance > 0 ? -rect.top / scrollDistance : 0;
			const progress = Math.min(Math.max(rawProgress, 0), 1);
			const nextIndex = Math.min(
				Math.floor(progress * supplyChainBenefits.length),
				supplyChainBenefits.length - 1,
			);

			setActiveBenefitIndex(nextIndex);
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

			if (frameRef.current !== null) {
				window.cancelAnimationFrame(frameRef.current);
			}
		};
	}, []);

	return (
		<main
			className="bg-[#fbf3e9] flex flex-col items-center relative w-full min-h-screen"
			data-name="home">
			{/* Hero */}
			<div
				className="bg-[#fbf3e9] min-h-screen relative shrink-0 w-full"
				data-name="HeroSection">
				<div
					className="absolute inset-0 pointer-events-none select-none"
					data-name="Hero artwork">
					<img
						alt=""
						aria-hidden="true"
						className="block size-full object-cover object-center"
						fetchPriority="high"
						src={heroHomeImage}
					/>
				</div>
				<Header />
				<ContentContainer
					size="wide"
					className="relative z-10 flex flex-col items-center justify-center pt-40 xl::pt-48 pb-24">
					<div className="flex flex-col gap-8 items-center max-w-xl not-italic text-center relative w-full">
						<p
							className={`${typeStyles.heroTitleXL} relative shrink-0 text-green-500 w-full`}>
							Shaping the Future of Food
						</p>
						<p
							className={`${typeStyles.bodyLead} min-w-full relative shrink-0 text-orange-500 w-[min-content]`}>
							Connecting farmers, markets, and ingredients through
							smarter supply chains.
						</p>
					</div>
				</ContentContainer>
			</div>
			<div className="-mt-32 md:-mt-64 lg:-mt-72 relative z-10">
				<ContentContainer
					size="wide"
					className="relative z-10 flex justify-center pb-30">
					<div className="flex flex-col lg:flex-row gap-16 items-center justify-center  relative max-w-7xl w-full">
						<div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
							<div
								className="col-1 h-74.5 ml-0 mt-20 relative row-1 w-75.75"
								data-name="Vector">
								<div className="absolute inset-[-1.34%_-7.92%_-14.77%_-7.92%]">
									<HomeSvgs.HeroSvg01 />
								</div>
							</div>
							<div className="col-1 flex flex-col gap-8 items-center ml-11.5 mt-0 relative row-1 w-54.25">
								<div className="h-38.5 relative shrink-0 w-39.5">
									<HomeSvgs.HeroSvg02 />
								</div>
								<div className="flex flex-col gap-4 items-center not-italic relative shrink-0 text-center w-full">
									<div
										className={`${typeStyles.cardTitle} relative shrink-0 text-[#0f251b] whitespace-nowrap`}>
										<p className="leading-normal mb-0 whitespace-pre">{`For Kenyan `}</p>
										<p className="leading-normal whitespace-pre">
											Farmers
										</p>
									</div>
									<p
										className={`${typeStyles.body} min-w-full relative shrink-0 text-green-500 w-min`}>
										The future of food starts with you
									</p>
								</div>
							</div>
							<Button
								href="/sell-with-us"
								size="sm"
								className="col-1 ml-24.75 mt-88 relative row-1 text-[#eee]"
								data-name="order">
								Sell with us
							</Button>
						</div>
						<div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
							<div
								className="col-1 h-74.5 ml-0 mt-20 relative row-1 w-75.75"
								data-name="Vector">
								<div className="absolute inset-[-1.34%_-7.92%_-14.77%_-7.92%]">
									<HomeSvgs.HeroSvg03 />
								</div>
							</div>
							<div className="col-1 flex flex-col gap-8 items-center ml-11.5 mt-0 relative row-1 w-54.25">
								<div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-zero place-items-start relative shrink-0">
									<div
										className="col-1 h-38.5 ml-0 mt-0 relative row-1 w-39.5"
										data-name="Group">
										<HomeSvgs.HeroSvg04 />
									</div>
									<div
										className="col-1 h-19.75 ml-9.5 mt-8.25 relative row-1 w-20.5"
										data-name="Capa_1">
										<HomeSvgs.HeroSvg05 />
									</div>
								</div>
								<div className="flex flex-col gap-4 items-center not-italic relative shrink-0 text-center w-full">
									<div
										className={`${typeStyles.cardTitle} relative shrink-0 text-[#0f251b] whitespace-nowrap`}>
										<p className="leading-normal mb-0 whitespace-pre">{`For Kenyan `}</p>
										<p className="leading-normal whitespace-pre">
											Buyers
										</p>
									</div>
									<p
										className={`${typeStyles.body} min-w-full relative shrink-0 text-green-500 w-min`}>
										The future of food, delivered to you
									</p>
								</div>
							</div>
							<Button
								href="/kenyan-buyers"
								size="sm"
								className="col-1 ml-24.75 mt-88 relative row-1 text-[#eee]"
								data-name="order">
								Buy from us
							</Button>
						</div>
						<div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
							<div
								className="col-1 h-74.5 ml-0 mt-20 relative row-1 w-75.75"
								data-name="Vector">
								<div className="absolute inset-[-1.34%_-7.92%_-14.77%_-7.92%]">
									<HomeSvgs.HeroSvg06 />
								</div>
							</div>
							<div className="col-1 flex flex-col gap-8 items-center ml-11.5 mt-0 relative row-1 w-54.25">
								<div className="h-38.5 relative shrink-0 w-39.5">
									<HomeSvgs.HeroSvg07 />
								</div>
								<div className="flex flex-col gap-4 items-center not-italic relative shrink-0 text-center w-full">
									<div
										className={`${typeStyles.cardTitle} relative shrink-0 text-[#0f251b] whitespace-nowrap`}>
										<p className="leading-normal mb-0 whitespace-pre">{`For Global `}</p>
										<p className="leading-normal whitespace-pre">
											Buyers
										</p>
									</div>
									<p
										className={`${typeStyles.body} min-w-full relative shrink-0 text-green-500 w-min`}>
										The future of food, supplied from Kenya
									</p>
								</div>
							</div>
							<Button
								href="/global-buys"
								size="sm"
								className="col-1 ml-24.75 mt-88 relative row-1 text-[#eee]"
								data-name="order">
								Learn more
							</Button>
						</div>
					</div>
				</ContentContainer>
			</div>
			{/* Story */}
			<div
				className="bg-[#fbf3e9]  overflow-clip relative shrink-0 w-full pb-40"
				data-name="Wireframe - 11">
				<ContentContainer
					size="wide"
					className="relative z-10 flex justify-center">
					<div className="flex flex-col gap-16 items-center  relative w-full">
						<div
							className={`${typeStyles.sectionTitle} min-w-full md:min-w-5xl not-italic relative shrink-0 text-green-700 text-center w-min`}>
							<p>
								At Farm to Feed, we believe a better food system
								starts with a better supply chain. One that
								works for farmers, businesses, and the planet
								alike.
							</p>
						</div>
						<div
							className={`${typeStyles.body} leading-zero max-w-xl not-italic relative shrink-0 text-green-500 text-center w-full whitespace-pre-wrap`}>
							<p className="leading-copy mb-2">
								In Sub-Saharan Africa, nearly half of all fruits
								and vegetables go to waste - driving emissions,
								hurting farmers, and weakening food security.
								Meanwhile, buyers face unreliable supply, high
								costs, and poor traceability.
							</p>

							<p className="leading-copy">
								Since 2021, Farm to Feed, a women-led Kenyan
								startup has been closing this gap. We rescue
								imperfect and surplus produce, extend shelf
								life, and connect farmers to fair, reliable
								markets while offering buyers a seamless
								platform to source fresh, traceable, and
								affordable food with confidence.
							</p>
						</div>
						<Button
							href="/our-impact"
							size="lg"
							className="relative shrink-0 text-white"
							data-name="order">
							View Our Impact
						</Button>
					</div>
				</ContentContainer>
				<div
					className="absolute flex inset-[86.19%_-14.03%_-53.63%_-20.21%] items-center justify-center"
					style={{ containerType: "size" }}>
					<div className="-scale-x-100 flex-none h-[100cqw] rotate-90 w-[100cqh]">
						<div className="relative size-full" data-name="Vector">
							<HomeSvgs.StorySvg01 />
						</div>
					</div>
				</div>
			</div>
			{/* Supply chain benefits */}
			<div
				ref={supplyChainSectionRef}
				className="bg-olive-200 relative shrink-0 w-full lg:h-[300vh]"
				data-name="Layout / 28 /">
				<ContentContainer
					size="wide"
					className={`${sectionSpacing.default} lg:sticky lg:top-0 lg:flex lg:min-h-screen lg:items-center`}>
					<div
						className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center w-full"
						data-name="SupplyChainBenefitsContent">
						<div
							className="flex flex-col gap-8 md:gap-10 lg:gap-12 w-full lg:w-[579px]"
							data-name="SupplyChainBenefitList">
							{supplyChainBenefits.map((benefit, index) => {
								const isActive = index === activeBenefitIndex;

								return (
									<article
										key={benefit.title}
										className={`lg:border-l-2 lg:pl-8 lg:transition-[border-color,opacity] lg:duration-300 ${
											isActive
												? "lg:border-green-500 lg:opacity-100"
												: "lg:border-transparent lg:opacity-70"
										}`}>
										<h3
											className={`${typeStyles.featureTitle} font-medium text-green-800 lg:transition-colors lg:duration-300 ${
												isActive
													? "lg:text-green-800"
													: "lg:text-green-700"
											}`}>
											{benefit.title}
										</h3>
										<p
											className={`mt-4 text-green-500 lg:transition-colors lg:duration-300 ${
												isActive
													? "lg:text-green-500"
													: "lg:text-green-600"
											}`}>
											{benefit.description}
										</p>
										<img
											alt={benefit.imageAlt}
											className="mt-8 block aspect-[517/552] w-full object-contain sm:mx-auto sm:w-[80%] lg:hidden"
											height="552"
											src={benefit.image}
											width="517"
										/>
									</article>
								);
							})}
						</div>
						<figure
							className="relative hidden aspect-[517/552] w-full max-w-[517px] shrink-0 sm:w-[80%] lg:block lg:w-[517px]"
							data-name="Vector">
							{supplyChainBenefits.map((benefit, index) => {
								const isActive = index === activeBenefitIndex;

								return (
									<img
										key={benefit.title}
										alt={isActive ? benefit.imageAlt : ""}
										aria-hidden={!isActive}
										className={`absolute inset-0 block size-full object-contain transition-opacity duration-500 ease-out ${
											isActive ? "opacity-100" : "opacity-0"
										}`}
										height="552"
										src={benefit.image}
										width="517"
									/>
								);
							})}
							<figcaption className="sr-only">
								{supplyChainBenefits[activeBenefitIndex].imageAlt}
							</figcaption>
						</figure>
					</div>
				</ContentContainer>
			</div>
			{/* Supply chain excellence */}
			<div
				className="bg-white overflow-clip relative shrink-0 w-full pt-48"
				data-name="Wireframe - 10">
				<BackgroundBottomSvg
					className="absolute inset-x-0 top-0 w-full max-w-none pointer-events-none select-none"
					fill="#DAE2B6"
				/>
				<div
					className="mx-auto flex w-full items-center justify-center md:w-3/4"
					data-name="SupplyChainImage">
					<img
						alt=""
						aria-hidden="true"
						className="block h-auto w-full"
						src={supplyChainImage}
					/>
				</div>
				<ContentContainer
					size="wide"
					className="relative z-10 flex justify-center py-24">
					<div className="flex flex-col gap-16 items-center relative max-w-3xl w-full">
						<p
							className={`${typeStyles.sectionTitle} min-w-full not-italic relative shrink-0 text-[#0f251b] text-center w-[min-content]`}>
							We produce excellence for all actors in the supply
							chain, from farmer to customer
						</p>
						<Button
							href="/our-impact"
							size="sm"
							className="relative shrink-0 text-[#eee]"
							data-name="order">
							Learn More
						</Button>
					</div>
				</ContentContainer>

				{/* Impact */}
			</div>
			<div className="bg-yellow-200 overflow-clip relative shrink-0 w-full">
				<BackgroundBottomSvg
					className="absolute inset-x-0 top-0 w-full max-w-none pointer-events-none select-none"
					fill="#FFFFFF"
				/>
				<ContentContainer size="wide" className="relative z-10">
					<div
						className={`grid gap-10 sm:grid-cols-2 lg:grid-cols-[minmax(0,368px)_repeat(3,minmax(0,1fr))] ${sectionSpacing.roomy} lg:pt-[325px]`}>
						<p
							className={`${typeStyles.calloutTitle}  text-brown-800 text-center lg:text-left w-full sm:col-span-2 lg:col-span-1`}>
							By keeping food in the human food supply chain, we
							have an impact on various levels:
						</p>
						<div className="flex flex-col gap-8 md:gap-[56px] items-center lg:items-start justify-self-center lg:justify-self-start relative w-full max-w-[214px]">
							<div
								className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-zero place-items-start relative shrink-0"
								data-name="Group">
								<div
									className="col-1 h-[122.46px] ml-0 mt-0 relative row-1 w-[125.707px]"
									data-name="Vector">
									<HomeSvgs.ImpactSvg01 />
								</div>
								<div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[21px] mt-[33px] place-items-start relative row-1">
									<div
										className="col-1 h-[48px] ml-0 mt-0 relative row-1 w-[84px]"
										data-name="Capa_1">
										<HomeSvgs.ImpactSvg02 />
									</div>
								</div>
							</div>
							<div className="flex flex-col gap-6 items-center lg:items-start not-italic relative shrink-0 text-center lg:text-left w-full">
								<p
									className={`${typeStyles.statValue} relative shrink-0 text-[#4c352b] w-full`}>
									{displayImpactMetrics[0].value}
								</p>
								<p
									className={`${typeStyles.body} relative shrink-0 text-[#7b6a62] w-full`}>
									{displayImpactMetrics[0].label}
								</p>
							</div>
						</div>
						<div className="flex flex-col gap-8 md:gap-[56px] items-center lg:items-start justify-self-center lg:justify-self-start relative w-full max-w-[214px]">
							<div
								className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-zero place-items-start relative shrink-0"
								data-name="Group">
								<div
									className="col-1 h-[122.46px] ml-0 mt-0 relative row-1 w-[125.707px]"
									data-name="Vector">
									<HomeSvgs.ImpactSvg03 />
								</div>
								<div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[37.19px] mt-[28.03px] place-items-start relative row-1">
									<div
										className="col-1 h-[52.471px] ml-0 mt-[14.5px] relative row-1 w-[51.611px]"
										data-name="Capa_1">
										<HomeSvgs.ImpactSvg04 />
									</div>
									<div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[12.84px] mt-0 place-items-start relative row-1">
										<div className="col-1 h-[25.289px] ml-0 mt-0 relative row-1 w-[26.005px]">
											<div className="absolute inset-[-1.19%_-1.15%]">
												<HomeSvgs.ImpactSvg05 />
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="flex flex-col gap-6 items-center lg:items-start not-italic relative shrink-0 text-center lg:text-left w-full">
								<p
									className={`${typeStyles.statValue} relative shrink-0 text-[#4c352b] w-full`}>
									{displayImpactMetrics[1].value}
								</p>
								<p
									className={`${typeStyles.body} relative shrink-0 text-[#7b6a62] w-full`}>
									{displayImpactMetrics[1].label}
								</p>
							</div>
						</div>
						<div className="flex flex-col gap-8 md:gap-[56px] items-center lg:items-start justify-self-center lg:justify-self-start relative w-full max-w-[214px]">
							<div
								className="h-[122.46px] relative shrink-0 w-[125.707px]"
								data-name="Group">
								<HomeSvgs.ImpactSvg06 />
							</div>
							<div className="flex flex-col gap-6 items-center lg:items-start not-italic relative shrink-0 text-center lg:text-left w-full">
								<p
									className={`${typeStyles.statValue} relative shrink-0 text-[#4c352b] w-full`}>
									{displayImpactMetrics[2].value}
								</p>
								<p
									className={`${typeStyles.body} relative shrink-0 text-[#7b6a62] w-full`}>
									{displayImpactMetrics[2].label}
								</p>
							</div>
						</div>
					</div>
				</ContentContainer>
				<div
					className="absolute flex inset-[94.81%_0_0_0] items-center justify-center"
					style={{ containerType: "size" }}>
					<div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
						<div className="relative size-full">
							<HomeSvgs.ImpactSvg07 />
						</div>
					</div>
				</div>
			</div>
			{/* News */}
			<div
				className={`${sectionSpacing.default} bg-[#fbfafa] overflow-clip relative shrink-0 w-full`}
				data-name="News">
				<ContentContainer size="wide">
					<div className="flex flex-col gap-12 lg:gap-[80px] items-start max-w-[1280px] relative shrink-0 w-full">
						<div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between relative shrink-0 w-full">
							<div className="flex flex-col gap-4 items-start max-w-[768px] min-w-px relative">
								<p
									className={`${typeStyles.bodyLarge} leading-7 not-italic relative shrink-0 text-[#b3b3b3] whitespace-nowrap`}>
									News Stories
								</p>
								<h2
									className={`${typeStyles.sectionTitleLarge} not-italic relative shrink-0 text-black w-full`}>
									Check out our latest News!
								</h2>
							</div>
							<Button
								href="/news-events"
								size="sm"
								className="relative shrink-0 w-fit text-[#eee]">
								View All
							</Button>
						</div>
						<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 relative shrink-0 w-full">
							{displayNewsItems.map((item) => (
								<article
									key={item.slug ?? item.title}
									className="flex flex-col items-start min-w-px overflow-clip relative rounded-[32px]">
									<div className="aspect-[405/270] relative shrink-0 w-full">
										<img
											alt={item.title}
											className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
											src={item.image}
										/>
									</div>
									<div className="flex flex-col gap-6 items-start py-6 md:py-[32px] relative shrink-0 w-full">
										<div className="flex flex-col gap-4 items-start relative shrink-0 w-full">
											<p
												className={`${typeStyles.caption} not-italic relative shrink-0 text-green-500 whitespace-nowrap`}>
												{item.date}
											</p>
											<h3
												className={`${typeStyles.cardTitleSmall} not-italic relative shrink-0 text-[#0f251b] md:text-2xl w-full`}>
												{item.title}
											</h3>
										</div>
										<a
											className="flex gap-2 items-center justify-center relative shrink-0"
											href={item.href ?? "/news-events"}>
											<span
												className={`${typeStyles.body} leading-normal not-italic relative shrink-0 text-[#916f96] whitespace-nowrap`}>
												Read more
											</span>
											<span className="overflow-clip relative shrink-0 size-6">
												<span className="absolute inset-[25.72%_36.66%_25.88%_35.46%]">
													<HomeSvgs.NewsSvg01 />
												</span>
											</span>
										</a>
									</div>
								</article>
							))}
						</div>
					</div>
				</ContentContainer>
				<div className="absolute inset-[95.35%_0_-0.02%_0]">
					<HomeSvgs.NewsSvg02 />
				</div>
			</div>
			{/* Footer */}
			<Footer />
		</main>
	);
}
