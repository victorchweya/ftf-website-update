import { useEffect, useState } from "react";
import * as KenyanBuyersSvgs from "../imports/BuyFromUsLocal/kenyanBuyers-inline-svgs";
import {
	Order4,
	Frame6,
	Order5,
} from "../imports/BuyFromUsLocal/BuyFromUsLocal";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Button } from "../components/Button";
import { ContentContainer } from "../components/layout/ContentContainer";
import svgPaths from "../imports/BuyFromUsLocal-1/svg-d7gbia4w81";
import browseIcon from "../imports/BuyFromUsLocal/browse.svg?url";
import connectIcon from "../imports/BuyFromUsLocal/connect.svg?url";
import deliveryLocationsIcon from "../imports/BuyFromUsLocal/deliverylocations.svg?url";
import enjoyIcon from "../imports/BuyFromUsLocal/enjoy.svg?url";
import orderIcon from "../imports/BuyFromUsLocal/order.svg?url";
import { imgGroup } from "../imports/BuyFromUsLocal-1/svg-efcb2";
import { BorderBottomKenyanBuyersSvg } from "../imports/BuyFromUsLocal-1/border-bottom-kenyan-buyers";
import { BorderTopKenyanBuyersSvg } from "../imports/BuyFromUsLocal-1/border-top-kenyan-buyers";
import { sectionSpacing } from "../components/layout/spacing";
import { typeStyles } from "../components/layout/typography";
const partnerProductCategories = [
	["Dairy", "Cereals, grains & pulses", "Tea & Coffee"],
	["spices", "Snacks"],
];
const localBuyerHowItWorksSteps = [
	{
		body: "Our Sales team is ready to speak with you",
		color: "#8C98EE",
		icon: connectIcon,
		textColor: "#e6e6e6",
		title: "Connect with sales",
	},
	{
		body: "Explore our wide range of fresh and dry products online",
		color: "#A35380",
		icon: browseIcon,
		textColor: "#e6e6e6",
		title: "Browse the shop",
	},
	{
		body: "Select your delivery window and checkout your cart",
		color: "#85A687",
		icon: orderIcon,
		textColor: "#e6e6e6",
		title: "Place Order",
	},
	{
		body: "Receive fresh, high quality ingredients directly to your doorstep",
		color: "#EBC194",
		icon: enjoyIcon,
		textColor: "#2b1a08",
		title: "Enjoy Delivery",
	},
];
const localBuyerTestimonials = [
	{
		quote: "Farm to Feed keeps our kitchen stocked with fresh produce while helping us reduce waste across our weekly menu planning.",
		name: "Amina Odhiambo",
		company: "Nairobi Catering Co.",
	},
	{
		quote: "The quality is consistent, the delivery team is reliable, and our customers love knowing their meals support local farmers.",
		name: "Brian Mwangi",
		company: "Green Plate Bistro",
	},
	{
		quote: "We can source the volumes we need without compromising on freshness, price, or the impact we want our business to make.",
		name: "Lilian Wanjiku",
		company: "Mara Hospitality Group",
	},
];

