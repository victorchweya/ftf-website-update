import { useEffect, useState } from "react";
import * as SellWithUsSvgs from "../imports/SellWithUs/sellWithUs-inline-svgs";
import {
	Frame26,
	Frame27,
	Frame31,
	Frame35,
	Frame43,
	Group22,
	Group24,
	Group23,
} from "../imports/SellWithUs-3/SellWithUs";
import { Order4, Order5 } from "../imports/BuyFromUsLocal/BuyFromUsLocal";
import svgPaths from "../imports/SellWithUs-3/svg-q1xyqaotrq";
import imgVector from "../../../assets/figma/cacf4fb7f428c5409ba62d0f3bbae7888dd7f455.png?url";
import imgVector1 from "../../../assets/figma/4e759b9c5633458b4d75d12bad0d3db64761078b.png?url";
import { imgGroup } from "../imports/SellWithUs-3/svg-hwxr2";
import { BottomLandscapeSvg } from "../imports/SellWithUs-3/bottom-landscape";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ContentContainer } from "../components/layout/ContentContainer";
import { sectionSpacing } from "../components/layout/spacing";
import { typeStyles } from "../components/layout/typography";
const offeringRows = [
	[
		{
			Header: Frame26,
			body: "Since 2020, we have been giving farmers consistent market access for all fresh value chains.",
		},
		{
			Header: Frame27,
			body: "We pay within three days of accepting the produce.",
		},
		{
			Header: Frame31,
			body: "Whether grade 1, 2 or imperfect, we buy all your product grades, as long as they are fresh.",
		},
	],
	[
		{
			Header: Frame35,
			body: "We work with our FTF aggregators, making us the most reliable partner, also for small quantities.",
		},
		{
			Header: Frame43,
			body: "Our mobile app gives you full transparency into all your orders, including your transaction history.",
		},
	],
];
const supplierProcessSteps = [
	{
		body: "Farm to Feed sources and rescues fresh produce from our farmer networks.",
	},
	{
		body: "Place your order on our website, choose between our offering of first grade and odd-shaped produce",
	},
	{
		body: "All produce gets sorted and graded in our warehouse, making sure you receive top quality",
	},
	{
		body: "We deliver your produce to your doorstep in your specified delivery window. You can also collect your produce from our warehouse",
	},
];
const supplierStories = [
	{
		id: "peter",
		StoryCard: Group22,
	},
	{
		id: "jane-training",
		StoryCard: Group24,
	},
	{
		id: "jane-market-access",
		StoryCard: Group23,
	},
	{
		id: "supplier-community-impact",
		StoryCard: Group24,
	},
];

