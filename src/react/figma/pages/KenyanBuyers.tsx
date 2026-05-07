import * as KenyanBuyersSvgs from "../imports/BuyFromUsLocal/kenyanBuyers-inline-svgs";
import {
	Order4,
	Frame6,
	Order5,
} from "../imports/BuyFromUsLocal/BuyFromUsLocal";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ContentContainer } from "../components/layout/ContentContainer";
import svgPaths from "../imports/BuyFromUsLocal-1/svg-d7gbia4w81";
import imgMap from "../../../assets/figma/768034251e290c5f148f0125d9e404698150a7ed.png?url";
import imgPegmanOffscreen2X from "../../../assets/figma/747a27fe416ebfaf57b25beae190a98036e77d0e.png?url";
import { imgGroup } from "../imports/BuyFromUsLocal-1/svg-efcb2";
import { BorderBottomKenyanBuyersSvg } from "../imports/BuyFromUsLocal-1/border-bottom-kenyan-buyers";
import { BorderTopKenyanBuyersSvg } from "../imports/BuyFromUsLocal-1/border-top-kenyan-buyers";
const partnerProductCategories = [
	["Dairy", "Cereals, grains & pulses", "Tea & Coffee"],
	["spices", "Snacks"],
];
const localBuyerHowItWorksSteps = [
	{
		body: "Our Sales team is ready to speak with you",
		color: "#8C98EE",
		textColor: "#e6e6e6",
		title: "Connect with sales",
	},
	{
		body: "Explore our wide range of fresh and dry products online",
		color: "#A35380",
		textColor: "#e6e6e6",
		title: "Browse the shop",
	},
	{
		body: "Select your delivery window and checkout your cart",
		color: "#85A687",
		textColor: "#e6e6e6",
		title: "Place Order",
	},
	{
		body: "Receive fresh, high quality ingredients directly to your doorstep",
		color: "#EBC194",
		textColor: "#2b1a08",
		title: "Enjoy Delivery",
	},
];
const localBuyerTestimonialControls = [Order4, Frame6, Order5];
export default function KenyanBuyers() {
	return (
		<div
			className="bg-white content-stretch flex flex-col items-start relative w-full"
			data-name="Buy from us - local">
			{/* Hero */}
			<div
				className="bg-[#f9ecbd] min-h-[600px] md:min-h-[800px] lg:min-h-[926px] overflow-clip relative shrink-0 w-full"
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
					className="pt-[160px] pb-[96px] md:pt-[211px] md:pb-[120px]">
					<div className="grid gap-12 items-center lg:grid-cols-[minmax(0,1fr)_minmax(0,563px)]">
						<div className="content-stretch flex flex-col gap-[40px] items-start relative">
							<div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0">
								<div
									className="absolute hidden h-[14px] left-0 top-[130.5px] w-[443px] md:block"
									data-name="objects">
									<KenyanBuyersSvgs.KenyanBuyersSvg02 />
								</div>
								<p className="font-['Fraunces',serif] font-normal leading-tight not-italic relative shrink-0 text-[#0f251b] text-4xl md:text-5xl lg:text-6xl tracking-wide w-full max-w-[519px]">
									<span className="leading-tight">
										Good produce,
										<br aria-hidden="true" />
									</span>
									<span className="leading-tight text-[#1e4a35]">
										good margins,
									</span>
									<span className="leading-tight">
										<br aria-hidden="true" />
										even better environment
									</span>
								</p>
								<p className="font-['Rubik',sans-serif] font-medium italic leading-[1.68] relative shrink-0 text-[#d78228] text-[20px] tracking-[0.6px] w-full max-w-[515px]">{`"Mboga bora, faida bora, mazingira bora zaidi"`}</p>
							</div>
							<div className="font-['Rubik',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#1e4a35] text-[16px] tracking-[0.48px] w-full max-w-[515px] whitespace-pre-wrap">
								<p className="mb-0">
									<span className="leading-[1.68]">
										Built with farmers at the centre, our
										solution brings oddly good products to
										businesses, retailers, schools, feeding
										programmes, and event companies.
										Reliable quality, healthy margins, and
										less waste — all in one smarter supply
										chain.
									</span>
									<span className="font-['Rubik',sans-serif] font-medium leading-[1.68] not-italic">{` `}</span>
								</p>
								<p className="leading-[1.68] mb-0">​</p>
								<p className="font-['Rubik',sans-serif] font-medium leading-[1.68]">
									Ready to bite into freshness?
								</p>
							</div>
						</div>
						<div className="content-stretch flex flex-col items-center relative shrink-0 w-full max-w-[563px]">
							<div className="bg-white relative rounded-[30px] shrink-0 w-full">
								<div
									aria-hidden="true"
									className="absolute border border-[#f7f7f7] border-solid inset-0 pointer-events-none rounded-[30px]"
								/>
								<div className="content-stretch flex flex-col gap-[32px] items-start p-[24px] md:p-[40px] relative size-full">
									<div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full">
										<div className="content-stretch flex items-center relative shrink-0">
											<p className="font-['Rubik',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#0f251b] text-[24px] tracking-[0.72px] w-[210px]">
												Buy from us
											</p>
										</div>
										<p className="font-['Rubik',sans-serif] font-normal leading-[1.68] not-italic relative shrink-0 text-[#1e4a35] text-[16px] tracking-[0.48px] w-full">
											Fill out the form and our sales team
											will contact you shortly.
										</p>
									</div>
									<div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
										<div
											className="content-stretch flex items-start relative shrink-0 w-full"
											data-name="Inputs">
											<div
												className="content-stretch flex flex-col gap-[8px] items-start relative w-full sm:flex-[1_0_0] sm:min-w-px"
												data-name="Input">
												<p className="font-['Rubik',sans-serif] font-medium leading-[1.5] not-italic relative shrink-0 text-[#0f251b] text-[12px] w-full">
													Your Name *
												</p>
												<div
													className="bg-[#fbfafa] h-[48px] relative rounded-[35px] shrink-0 w-full"
													data-name="Text input">
													<div
														aria-hidden="true"
														className="absolute border border-[#e6e6e6] border-solid inset-[-1px] pointer-events-none rounded-[36px]"
													/>
													<div className="flex flex-row items-center size-full">
														<div className="content-stretch flex items-center p-[12px] relative size-full" />
													</div>
												</div>
											</div>
										</div>
										<div
											className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full sm:flex-row"
											data-name="Inputs">
											<div
												className="content-stretch flex flex-col gap-[8px] items-start relative w-full sm:flex-[1_0_0] sm:min-w-px"
												data-name="Input">
												<p className="font-['Rubik',sans-serif] font-medium leading-[1.5] not-italic relative shrink-0 text-[#0f251b] text-[12px] w-full">
													Your Email *
												</p>
												<div
													className="bg-[#fbfafa] h-[48px] relative rounded-[24px] shrink-0 w-full"
													data-name="Text input">
													<div
														aria-hidden="true"
														className="absolute border border-[#e6e6e6] border-solid inset-[-1px] pointer-events-none rounded-[25px]"
													/>
													<div className="flex flex-row items-center size-full">
														<div className="content-stretch flex gap-[8px] items-center p-[12px] relative size-full">
															<div
																className="overflow-clip relative shrink-0 size-[24px]"
																data-name="credit_card">
																<div
																	className="absolute left-[4px] size-[16px] top-[4px]"
																	data-name="prime:envelope">
																	<KenyanBuyersSvgs.KenyanBuyersSvg03 />
																</div>
															</div>
															<p className="flex-[1_0_0] font-['Rubik',sans-serif] font-normal leading-[1.5] min-w-px not-italic relative text-[#808080] text-[14px]">
																email@example.com
															</p>
														</div>
													</div>
												</div>
											</div>
											<div
												className="content-stretch flex flex-col gap-[8px] items-start relative w-full sm:flex-[1_0_0] sm:min-w-px"
												data-name="Input">
												<p className="font-['Rubik',sans-serif] font-medium leading-[1.5] not-italic relative shrink-0 text-[#0f251b] text-[12px] w-full">
													Phone Number *
												</p>
												<div
													className="bg-[#fbfafa] h-[48px] relative rounded-[24px] shrink-0 w-full"
													data-name="Text input">
													<div
														aria-hidden="true"
														className="absolute border border-[#e6e6e6] border-solid inset-[-1px] pointer-events-none rounded-[25px]"
													/>
													<div className="flex flex-row items-center size-full">
														<div className="content-stretch flex items-center p-[12px] relative size-full" />
													</div>
												</div>
											</div>
										</div>
										<div
											className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full sm:flex-row"
											data-name="Inputs">
											<div
												className="content-stretch flex flex-col gap-[8px] items-start relative w-full sm:flex-[1_0_0] sm:min-w-px"
												data-name="Input">
												<p className="font-['Rubik',sans-serif] font-medium leading-[1.5] not-italic relative shrink-0 text-[#0f251b] text-[12px] w-full">
													Company Name *
												</p>
												<div
													className="bg-[#fbfafa] h-[48px] relative rounded-[24px] shrink-0 w-full"
													data-name="Text input">
													<div
														aria-hidden="true"
														className="absolute border border-[#e6e6e6] border-solid inset-[-1px] pointer-events-none rounded-[25px]"
													/>
													<div className="flex flex-row items-center size-full">
														<div className="content-stretch flex items-center p-[12px] relative size-full" />
													</div>
												</div>
											</div>
											<div
												className="content-stretch flex flex-col gap-[8px] items-start relative w-full sm:flex-[1_0_0] sm:min-w-px"
												data-name="Input">
												<p className="font-['Rubik',sans-serif] font-medium leading-[1.5] not-italic relative shrink-0 text-[#0f251b] text-[12px] w-full">
													Job Title
												</p>
												<div
													className="bg-[#fbfafa] h-[48px] relative rounded-[24px] shrink-0 w-full"
													data-name="Text input">
													<div
														aria-hidden="true"
														className="absolute border border-[#e6e6e6] border-solid inset-[-1px] pointer-events-none rounded-[25px]"
													/>
													<div className="flex flex-row items-center size-full">
														<div className="content-stretch flex items-center p-[12px] relative size-full" />
													</div>
												</div>
											</div>
										</div>
										<div
											className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full"
											data-name="Input">
											<p className="font-['Rubik',sans-serif] font-medium leading-[1.5] not-italic relative shrink-0 text-[#0f251b] text-[12px] w-full">
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
													<div className="content-stretch flex gap-[16px] items-center p-[12px] relative size-full">
														<p className="flex-[1_0_0] font-['Rubik',sans-serif] font-normal leading-[1.5] min-w-px not-italic relative text-[#1e4a35] text-[14px]">
															Select one...
														</p>
														<div
															className="overflow-clip relative shrink-0 size-[24px]"
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
										<div
											className="bg-[#1e4a35] relative rounded-[40px] shrink-0 w-full"
											data-name="order">
											<div className="flex flex-row justify-center size-full">
												<div className="content-stretch flex items-start justify-center px-[16px] py-[11px] relative size-full">
													<p className="font-['Rubik',sans-serif] font-normal leading-[1.68] not-italic relative shrink-0 text-[#eee] text-[16px] text-center tracking-[0.48px] whitespace-nowrap">
														Get in touch
													</p>
												</div>
											</div>
										</div>
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
					className="relative z-10 flex flex-col items-center gap-12 pt-[120px] pb-[96px] md:pt-[164px] md:pb-[120px]">
					<div className="content-stretch flex flex-col gap-[64px] items-center relative w-full max-w-[1280px]">
						<div className="content-stretch flex flex-col gap-[32px] items-center max-w-[1052px] not-italic relative shrink-0 text-center w-full">
							<p className="font-['Fraunces',serif] font-normal leading-[normal] relative shrink-0 text-[#0f251b] text-[36px] md:text-[48px] tracking-[1.44px] w-full">
								Why choose Farm to Feed?
							</p>
							<p className="font-['Rubik',sans-serif] font-normal leading-[1.68] relative shrink-0 text-[#1e4a35] text-[16px] tracking-[0.48px] w-full">
								We are reshaping the food supply chain to
								benefit everyone involved while protecting our
								planet.
							</p>
						</div>
						<div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full">
							<div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
								<div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full lg:flex-row">
									<div className="bg-[#fbfafa] relative rounded-[30px] w-full lg:flex-1">
										<div className="content-stretch flex flex-col gap-[27px] items-start p-[40px] relative size-full">
											<div className="content-stretch flex flex-col gap-[32px] items-start justify-center relative shrink-0">
												<div
													className="h-[64px] relative shrink-0 w-[65.697px]"
													data-name="Group">
													<KenyanBuyersSvgs.KenyanBuyersSvg06 />
												</div>
												<p className="font-['Fraunces',serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#0f251b] text-[24px] tracking-[0.72px]">
													One Stop Shop
												</p>
											</div>
											<p className="font-['Rubik',sans-serif] font-normal leading-[1.68] not-italic relative shrink-0 text-[#1e4a35] text-[16px] tracking-[0.48px] w-full">
												All you need to run your food
												business. From fresh to dry, and
												ready-to-use products.
											</p>
										</div>
									</div>
									<div className="bg-[#fbfafa] relative rounded-[30px] w-full lg:flex-1">
										<div className="content-stretch flex flex-col gap-[27px] items-start p-[40px] relative size-full">
											<div className="content-stretch flex flex-col gap-[32px] items-start justify-center relative shrink-0">
												<div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
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
												<p className="font-['Fraunces',serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#0f251b] text-[24px] tracking-[0.72px]">
													Best Pricing
												</p>
											</div>
											<p className="font-['Rubik',sans-serif] font-normal leading-[1.68] not-italic relative shrink-0 text-[#1e4a35] text-[16px] tracking-[0.48px] w-full">
												Products that make your store
												stand out. Pay less, expect
												better and grow your margins.
											</p>
										</div>
									</div>
									<div className="bg-[#fbfafa] relative rounded-[30px] w-full lg:flex-1">
										<div className="content-stretch flex flex-col gap-[27px] items-start p-[40px] relative size-full">
											<div className="content-stretch flex flex-col gap-[32px] items-start justify-center relative shrink-0">
												<div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
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
												<p className="font-['Fraunces',serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#0f251b] text-[24px] tracking-[0.72px]">
													Full Harvest
												</p>
											</div>
											<p className="font-['Rubik',sans-serif] font-normal leading-[1.68] not-italic relative shrink-0 text-[#1e4a35] text-[16px] tracking-[0.48px] w-full">
												Choose from our range of rescue
												produce or Grade 1 — we procure
												full harvest from farmers so
												that nothing goes to waste.
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
								<div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full lg:flex-row">
									<div className="bg-[#fbfafa] relative rounded-[30px] w-full lg:flex-1">
										<div className="content-stretch flex flex-col gap-[27px] items-start p-[40px] relative size-full">
											<div className="content-stretch flex flex-col gap-[32px] items-start justify-center relative shrink-0">
												<div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
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
												<p className="font-['Fraunces',serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#0f251b] text-[24px] tracking-[0.72px]">
													Customer Service
												</p>
											</div>
											<p className="font-['Rubik',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#1e4a35] text-[16px] tracking-[0.48px] w-full">
												<span className="leading-[1.68]">{`If your order is anything less than supreme, we'll fix it. Connect with our team on WhatsApp or call us at `}</span>
												<span className="font-['Rubik',sans-serif] font-medium leading-[1.68]">
													0795851756.
												</span>
											</p>
										</div>
									</div>
									<div className="bg-[#fbfafa] relative rounded-[30px] w-full lg:flex-1">
										<div className="content-stretch flex flex-col gap-[27px] items-start p-[40px] relative size-full">
											<div className="content-stretch flex flex-col gap-[32px] items-start justify-center relative shrink-0">
												<div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
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
												<p className="font-['Fraunces',serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#0f251b] text-[24px] tracking-[0.72px]">
													Measurable Impact
												</p>
											</div>
											<p className="font-['Rubik',sans-serif] font-normal leading-[1.68] not-italic relative shrink-0 text-[#1e4a35] text-[16px] tracking-[0.48px] w-full">
												For every kg of odd-looking
												produce you buy, you reduce your
												carbon footprint and directly
												boost farmer incomes.
											</p>
										</div>
									</div>
									<div className="bg-[#fbfafa] relative rounded-[30px] w-full lg:flex-1">
										<div className="content-stretch flex flex-col gap-[27px] items-start p-[40px] relative size-full">
											<div className="content-stretch flex flex-col gap-[32px] items-start justify-center relative shrink-0">
												<div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
													<div
														className="col-1 h-[64px] ml-0 mt-0 relative row-1 w-[65.697px]"
														data-name="Group">
														<KenyanBuyersSvgs.KenyanBuyersSvg15 />
													</div>
													<div className="col-1 h-[39.336px] ml-[15.15px] mt-[11.68px] relative row-1 w-[33.972px]">
														<KenyanBuyersSvgs.KenyanBuyersSvg16 />
													</div>
												</div>
												<p className="font-['Fraunces',serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#0f251b] text-[24px] tracking-[0.72px]">
													Flexible Delivery
												</p>
											</div>
											<p className="font-['Rubik',sans-serif] font-normal leading-[1.68] not-italic relative shrink-0 text-[#1e4a35] text-[16px] tracking-[0.48px] w-full">{`Choose your delivery date and window and we'll get freshness delivered to you. On Time, In Full.`}</p>
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
					<div className="grid gap-12 pt-[140px] pb-[96px] md:pt-[200px] lg:grid-cols-2 lg:items-start lg:pt-[241px] lg:pb-[120px]">
						<div className="content-stretch flex flex-col gap-[64px] items-start relative w-full max-w-[624px]">
							<div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
								<p className="font-['Fraunces',serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#f5e091] text-[36px] md:text-[48px] tracking-[1.44px] w-full">
									Your One Stop Shop
								</p>
							</div>
							<div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0">
								<div className="content-stretch flex gap-[15px] items-start relative shrink-0 w-full max-w-[535px]">
									<div className="relative shrink-0 size-[56px]">
										<KenyanBuyersSvgs.KenyanBuyersSvg20 />
										<p className="-translate-x-1/2 absolute font-['Rubik',sans-serif] font-semibold leading-[normal] left-1/2 not-italic text-[#eff6ef] text-[16px] text-center top-[calc(50%-6px)] tracking-[0.48px] whitespace-nowrap">
											1
										</p>
									</div>
									<div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-w-px relative self-stretch">
										<div className="content-stretch flex flex-col gap-[16px] items-start leading-[normal] relative shrink-0 w-full">
											<p className="font-['Fraunces',serif] font-medium not-italic relative shrink-0 text-[#fbf3e9] text-[24px] tracking-[0.72px] w-full">
												Fresh Produce,
											</p>
											<p className="font-['Fraunces',serif] font-normal italic relative shrink-0 text-[#f5e091] text-[20px] tracking-[0.6px] w-full">{`From our farmers to you `}</p>
										</div>
										<p className="font-['Rubik',sans-serif] font-normal leading-[1.68] not-italic relative shrink-0 text-[#f6eef2] text-[16px] tracking-[0.48px] w-full">{`We deliver the regular grade and our impactful and affordable grade rescue. `}</p>
									</div>
								</div>
								<div className="content-stretch flex gap-[15px] items-start relative shrink-0 w-full max-w-[535px]">
									<div className="relative shrink-0 size-[56px]">
										<KenyanBuyersSvgs.KenyanBuyersSvg21 />
										<p className="-translate-x-1/2 absolute font-['Rubik',sans-serif] font-semibold leading-[normal] left-[calc(50%+0.5px)] not-italic text-[#eff6ef] text-[16px] text-center top-[calc(50%-6px)] tracking-[0.48px] whitespace-nowrap">
											2
										</p>
									</div>
									<div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-w-px relative self-stretch">
										<div className="content-stretch flex flex-col gap-[16px] items-start leading-[normal] relative shrink-0 w-full">
											<p className="font-['Fraunces',serif] font-medium not-italic relative shrink-0 text-[#fbf3e9] text-[24px] tracking-[0.72px] w-full">
												Prepped and Ready to Use,
											</p>
											<p className="font-['Fraunces',serif] font-normal italic relative shrink-0 text-[#f5e091] text-[20px] tracking-[0.6px] w-full">
												Made by us
											</p>
										</div>
										<p className="font-['Rubik',sans-serif] font-normal leading-[1.68] not-italic relative shrink-0 text-[#f6eef2] text-[16px] tracking-[0.48px] w-full">
											We cut, peel, slice and process
											fresh produce so you don’t have to.
											Save time and storage space by
											ordering our ready to use products.
										</p>
									</div>
								</div>
								<div className="content-stretch flex gap-[15px] items-start relative shrink-0 w-full max-w-[535px]">
									<div className="relative shrink-0 size-[56px]">
										<KenyanBuyersSvgs.KenyanBuyersSvg22 />
										<p className="-translate-x-1/2 absolute font-['Rubik',sans-serif] font-semibold leading-[normal] left-[calc(50%+0.5px)] not-italic text-[#eff6ef] text-[16px] text-center top-[calc(50%-6px)] tracking-[0.48px] whitespace-nowrap">
											3
										</p>
									</div>
									<div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-w-px relative self-stretch">
										<div className="content-stretch flex flex-col gap-[16px] items-start leading-[normal] relative shrink-0 w-full">
											<p className="font-['Fraunces',serif] font-medium not-italic relative shrink-0 text-[#fbf3e9] text-[24px] tracking-[0.72px] w-full">
												Products from Partners
											</p>
											<p className="font-['Fraunces',serif] font-normal italic relative shrink-0 text-[#f5e091] text-[20px] tracking-[0.6px] w-full">
												Made by us
											</p>
										</div>
										<p className="font-['Rubik',sans-serif] font-normal leading-[1.68] not-italic relative shrink-0 text-[#f6eef2] text-[16px] tracking-[0.48px] w-full">{`We offer a wide variety of product categories from top brands. `}</p>
										<div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
											<div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
												{partnerProductCategories.map(
													(row, index) => (
														<div
															className={`content-stretch flex flex-wrap items-start relative shrink-0 ${index === 0 ? "gap-[12px]" : "gap-[16px]"}`}
															key={index}>
															{row.map(
																(category) => (
																	<div className="bg-[#122c20] content-stretch flex items-start px-[16px] py-[8px] relative rounded-[40px] shrink-0">
																		<div
																			aria-hidden="true"
																			className="absolute border border-[#0f251b] border-solid inset-0 pointer-events-none rounded-[40px]"
																		/>
																		<p className="font-['Rubik',sans-serif] font-normal leading-[1.68] relative shrink-0 text-[#f7f7f7] text-[16px] text-center tracking-[0.48px] whitespace-nowrap">
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
								className="content-stretch flex gap-[32px] items-start justify-center overflow-clip relative shrink-0 w-full"
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
									className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px overflow-clip relative"
									data-name="Content">
									<p className="font-['Rubik',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[20px] text-white tracking-[0.6px] w-full">
										<span className="leading-[1.68]">{`For customers outside of Nairobi, we offer a full basket including `}</span>
										<span className="font-['Rubik',sans-serif] font-medium leading-[1.68] text-[#f5e091]">
											meats, cheeses, and fish
										</span>
										<span className="font-['Rubik',sans-serif] font-medium leading-[1.68]">
											.
										</span>
									</p>
								</div>
							</div>
						</div>
						<div className="content-stretch flex flex-col items-end relative w-full max-w-[625px] lg:justify-self-end">
							<div className="bg-white relative rounded-[30px] shrink-0 w-full">
								<div
									aria-hidden="true"
									className="absolute border border-[#f7f7f7] border-solid inset-0 pointer-events-none rounded-[30px]"
								/>
								<div className="content-stretch flex flex-col gap-[27px] items-start p-[24px] md:p-[40px] relative size-full">
									<div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
										<div className="content-stretch flex items-center relative shrink-0 w-full">
											<p className="flex-[1_0_0] font-['Rubik',sans-serif] font-medium leading-[normal] min-w-px not-italic relative text-[24px] text-black tracking-[0.72px]">
												Delivery Areas
											</p>
										</div>
									</div>
									<div
										className="content-stretch flex flex-col gap-[64px] h-[340px] items-start relative shrink-0 w-full md:h-[462px]"
										data-name="Content">
										<div
											className="bg-white flex-[1_0_0] min-h-px overflow-clip relative w-full"
											data-name="_Google maps mockup">
											<div
												className="absolute inset-[-64.07%_-68.92%_-43.72%_-47.3%]"
												data-name="Map">
												<img
													alt=""
													className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
													src={imgMap}
												/>
											</div>
											<div
												className="absolute bottom-[2px] h-[26px] left-[6px] w-[66px]"
												data-name="Google logo">
												<KenyanBuyersSvgs.KenyanBuyersSvg24 />
											</div>
											<div
												className="absolute right-[8px] size-[28px] top-[69px]"
												data-name="Street view button">
												<div
													className="absolute bg-white inset-0 rounded-[2px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.2)]"
													data-name="Rectangle"
												/>
												<div
													className="absolute inset-[14.29%_28.57%]"
													data-name="pegman-offscreen-2x">
													<img
														alt=""
														className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
														src={
															imgPegmanOffscreen2X
														}
													/>
												</div>
											</div>
											<div
												className="absolute h-[53px] right-[8px] top-[8px] w-[28px]"
												data-name="Zoom control buttons">
												<div className="absolute inset-[-3.77%_-10.71%_-7.55%_-10.71%]">
													<KenyanBuyersSvgs.KenyanBuyersSvg25 />
												</div>
											</div>
											<div
												className="absolute h-[29px] left-[8px] top-[8px] w-[94px]"
												data-name="Map type button group">
												<div
													className="absolute bg-white inset-0 rounded-[2px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.2)]"
													data-name="Rectangle"
												/>
												<p
													className="absolute font-['Roboto:Regular',sans-serif] font-normal inset-[27.59%_8.51%_27.59%_48.94%] leading-[normal] text-[#565656] text-[11px] whitespace-nowrap"
													style={{
														fontVariationSettings:
															"'wdth' 100",
													}}>
													Satellite
												</p>
												<div
													className="absolute flex inset-[0_59.57%_0_40.43%] items-center justify-center"
													style={{
														containerType: "size",
													}}>
													<div className="flex-none h-[1px] rotate-90 w-[100cqh]">
														<div
															className="relative size-full"
															data-name="Line">
															<div className="absolute inset-[-1px_0_0_0]">
																<KenyanBuyersSvgs.KenyanBuyersSvg26 />
															</div>
														</div>
													</div>
												</div>
												<p
													className="absolute font-['Roboto:Medium',sans-serif] font-medium inset-[27.59%_68.09%_27.59%_8.51%] leading-[normal] text-[11px] text-black whitespace-nowrap"
													style={{
														fontVariationSettings:
															"'wdth' 100",
													}}>
													Map
												</p>
											</div>
										</div>
										<div className="absolute contents left-[268px] top-[160px]">
											<div className="absolute left-[268px] size-[40.016px] top-[160px]">
												<div className="absolute inset-[0_0_-32.45%_0]">
													<KenyanBuyersSvgs.KenyanBuyersSvg27 />
												</div>
											</div>
										</div>
									</div>
									<p className="font-['Rubik',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#1e4a35] text-[0px] tracking-[0.6px] w-full">
										<span className="leading-[1.68] text-[20px]">{`We deliver in & around`}</span>
										<span className="font-['Rubik',sans-serif] font-medium leading-[1.68] text-[20px]">
											&nbsp;
										</span>
										<span className="font-['Rubik',sans-serif] font-medium leading-[1.68] text-[#d78228] text-[20px]">
											Nairobi
										</span>
										<span className="leading-[1.68] text-[20px]">{` and in the `}</span>
										<span className="font-['Rubik',sans-serif] font-medium leading-[1.68] text-[#d78228] text-[20px]">
											Maasai Mara.
										</span>
									</p>
									<div className="bg-[#fbf3e9] relative rounded-[16px] shrink-0 w-full">
										<div
											aria-hidden="true"
											className="absolute border border-[#f7e6d4] border-solid inset-0 pointer-events-none rounded-[16px]"
										/>
										<div className="content-stretch flex flex-col items-start p-[16px] relative size-full">
											<div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full sm:flex-row sm:items-center">
												<div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative">
													<div
														className="relative shrink-0 size-[24px]"
														data-name="prime:info-circle">
														<KenyanBuyersSvgs.KenyanBuyersSvg28 />
													</div>
													<p className="flex-[1_0_0] font-['Rubik',sans-serif] font-normal italic leading-[0] min-w-px relative text-[#0f251b] text-[0px] tracking-[0.42px]">
														<span className="leading-[normal] text-[#2b1a08] text-[14px]">
															We are always
														</span>
														<span className="font-['Rubik',sans-serif] font-medium leading-[normal] text-[#1e4a35] text-[14px]">{` `}</span>
														<span className="font-['Rubik',sans-serif] font-medium leading-[normal] text-[#d78228] text-[14px]">
															expanding our reach!
														</span>
														<span className="leading-[normal] text-[#1e4a35] text-[14px]">{` `}</span>
														<span className="leading-[normal] text-[#2b1a08] text-[14px]">
															Contact our sales
															team
														</span>
														<span className="font-['Rubik',sans-serif] font-bold leading-[normal] text-[#2b1a08] text-[14px]">{` `}</span>
														<span className="leading-[normal] text-[#2b1a08] text-[14px]">
															to hear more.
														</span>
													</p>
												</div>
												<div
													className="bg-[#d78228] content-stretch flex items-start px-[16px] py-[8px] relative rounded-[40px] shrink-0"
													data-name="order">
													<p className="font-['Rubik',sans-serif] font-normal leading-[1.68] not-italic relative shrink-0 text-[#eee] text-[16px] text-center tracking-[0.48px] whitespace-nowrap">
														Contact Sales
													</p>
												</div>
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
					className="relative z-10 py-[96px] md:py-[120px]">
					<div className="mx-auto max-w-[592px] text-center ">
						<p className="mt-30 font-['Fraunces',serif] font-normal leading-[normal] not-italic text-[#0f251b] text-[40px] md:text-[48px] tracking-[1.44px] w-full">
							How does it work?
						</p>
						<p className="font-['Rubik',sans-serif] font-normal leading-[1.68] mt-2 not-italic text-[#1e4a35] text-[16px] tracking-[0.48px] w-full">
							Four simple steps to get fresh and sustainable
							products delivered to you
						</p>
					</div>

					<div className="lg:hidden mt-[56px] grid gap-[32px] sm:grid-cols-2">
						{localBuyerHowItWorksSteps.map((step, index) => (
							<div
								className="content-stretch flex flex-col gap-[24px] items-center rounded-[24px] bg-white p-4 text-center"
								key={step.title}>
								<div className="relative h-[180px] w-[185px] shrink-0">
									{index === 0 ? (
										<KenyanBuyersSvgs.KenyanBuyersSvg29 />
									) : null}
									{index === 1 ? (
										<KenyanBuyersSvgs.KenyanBuyersSvg30 />
									) : null}
									{index === 2 ? (
										<KenyanBuyersSvgs.KenyanBuyersSvg31 />
									) : null}
									{index === 3 ? (
										<KenyanBuyersSvgs.KenyanBuyersSvg32 />
									) : null}
								</div>
								<div className="content-stretch flex gap-[16px] items-start text-left w-full max-w-[280px]">
									<div
										className="flex size-[40px] shrink-0 items-center justify-center rounded-full font-['Rubik',sans-serif] text-[16px] font-medium tracking-[0.48px]"
										style={{
											backgroundColor: step.color,
											color: step.textColor,
										}}>
										{index + 1}
									</div>
									<div className="content-stretch flex flex-col gap-[12px] items-start not-italic relative w-full">
										<p className="font-['Fraunces',serif] font-normal leading-[normal] relative shrink-0 text-[#0f251b] text-[22px] tracking-[0.66px] w-full">
											{step.title}
										</p>
										<p className="font-['Rubik',sans-serif] font-normal leading-[1.68] relative shrink-0 text-[#1e4a35] text-[14px] tracking-[0.42px] w-full">
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
							<KenyanBuyersSvgs.KenyanBuyersSvg29 />
						</div>
						<div className="absolute left-[35px] top-[370px] content-stretch flex gap-[16px] items-start">
							<div className="flex size-[40px] shrink-0 items-center justify-center rounded-full bg-[#8c98ee] font-['Rubik',sans-serif] text-[16px] font-semibold tracking-[0.48px] text-[#e6e6e6]">
								1
							</div>
							<div className="content-stretch flex flex-col gap-[16px] items-start not-italic relative shrink-0 w-[204px]">
								<p className="font-['Fraunces',serif] font-normal leading-[normal] relative shrink-0 text-[#0f251b] text-[22px] tracking-[0.66px] w-full">
									Connect with sales
								</p>
								<p className="font-['Rubik',sans-serif] font-normal leading-[1.68] relative shrink-0 text-[#1e4a35] text-[14px] tracking-[0.42px] w-full">
									Our Sales team is ready to speak with you
								</p>
							</div>
						</div>

						<div className="absolute left-[290px] top-[15px] h-[198.445px] w-[203.707px]">
							<KenyanBuyersSvgs.KenyanBuyersSvg30 />
						</div>
						<div className="absolute left-[520px] top-[10px] content-stretch flex gap-[16px] items-start">
							<div className="flex size-[40px] shrink-0 items-center justify-center rounded-full bg-[#a35380] font-['Rubik',sans-serif] text-[16px] font-medium tracking-[0.48px] text-[#e6e6e6]">
								2
							</div>
							<div className="content-stretch flex flex-col gap-[16px] items-start not-italic relative shrink-0 w-[204px]">
								<p className="font-['Fraunces',serif] font-normal leading-[normal] relative shrink-0 text-[#0f251b] text-[22px] tracking-[0.66px] w-full">
									Browse the shop
								</p>
								<p className="font-['Rubik',sans-serif] font-normal leading-[1.68] relative shrink-0 text-[#1e4a35] text-[14px] tracking-[0.42px] w-full">
									Explore our wide range of fresh and dry
									products online
								</p>
							</div>
						</div>

						<div
							className="absolute left-[560px] top-[245px] h-[200px] w-[205.303px]"
							data-name="Group">
							<KenyanBuyersSvgs.KenyanBuyersSvg31 />
						</div>
						<div className="absolute left-[690px] top-[440px] content-stretch flex gap-[16px] items-start">
							<div className="flex size-[40px] shrink-0 items-center justify-center rounded-full bg-[#85a687] font-['Rubik',sans-serif] text-[16px] font-medium tracking-[0.48px] text-[#e6e6e6]">
								3
							</div>
							<div className="content-stretch flex flex-col gap-[16px] items-start not-italic relative shrink-0 w-[204px]">
								<p className="font-['Fraunces',serif] font-normal leading-[normal] relative shrink-0 text-[#0f251b] text-[22px] tracking-[0.66px] w-full">
									Place Order
								</p>
								<p className="font-['Rubik',sans-serif] font-normal leading-[1.68] relative shrink-0 text-[#1e4a35] text-[14px] tracking-[0.42px] w-full">
									Select your delivery window and checkout
									your cart
								</p>
							</div>
						</div>

						<div
							className="absolute right-[70px] top-[45px] h-[198.445px] w-[203.707px]"
							data-name="Vector">
							<KenyanBuyersSvgs.KenyanBuyersSvg32 />
						</div>
						<div className="absolute right-[5px] top-[260px] content-stretch flex gap-[16px] items-start">
							<div className="flex size-[40px] shrink-0 items-center justify-center rounded-full bg-[#ebc194] font-['Rubik',sans-serif] text-[16px] font-medium tracking-[0.48px] text-[#2b1a08]">
								4
							</div>
							<div className="content-stretch flex flex-col gap-[16px] items-start not-italic relative shrink-0 w-[204px]">
								<p className="font-['Fraunces',serif] font-normal leading-[normal] relative shrink-0 text-[#0f251b] text-[22px] tracking-[0.66px] w-full">
									Enjoy Delivery
								</p>
								<p className="font-['Rubik',sans-serif] font-normal leading-[1.68] relative shrink-0 text-[#1e4a35] text-[14px] tracking-[0.42px] w-full">
									Receive fresh, high quality ingredients
									directly to your doorstep
								</p>
							</div>
						</div>

						<div
							className="absolute left-[220px] top-[55px] h-[145.923px] w-[143.362px]"
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
					className="relative z-10 flex flex-col items-center gap-[56px] pt-[120px] pb-[96px] md:gap-[80px] md:pt-[184px] md:pb-[120px]">
					<p className="font-['Fraunces',serif] font-normal leading-[normal] not-italic text-[#0f251b] text-[36px] md:text-[48px] text-center tracking-[1.44px] w-full max-w-[800px]">
						Hear from businesses making an impact with Farm to Feed.
					</p>
					<div className="content-stretch flex flex-col gap-[24px] items-center justify-center relative w-full lg:flex-row lg:gap-[40px]">
						{localBuyerTestimonialControls.map((Control) => (
							<Control key={Control.name} />
						))}
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
											className="absolute inset-[48.28%_18.79%_8.68%_66.58%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-1.17px_-0.16px] mask-size-[122.51px_118.116px]"
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