export default function KenyanBuyers() {
	const [activeTestimonialIndex, setActiveTestimonialIndex] = useState(0);
	const activeTestimonial =
		localBuyerTestimonials[activeTestimonialIndex] ??
		localBuyerTestimonials[0];

	const showPreviousTestimonial = () => {
		setActiveTestimonialIndex((currentIndex) =>
			currentIndex === 0
				? localBuyerTestimonials.length - 1
				: currentIndex - 1,
		);
	};

	const showNextTestimonial = () => {
		setActiveTestimonialIndex(
			(currentIndex) =>
				(currentIndex + 1) % localBuyerTestimonials.length,
		);
	};

	useEffect(() => {
		const autoplayTimer = window.setInterval(() => {
			showNextTestimonial();
		}, 3000);

		return () => {
			window.clearInterval(autoplayTimer);
		};
	}, [activeTestimonialIndex]);

	return (
		<div
			className="bg-white flex flex-col items-start relative w-full"
			data-name="Buy from us - local">
			{/* Hero */}
			<div
				className="bg-yellow-200 min-h-[600px] md:min-h-[800px] lg:min-h-[926px] overflow-clip relative shrink-0 w-full"
				data-name="Wireframe - 53">
				<div
					className="absolute hidden md:flex h-[400px] lg:h-[620.8px] items-center justify-center right-[-10%] lg:right-[-24.34%] lg:left-[79.24%] top-[200px] md:top-[352px] opacity-50 lg:opacity-100"
					style={{
						containerType: "size",
					}}>
					<div className="flex-none h-[100cqw] rotate-90 w-[100cqh]">
						<div className="relative size-full">
							<KenyanBuyersSvgs.KenyanBuyersSvg01 />
						</div>
					</div>
				</div>
				<Header />
				<ContentContainer
					size="wide"
					className="pt-[160px] pb-[96px] md:pt-[211px] md:pb-30">
					<div className="grid gap-12 items-center lg:grid-cols-[minmax(0,1fr)_minmax(0,563px)]">
						<div className="flex flex-col gap-10 items-start relative">
							<div className="flex flex-col gap-10 items-start relative shrink-0">
								<div
									className="absolute hidden h-[14px] left-0 top-[160px] w-[443px] md:block"
									data-name="objects">
									<KenyanBuyersSvgs.KenyanBuyersSvg02 />
								</div>
								<p
									className={`${typeStyles.heroTitleLarge} not-italic relative shrink-0 text-[#0f251b] w-full max-w-[519px]`}>
									<span className="leading-tight">
										Good produce,
										<br aria-hidden="true" />
									</span>
									<span className="leading-tight text-green-500">
										good margins,
									</span>
									<span className="leading-tight">
										<br aria-hidden="true" />
										even better environment
									</span>
								</p>
								<p
									className={`${typeStyles.bodyLead} font-medium italic relative shrink-0 text-orange-500 w-full max-w-[515px]`}>{`"Mboga bora, faida bora, mazingira bora zaidi"`}</p>
							</div>
							<div
								className={`${typeStyles.body} leading-zero not-italic relative shrink-0 text-green-500 w-full max-w-[515px] whitespace-pre-wrap`}>
								<p className="mb-0">
									<span className="leading-copy">
										Built with farmers at the centre, our
										solution brings oddly good products to
										businesses, retailers, schools, feeding
										programmes, and event companies.
										Reliable quality, healthy margins, and
										less waste — all in one smarter supply
										chain.
									</span>
									<span className="font-sans font-medium leading-copy not-italic">{` `}</span>
								</p>
								<p className="leading-copy mb-0">​</p>
								{/* <p className="font-sans font-medium leading-copy">
									Ready to bite into freshness?
								</p> */}
							</div>
						</div>
						<div className="flex flex-col items-center relative shrink-0 w-full max-w-[563px]">
							<div className="bg-white relative rounded-[30px] shrink-0 w-full">
								<div
									aria-hidden="true"
									className="absolute border border-[#f7f7f7] border-solid inset-0 pointer-events-none rounded-[30px]"
								/>
								<div className="flex flex-col gap-8 items-start p-6 md:p-[40px] relative size-full">
									<div className="flex flex-col gap-8 items-start relative shrink-0 w-full">
										<div className="flex items-center relative shrink-0">
											<p
												className={`${typeStyles.cardTitle} font-medium not-italic relative shrink-0 text-[#0f251b] w-[210px]`}>
												Buy from us
											</p>
										</div>
										<p
											className={`${typeStyles.body} not-italic relative shrink-0 text-green-500 w-full`}>
											Fill out the form and our sales team
											will contact you shortly.
										</p>
									</div>
									<div className="flex flex-col gap-6 items-start relative shrink-0 w-full">
										<div
											className="flex items-start relative shrink-0 w-full"
											data-name="Inputs">
											<div
												className="flex flex-col gap-2 items-start relative w-full sm:flex-[1_0_0] sm:min-w-px"
												data-name="Input">
												<p
													className={`${typeStyles.caption} not-italic relative shrink-0 text-[#0f251b] w-full`}>
													Your Name *
												</p>
												<div
													className="bg-[#fbfafa] h-12 relative rounded-[35px] shrink-0 w-full"
													data-name="Text input">
													<div
														aria-hidden="true"
														className="absolute border border-[#e6e6e6] border-solid inset-[-1px] pointer-events-none rounded-[36px]"
													/>
													<div className="flex flex-row items-center size-full">
														<div className="flex items-center p-[12px] relative size-full" />
													</div>
												</div>
											</div>
										</div>
										<div
											className="flex flex-col gap-4 items-start relative shrink-0 w-full sm:flex-row"
											data-name="Inputs">
											<div
												className="flex flex-col gap-2 items-start relative w-full sm:flex-[1_0_0] sm:min-w-px"
												data-name="Input">
												<p
													className={`${typeStyles.caption} not-italic relative shrink-0 text-[#0f251b] w-full`}>
													Your Email *
												</p>
												<div
													className="bg-[#fbfafa] h-12 relative rounded-[24px] shrink-0 w-full"
													data-name="Text input">
													<div
														aria-hidden="true"
														className="absolute border border-[#e6e6e6] border-solid inset-[-1px] pointer-events-none rounded-[25px]"
													/>
													<div className="flex flex-row items-center size-full">
														<div className="flex gap-2 items-center p-[12px] relative size-full">
															<div
																className="overflow-clip relative shrink-0 size-6"
																data-name="credit_card">
																<div
																	className="absolute left-[4px] size-[16px] top-[4px]"
																	data-name="prime:envelope">
																	<KenyanBuyersSvgs.KenyanBuyersSvg03 />
																</div>
															</div>
															<p
																className={`flex-[1_0_0] ${typeStyles.caption} font-normal min-w-px not-italic relative text-[#808080]`}>
																email@example.com
															</p>
														</div>
													</div>
												</div>
											</div>
											<div
												className="flex flex-col gap-2 items-start relative w-full sm:flex-[1_0_0] sm:min-w-px"
												data-name="Input">
												<p
													className={`${typeStyles.caption} not-italic relative shrink-0 text-[#0f251b] w-full`}>
													Phone Number *
												</p>
												<div
													className="bg-[#fbfafa] h-12 relative rounded-[24px] shrink-0 w-full"
													data-name="Text input">
													<div
														aria-hidden="true"
														className="absolute border border-[#e6e6e6] border-solid inset-[-1px] pointer-events-none rounded-[25px]"
													/>
													<div className="flex flex-row items-center size-full">
														<div className="flex items-center p-[12px] relative size-full" />
													</div>
												</div>
											</div>
										</div>
										<div
											className="flex flex-col gap-4 items-start relative shrink-0 w-full sm:flex-row"
											data-name="Inputs">
											<div
												className="flex flex-col gap-2 items-start relative w-full sm:flex-[1_0_0] sm:min-w-px"
												data-name="Input">
												<p
													className={`${typeStyles.caption} not-italic relative shrink-0 text-[#0f251b] w-full`}>
													Company Name *
												</p>
												<div
													className="bg-[#fbfafa] h-12 relative rounded-[24px] shrink-0 w-full"
													data-name="Text input">
													<div
														aria-hidden="true"
														className="absolute border border-[#e6e6e6] border-solid inset-[-1px] pointer-events-none rounded-[25px]"
													/>
													<div className="flex flex-row items-center size-full">
														<div className="flex items-center p-[12px] relative size-full" />
													</div>
												</div>
											</div>
											<div
												className="flex flex-col gap-2 items-start relative w-full sm:flex-[1_0_0] sm:min-w-px"
												data-name="Input">
												<p
													className={`${typeStyles.caption} not-italic relative shrink-0 text-[#0f251b] w-full`}>
													Job Title
												</p>
												<div
													className="bg-[#fbfafa] h-12 relative rounded-[24px] shrink-0 w-full"
													data-name="Text input">
													<div
														aria-hidden="true"
														className="absolute border border-[#e6e6e6] border-solid inset-[-1px] pointer-events-none rounded-[25px]"
													/>
													<div className="flex flex-row items-center size-full">
														<div className="flex items-center p-[12px] relative size-full" />
													</div>
												</div>
											</div>
										</div>
										<div
											className="flex flex-col gap-2 items-start relative shrink-0 w-full"
											data-name="Input">
											<p
												className={`${typeStyles.caption} not-italic relative shrink-0 text-[#0f251b] w-full`}>
												Business Category *
											</p>
											<div
												className="bg-[#fbfafa] relative rounded-[24px] shrink-0 w-full"
												data-name="Select">
												<div
													aria-hidden="true"
													className="absolute border border-[#e6e6e6] border-solid inset-[-1px] pointer-events-none rounded-[25px]"
												/>
												<div className="flex flex-row items-center size-full">
													<div className="flex gap-4 items-center p-[12px] relative size-full">
														<p
															className={`flex-[1_0_0] ${typeStyles.caption} font-normal min-w-px not-italic relative text-green-500`}>
															Select one...
														</p>
														<div
															className="overflow-clip relative shrink-0 size-6"
															data-name="keyboard_arrow_down">
															<div
																className="absolute inset-[35.51%_25.93%_36.66%_25.88%]"
																data-name="Vector">
																<KenyanBuyersSvgs.KenyanBuyersSvg04 />
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
										<Button
											type="button"
											size="md"
											className="relative shrink-0 w-full text-[#eee]"
											data-name="order">
											Get in touch
										</Button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</ContentContainer>
			</div>
			{/* Products */}
			<div
				className="bg-white min-h-[600px] md:min-h-[900px] overflow-clip relative shrink-0 w-full"
				data-name="Wireframe - 11">
				<div
					className="absolute flex inset-[-13.58%_-0.63%_91.95%_-3.75%] items-center justify-center"
					style={{
						containerType: "size",
					}}>
					<div className="flex-none h-[100cqw] rotate-90 w-[100cqh]">
						<div className="relative size-full" data-name="Vector">
							<KenyanBuyersSvgs.KenyanBuyersSvg05 />
						</div>
					</div>
				</div>
				<ContentContainer
					size="wide"
					className="relative z-10 flex flex-col items-center gap-12 pt-[120px] pb-[96px] md:pt-[164px] md:pb-30">
					<div className="flex flex-col gap-16 items-center relative w-full max-w-7xl">
						<div className="flex flex-col gap-8 items-center max-w-[1052px] not-italic relative shrink-0 text-center w-full">
							<p
								className={`${typeStyles.sectionTitleLarge} relative shrink-0 text-[#0f251b] w-full`}>
								Why choose Farm to Feed?
							</p>
							<p
								className={`${typeStyles.body} relative shrink-0 text-green-500 w-full`}>
								We are reshaping the food supply chain to
								benefit everyone involved while protecting our
								planet.
							</p>
						</div>
						<div className="flex flex-col gap-8 items-start relative shrink-0 w-full">
							<div className="flex flex-col items-start relative shrink-0 w-full">
								<div className="flex flex-col gap-8 items-start relative shrink-0 w-full lg:flex-row">
									<div className="bg-[#fbfafa] relative rounded-[30px] w-full lg:flex-1">
										<div className="flex flex-col gap-[27px] items-start p-[40px] relative size-full">
											<div className="flex flex-col gap-8 items-start justify-center relative shrink-0">
												<div
													className="h-[64px] relative shrink-0 w-[65.697px]"
													data-name="Group">
													<KenyanBuyersSvgs.KenyanBuyersSvg06 />
												</div>
												<p
													className={`${typeStyles.cardTitle} not-italic relative shrink-0 text-[#0f251b]`}>
													One Stop Shop
												</p>
											</div>
											<p
												className={`${typeStyles.body} not-italic relative shrink-0 text-green-500 w-full`}>
												All you need to run your food
												business. From fresh ingredients
												to dry goods and our
												Ready-to-Use product range!
											</p>
										</div>
									</div>
									<div className="bg-[#fbfafa] relative rounded-[30px] w-full lg:flex-1">
										<div className="flex flex-col gap-[27px] items-start p-[40px] relative size-full">
											<div className="flex flex-col gap-8 items-start justify-center relative shrink-0">
												<div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-zero place-items-start relative shrink-0">
													<div
														className="col-1 h-[64px] ml-0 mt-0 relative row-1 w-[65.697px]"
														data-name="Group">
														<KenyanBuyersSvgs.KenyanBuyersSvg07 />
													</div>
													<div
														className="col-1 h-[33.97px] ml-[16.72px] mt-[14.15px] relative row-1 w-[33.448px]"
														data-name="Capa_1">
														<KenyanBuyersSvgs.KenyanBuyersSvg08 />
													</div>
												</div>
												<p
													className={`${typeStyles.cardTitle} not-italic relative shrink-0 text-[#0f251b]`}>
													Best Pricing
												</p>
											</div>
											<p
												className={`${typeStyles.body} not-italic relative shrink-0 text-green-500 w-full`}>
												Pay less, expect better and grow
												your margins.
											</p>
										</div>
									</div>
									<div className="bg-[#fbfafa] relative rounded-[30px] w-full lg:flex-1">
										<div className="flex flex-col gap-[27px] items-start p-[40px] relative size-full">
											<div className="flex flex-col gap-8 items-start justify-center relative shrink-0">
												<div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-zero place-items-start relative shrink-0">
													<div
														className="col-1 h-[64px] ml-0 mt-0 relative row-1 w-[65.697px]"
														data-name="Group">
														<KenyanBuyersSvgs.KenyanBuyersSvg09 />
													</div>
													<div
														className="col-1 h-[32.925px] ml-[15.68px] mt-[13.63px] relative row-1 w-[33.97px]"
														data-name="Capa_1">
														<KenyanBuyersSvgs.KenyanBuyersSvg10 />
													</div>
												</div>
												<p
													className={`${typeStyles.cardTitle} not-italic relative shrink-0 text-[#0f251b]`}>
													Full Harvest
												</p>
											</div>
											<p
												className={`${typeStyles.body} not-italic relative shrink-0 text-green-500 w-full`}>
												Choose from our Grade Rescue or
												Grade 1 produce - we procure the
												full harvest from farmers so
												that nothing goes to waste.
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="flex flex-col items-start relative shrink-0 w-full">
								<div className="flex flex-col gap-8 items-start relative shrink-0 w-full lg:flex-row">
									<div className="bg-[#fbfafa] relative rounded-[30px] w-full lg:flex-1">
										<div className="flex flex-col gap-[27px] items-start p-[40px] relative size-full">
											<div className="flex flex-col gap-8 items-start justify-center relative shrink-0">
												<div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-zero place-items-start relative shrink-0">
													<div
														className="col-1 h-[64px] ml-0 mt-0 relative row-1 w-[65.697px]"
														data-name="Group">
														<KenyanBuyersSvgs.KenyanBuyersSvg11 />
													</div>
													<div
														className="col-1 h-[31.357px] ml-[20.9px] mt-[16.77px] relative row-1 w-[25.086px]"
														data-name="Capa_1">
														<KenyanBuyersSvgs.KenyanBuyersSvg12 />
													</div>
												</div>
												<p
													className={`${typeStyles.cardTitle} not-italic relative shrink-0 text-[#0f251b]`}>
													Customer Service
												</p>
											</div>
											<p
												className={`${typeStyles.body} leading-zero not-italic relative shrink-0 text-green-500 w-full`}>
												<span className="leading-copy">{`If your delivery is anything less than supreme, we'll fix it. Connect with our team on WhatsApp or call us at `}</span>
												<span className="font-sans font-medium leading-copy">
													0795851756.
												</span>
											</p>
										</div>
									</div>
									<div className="bg-[#fbfafa] relative rounded-[30px] w-full lg:flex-1">
										<div className="flex flex-col gap-[27px] items-start p-[40px] relative size-full">
											<div className="flex flex-col gap-8 items-start justify-center relative shrink-0">
												<div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-zero place-items-start relative shrink-0">
													<div
														className="col-1 h-[64px] ml-0 mt-0 relative row-1 w-[65.697px]"
														data-name="Group">
														<KenyanBuyersSvgs.KenyanBuyersSvg13 />
													</div>
													<div
														className="col-1 h-[32.402px] ml-[16.72px] mt-[13.63px] relative row-1 w-[35.016px]"
														data-name="Capa_1">
														<KenyanBuyersSvgs.KenyanBuyersSvg14 />
													</div>
												</div>
												<p
													className={`${typeStyles.cardTitle} not-italic relative shrink-0 text-[#0f251b]`}>
													Measurable Impact
												</p>
											</div>
											<p
												className={`${typeStyles.body} not-italic relative shrink-0 text-green-500 w-full`}>
												For every kg of odd-looking
												produce you buy, you reduce your
												carbon footprint and directly
												boost farmer incomes.
											</p>
										</div>
									</div>
									<div className="bg-[#fbfafa] relative rounded-[30px] w-full lg:flex-1">
										<div className="flex flex-col gap-[27px] items-start p-[40px] relative size-full">
											<div className="flex flex-col gap-8 items-start justify-center relative shrink-0">
												<div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-zero place-items-start relative shrink-0">
													<div
														className="col-1 h-[64px] ml-0 mt-0 relative row-1 w-[65.697px]"
														data-name="Group">
														<KenyanBuyersSvgs.KenyanBuyersSvg15 />
													</div>
													<div className="col-1 h-[39.336px] ml-[15.15px] mt-[11.68px] relative row-1 w-[33.972px]">
														<KenyanBuyersSvgs.KenyanBuyersSvg16 />
													</div>
												</div>
												<p
													className={`${typeStyles.cardTitle} not-italic relative shrink-0 text-[#0f251b]`}>
													Flexible Delivery
												</p>
											</div>
											<p
												className={`${typeStyles.body} not-italic relative shrink-0 text-green-500 w-full`}>{`Choose your delivery date and window and we'll get freshness delivered to you. On Time. In Full.`}</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</ContentContainer>
			</div>
			{/* Contact */}
			<div
				className="bg-[#0f251b] min-h-[600px] md:min-h-[900px] lg:min-h-[1085px] overflow-clip relative shrink-0 w-full"
				data-name="Wireframe - 51">
				<div
					className="absolute bottom-[814.78px] hidden h-[223.22px] items-center justify-center right-[-330.48px] w-[838.475px] lg:flex"
					style={
						{
							"--transform-inner-width": "1185",
							"--transform-inner-height": "21",
						} as React.CSSProperties
					}>
					<div className="-scale-y-100 flex-none rotate-[-93.75deg]">
						<div
							className="h-[829.172px] relative w-[169.318px]"
							data-name="Vector">
							<KenyanBuyersSvgs.KenyanBuyersSvg17 />
						</div>
					</div>
				</div>
				<div
					className="absolute bottom-[520.68px] hidden h-[169.318px] items-center justify-center left-[-548px] w-[829.172px] lg:flex"
					style={
						{
							"--transform-inner-width": "1185",
							"--transform-inner-height": "21",
						} as React.CSSProperties
					}>
					<div className="-rotate-90 flex-none">
						<div
							className="h-[829.172px] relative w-[169.318px]"
							data-name="Vector">
							<KenyanBuyersSvgs.KenyanBuyersSvg18 />
						</div>
					</div>
				</div>
				<div
					className="-translate-x-1/2 absolute hidden h-[227.965px] items-center justify-center left-[calc(45.83%+19.92px)] top-[1426.15px] w-[486.457px] lg:flex"
					style={
						{
							"--transform-inner-width": "1185",
							"--transform-inner-height": "21",
						} as React.CSSProperties
					}>
					<div className="flex-none rotate-[111.36deg] scale-y-99 skew-x-[9.89deg]">
						<div
							className="h-[440.366px] relative w-[150.712px]"
							data-name="Group">
							<KenyanBuyersSvgs.KenyanBuyersSvg19 />
						</div>
					</div>
				</div>
				<BorderTopKenyanBuyersSvg
					className="absolute inset-x-0 top-0 w-full max-w-none pointer-events-none select-none"
					fill="white"
				/>
				<ContentContainer size="wide" className="relative z-10">
					<div className="grid gap-12 pt-[140px] pb-[96px] md:pt-[200px] lg:grid-cols-2 lg:items-start lg:pt-[241px] lg:pb-30">
						<div className="flex flex-col gap-16 items-start relative w-full max-w-[624px]">
							<div className="flex flex-col items-start relative shrink-0 w-full">
								<p
									className={`${typeStyles.sectionTitleLarge} not-italic relative shrink-0 text-[#f5e091] w-full`}>
									Your One Stop Shop
								</p>
							</div>
							<div className="flex flex-col gap-8 items-start relative shrink-0">
								<div className="flex gap-[15px] items-start relative shrink-0 w-full max-w-[535px]">
									<div className="relative shrink-0 size-[56px]">
										<KenyanBuyersSvgs.KenyanBuyersSvg20 />
										<p
											className={`-translate-x-1/2 absolute ${typeStyles.body} font-semibold leading-normal left-1/2 not-italic text-[#eff6ef] text-center top-[calc(50%-6px)] whitespace-nowrap`}>
											1
										</p>
									</div>
									<div className="flex flex-[1_0_0] flex-col gap-6 items-start min-w-px relative self-stretch">
										<div className="flex flex-col gap-4 items-start leading-normal relative shrink-0 w-full">
											<p
												className={`${typeStyles.cardTitle} font-medium not-italic relative shrink-0 text-[#fbf3e9] w-full`}>
												Fresh Produce,
											</p>
											<p
												className={`${typeStyles.serifLead} italic relative shrink-0 text-[#f5e091] w-full`}>{`From our farmers to you `}</p>
										</div>
										<p
											className={`${typeStyles.body} not-italic relative shrink-0 text-[#f6eef2] w-full`}>{`We deliver the regular grade and our impactful and affordable grade rescue. `}</p>
									</div>
								</div>
								<div className="flex gap-[15px] items-start relative shrink-0 w-full max-w-[535px]">
									<div className="relative shrink-0 size-[56px]">
										<KenyanBuyersSvgs.KenyanBuyersSvg21 />
										<p
											className={`-translate-x-1/2 absolute ${typeStyles.body} font-semibold leading-normal left-[calc(50%+0.5px)] not-italic text-[#eff6ef] text-center top-[calc(50%-6px)] whitespace-nowrap`}>
											2
										</p>
									</div>
									<div className="flex flex-[1_0_0] flex-col gap-6 items-start min-w-px relative self-stretch">
										<div className="flex flex-col gap-4 items-start leading-normal relative shrink-0 w-full">
											<p
												className={`${typeStyles.cardTitle} font-medium not-italic relative shrink-0 text-[#fbf3e9] w-full`}>
												Prepped and Ready to Use,
											</p>
											<p
												className={`${typeStyles.serifLead} italic relative shrink-0 text-[#f5e091] w-full`}>
												Made by us
											</p>
										</div>
										<p
											className={`${typeStyles.body} not-italic relative shrink-0 text-[#f6eef2] w-full`}>
											We cut, peel, slice and process
											fresh produce so you don’t have to.
											Save time and storage space by
											ordering our ready to use products.
										</p>
									</div>
								</div>
								<div className="flex gap-[15px] items-start relative shrink-0 w-full max-w-[535px]">
									<div className="relative shrink-0 size-[56px]">
										<KenyanBuyersSvgs.KenyanBuyersSvg22 />
										<p
											className={`-translate-x-1/2 absolute ${typeStyles.body} font-semibold leading-normal left-[calc(50%+0.5px)] not-italic text-[#eff6ef] text-center top-[calc(50%-6px)] whitespace-nowrap`}>
											3
										</p>
									</div>
									<div className="flex flex-[1_0_0] flex-col gap-6 items-start min-w-px relative self-stretch">
										<div className="flex flex-col gap-4 items-start leading-normal relative shrink-0 w-full">
											<p
												className={`${typeStyles.cardTitle} font-medium not-italic relative shrink-0 text-[#fbf3e9] w-full`}>
												Products from Partners
											</p>
											<p
												className={`${typeStyles.serifLead} italic relative shrink-0 text-[#f5e091] w-full`}>
												Made by us
											</p>
										</div>
										<p
											className={`${typeStyles.body} not-italic relative shrink-0 text-[#f6eef2] w-full`}>{`We offer a wide variety of product categories from top brands. `}</p>
										<div className="flex flex-col gap-[12px] items-start relative shrink-0 w-full">
											<div className="flex flex-col gap-[12px] items-start relative shrink-0 w-full">
												{partnerProductCategories.map(
													(row, index) => (
														<div
															className={`flex flex-wrap items-start relative shrink-0 ${index === 0 ? "gap-[12px]" : "gap-4"}`}
															key={index}>
															{row.map(
																(category) => (
																	<div className="bg-[#122c20] flex items-start px-4 py-2 relative rounded-[40px] shrink-0">
																		<div
																			aria-hidden="true"
																			className="absolute border border-[#0f251b] border-solid inset-0 pointer-events-none rounded-[40px]"
																		/>
																		<p
																			className={`${typeStyles.body} relative shrink-0 text-[#f7f7f7] text-center whitespace-nowrap`}>
																			{
																				category
																			}
																		</p>
																	</div>
																),
															)}
														</div>
													),
												)}
											</div>
										</div>
									</div>
								</div>
							</div>
							<div
								className="flex gap-8 items-start justify-center overflow-clip relative shrink-0 w-full"
								data-name="Tab Horizontal">
								<div
									className="flex items-center justify-center relative self-stretch shrink-0 w-0"
									style={
										{
											containerType: "size",
											"--transform-inner-width": "1185",
											"--transform-inner-height": "21",
										} as React.CSSProperties
									}>
									<div className="flex-none rotate-90 w-[100cqh]">
										<div
											className="h-0 relative w-full"
											data-name="Border">
											<div className="absolute inset-[-2px_0_0_0]">
												<KenyanBuyersSvgs.KenyanBuyersSvg23 />
											</div>
										</div>
									</div>
								</div>
								<div
									className="flex flex-[1_0_0] flex-col items-start justify-center min-w-px overflow-clip relative"
									data-name="Content">
									<p
										className={`${typeStyles.bodyLead} leading-zero not-italic relative shrink-0 text-white w-full`}>
										<span className="leading-copy">{`For customers outside of Nairobi, we offer a full basket including `}</span>
										<span className="font-medium text-[#f5e091]">
											meats, cheeses, and fish
										</span>
										<span className="font-medium">.</span>
									</p>
								</div>
							</div>
						</div>
						<div className="flex flex-col items-end relative w-full max-w-[625px] lg:justify-self-end">
							<div className="bg-white relative rounded-[30px] shrink-0 w-full">
								<div
									aria-hidden="true"
									className="absolute border border-[#f7f7f7] border-solid inset-0 pointer-events-none rounded-[30px]"
								/>
								<div className="flex flex-col gap-[27px] items-start p-6 md:p-[40px] relative size-full">
									<div className="flex flex-col items-start relative shrink-0 w-full">
										<div className="flex items-center relative shrink-0 w-full">
											<p
												className={`flex-[1_0_0] ${typeStyles.cardTitle} font-medium min-w-px not-italic relative text-black`}>
												Delivery Areas
											</p>
										</div>
									</div>
									<div
										className="flex flex-col gap-16 h-[340px] items-start relative shrink-0 w-full md:h-[462px]"
										data-name="Content">
										<div
											className="bg-white flex flex-[1_0_0] items-center justify-center min-h-px overflow-clip relative w-full"
											data-name="Delivery locations">
											<img
												alt=""
												aria-hidden="true"
												className="max-h-full max-w-full object-contain"
												src={deliveryLocationsIcon}
											/>
										</div>
									</div>
									<p className="font-sans font-normal leading-zero not-italic relative shrink-0 text-green-500 text-[0px] tracking-body-lg w-full">
										<span className="leading-copy text-xl">{`We deliver in & around`}</span>
										<span className="font-sans font-medium leading-copy text-xl">
											&nbsp;
										</span>
										<span className="font-sans font-medium leading-copy text-orange-500 text-xl">
											Nairobi
										</span>
										<span className="leading-copy text-xl">{` and the `}</span>
										<span className="font-sans font-medium leading-copy text-orange-500 text-xl">
											Maasai Mara.
										</span>
									</p>
									<div className="bg-[#fbf3e9] relative rounded-[16px] shrink-0 w-full">
										<div
											aria-hidden="true"
											className="absolute border border-[#f7e6d4] border-solid inset-0 pointer-events-none rounded-[16px]"
										/>
										<div className="flex flex-col items-start p-[16px] relative size-full">
											<div className="flex flex-col gap-4 items-start relative shrink-0 w-full sm:flex-row sm:items-center">
												<div className="flex flex-[1_0_0] gap-2 items-center min-w-px relative">
													<div
														className="relative shrink-0 size-6"
														data-name="prime:info-circle">
														<KenyanBuyersSvgs.KenyanBuyersSvg28 />
													</div>
													<p className="flex-[1_0_0] font-sans font-normal italic leading-zero min-w-px relative text-[#0f251b] text-[0px] tracking-caption">
														<span className="leading-normal text-[#2b1a08] text-sm">
															We are always
														</span>
														<span className="font-sans font-medium leading-normal text-green-500 text-sm">{` `}</span>
														<span className="font-sans font-medium leading-normal text-orange-500 text-sm">
															expanding our reach!
														</span>
														<span className="leading-normal text-green-500 text-sm">{` `}</span>
														<span className="leading-normal text-[#2b1a08] text-sm">
															Contact our sales
															team
														</span>
														<span className="font-sans font-bold leading-normal text-[#2b1a08] text-sm">{` `}</span>
														<span className="leading-normal text-[#2b1a08] text-sm">
															to hear more.
														</span>
													</p>
												</div>
												<Button
													href="/contact-us"
													variant="secondary"
													size="sm"
													className="relative shrink-0 text-[#eee]"
													data-name="order">
													Contact Sales
												</Button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</ContentContainer>
			</div>
			{/* How it works */}
			<div
				className="bg-white overflow-clip relative shrink-0 w-full"
				data-name="Wireframe - 42">
				<ContentContainer
					size="wide"
					className={`relative z-10 ${sectionSpacing.default}`}>
					<div className="mx-auto max-w-148 text-center ">
						<p
							className={`${typeStyles.sectionTitleLarge} mt-30 not-italic text-[#0f251b] w-full`}>
							How does it work?
						</p>
						<p
							className={`${typeStyles.body} mt-2 not-italic text-green-500 w-full`}>
							Four simple steps to get fresh and sustainable
							products delivered to you
						</p>
					</div>

					<div className="lg:hidden mt-[56px] grid gap-8 sm:grid-cols-2">
						{localBuyerHowItWorksSteps.map((step, index) => (
							<div
								className="flex flex-col gap-6 items-center rounded-[24px] bg-white p-4 text-center"
								key={step.title}>
								<div className="relative h-[180px] w-[185px] shrink-0">
									<img
										alt=""
										aria-hidden="true"
										className="size-full object-contain"
										src={step.icon}
									/>
								</div>
								<div className="flex gap-4 items-start text-left w-full max-w-[280px]">
									<div
										className={`flex size-10 shrink-0 items-center justify-center rounded-full ${typeStyles.body} font-medium leading-normal`}
										style={{
											backgroundColor: step.color,
											color: step.textColor,
										}}>
										{index + 1}
									</div>
									<div className="flex flex-col gap-[12px] items-start not-italic relative w-full">
										<p
											className={`${typeStyles.cardTitleSmall} leading-normal relative shrink-0 text-[#0f251b] tracking-card w-full`}>
											{step.title}
										</p>
										<p
											className={`${typeStyles.caption} relative shrink-0 text-green-500 w-full`}>
											{step.body}
										</p>
									</div>
								</div>
							</div>
						))}
					</div>

					<div className="relative mx-auto mt-[64px] hidden h-[560px] max-w-[1180px] lg:block">
						<div
							className="absolute left-[30px] top-[150px] h-[200px] w-[205.303px]"
							data-name="Group">
							<img
								alt=""
								aria-hidden="true"
								className="size-full object-contain"
								src={localBuyerHowItWorksSteps[0].icon}
							/>
						</div>
						<div className="absolute left-[35px] top-[370px] flex gap-4 items-start">
							<div
								className={`${typeStyles.body} flex size-10 shrink-0 items-center justify-center rounded-full bg-[#8c98ee] font-semibold leading-normal text-[#e6e6e6]`}>
								1
							</div>
							<div className="flex flex-col gap-4 items-start not-italic relative shrink-0 w-[204px]">
								<p
									className={`${typeStyles.cardTitleSmall} leading-normal relative shrink-0 text-[#0f251b] tracking-card w-full`}>
									Connect with sales
								</p>
								<p
									className={`${typeStyles.caption} relative shrink-0 text-green-500 w-full`}>
									Our Sales team is ready to speak with you
								</p>
							</div>
						</div>

						<div className="absolute left-[290px] top-[15px] h-[198.445px] w-[203.707px]">
							<img
								alt=""
								aria-hidden="true"
								className="size-full object-contain"
								src={localBuyerHowItWorksSteps[1].icon}
							/>
						</div>
						<div className="absolute left-[520px] top-[10px] flex gap-4 items-start">
							<div
								className={`${typeStyles.body} flex size-10 shrink-0 items-center justify-center rounded-full bg-[#a35380] font-medium leading-normal text-[#e6e6e6]`}>
								2
							</div>
							<div className="flex flex-col gap-4 items-start not-italic relative shrink-0 w-[204px]">
								<p
									className={`${typeStyles.cardTitleSmall} leading-normal relative shrink-0 text-[#0f251b] tracking-card w-full`}>
									Browse the shop
								</p>
								<p
									className={`${typeStyles.caption} relative shrink-0 text-green-500 w-full`}>
									Explore our wide range of fresh and dry
									products online
								</p>
							</div>
						</div>

						<div
							className="absolute left-[560px] top-[245px] h-[200px] w-[205.303px]"
							data-name="Group">
							<img
								alt=""
								aria-hidden="true"
								className="size-full object-contain"
								src={localBuyerHowItWorksSteps[2].icon}
							/>
						</div>
						<div className="absolute left-[690px] top-[440px] flex gap-4 items-start">
							<div
								className={`${typeStyles.body} flex size-10 shrink-0 items-center justify-center rounded-full bg-[#85a687] font-medium leading-normal text-[#e6e6e6]`}>
								3
							</div>
							<div className="flex flex-col gap-4 items-start not-italic relative shrink-0 w-[204px]">
								<p
									className={`${typeStyles.cardTitleSmall} leading-normal relative shrink-0 text-[#0f251b] tracking-card w-full`}>
									Place Order
								</p>
								<p
									className={`${typeStyles.caption} relative shrink-0 text-green-500 w-full`}>
									Select your delivery window and checkout
									your cart
								</p>
							</div>
						</div>

						<div
							className="absolute right-[70px] top-[45px] h-[198.445px] w-[203.707px]"
							data-name="Vector">
							<img
								alt=""
								aria-hidden="true"
								className="size-full object-contain"
								src={localBuyerHowItWorksSteps[3].icon}
							/>
						</div>
						<div className="absolute right-[5px] top-[260px] flex gap-4 items-start">
							<div
								className={`${typeStyles.body} flex size-10 shrink-0 items-center justify-center rounded-full bg-[#ebc194] font-medium leading-normal text-[#2b1a08]`}>
								4
							</div>
							<div className="flex flex-col gap-4 items-start not-italic relative shrink-0 w-[204px]">
								<p
									className={`${typeStyles.cardTitleSmall} leading-normal relative shrink-0 text-[#0f251b] tracking-card w-full`}>
									Enjoy Delivery
								</p>
								<p
									className={`${typeStyles.caption} relative shrink-0 text-green-500 w-full`}>
									Receive fresh, high quality ingredients
									directly to your doorstep
								</p>
							</div>
						</div>

						<div
							className="absolute left-[120px] top-[55px] h-[145.923px] w-[143.362px]"
							style={
								{
									"--transform-inner-width": "1185",
									"--transform-inner-height": "21",
								} as React.CSSProperties
							}>
							<div className="-scale-y-100 flex-none rotate-[132.38deg]">
								<div
									className="h-[82.59px] relative w-[122.18px]"
									data-name="Design">
									<KenyanBuyersSvgs.KenyanBuyersSvg70 />
								</div>
							</div>
						</div>
						<div
							className="absolute left-[430px] top-[250px] h-[138.813px] w-[110.247px]"
							style={
								{
									"--transform-inner-width": "1185",
									"--transform-inner-height": "21",
								} as React.CSSProperties
							}>
							<div className="flex-none rotate-[-104.32deg]">
								<div
									className="h-[82.59px] relative w-[122.18px]"
									data-name="Design">
									<KenyanBuyersSvgs.KenyanBuyersSvg71 />
								</div>
							</div>
						</div>
						<div
							className="absolute left-[790px] top-[305px] h-[94.387px] w-[129.822px]"
							style={
								{
									"--transform-inner-width": "1185",
									"--transform-inner-height": "21",
								} as React.CSSProperties
							}>
							<div className="flex-none rotate-[-174.26deg]">
								<div
									className="h-[82.59px] relative w-[122.18px]"
									data-name="Design">
									<KenyanBuyersSvgs.KenyanBuyersSvg72 />
								</div>
							</div>
						</div>
					</div>
				</ContentContainer>
				<BorderBottomKenyanBuyersSvg
					className="absolute inset-x-0 top-0 w-full max-w-none pointer-events-none select-none"
					fill="#0F251B"
				/>
			</div>
			{/* Testimonials */}
			<div
				className="bg-[#f3f5e7] min-h-[600px] md:min-h-[750px] overflow-clip relative rounded-bl-[40px] rounded-br-[40px] shrink-0 w-full"
				data-name="Testimonial">
				<ContentContainer
					size="wide"
					className={`relative z-10 flex flex-col items-center gap-[56px] md:gap-[80px] ${sectionSpacing.default}`}>
					<p
						className={`${typeStyles.sectionTitleLarge} not-italic text-[#0f251b] text-center w-full max-w-[800px]`}>
						Hear from businesses making an impact with Farm to Feed.
					</p>
					<div className="flex flex-col gap-6 items-center justify-center relative w-full lg:flex-row lg:gap-10">
						<button
							aria-label="Show previous testimonial"
							className="group rounded-[40px] bg-transparent border-0 p-0 transition-transform duration-200 hover:-translate-y-0.5 focus-visible:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#747c50]"
							onClick={showPreviousTestimonial}
							type="button">
							<Order4 />
						</button>
						<Frame6
							company={activeTestimonial.company}
							name={activeTestimonial.name}
							quote={activeTestimonial.quote}
						/>
						<button
							aria-label="Show next testimonial"
							className="group rounded-[40px] bg-transparent border-0 p-0 transition-transform duration-200 hover:-translate-y-0.5 focus-visible:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#747c50]"
							onClick={showNextTestimonial}
							type="button">
							<Order5 />
						</button>
					</div>
				</ContentContainer>
				<div
					className="absolute hidden h-[137.947px] items-center justify-center left-[calc(75%+23.37px)] top-[231.07px] w-[206.385px] lg:flex"
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
							<KenyanBuyersSvgs.KenyanBuyersSvg73 />
						</div>
					</div>
				</div>
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
										<KenyanBuyersSvgs.KenyanBuyersSvg74 />
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
											<KenyanBuyersSvgs.KenyanBuyersSvg75 />
										</div>
									</div>
								</div>
								<div
									className="absolute inset-[53.61%_20.85%_13.05%_69.52%]"
									data-name="Vector">
									<div className="absolute inset-[-0.99%_-1.71%]">
										<KenyanBuyersSvgs.KenyanBuyersSvg76 />
									</div>
								</div>
								<div
									className="absolute inset-[57.31%_23.09%_17.53%_71.61%]"
									data-name="Vector">
									<div className="absolute inset-[-1.31%_-3.11%]">
										<KenyanBuyersSvgs.KenyanBuyersSvg77 />
									</div>
								</div>
							</div>
							<div
								className="absolute inset-[39.79%_23.6%_0_58.17%]"
								data-name="Group">
								<KenyanBuyersSvgs.KenyanBuyersSvg78 />
							</div>
							<div
								className="absolute inset-[0_71.17%_39.23%_0]"
								data-name="Vector">
								<KenyanBuyersSvgs.KenyanBuyersSvg79 />
							</div>
							<div
								className="absolute inset-[45.69%_58.11%_38.2%_12.15%]"
								data-name="Vector">
								<KenyanBuyersSvgs.KenyanBuyersSvg80 />
							</div>
							<div
								className="absolute inset-[21.92%_56.03%_50.52%_14.04%]"
								data-name="Vector">
								<KenyanBuyersSvgs.KenyanBuyersSvg81 />
							</div>
							<div
								className="absolute inset-[22.12%_69.87%_48.92%_6.48%]"
								data-name="Vector">
								<KenyanBuyersSvgs.KenyanBuyersSvg82 />
							</div>
							<div
								className="absolute inset-[33.5%_62.34%_50.52%_16.54%]"
								data-name="Vector">
								<KenyanBuyersSvgs.KenyanBuyersSvg83 />
							</div>
							<div
								className="absolute inset-[30.28%_27.75%_11.86%_52.01%]"
								data-name="Group">
								<KenyanBuyersSvgs.KenyanBuyersSvg84 />
							</div>
							<div
								className="absolute inset-[34.94%_41.44%_7.36%_30.22%]"
								data-name="Vector">
								<KenyanBuyersSvgs.KenyanBuyersSvg85 />
							</div>
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
							<KenyanBuyersSvgs.KenyanBuyersSvg86 />
						</div>
					</div>
				</div>
				<div
					className="absolute hidden h-[203.64px] items-center justify-center left-[128px] top-[561px] w-[245.05px] lg:flex"
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
								<KenyanBuyersSvgs.KenyanBuyersSvg87 />
							</div>
							<div
								className="absolute inset-[5.45%_47.3%_7.78%_26.47%]"
								data-name="Group">
								<KenyanBuyersSvgs.KenyanBuyersSvg88 />
							</div>
							<div
								className="absolute inset-[0_28.06%_2.86%_40.72%]"
								data-name="Group">
								<KenyanBuyersSvgs.KenyanBuyersSvg89 />
							</div>
							<div
								className="absolute inset-[4.39%_13.86%_2.28%_57.71%]"
								data-name="Group">
								<KenyanBuyersSvgs.KenyanBuyersSvg90 />
							</div>
							<div
								className="absolute inset-[0_0.75%_24.42%_74.76%]"
								data-name="Group">
								<KenyanBuyersSvgs.KenyanBuyersSvg91 />
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* Footer */}
			<Footer />
		</div>
	);
}