export default function SellWithUs() {
	const [activeStoryIndex, setActiveStoryIndex] = useState(1);

	const getStoryAtOffset = (offset: number) => {
		const storyCount = supplierStories.length;
		const storyIndex =
			(activeStoryIndex + offset + storyCount) % storyCount;

		return supplierStories[storyIndex];
	};

	const showPreviousStory = () => {
		setActiveStoryIndex((currentIndex) =>
			currentIndex === 0 ? supplierStories.length - 1 : currentIndex - 1,
		);
	};

	const showNextStory = () => {
		setActiveStoryIndex(
			(currentIndex) => (currentIndex + 1) % supplierStories.length,
		);
	};

	useEffect(() => {
		const autoplayTimer = window.setInterval(() => {
			showNextStory();
		}, 3000);

		return () => {
			window.clearInterval(autoplayTimer);
		};
	}, [activeStoryIndex]);

	return (
		<div
			className="bg-olive-100 flex flex-col items-center relative w-full min-h-screen"
			data-name="Sell with us">
			{/* Hero */}
			<div
				className="bg-olive-100 min-h-[600px] md:min-h-[1034px] overflow-clip relative shrink-0 w-full"
				data-name="Wireframe - 44">
				<ContentContainer
					size="wide"
					className="pt-[170px] pb-30 md:pt-[260px]">
					<div className="flex flex-col gap-10 items-center relative">
						<div className="flex flex-col gap-8 md:gap-16 items-center relative shrink-0 px-4">
							<div
								className="absolute h-[36px] left-[6px] top-[124px] w-[633px]"
								data-name="objects"
							/>
							<div
								className={`${typeStyles.heroTitleLarge} not-italic relative shrink-0 text-black text-center w-full`}>
								<p className="mb-0 text-[#0f251b]">
									Making farming
								</p>
								<p className="text-green-500">
									Fair and Rewarding
								</p>
							</div>
							<div
								className={`${typeStyles.body} not-italic relative shrink-0 text-green-500 text-sm md:text-base text-center w-full max-w-[656px]`}>
								<p className="leading-copy mb-0">{`We want to keep your hard work in the human food chain, making sure nothing goes to waste. With us, it's easy to access the market and sell your entire harvest -including the odd-shaped and surplus produce- at fair price.`}</p>
								<p className="leading-copy">
									{` `}
									<br aria-hidden="true" />
									Throughout Kenya, we are the buyer of choice
									for farmers like you.
								</p>
							</div>
						</div>
						<div
							className="h-[70.87px] relative shrink-0 w-[238.96px]"
							data-name="GetItOnGooglePlay_Badge_Web_color_English 1">
							<SellWithUsSvgs.SellWithUsSvg01 />
						</div>
					</div>
				</ContentContainer>
				<div
					className="absolute hidden h-[400px] md:block md:h-[601px] -left-[100px] md:-left-[150px] top-[calc(20%-150px)] md:top-[calc(20%-163.5px)] w-[300px] md:w-[441px] opacity-30 md:opacity-100"
					data-name="Vector">
					<img
						alt=""
						className="absolute block inset-0 max-w-none size-full"
						height="601"
						src={imgVector}
						width="441"
					/>
				</div>
				<div className="absolute hidden h-[400px] md:flex md:h-[601px] items-center justify-center -right-[100px] md:-right-[150px] top-[calc(20%-150px)] md:top-[calc(20%-60.5px)] w-[300px] md:w-[441px] opacity-30 md:opacity-100">
					<div className="-scale-y-100 flex-none rotate-180">
						<div
							className="h-[601px] relative w-[441px]"
							data-name="Vector">
							<img
								alt=""
								className="absolute block inset-0 max-w-none size-full"
								height="601"
								src={imgVector1}
								width="441"
							/>
						</div>
					</div>
				</div>
				<Header />
				<BottomLandscapeSvg className=" w-full max-w-none pointer-events-none select-none" />
			</div>
			{/* Offering */}
			<div
				className="bg-white overflow-clip relative shrink-0 w-full"
				data-name="Wireframe - 55">
				<ContentContainer size="wide" className="py-24">
					<div className="flex flex-col gap-8 items-center relative w-full">
						<div className="flex flex-col gap-8 items-center relative w-full">
							<div className="flex flex-col gap-8 items-center max-w-[1052px] not-italic relative shrink-0 text-center w-full">
								<p
									className={`${typeStyles.heroTitle} relative shrink-0 text-[#0f251b] w-full`}>
									Our Offering
								</p>
								<p
									className={`${typeStyles.body} relative shrink-0 text-orange-500 w-full`}>
									Farmers who supply to Farm to Feed enjoy:
								</p>
							</div>
							<div className="flex flex-col items-start relative shrink-0 w-full">
								<div className="flex flex-col gap-8 items-start relative shrink-0 w-full lg:flex-row">
									{offeringRows[0].map((offering) => (
										<div className="bg-[#fbfafa] relative rounded-[30px] w-full lg:flex-1">
											<div className="flex flex-col gap-[27px] items-start p-[28px] md:p-[48px] relative size-full">
												<offering.Header />
												<p
													className={`${typeStyles.body} relative shrink-0 text-green-500 w-full`}>
													{offering.body}
												</p>
											</div>
										</div>
									))}
								</div>
							</div>
							<div className="flex flex-col items-start max-w-[842px] relative shrink-0 w-full">
								<div className="flex flex-col gap-8 items-start relative shrink-0 w-full md:flex-row">
									{offeringRows[1].map((offering) => (
										<div className="bg-[#fbfafa] relative rounded-[30px] w-full md:flex-1">
											<div className="flex flex-col gap-[27px] items-start p-[28px] md:p-[48px] relative size-full">
												<offering.Header />
												<p
													className={`${typeStyles.body} relative shrink-0 text-green-500 w-full`}>
													{offering.body}
												</p>
											</div>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
				</ContentContainer>
				<div
					className="absolute bg-black flex items-start left-[calc(41.67%+6px)] px-4 py-2 rounded-[40px] top-[1649px]"
					data-name="order">
					<p
						className={`${typeStyles.body} not-italic relative shrink-0 text-[#eee] text-center whitespace-nowrap`}>
						Learn More
					</p>
				</div>
			</div>
			{/* How it works */}
			<div
				className="bg-white  overflow-clip relative shrink-0 w-full"
				data-name="Wireframe - 42">
				<ContentContainer size="wide" className="pb-24">
					<div className="relative lg:min-h-[585px]">
						<div className="flex flex-col items-center max-w-[1052px] w-full mx-auto lg:-translate-x-1/2 lg:absolute lg:left-1/2 lg:top-[75px]">
							<p
								className={`${typeStyles.heroTitle} not-italic relative shrink-0 text-[#0f251b] text-center w-full`}>
								How Does it Work
							</p>
						</div>
					</div>
				</ContentContainer>
			</div>
			{/* Supplier stories */}
			<div
				className="bg-[#f3f5e7] min-h-[840px] overflow-clip relative shrink-0 w-full"
				data-name="Testimonial">
				<div
					className="absolute hidden h-[307.61px] items-center justify-center left-[31px] top-[160px] w-[332.171px] lg:flex"
					style={
						{
							"--transform-inner-width": "1185",
							"--transform-inner-height": "252",
						} as React.CSSProperties
					}>
					<div className="flex-none rotate-[38.46deg]">
						<div
							className="h-[151.494px] overflow-clip relative w-[303.868px]"
							data-name="Capa_1">
							<div
								className="absolute contents inset-[46.94%_-0.01%_5.53%_67.34%]"
								data-name="Group">
								<div
									className="absolute contents inset-[46.94%_-0.01%_5.53%_67.34%]"
									data-name="Group">
									<div
										className="absolute inset-[46.94%_-0.01%_5.53%_67.34%]"
										data-name="Vector">
										<SellWithUsSvgs.SellWithUsSvg45 />
									</div>
									<div
										className="absolute contents inset-[46.94%_-0.01%_5.53%_67.34%]"
										data-name="Clip path group">
										<div
											className="absolute inset-[48.28%_18.79%_8.68%_66.58%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-[-1.17px_-0.16px] mask-size-[122.51px_118.116px]"
											style={{
												maskImage: `url('${imgGroup}')`,
											}}
											data-name="Group">
											<SellWithUsSvgs.SellWithUsSvg46 />
										</div>
									</div>
								</div>
								<div
									className="absolute inset-[53.61%_20.85%_13.05%_69.52%]"
									data-name="Vector">
									<div className="absolute inset-[-0.99%_-1.71%]">
										<SellWithUsSvgs.SellWithUsSvg47 />
									</div>
								</div>
								<div
									className="absolute inset-[57.31%_23.09%_17.53%_71.61%]"
									data-name="Vector">
									<div className="absolute inset-[-1.31%_-3.11%]">
										<SellWithUsSvgs.SellWithUsSvg48 />
									</div>
								</div>
							</div>
							<div
								className="absolute inset-[39.79%_23.6%_0_58.17%]"
								data-name="Group">
								<SellWithUsSvgs.SellWithUsSvg49 />
							</div>
							<div
								className="absolute inset-[0_71.17%_39.23%_0]"
								data-name="Vector">
								<SellWithUsSvgs.SellWithUsSvg50 />
							</div>
							<div
								className="absolute inset-[45.69%_58.11%_38.2%_12.15%]"
								data-name="Vector">
								<SellWithUsSvgs.SellWithUsSvg51 />
							</div>
							<div
								className="absolute inset-[21.92%_56.03%_50.52%_14.04%]"
								data-name="Vector">
								<SellWithUsSvgs.SellWithUsSvg52 />
							</div>
							<div
								className="absolute inset-[22.12%_69.87%_48.92%_6.48%]"
								data-name="Vector">
								<SellWithUsSvgs.SellWithUsSvg53 />
							</div>
							<div
								className="absolute inset-[33.5%_62.34%_50.52%_16.54%]"
								data-name="Vector">
								<SellWithUsSvgs.SellWithUsSvg54 />
							</div>
							<div
								className="absolute inset-[30.28%_27.75%_11.86%_52.01%]"
								data-name="Group">
								<SellWithUsSvgs.SellWithUsSvg55 />
							</div>
							<div
								className="absolute inset-[34.94%_41.44%_7.36%_30.22%]"
								data-name="Vector">
								<SellWithUsSvgs.SellWithUsSvg56 />
							</div>
						</div>
					</div>
				</div>
				<ContentContainer
					size="wide"
					className={`relative z-10 flex flex-col items-center gap-[56px] md:gap-[104px] ${sectionSpacing.default}`}>
					<div
						className={`${typeStyles.sectionTitleLarge} not-italic text-[#0f251b] text-center w-full max-w-[769px] whitespace-pre-wrap`}>
						<p className="leading-normal mb-0">{`Discover how farmers `}</p>
						<p className="leading-normal">
							are transforming communities
						</p>
					</div>
					<div className="relative">
						<div className="relative w-screen overflow-hidden pb-4 pt-2">
							<div className="relative hidden h-[438px] leading-zero md:block">
								{[-1, 0, 1].map((offset) => {
									const story = getStoryAtOffset(offset);
									const StoryCard = story.StoryCard;
									const storyLeft =
										offset === 0
											? "50%"
											: offset < 0
												? "-320px"
												: "calc(100% - 320px)";
									const storyTransform =
										offset === 0
											? "translateX(-50%)"
											: "none";

									return (
										<div
											aria-hidden={offset !== 0}
											className={`absolute top-0 h-[422px] w-[640px] overflow-visible transition-transform duration-300 [&>*]:origin-top-left [&>*]:scale-100 ${offset === 0 ? "" : "hidden lg:block"}`}
											key={`${story.id}-${offset}`}
											style={{
												left: storyLeft,
												transform: storyTransform,
											}}>
											<StoryCard />
										</div>
									);
								})}
							</div>
							<div className="flex justify-center leading-zero md:hidden">
								{(() => {
									const story = getStoryAtOffset(0);
									const StoryCard = story.StoryCard;

									return (
										<div
											className="relative h-[230px] w-[320px] overflow-visible [&>*]:origin-top-left [&>*]:scale-50"
											key={story.id}>
											<StoryCard />
										</div>
									);
								})()}
							</div>
						</div>
						<div className="relative z-20 mt-2 flex items-center justify-center gap-4">
							<button
								aria-label="Show previous farmer story"
								className="group rounded-[40px] bg-transparent border-0 p-0 transition-transform duration-200 hover:-translate-y-0.5 focus-visible:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#747c50]"
								onClick={showPreviousStory}
								type="button">
								<Order4 />
							</button>
							<button
								aria-label="Show next farmer story"
								className="group rounded-[40px] bg-transparent border-0 p-0 transition-transform duration-200 hover:-translate-y-0.5 focus-visible:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#747c50]"
								onClick={showNextStory}
								type="button">
								<Order5 />
							</button>
						</div>
					</div>
				</ContentContainer>
				<div
					className="absolute hidden h-[137.947px] items-center justify-center left-[calc(83.33%-39px)] top-[176px] w-[206.385px] lg:flex"
					style={
						{
							"--transform-inner-width": "1185",
							"--transform-inner-height": "21",
						} as React.CSSProperties
					}>
					<div className="flex-none rotate-[-15.41deg]">
						<div
							className="h-[91px] relative w-[189px]"
							data-name="Capa_1">
							<SellWithUsSvgs.SellWithUsSvg57 />
						</div>
					</div>
				</div>
				<div
					className="absolute hidden h-[858px] items-center justify-center left-[-2.92%] right-[-1.39%] top-[-767px] lg:flex"
					style={{
						containerType: "size",
					}}>
					<div className="-scale-x-100 flex-none h-[100cqw] rotate-90 w-[100cqh]">
						<div className="relative size-full" data-name="Vector">
							<SellWithUsSvgs.SellWithUsSvg58 />
						</div>
					</div>
				</div>
				<div
					className="absolute hidden h-[203.64px] items-center justify-center left-[143px] top-[638px] w-[245.05px] lg:flex"
					style={
						{
							"--transform-inner-width": "1185",
							"--transform-inner-height": "105",
						} as React.CSSProperties
					}>
					<div className="flex-none rotate-[34.14deg]">
						<div
							className="h-[83.796px] overflow-clip relative w-[239.258px]"
							data-name="Capa_1">
							<div
								className="absolute inset-[6.94%_64.93%_13.37%_0.68%]"
								data-name="Group">
								<SellWithUsSvgs.SellWithUsSvg59 />
							</div>
							<div
								className="absolute inset-[5.45%_47.3%_7.78%_26.47%]"
								data-name="Group">
								<SellWithUsSvgs.SellWithUsSvg60 />
							</div>
							<div
								className="absolute inset-[0_28.06%_2.86%_40.72%]"
								data-name="Group">
								<SellWithUsSvgs.SellWithUsSvg61 />
							</div>
							<div
								className="absolute inset-[4.39%_13.86%_2.28%_57.71%]"
								data-name="Group">
								<SellWithUsSvgs.SellWithUsSvg62 />
							</div>
							<div
								className="absolute inset-[0_0.75%_24.42%_74.76%]"
								data-name="Group">
								<SellWithUsSvgs.SellWithUsSvg63 />
							</div>
						</div>
					</div>
				</div>
				<div
					className="absolute hidden h-[146px] left-[calc(75%-51px)] top-[659px] w-[209px] lg:block"
					data-name="Capa_1">
					<SellWithUsSvgs.SellWithUsSvg64 />
				</div>
			</div>
			{/* CTA */}
			<div
				className="bg-white relative shrink-0 w-full"
				data-name="Wireframe - 36">
				<ContentContainer
					size="wide"
					className={`flex justify-center ${sectionSpacing.cta}`}>
					<div
						className="bg-[#4c352b] min-h-[520px] max-w-[1216px] overflow-clip relative rounded-4xl md:rounded-[40px] w-full flex items-center justify-center p-[28px] md:p-10"
						data-name="Wireframe - 38">
						<div className="absolute h-[265.41px] left-[calc(83.33%-80.33px)] opacity-28 top-[328px] w-[361.514px]">
							<div
								className="absolute bottom-0 h-[265.41px] right-0 w-[361.514px]"
								data-name="Group">
								<SellWithUsSvgs.SellWithUsSvg65 />
							</div>
						</div>
						<div className="absolute h-[423.454px] left-[139px] opacity-28 top-[267px] w-[381.093px]">
							<div
								className="absolute bottom-0 flex h-[423.454px] items-center justify-center left-0 w-[381.093px]"
								style={
									{
										"--transform-inner-width": "1185",
										"--transform-inner-height": "21",
									} as React.CSSProperties
								}>
								<div className="flex-none rotate-[-29.12deg]">
									<div
										className="h-[350.48px] relative w-[240.979px]"
										data-name="Group">
										<SellWithUsSvgs.SellWithUsSvg66 />
									</div>
								</div>
							</div>
						</div>
						<div className="absolute h-[397.291px] left-[-95px] opacity-28 top-[-21px] w-[375.304px]">
							<div
								className="absolute flex h-[397.291px] items-center justify-center left-0 top-0 w-[375.304px]"
								style={
									{
										"--transform-inner-width": "1185",
										"--transform-inner-height": "21",
									} as React.CSSProperties
								}>
								<div className="flex-none rotate-[42.05deg]">
									<div
										className="h-[424.6px] relative w-[122.431px]"
										data-name="Group">
										<SellWithUsSvgs.SellWithUsSvg67 />
									</div>
								</div>
							</div>
						</div>
						<div className="absolute h-[221.381px] left-[calc(75%+14px)] opacity-28 top-[-59px] w-[329.65px]">
							<div
								className="absolute flex h-[221.381px] items-center justify-center right-0 top-0 w-[329.65px]"
								style={
									{
										"--transform-inner-width": "1185",
										"--transform-inner-height": "21",
									} as React.CSSProperties
								}>
								<div className="flex-none rotate-[-76.09deg]">
									<div
										className="h-[301.627px] relative w-[153.391px]"
										data-name="Group">
										<SellWithUsSvgs.SellWithUsSvg68 />
									</div>
								</div>
							</div>
						</div>
						<div className="flex flex-col gap-10 items-center relative rounded-[40px] z-10">
							<p
								className={`${typeStyles.sectionTitleLarge} not-italic relative shrink-0 text-yellow-200 text-center w-full max-w-[800px]`}>
								Do you have questions?
							</p>
							<div
								className={`${typeStyles.bodyLarge} not-italic relative shrink-0 text-center text-white w-full max-w-148 whitespace-pre-wrap`}>
								<p className="mb-0">
									<span className="leading-copy">{`Do you have questions or would like to register as a farmer with us? Download the Farm to Feed Supplier App from the `}</span>
									<span className="[text-decoration-skip-ink:none] decoration-solid leading-copy underline">
										Google Play Store
									</span>
									<span className="leading-copy">{` or contact our sourcing team:`}</span>
								</p>
								<p>
									<span className="leading-copy">{` `}</span>
									<span
										className={`${typeStyles.body} [text-decoration-skip-ink:none] decoration-solid font-medium not-italic text-orange-500 underline`}>
										0723 740 537
									</span>
								</p>
							</div>
							<div
								className="h-[70.87px] relative shrink-0 w-[238.96px]"
								data-name="GetItOnGooglePlay_Badge_Web_color_English 1">
								<SellWithUsSvgs.SellWithUsSvg69 />
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
