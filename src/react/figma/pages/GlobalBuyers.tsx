import * as GlobalBuyersSvgs from "../imports/BuyFromUsExport/globalBuyers-inline-svgs";
import {
	Frame41,
	Frame44,
	Frame46,
	Frame47,
	Frame50,
	Frame52,
	Frame54,
	Frame62,
	Frame65,
	Frame69,
	Frame74,
	Frame78,
	Frame81,
} from "../imports/BuyFromUsExport/BuyFromUsExport";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ContentContainer } from "../components/layout/ContentContainer";

import imgVector from "../../../assets/figma/717c282573f6a51e2b10095e5f55c11d4d2af63b.png?url";
import imgVector1 from "../../../assets/figma/69ef415b99d59a8e413a8dec8a5799dcd5f264d5.png?url";
import imgRectangle5 from "../../../assets/figma/0d1e68422d4b415bcfddf55f3e0d18a4ba2ed80d.png?url";

import { BorderTopKenyanBuyersSvg } from "../imports/BuyFromUsLocal-1/border-top-kenyan-buyers";
import { sectionSpacing } from "../components/layout/spacing";
import { typeStyles } from "../components/layout/typography";
const exportProductCards = [Frame41, Frame44, Frame46, Frame47];
const qualityCards = [Frame50, Frame52, Frame54];
const impactPrincipleRows = [
	[Frame62, Frame65],
	[Frame69, Frame74],
	[Frame78, Frame81],
];
export default function GlobalBuyers() {
	return (
		<div
			className="bg-white flex flex-col items-start relative w-full"
			data-name="Buy from us - export">
			{/* Hero */}
			<div
				className="bg-[#4C352B] min-h-[600px] md:min-h-[800px] lg:min-h-[926px] overflow-clip relative shrink-0 w-full"
				data-name="Wireframe - 40">
				<div
					className="absolute flex inset-[-19.8%_-5.56%_0_-41.25%] items-center justify-center"
					style={{
						containerType: "size",
					}}>
					<div className="-rotate-90 flex-none h-[100cqw] w-[100cqh]">
						<div className="relative size-full" data-name="Vector">
							<img
								alt=""
								className="absolute block inset-0 max-w-none size-full"
								height="2114"
								src={imgVector}
								width="1109.355"
							/>
						</div>
					</div>
				</div>
				<ContentContainer size="wide" className="pt-20 pb-30 md:pt-44">
					<div className="flex flex-col gap-10 items-center relative">
						<div className="flex flex-col gap-10 items-center not-italic relative shrink-0 text-center">
							<p
								className={`${typeStyles.heroTitleLarge} max-w-[688px] relative shrink-0 text-black w-full`}>
								<span className="leading-normal text-[#0f251b]">
									Global sourcing for
								</span>
								<span className="leading-normal">
									<br aria-hidden="true" />
								</span>
								<span className="leading-normal text-green-500">
									Kenyan ingredients
								</span>
							</p>
							<p
								className={`${typeStyles.bodyLead} max-w-[488px] relative shrink-0 text-green-500 w-full`}>
								Connect directly with reliable, sustainable
								supply chains. From our farmers to your
								processing facilities worldwide.
							</p>
						</div>
						<div className="flex flex-col items-center relative shrink-0">
							<div className="bg-white h-[68px] relative rounded-[40px] shrink-0 w-full max-w-[620px]">
								<div className="flex gap-2 items-center overflow-clip px-[19px] py-[13px] relative rounded-[inherit] size-full">
									<div
										className="overflow-clip relative shrink-0 size-6"
										data-name="credit_card">
										<div
											className="absolute left-[4px] size-[16px] top-[4px]"
											data-name="prime:envelope">
											<GlobalBuyersSvgs.GlobalBuyersSvg01 />
										</div>
									</div>
									<p
										className={`flex-[1_0_0] ${typeStyles.body} leading-normal min-w-px not-italic pr-[220px] relative text-[#808080]`}>
										email@example.com
									</p>
									<div
										className="absolute bg-green-500 flex items-start justify-center px-6 py-3 right-[9px] rounded-[40px] top-[9px]"
										data-name="order">
										<p
											className={`${typeStyles.body} not-italic relative shrink-0 text-[#eee] text-center whitespace-nowrap`}>
											Reach out to our team
										</p>
									</div>
								</div>
								<div
									aria-hidden="true"
									className="absolute border border-[#e6e6e6] border-solid inset-0 pointer-events-none rounded-[40px]"
								/>
							</div>
						</div>
					</div>
				</ContentContainer>
				<div
					className="absolute h-[43px] left-[calc(50%+35px)] top-[46px] w-[150px]"
					data-name="solution"
				/>
				<Header />
			</div>
			{/* Ingredients origin */}
			<div
				className="bg-[#4c352b] min-h-[500px] md:min-h-[650px] lg:min-h-[759px] overflow-clip relative shrink-0 w-full"
				data-name="Wireframe - 51">
				<div
					className="absolute flex h-[620.8px] items-center justify-center left-[79.31%] right-[-24.41%] top-[41px]"
					style={{
						containerType: "size",
					}}>
					<div className="flex-none h-[100cqw] rotate-90 w-[100cqh]">
						<div className="relative size-full">
							<GlobalBuyersSvgs.GlobalBuyersSvg02 />
						</div>
					</div>
				</div>
				<div
					className="absolute bottom-[520.68px] flex h-[169.318px] items-center justify-center left-[-548px] w-[829.172px]"
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
							<GlobalBuyersSvgs.GlobalBuyersSvg03 />
						</div>
					</div>
				</div>
				<div
					className="-translate-x-1/2 absolute flex h-[227.965px] items-center justify-center left-[calc(45.83%+19.92px)] top-[1426.15px] w-[531.966px]"
					style={
						{
							"--transform-inner-width": "1185",
							"--transform-inner-height": "21",
						} as React.CSSProperties
					}>
					<div className="flex-none rotate-[119.21deg] scale-y-93 skew-x-[21.13deg]">
						<div
							className="h-[443.81px] relative w-[189.687px]"
							data-name="Group">
							<GlobalBuyersSvgs.GlobalBuyersSvg04 />
						</div>
					</div>
				</div>
				<ContentContainer
					size="wide"
					className="relative z-10 py-[80px] lg:pt-[51px] lg:pb-[96px]">
					<div className="grid gap-12 lg:grid-cols-2 lg:items-start">
						<div className="flex flex-col gap-10 items-start not-italic relative w-full max-w-[525px]">
							<div className="flex flex-col gap-10 items-start relative shrink-0">
								<p
									className={`${typeStyles.body} relative shrink-0 text-orange-500 whitespace-nowrap`}>
									Kenya Grows It
								</p>
								<div
									className={`${typeStyles.heroTitleLarge} leading-zero relative shrink-0 text-[#c2ce86] w-full max-w-[519px] whitespace-pre-wrap`}>
									<p className="leading-normal mb-0">{`Where great ingredients `}</p>
									<p className="leading-normal">begin</p>
								</div>
								<p
									className={`${typeStyles.bodyLead} relative shrink-0 text-white w-full max-w-[515px]`}>{`Kenya's diverse climates and fertile soils produce a rich variety of herbs, spices, fruits, and vegetables year-round. Yet much of this agricultural bounty leaves the country with little processing or value addition.`}</p>
							</div>
							<p
								className={`${typeStyles.body} relative shrink-0 text-white w-full max-w-[515px]`}>
								Farm to Feed works with farmers and local
								processors to bring Kenyan ingredients to global
								markets — while ensuring more value stays where
								the food is grown.
							</p>
						</div>
						<div className="relative h-[360px] w-full max-w-[574px] md:h-[552px]">
							<div
								className="absolute flex h-[360px] items-center justify-center left-0 top-[40px] w-full md:h-[555.649px] md:left-[40.82px] md:top-[61.68px] md:w-[574.366px]"
								style={
									{
										"--transform-inner-width": "1185",
										"--transform-inner-height": "21",
									} as React.CSSProperties
								}>
								<div className="flex-none rotate-[9.87deg]">
									<div
										className="h-[320px] relative w-[335px] md:h-119.25 md:w-125"
										data-name="Vector">
										<GlobalBuyersSvgs.GlobalBuyersSvg05 />
									</div>
								</div>
							</div>
							<div
								className="absolute h-[360px] left-0 top-0 w-full max-w-129.25 md:h-[552px]"
								data-name="Vector">
								<img
									alt=""
									className="absolute block inset-0 max-w-none size-full"
									height="552"
									src={imgVector1}
									width="517"
								/>
							</div>
						</div>
					</div>
				</ContentContainer>
			</div>
			{/* Partner in flavour */}
			<div
				className="bg-white min-h-[600px] md:min-h-[750px] overflow-clip relative shrink-0 w-full"
				data-name="Wireframe - 11">
				<ContentContainer size="wide" className="pt-48 pb-24">
					<div className="flex flex-col gap-8 items-center relative w-full">
						<div className="flex flex-col gap-8 items-center max-w-[1052px] not-italic relative shrink-0 text-center w-full">
							<p
								className={`${typeStyles.body} font-medium relative shrink-0 text-orange-500 w-full max-w-[718px]  -mb-5`}>{` We Source It`}</p>
							<p
								className={`${typeStyles.heroTitle} relative shrink-0 text-[#0f251b] w-full`}>
								Your Partner in Flavour
							</p>
							<p
								className={`${typeStyles.body} relative shrink-0 text-green-500 w-full max-w-[718px]`}>
								With its rich agricultural diversity, Kenya
								offers exceptional potential for ingredient
								sourcing. We supply what you need.
							</p>
						</div>
						<div className="flex flex-col items-start justify-center relative shrink-0 w-full">
							<div className="flex flex-col gap-10 items-center justify-center relative shrink-0 w-full lg:flex-row lg:gap-8">
								<div className="absolute hidden h-[319px] items-center justify-center left-[486px] top-[20px] w-[327px] lg:flex">
									<div className="-scale-y-100 flex-none rotate-180">
										<div
											className="h-[319px] relative w-[327px]"
											data-name="Vector">
											<GlobalBuyersSvgs.GlobalBuyersSvg06 />
										</div>
									</div>
								</div>
								<div className="flex flex-[1_0_0] flex-col gap-8 items-start justify-center min-w-px relative">
									<div className="flex flex-col items-center relative rounded-[30px] shrink-0 w-full">
										<div className="flex flex-col gap-8 items-center justify-center relative shrink-0">
											<div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-zero place-items-start relative shrink-0">
												<div className="col-1 flex h-38.5 items-center justify-center ml-0 mt-0 relative row-1 w-39.5">
													<div className="-scale-y-100 flex-none rotate-180">
														<div
															className="h-38.5 relative w-39.5"
															data-name="Vector">
															<GlobalBuyersSvgs.GlobalBuyersSvg07 />
														</div>
													</div>
												</div>
												<div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[56.25px] mt-[32.99px] place-items-start relative row-1">
													<div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1">
														<div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[0.12px] mt-[21.73px] place-items-start relative row-1">
															<div
																className="col-1 h-[67.62px] ml-0 mt-0 relative row-1 w-[38.882px]"
																data-name="Isolation_Mode">
																<GlobalBuyersSvgs.GlobalBuyersSvg08 />
															</div>
														</div>
														<div
															className="col-1 flex h-[21.731px] items-center justify-center ml-0 mt-0 relative row-1 w-[25.226px]"
															style={
																{
																	"--transform-inner-width":
																		"1185",
																	"--transform-inner-height":
																		"21",
																} as React.CSSProperties
															}>
															<div className="flex-none rotate-[-5.65deg]">
																<div
																	className="h-[19.519px] relative w-[23.417px]"
																	data-name="Vector">
																	<GlobalBuyersSvgs.GlobalBuyersSvg09 />
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
											<p
												className={`${typeStyles.cardTitle} not-italic relative shrink-0 text-black text-center whitespace-nowrap`}>
												Single origin
											</p>
										</div>
									</div>
									<div className="flex flex-col items-center relative rounded-[30px] shrink-0 w-full">
										<div className="flex flex-col gap-8 items-center justify-center relative shrink-0">
											<div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-zero place-items-start relative shrink-0">
												<div className="col-1 flex h-38.5 items-center justify-center ml-0 mt-0 relative row-1 w-39.5">
													<div className="-scale-y-100 flex-none rotate-180">
														<div
															className="h-38.5 relative w-39.5"
															data-name="Vector">
															<GlobalBuyersSvgs.GlobalBuyersSvg10 />
														</div>
													</div>
												</div>
												<div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[28.51px] mt-[26.25px] place-items-start relative row-1">
													<div
														className="col-1 flex items-center justify-center ml-0 mt-0 relative row-1 size-[101.745px]"
														style={
															{
																"--transform-inner-width":
																	"1185",
																"--transform-inner-height":
																	"21",
															} as React.CSSProperties
														}>
														<div className="flex-none rotate-[-102.58deg]">
															<div
																className="relative size-[85.228px]"
																data-name="Isolation_Mode">
																<GlobalBuyersSvgs.GlobalBuyersSvg11 />
															</div>
														</div>
													</div>
													<div className="col-1 h-[24.995px] ml-[38.01px] mt-[39.76px] relative row-1 w-[25.702px]">
														<div className="absolute inset-[-1.2%_-1.17%]">
															<GlobalBuyersSvgs.GlobalBuyersSvg12 />
														</div>
													</div>
												</div>
											</div>
											<p
												className={`${typeStyles.cardTitle} not-italic relative shrink-0 text-black text-center whitespace-nowrap`}>
												Sustainably sourced
											</p>
										</div>
									</div>
								</div>
								<div className="h-[320px] relative shrink-0 w-full max-w-[405px] md:h-[394px]">
									<img
										alt=""
										className="absolute inset-0 max-w-none object-contain pointer-events-none size-full"
										src={imgRectangle5}
									/>
								</div>
								<div className="flex flex-[1_0_0] flex-col gap-8 items-start justify-center min-w-px relative">
									<div className="flex flex-col items-center relative rounded-[30px] shrink-0 w-full">
										<div className="flex flex-col gap-8 items-center justify-center relative shrink-0">
											<div className="h-38.5 relative shrink-0 w-39.5">
												<GlobalBuyersSvgs.GlobalBuyersSvg13 />
											</div>
											<p
												className={`${typeStyles.cardTitle} not-italic relative shrink-0 text-black text-center whitespace-nowrap`}>
												Traceable to farmers
											</p>
										</div>
									</div>
									<div className="flex flex-col items-center relative rounded-[30px] shrink-0 w-full">
										<div className="flex flex-col gap-8 items-center justify-center relative shrink-0">
											<div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-zero place-items-start relative shrink-0">
												<div className="col-1 flex h-38.5 items-center justify-center ml-0 mt-0 relative row-1 w-39.5">
													<div className="-scale-y-100 flex-none rotate-180">
														<div
															className="h-38.5 relative w-39.5"
															data-name="Vector">
															<GlobalBuyersSvgs.GlobalBuyersSvg14 />
														</div>
													</div>
												</div>
												<div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[6.38px] mt-[16px] place-items-start relative row-1">
													<div
														className="col-1 flex h-[138.023px] items-center justify-center ml-0 mt-0 relative row-1 w-[137.58px]"
														style={
															{
																"--transform-inner-width":
																	"1185",
																"--transform-inner-height":
																	"21",
															} as React.CSSProperties
														}>
														<div className="flex-none rotate-[-138.23deg]">
															<div
																className="h-[100.378px] relative w-[94.812px]"
																data-name="Isolation_Mode">
																<GlobalBuyersSvgs.GlobalBuyersSvg15 />
															</div>
														</div>
													</div>
												</div>
											</div>
											<p
												className={`${typeStyles.cardTitle} not-italic relative shrink-0 text-black text-center whitespace-nowrap`}>
												Local value addition
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</ContentContainer>

				<div
					className="absolute flex inset-[-16.55%_-0.63%_90.18%_-3.75%] items-center justify-center"
					style={{
						containerType: "size",
					}}>
					<div className="flex-none h-[100cqw] rotate-90 w-[100cqh]">
						<div className="relative size-full" data-name="Vector">
							<GlobalBuyersSvgs.GlobalBuyersSvg16 />
						</div>
					</div>
				</div>
			</div>
			{/* Sourcing process */}
			<div
				className="bg-white overflow-visible relative shrink-0 w-full"
				data-name="Wireframe - 42">
				<ContentContainer
					size="wide"
					className={`flex flex-col items-center gap-[80px] py-2`}>
					<div className="flex flex-col gap-8 items-center max-w-[1052px] not-italic relative text-center w-full">
						<p
							className={`${typeStyles.body} font-medium relative shrink-0 text-orange-500 w-full max-w-[718px] -mb-5`}>
							We Connect It
						</p>
						<p
							className={`${typeStyles.heroTitle} relative shrink-0 text-[#0f251b] w-full`}>
							From Kenyan farms to global buyers
						</p>
						<p
							className={`${typeStyles.body} relative shrink-0 text-green-500 w-full max-w-[718px]`}>
							We build demand-driven supply chains. Our model
							matches your ingredient needs with reliable supply
							from our trusted network. We offer different product
							lines that harness dehydration and modern technology
							to capture peak season freshness.
						</p>
					</div>
					<div className="grid gap-10 relative w-full sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
						{exportProductCards.map((ProductCard) => (
							<ProductCard key={ProductCard.name} />
						))}
					</div>
					{/* <div className="flex flex-col gap-8 items-center max-w-[1052px] not-italic relative text-center w-full">
						<p
							className={`${typeStyles.body} font-medium relative shrink-0 text-orange-500 w-full max-w-[718px]`}>
							Global Readiness
						</p>
						<p
							className={`${typeStyles.heroTitle} relative shrink-0 text-[#0f251b] w-full`}>
							Our Export Ready Products
						</p>
						<p
							className={`${typeStyles.body} relative shrink-0 text-green-500 w-full max-w-[718px]`}>
							Our current batch is processed, certified, and ready
							for immediate global shipment to your facility.
						</p>
					</div> */}
				</ContentContainer>
			</div>
			{/* Quality */}
			<div
				className="bg-olive-200 min-h-[500px] md:min-h-[600px] overflow-clip relative shrink-0 w-full"
				data-name="Wireframe - 52">
				<ContentContainer
					size="wide"
					className={sectionSpacing.default}>
					<div className="flex flex-col gap-8 items-center relative w-full">
						<div className="flex flex-col gap-8 items-center max-w-[1052px] not-italic relative shrink-0 text-center w-full">
							<p
								className={`${typeStyles.body} font-medium relative shrink-0 text-orange-500 w-full max-w-[718px]`}>
								You Receive It
							</p>
							<p
								className={`${typeStyles.heroTitle} relative shrink-0 text-[#0f251b] w-full`}>
								Quality You Can Trust
							</p>
							<p
								className={`${typeStyles.body} relative shrink-0 text-green-500 w-full max-w-[718px]`}>
								We work closely with farmers and processors to
								ensure ingredients meet international quality
								standards.
							</p>
						</div>
						<div className="flex flex-col items-start relative shrink-0 w-full">
							<div className="flex flex-col gap-8 items-stretch relative shrink-0 w-full lg:flex-row lg:items-start">
								{qualityCards.map((QualityCard) => (
									<QualityCard key={QualityCard.name} />
								))}
							</div>
						</div>
					</div>
				</ContentContainer>
				<div className="hidden" data-name="order">
					<p
						className={`${typeStyles.body} not-italic relative shrink-0 text-[#eee] text-center whitespace-nowrap`}>
						Learn More
					</p>
				</div>
				<BorderTopKenyanBuyersSvg
					className="absolute inset-x-0 top-0 w-full max-w-none pointer-events-none select-none"
					fill="white"
				/>
			</div>
			{/* Impact principles */}
			<div
				className="bg-olive-200 overflow-clip relative shrink-0 w-full"
				data-name="Wireframe - 54">
				<ContentContainer
					size="wide"
					className={`flex flex-col gap-16 md:gap-[96px] ${sectionSpacing.default}`}>
					<div className="flex flex-col gap-8 items-start max-w-[737px] not-italic relative w-full">
						<p
							className={`${typeStyles.caption} relative shrink-0 text-orange-500 w-full max-w-[624px]`}>
							You bring it to the World
						</p>
						<p
							className={`${typeStyles.heroTitle} relative shrink-0 text-[#0f251b] w-full`}>
							Sourcing that strengthens the food system.
						</p>
						<p
							className={`${typeStyles.bodyLead} relative shrink-0 text-green-500 text-lg md:text-xl w-full max-w-[624px]`}>
							Our ingredients contribute to a more resilient and
							sustainable global food system. We operate on six
							core impact principles.
						</p>
					</div>
					<div className="flex flex-col items-start relative w-full max-w-[1274px]">
						<div className="flex flex-col gap-8 items-start relative shrink-0 w-full">
							{impactPrincipleRows.map((row, index) => (
								<div
									className="flex flex-col gap-8 items-stretch relative shrink-0 w-full lg:flex-row lg:items-center"
									key={index}>
									{row.map((Card) => (
										<Card key={Card.name} />
									))}
								</div>
							))}
						</div>
					</div>
				</ContentContainer>
			</div>
			{/* CTA */}
			<div
				className="bg-olive-200 relative shrink-0 w-full"
				data-name="Wireframe - 36">
				<ContentContainer
					size="wide"
					className="flex justify-center py-[80px] lg:pt-2 lg:pb-[80px]">
					<div
						className="bg-[#4c352b] min-h-[520px] overflow-clip relative rounded-[40px] w-full max-w-[1216px] flex items-center justify-center p-6 md:p-10"
						data-name="Wireframe - 37">
						<div className="absolute h-[265.41px] left-[calc(83.33%-80.33px)] opacity-28 top-[328px] w-[361.514px]">
							<div
								className="absolute bottom-0 h-[265.41px] right-0 w-[361.514px]"
								data-name="Group">
								<GlobalBuyersSvgs.GlobalBuyersSvg17 />
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
										<GlobalBuyersSvgs.GlobalBuyersSvg18 />
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
										<GlobalBuyersSvgs.GlobalBuyersSvg19 />
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
										<GlobalBuyersSvgs.GlobalBuyersSvg20 />
									</div>
								</div>
							</div>
						</div>
						<div className="flex flex-col gap-10 items-center relative rounded-[40px] w-full z-10">
							<p
								className={`${typeStyles.heroTitle} not-italic relative shrink-0 text-yellow-200 text-center w-full max-w-[800px]`}>
								Ready to source differently?
							</p>
							<div
								className={`${typeStyles.bodyLead} leading-zero not-italic relative shrink-0 text-center text-white w-full max-w-148 whitespace-pre-wrap`}>
								<p className="leading-copy mb-0">{`Farm to Feed partners with global buyers looking for reliable sourcing, transparent supply chains, and ingredients that deliver both quality and impact. `}</p>
								<p>
									<span className="leading-copy text-orange-500">
										Read more
									</span>
									<span className="leading-copy">{` on our impact page.`}</span>
								</p>
							</div>
							<div className="flex flex-col items-center relative shrink-0">
								<div className="bg-white h-[68px] relative rounded-[40px] shrink-0 w-full max-w-[620px]">
									<div className="flex gap-2 items-center overflow-clip px-[19px] py-[13px] relative rounded-[inherit] size-full">
										<div
											className="overflow-clip relative shrink-0 size-6"
											data-name="credit_card">
											<div
												className="absolute inset-[16.02%_7.69%_16.04%_7.71%]"
												data-name="Vector">
												<GlobalBuyersSvgs.GlobalBuyersSvg21 />
											</div>
										</div>
										<p
											className={`flex-[1_0_0] ${typeStyles.body} leading-normal min-w-px not-italic pr-[220px] relative text-[#808080]`}>
											email@example.com
										</p>
										<div
											className="absolute bg-orange-500 flex items-start justify-center px-6 py-3 right-[9px] rounded-[40px] top-[9px]"
											data-name="order">
											<p
												className={`${typeStyles.body} not-italic relative shrink-0 text-[#f7f7f7] text-center whitespace-nowrap`}>
												Reach out to our team
											</p>
										</div>
									</div>
									<div
										aria-hidden="true"
										className="absolute border border-[#b3b3b3] border-solid inset-0 pointer-events-none rounded-[40px]"
									/>
								</div>
							</div>
						</div>
					</div>
				</ContentContainer>
				<div className="absolute inset-[92.54%_0_0_0]">
					<GlobalBuyersSvgs.GlobalBuyersSvg22 />
				</div>
			</div>
			{/* Footer */}
			<Footer />
		</div>
	);
}
