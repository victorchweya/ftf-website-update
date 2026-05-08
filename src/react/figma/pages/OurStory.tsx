import * as OurStorySvgs from "../imports/OurStory/ourStory-inline-svgs";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ContentContainer } from "../components/layout/ContentContainer";
import svgPaths from "../imports/OurStory-1/svg-2nclsq0k1o";
import imgVector2 from "../../../assets/figma/36ea9060f2458caafd0233795659d47afa93c78f.png?url";
import imgVector3 from "../../../assets/figma/7033551c0dc4ae4878b1a9ef568e37660c0ce0a8.png?url";
import ourStoryDivider from "../imports/OurStory-1/ourstorydivider.png?url";
import { sectionSpacing } from "../components/layout/spacing";
import { typeStyles } from "../components/layout/typography";
const timelineMilestones = [
	{
		label: "Then",
		width: 34,
		zIndex: 4,
		active: true,
	},
	{
		label: "2020",
		width: 36,
		zIndex: 3,
	},
	{
		label: "2021",
		width: 33,
		zIndex: 2,
	},
	{
		label: "Now",
		width: 30,
		zIndex: 1,
	},
];
const storyPrinciples = [
	{
		icon: "vision",
		label: "Vision",
		body: "Unlock Africa's potential to bring the world high-quality, impactful products",
		cardTop: "86px",
	},
	{
		icon: "mission",
		label: "Mission",
		body: "To build a food system that is sustainable and equitable",
		cardTop: "92.5px",
	},
];
const platformSteps = [
	{
		illustration: "farmers",
		title: "From farmers...",
		body: "Aggregating full harvests and producing ingredients that strengthen farmer resilience",
	},
	{
		illustration: "platform",
	},
	{
		illustration: "customers",
		title: "...to B2B customers",
		body: "Delivering traceable, sustainable ingredients to buyers through a tech-driven supply chain.",
	},
];
export default function OurStory() {
	return (
		<div
			className="bg-white flex flex-col items-start relative w-full"
			data-name="Our Story">
			{/* Hero */}
			<div
				className="relative shrink-0 w-full"
				data-name="Wireframe - 53">
				<Header />
				<ContentContainer size="wide" className="h-full ">
					<div className="relative grid w-full min-h-[540px] max-w-[913px] mt-20 mx-auto items-center gap-8 md:grid-cols-[minmax(0,570px)_279px] md:gap-16">
						<p className={`${typeStyles.heroTitleLarge} not-italic text-green-800`}>
							Farm to Feed began with a simple but urgent idea
						</p>
						<p className="font-normal leading-copy not-italic text-green-500 text-lg tracking-body">{`Tackling food loss in Kenya's fresh produce supply chain. We introduced grade rescue to the Nairobi market, creating a pathway for vegetables that might otherwise go to waste.`}</p>
					</div>
				</ContentContainer>

				<div className="relative" data-name="our-story-divider">
					<img
						alt=""
						className="w-full h-full object-cover"
						src={ourStoryDivider}
					/>
					<div
						className="absolute hidden h-[198px] right-50 top-0 w-[203.25px] md:block"
						data-name="Group">
						<OurStorySvgs.OurStorySvg46 />
					</div>
				</div>
			</div>
			{/* Origin and mission */}
			<div
				className="bg-white overflow-clip relative shrink-0 w-full"
				data-name="Wireframe - 10">
				<ContentContainer size="wide" className="h-full">
					<div className="relative flex h-full flex-col items-center min-h-[540px] max-w-[760px] mt-20 mx-auto gap-8 md:gap-16">
						<p className={`${typeStyles.sectionTitle} not-italic text-[#0f251b] text-center w-full max-w-148`}>{` Connecting production to dependable demand...`}</p>
						<div className={`${typeStyles.body} mt-[24px] md:mt-[55px] leading-zero not-italic text-[#0f251b] text-center w-full max-w-148 whitespace-pre-wrap`}>
							<p className="leading-copy mb-0">{`As we worked alongside our customers and farmers, we quickly learned that food loss is one part of a much larger challenge. Farmers needed more than a solution for imperfect produce. They needed reliable market access for their full harvest.   `}</p>
							<p className="leading-copy">{`Since those early days, Farm to Feed has grown into a trusted off taker and partner for farmers, helping to address one of Kenya’s most persistent agricultural bottlenecks: connecting production to dependable demand. `}</p>
						</div>
						<div className=" flex flex-col gap-12 mb-24 items-center md:flex-row md:gap-16 md:mb-40 ">
							{storyPrinciples.map((principle) => (
								<div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
									<div
										className="col-1 h-[336px] ml-0 relative row-1 w-75.75"
										data-name="Vector"
										style={{
											marginTop: principle.cardTop,
										}}>
										<div className="absolute inset-[-1.19%_-7.92%_-13.1%_-7.92%]">
											<OurStorySvgs.OurStorySvg47 />
										</div>
									</div>
									<div className="col-1 flex flex-col gap-12 items-center ml-11.5 mt-0 relative row-1 w-54.25">
										{principle.icon === "vision" ? (
											<div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-zero place-items-start relative shrink-0">
												<div
													className="col-1 h-[124px] ml-0 mt-0 relative row-1 w-[127.288px]"
													data-name="Group">
													<OurStorySvgs.OurStorySvg01 />
												</div>
												<div
													className="col-1 h-[64.416px] ml-[39.9px] mt-[29.59px] relative row-1 w-[57.169px]"
													data-name="Isolation_Mode">
													<OurStorySvgs.OurStorySvg02 />
												</div>
											</div>
										) : (
											<div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-zero place-items-start relative shrink-0">
												<div className="col-1 flex h-[124px] items-center justify-center ml-0 mt-0 relative row-1 w-[127.221px]">
													<div className="-scale-y-100 flex-none rotate-180">
														<div
															className="h-[124px] relative w-[127.221px]"
															data-name="Vector">
															<OurStorySvgs.OurStorySvg03 />
														</div>
													</div>
												</div>
												<div
													className="col-1 h-[51.532px] ml-[26.17px] mt-[41.87px] overflow-clip relative row-1 w-[74.883px]"
													data-name="Isolation_Mode">
													<div
														className="absolute inset-[-0.01%_-0.02%_-0.02%_0]"
														data-name="Vector">
														<OurStorySvgs.OurStorySvg04 />
													</div>
												</div>
											</div>
										)}
										<div className="flex flex-col gap-6 items-center not-italic relative shrink-0 text-center w-full">
											<p className={`${typeStyles.body} relative shrink-0 text-[#85a687] whitespace-nowrap`}>
												{principle.label}
											</p>
											<p className={`${typeStyles.cardTitle} relative shrink-0 text-[#0f251b] w-full`}>
												{principle.body}
											</p>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</ContentContainer>
				<div
					className="-translate-x-1/2 -translate-y-1/2 absolute hidden h-[601px] left-[33.5px] top-[calc(20%+266px)] w-[441px] lg:block"
					data-name="Vector">
					<img
						alt=""
						className="absolute block inset-0 max-w-none size-full"
						height="601"
						src={imgVector2}
						width="441"
					/>
				</div>
				<div className="-translate-x-1/2 -translate-y-1/2 absolute hidden h-[601px] items-center justify-center left-[calc(100%-46.5px)] top-[calc(20%+369px)] w-[441px] lg:flex">
					<div className="-scale-y-100 flex-none rotate-180">
						<div
							className="h-[601px] relative w-[441px]"
							data-name="Vector">
							<img
								alt=""
								className="absolute block inset-0 max-w-none size-full"
								height="601"
								src={imgVector3}
								width="441"
							/>
						</div>
					</div>
				</div>
			</div>
			{/* Platform */}
			<div
				className="bg-white min-h-[500px] md:min-h-[580px] overflow-clip relative shrink-0 w-full"
				data-name="Wireframe - 54">
				<ContentContainer size="wide" className={sectionSpacing.compact}>
					<div className="relative flex flex-col items-center gap-16 md:gap-[124px]">
						<div
							className="absolute hidden md:flex h-[87px] items-center justify-center left-1/2 -translate-x-1/2 top-58 w-[485px]"
							style={{
								containerType: "size",
							}}>
							<div className="flex-none h-[100cqw] rotate-90 w-[100cqh]">
								<div
									className="relative size-full"
									data-name="Vector">
									<OurStorySvgs.OurStorySvg48 />
								</div>
							</div>
						</div>
						<div className="flex flex-col items-center relative w-full max-w-[758px]">
							<p className={`${typeStyles.sectionTitle} not-italic relative shrink-0 text-[#030806] text-center w-full`}>
								Farm to Feed is the tech-enabled platform
							</p>
						</div>
						<div className="flex flex-col md:flex-row gap-12 md:gap-8 items-center md:items-start relative w-full max-w-[952px]">
							{platformSteps.map((step) =>
								!step.title || !step.body ? (
									<div className="flex flex-col items-center pt-[25px] relative w-full md:flex-[1_0_0] md:min-w-px">
										{step.illustration === "farmers" ? (
											<div className="h-[198.445px] relative shrink-0 w-[203.707px]">
												<OurStorySvgs.OurStorySvg05 />
											</div>
										) : step.illustration === "platform" ? (
											<div className="h-[198.445px] relative shrink-0 w-[203.707px]">
												<OurStorySvgs.OurStorySvg06 />
											</div>
										) : (
											<div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-zero place-items-start relative shrink-0">
												<div
													className="col-1 h-[198.445px] ml-0 mt-0 relative row-1 w-[203.707px]"
													data-name="Vector">
													<OurStorySvgs.OurStorySvg07 />
												</div>
												<div
													className="col-1 h-[37.983px] ml-[93px] mt-[21px] relative row-1 w-[27px]"
													data-name="Vector">
													<OurStorySvgs.OurStorySvg08 />
												</div>
												<div
													className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[46.64px] mt-[63.7px] place-items-start relative row-1"
													data-name="Group">
													<div
														className="col-1 h-[5.411px] ml-[79.54px] mt-[35.57px] relative row-1 w-[2.257px]"
														data-name="Vector">
														<OurStorySvgs.OurStorySvg09 />
													</div>
													<div
														className="col-1 h-[5.146px] ml-[99.54px] mt-[41.48px] relative row-1 w-[1.003px]"
														data-name="Vector">
														<OurStorySvgs.OurStorySvg10 />
													</div>
													<div
														className="col-1 h-[7.402px] ml-[82.33px] mt-[31.93px] relative row-1 w-[2.534px]"
														data-name="Vector">
														<OurStorySvgs.OurStorySvg11 />
													</div>
													<div
														className="col-1 h-[7.174px] ml-[96.71px] mt-[28.99px] relative row-1 w-[7.819px]"
														data-name="Vector">
														<OurStorySvgs.OurStorySvg12 />
													</div>
													<div
														className="col-1 h-[43.893px] ml-[79.51px] mt-[36.8px] relative row-1 w-[23.996px]"
														data-name="Vector">
														<OurStorySvgs.OurStorySvg13 />
													</div>
													<div
														className="col-1 h-[60.621px] ml-[77.69px] mt-[21.93px] relative row-1 w-[28.025px]"
														data-name="Vector">
														<OurStorySvgs.OurStorySvg14 />
													</div>
													<div
														className="col-1 h-[10.264px] ml-[78.43px] mt-[30.79px] relative row-1 w-[7.732px]"
														data-name="Vector">
														<OurStorySvgs.OurStorySvg15 />
													</div>
													<div
														className="col-1 h-[10.152px] ml-[93.81px] mt-[38.69px] relative row-1 w-[7.796px]"
														data-name="Vector">
														<OurStorySvgs.OurStorySvg16 />
													</div>
													<div
														className="col-1 h-[8.116px] ml-[91.19px] mt-[47.35px] relative row-1 w-[8.775px]"
														data-name="Vector">
														<OurStorySvgs.OurStorySvg17 />
													</div>
													<div
														className="col-1 h-[6.769px] ml-[76.05px] mt-[38.74px] relative row-1 w-[5.299px]"
														data-name="Vector">
														<OurStorySvgs.OurStorySvg18 />
													</div>
													<div
														className="col-1 h-[6.447px] ml-[74.83px] mt-[43.99px] relative row-1 w-[3.121px]"
														data-name="Vector">
														<OurStorySvgs.OurStorySvg19 />
													</div>
													<div
														className="col-1 h-[3.454px] ml-[73.46px] mt-[48.21px] relative row-1 w-[1.046px]"
														data-name="Vector">
														<OurStorySvgs.OurStorySvg20 />
													</div>
													<div
														className="col-1 h-[24.46px] ml-[36.67px] mt-[49.15px] relative row-1 w-[19.718px]"
														data-name="Vector">
														<OurStorySvgs.OurStorySvg21 />
													</div>
													<div
														className="col-1 h-[80px] ml-[26.36px] mt-[7.3px] relative row-1 w-[35px]"
														data-name="Vector">
														<OurStorySvgs.OurStorySvg22 />
													</div>
													<div
														className="col-1 h-[14.643px] ml-[44.34px] mt-[52.57px] relative row-1 w-[5.328px]"
														data-name="Vector">
														<OurStorySvgs.OurStorySvg23 />
													</div>
													<div
														className="col-1 h-[20.341px] ml-[44.78px] mt-[50.24px] relative row-1 w-[6.673px]"
														data-name="Vector">
														<OurStorySvgs.OurStorySvg24 />
													</div>
													<div
														className="col-1 h-[16.853px] ml-[47.23px] mt-[50.93px] relative row-1 w-[6.549px]"
														data-name="Vector">
														<OurStorySvgs.OurStorySvg25 />
													</div>
													<div
														className="col-1 h-[12.099px] ml-[37.75px] mt-[57.77px] relative row-1 w-[6.095px]"
														data-name="Vector">
														<OurStorySvgs.OurStorySvg26 />
													</div>
													<div
														className="col-1 h-[17.947px] ml-[42.05px] mt-[50.62px] relative row-1 w-[6.145px]"
														data-name="Vector">
														<OurStorySvgs.OurStorySvg27 />
													</div>
													<div
														className="col-1 h-[12.801px] ml-[40.75px] mt-[57.54px] relative row-1 w-[7.035px]"
														data-name="Vector">
														<OurStorySvgs.OurStorySvg28 />
													</div>
													<div
														className="col-1 h-[89.044px] ml-[40.11px] mt-0 relative row-1 w-[29.711px]"
														data-name="Vector">
														<OurStorySvgs.OurStorySvg29 />
													</div>
													<div
														className="col-1 h-[56.221px] ml-[45.8px] mt-[20.89px] relative row-1 w-[16.498px]"
														data-name="Vector">
														<OurStorySvgs.OurStorySvg30 />
													</div>
													<div
														className="col-1 h-[6.815px] ml-[78.88px] mt-[70.83px] relative row-1 w-[3.58px]"
														data-name="Vector">
														<OurStorySvgs.OurStorySvg31 />
													</div>
													<div
														className="col-1 h-[3.509px] ml-[83.02px] mt-[71.44px] relative row-1 w-[5.417px]"
														data-name="Vector">
														<OurStorySvgs.OurStorySvg32 />
													</div>
													<div
														className="col-1 h-[0.007px] ml-[91.97px] mt-[75.21px] relative row-1 w-0"
														data-name="Vector">
														<OurStorySvgs.OurStorySvg33 />
													</div>
													<div className="col-1 flex h-[57.474px] items-center justify-center ml-[70.36px] mt-[24.07px] relative row-1 w-[30.966px]">
														<div className="-scale-y-100 flex-none rotate-180">
															<div className="h-[57.474px] relative w-[30.966px]">
																<OurStorySvgs.OurStorySvg34 />
															</div>
														</div>
													</div>
													<div
														className="col-1 h-[54.75px] ml-[6.18px] mt-[19.8px] relative row-1 w-[40.737px]"
														data-name="Vector">
														<OurStorySvgs.OurStorySvg35 />
													</div>
													<div
														className="col-1 h-[4.319px] ml-[21.02px] mt-[28.01px] relative row-1 w-[7.269px]"
														data-name="Vector">
														<OurStorySvgs.OurStorySvg36 />
													</div>
													<div
														className="col-1 h-[2.896px] ml-[14.18px] mt-[32.24px] relative row-1 w-[3.279px]"
														data-name="Vector">
														<OurStorySvgs.OurStorySvg37 />
													</div>
													<div
														className="col-1 h-[3.763px] ml-[9.26px] mt-[35.73px] relative row-1 w-[5.239px]"
														data-name="Vector">
														<OurStorySvgs.OurStorySvg38 />
													</div>
													<div
														className="col-1 h-[32.622px] ml-[16.14px] mt-[36.21px] relative row-1 w-[19.745px]"
														data-name="Vector">
														<OurStorySvgs.OurStorySvg39 />
													</div>
													<div
														className="col-1 h-[30.573px] ml-[26.73px] mt-[29.99px] relative row-1 w-[17.151px]"
														data-name="Vector">
														<OurStorySvgs.OurStorySvg40 />
													</div>
													<div
														className="col-1 flex h-[60.714px] items-center justify-center ml-[46.36px] mt-[12.3px] relative row-1 w-[41.077px]"
														style={
															{
																"--transform-inner-width":
																	"1185",
																"--transform-inner-height":
																	"21",
															} as React.CSSProperties
														}>
														<div className="flex-none rotate-[-11.76deg]">
															<div className="h-[55.694px] relative w-[30.361px]">
																<OurStorySvgs.OurStorySvg41 />
															</div>
														</div>
													</div>
													<div
														className="col-1 h-[14.102px] ml-[47.29px] mt-[47.29px] relative row-1 w-[6.979px]"
														data-name="Vector">
														<OurStorySvgs.OurStorySvg42 />
													</div>
													<div
														className="col-1 h-[43.183px] ml-[6.1px] mt-[42.37px] relative row-1 w-[100.296px]"
														data-name="Vector">
														<OurStorySvgs.OurStorySvg43 />
													</div>
													<div
														className="col-1 flex h-[26.716px] items-center justify-center ml-0 mt-[66.85px] relative row-1 w-[113.379px]"
														style={
															{
																"--transform-inner-width":
																	"1185",
																"--transform-inner-height":
																	"21",
															} as React.CSSProperties
														}>
														<div className="-scale-y-100 flex-none rotate-[177.8deg]">
															<div
																className="h-[22.402px] relative w-[112.601px]"
																data-name="Vector">
																<OurStorySvgs.OurStorySvg44 />
															</div>
														</div>
													</div>
												</div>
											</div>
										)}
									</div>
								) : (
									<div className="flex flex-col gap-8 items-center relative w-full md:flex-[1_0_0] md:min-w-px md:gap-14">
										{step.illustration === "farmers" ? (
											<div className="h-[198.445px] relative shrink-0 w-[203.707px]">
												<OurStorySvgs.OurStorySvg05 />
											</div>
										) : step.illustration === "platform" ? (
											<div className="h-[198.445px] relative shrink-0 w-[203.707px]">
												<OurStorySvgs.OurStorySvg06 />
											</div>
										) : (
											<div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-zero place-items-start relative shrink-0">
												<div
													className="col-1 h-[198.445px] ml-0 mt-0 relative row-1 w-[203.707px]"
													data-name="Vector">
													<OurStorySvgs.OurStorySvg07 />
												</div>
												<div
													className="col-1 h-[37.983px] ml-[93px] mt-[21px] relative row-1 w-[27px]"
													data-name="Vector">
													<OurStorySvgs.OurStorySvg08 />
												</div>
												<div
													className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[46.64px] mt-[63.7px] place-items-start relative row-1"
													data-name="Group">
													<div
														className="col-1 h-[5.411px] ml-[79.54px] mt-[35.57px] relative row-1 w-[2.257px]"
														data-name="Vector">
														<OurStorySvgs.OurStorySvg09 />
													</div>
													<div
														className="col-1 h-[5.146px] ml-[99.54px] mt-[41.48px] relative row-1 w-[1.003px]"
														data-name="Vector">
														<OurStorySvgs.OurStorySvg10 />
													</div>
													<div
														className="col-1 h-[7.402px] ml-[82.33px] mt-[31.93px] relative row-1 w-[2.534px]"
														data-name="Vector">
														<OurStorySvgs.OurStorySvg11 />
													</div>
													<div
														className="col-1 h-[7.174px] ml-[96.71px] mt-[28.99px] relative row-1 w-[7.819px]"
														data-name="Vector">
														<OurStorySvgs.OurStorySvg12 />
													</div>
													<div
														className="col-1 h-[43.893px] ml-[79.51px] mt-[36.8px] relative row-1 w-[23.996px]"
														data-name="Vector">
														<OurStorySvgs.OurStorySvg13 />
													</div>
													<div
														className="col-1 h-[60.621px] ml-[77.69px] mt-[21.93px] relative row-1 w-[28.025px]"
														data-name="Vector">
														<OurStorySvgs.OurStorySvg14 />
													</div>
													<div
														className="col-1 h-[10.264px] ml-[78.43px] mt-[30.79px] relative row-1 w-[7.732px]"
														data-name="Vector">
														<OurStorySvgs.OurStorySvg15 />
													</div>
													<div
														className="col-1 h-[10.152px] ml-[93.81px] mt-[38.69px] relative row-1 w-[7.796px]"
														data-name="Vector">
														<OurStorySvgs.OurStorySvg16 />
													</div>
													<div
														className="col-1 h-[8.116px] ml-[91.19px] mt-[47.35px] relative row-1 w-[8.775px]"
														data-name="Vector">
														<OurStorySvgs.OurStorySvg17 />
													</div>
													<div
														className="col-1 h-[6.769px] ml-[76.05px] mt-[38.74px] relative row-1 w-[5.299px]"
														data-name="Vector">
														<OurStorySvgs.OurStorySvg18 />
													</div>
													<div
														className="col-1 h-[6.447px] ml-[74.83px] mt-[43.99px] relative row-1 w-[3.121px]"
														data-name="Vector">
														<OurStorySvgs.OurStorySvg19 />
													</div>
													<div
														className="col-1 h-[3.454px] ml-[73.46px] mt-[48.21px] relative row-1 w-[1.046px]"
														data-name="Vector">
														<OurStorySvgs.OurStorySvg20 />
													</div>
													<div
														className="col-1 h-[24.46px] ml-[36.67px] mt-[49.15px] relative row-1 w-[19.718px]"
														data-name="Vector">
														<OurStorySvgs.OurStorySvg21 />
													</div>
													<div
														className="col-1 h-[80px] ml-[26.36px] mt-[7.3px] relative row-1 w-[35px]"
														data-name="Vector">
														<OurStorySvgs.OurStorySvg22 />
													</div>
													<div
														className="col-1 h-[14.643px] ml-[44.34px] mt-[52.57px] relative row-1 w-[5.328px]"
														data-name="Vector">
														<OurStorySvgs.OurStorySvg23 />
													</div>
													<div
														className="col-1 h-[20.341px] ml-[44.78px] mt-[50.24px] relative row-1 w-[6.673px]"
														data-name="Vector">
														<OurStorySvgs.OurStorySvg24 />
													</div>
													<div
														className="col-1 h-[16.853px] ml-[47.23px] mt-[50.93px] relative row-1 w-[6.549px]"
														data-name="Vector">
														<OurStorySvgs.OurStorySvg25 />
													</div>
													<div
														className="col-1 h-[12.099px] ml-[37.75px] mt-[57.77px] relative row-1 w-[6.095px]"
														data-name="Vector">
														<OurStorySvgs.OurStorySvg26 />
													</div>
													<div
														className="col-1 h-[17.947px] ml-[42.05px] mt-[50.62px] relative row-1 w-[6.145px]"
														data-name="Vector">
														<OurStorySvgs.OurStorySvg27 />
													</div>
													<div
														className="col-1 h-[12.801px] ml-[40.75px] mt-[57.54px] relative row-1 w-[7.035px]"
														data-name="Vector">
														<OurStorySvgs.OurStorySvg28 />
													</div>
													<div
														className="col-1 h-[89.044px] ml-[40.11px] mt-0 relative row-1 w-[29.711px]"
														data-name="Vector">
														<OurStorySvgs.OurStorySvg29 />
													</div>
													<div
														className="col-1 h-[56.221px] ml-[45.8px] mt-[20.89px] relative row-1 w-[16.498px]"
														data-name="Vector">
														<OurStorySvgs.OurStorySvg30 />
													</div>
													<div
														className="col-1 h-[6.815px] ml-[78.88px] mt-[70.83px] relative row-1 w-[3.58px]"
														data-name="Vector">
														<OurStorySvgs.OurStorySvg31 />
													</div>
													<div
														className="col-1 h-[3.509px] ml-[83.02px] mt-[71.44px] relative row-1 w-[5.417px]"
														data-name="Vector">
														<OurStorySvgs.OurStorySvg32 />
													</div>
													<div
														className="col-1 h-[0.007px] ml-[91.97px] mt-[75.21px] relative row-1 w-0"
														data-name="Vector">
														<OurStorySvgs.OurStorySvg33 />
													</div>
													<div className="col-1 flex h-[57.474px] items-center justify-center ml-[70.36px] mt-[24.07px] relative row-1 w-[30.966px]">
														<div className="-scale-y-100 flex-none rotate-180">
															<div className="h-[57.474px] relative w-[30.966px]">
																<OurStorySvgs.OurStorySvg34 />
															</div>
														</div>
													</div>
													<div
														className="col-1 h-[54.75px] ml-[6.18px] mt-[19.8px] relative row-1 w-[40.737px]"
														data-name="Vector">
														<OurStorySvgs.OurStorySvg35 />
													</div>
													<div
														className="col-1 h-[4.319px] ml-[21.02px] mt-[28.01px] relative row-1 w-[7.269px]"
														data-name="Vector">
														<OurStorySvgs.OurStorySvg36 />
													</div>
													<div
														className="col-1 h-[2.896px] ml-[14.18px] mt-[32.24px] relative row-1 w-[3.279px]"
														data-name="Vector">
														<OurStorySvgs.OurStorySvg37 />
													</div>
													<div
														className="col-1 h-[3.763px] ml-[9.26px] mt-[35.73px] relative row-1 w-[5.239px]"
														data-name="Vector">
														<OurStorySvgs.OurStorySvg38 />
													</div>
													<div
														className="col-1 h-[32.622px] ml-[16.14px] mt-[36.21px] relative row-1 w-[19.745px]"
														data-name="Vector">
														<OurStorySvgs.OurStorySvg39 />
													</div>
													<div
														className="col-1 h-[30.573px] ml-[26.73px] mt-[29.99px] relative row-1 w-[17.151px]"
														data-name="Vector">
														<OurStorySvgs.OurStorySvg40 />
													</div>
													<div
														className="col-1 flex h-[60.714px] items-center justify-center ml-[46.36px] mt-[12.3px] relative row-1 w-[41.077px]"
														style={
															{
																"--transform-inner-width":
																	"1185",
																"--transform-inner-height":
																	"21",
															} as React.CSSProperties
														}>
														<div className="flex-none rotate-[-11.76deg]">
															<div className="h-[55.694px] relative w-[30.361px]">
																<OurStorySvgs.OurStorySvg41 />
															</div>
														</div>
													</div>
													<div
														className="col-1 h-[14.102px] ml-[47.29px] mt-[47.29px] relative row-1 w-[6.979px]"
														data-name="Vector">
														<OurStorySvgs.OurStorySvg42 />
													</div>
													<div
														className="col-1 h-[43.183px] ml-[6.1px] mt-[42.37px] relative row-1 w-[100.296px]"
														data-name="Vector">
														<OurStorySvgs.OurStorySvg43 />
													</div>
													<div
														className="col-1 flex h-[26.716px] items-center justify-center ml-0 mt-[66.85px] relative row-1 w-[113.379px]"
														style={
															{
																"--transform-inner-width":
																	"1185",
																"--transform-inner-height":
																	"21",
															} as React.CSSProperties
														}>
														<div className="-scale-y-100 flex-none rotate-[177.8deg]">
															<div
																className="h-[22.402px] relative w-[112.601px]"
																data-name="Vector">
																<OurStorySvgs.OurStorySvg44 />
															</div>
														</div>
													</div>
												</div>
											</div>
										)}
										<div className="flex flex-col gap-6 items-start not-italic relative shrink-0 text-black text-center w-full">
											<p className={`${typeStyles.cardTitle} relative shrink-0 w-full`}>
												{step.title}
											</p>
											<p className={`${typeStyles.body} relative shrink-0 w-full`}>
												{step.body}
											</p>
										</div>
									</div>
								),
							)}
						</div>
					</div>
				</ContentContainer>
			</div>
			{/* Timeline */}
			<div
				className="min-h-[600px] md:min-h-[750px] overflow-clip relative shrink-0 w-full"
				data-name="Story">
				<div
					className="absolute hidden inset-[71.22%_6.63%_7.22%_86.89%] md:block"
					data-name="Vector">
					<OurStorySvgs.OurStorySvg49 />
				</div>
				<div
					className="absolute hidden inset-[43.84%_80.63%_7.26%_5.76%] md:block"
					data-name="Vector">
					<OurStorySvgs.OurStorySvg50 />
				</div>
				<div
					className="absolute hidden inset-[82%_4.72%_4.1%_91.42%] items-center justify-center md:flex"
					style={{
						containerType: "size",
					}}>
					<div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
						<div className="relative size-full" data-name="Vector">
							<OurStorySvgs.OurStorySvg51 />
						</div>
					</div>
				</div>
				<ContentContainer size="wide" className={sectionSpacing.default}>
					<div className="relative flex flex-col items-center gap-16">
						<p className={`${typeStyles.heroTitleLarge} not-italic text-black text-center w-full max-w-[544px]`}>
							Our story
						</p>
						<p className={`${typeStyles.body} not-italic text-black text-center`}>
							Slide the carrot across the timeline or tap to learn
							about our journey
						</p>
						<div
							className="relative flex flex-col items-center gap-[80px] w-full"
							data-name="slider">
							<div
								className="relative h-[65px] w-full max-w-[607px]"
								data-name="slider-field">
								<div
									className="absolute h-[32px] left-0 right-0 top-[3px]"
									data-name="slider-base">
									<OurStorySvgs.OurStorySvg52 />
								</div>
								<div
									className="-translate-x-1/2 absolute flex isolate items-start justify-between left-[calc(50%-4px)] top-0 w-[82%] max-w-[499px]"
									data-name="milestones">
									{timelineMilestones.map((milestone) =>
										milestone.active ? (
											<div
												className="flex flex-col gap-[5px] items-center relative shrink-0"
												data-name="slider-btn"
												style={{
													width: milestone.width,
													zIndex: milestone.zIndex,
												}}>
												{
													<>
														<div className="bg-[#4c352b] h-[36px] relative rounded-[8px] shrink-0 w-[3px]" />
														<p className={`${typeStyles.caption} font-normal not-italic relative shrink-0 text-black whitespace-nowrap`}>
															{milestone.label}
														</p>
														{milestone.active ? (
															<div
																className="absolute flex h-[111.341px] items-center justify-center left-[-12.98px] top-[-31.63px] w-[51.555px]"
																style={
																	{
																		"--transform-inner-width":
																			"1185",
																		"--transform-inner-height":
																			"21",
																	} as React.CSSProperties
																}>
																<div className="flex-none rotate-[12.37deg]">
																	<div
																		className="h-[107.586px] relative w-[29.19px]"
																		data-name="Capa_1">
																		<OurStorySvgs.OurStorySvg45 />
																	</div>
																</div>
															</div>
														) : null}
													</>
												}
											</div>
										) : (
											<button
												className="cursor-pointer flex flex-col gap-[5px] items-center relative shrink-0"
												data-name="milestone"
												style={{
													width: milestone.width,
													zIndex: milestone.zIndex,
												}}
												type="button">
												{
													<>
														<div className="bg-[#4c352b] h-[36px] relative rounded-[8px] shrink-0 w-[3px]" />
														<p className={`${typeStyles.caption} font-normal not-italic relative shrink-0 text-black whitespace-nowrap`}>
															{milestone.label}
														</p>
														{milestone.active ? (
															<div
																className="absolute flex h-[111.341px] items-center justify-center left-[-12.98px] top-[-31.63px] w-[51.555px]"
																style={
																	{
																		"--transform-inner-width":
																			"1185",
																		"--transform-inner-height":
																			"21",
																	} as React.CSSProperties
																}>
																<div className="flex-none rotate-[12.37deg]">
																	<div
																		className="h-[107.586px] relative w-[29.19px]"
																		data-name="Capa_1">
																		<OurStorySvgs.OurStorySvg45 />
																	</div>
																</div>
															</div>
														) : null}
													</>
												}
											</button>
										),
									)}
								</div>
							</div>
							<div
									className="flex flex-col items-center justify-center mx-auto p-6 md:p-[40px] relative w-full max-w-[560px]"
								data-name="Note">
								<div
									className="absolute flex inset-[0_0.24px_0_0] items-center justify-center"
									style={{
										containerType: "size",
									}}>
									<div className="flex-none h-[100cqh] rotate-180 w-[100cqw]">
										<div
											className="relative size-full"
											data-name="Vector">
											<div className="absolute inset-[0_-3.66%_-14.08%_-3.66%]">
												<OurStorySvgs.OurStorySvg53 />
											</div>
										</div>
									</div>
								</div>
								<p className={`${typeStyles.bodyLarge} min-h-[204px] not-italic relative shrink-0 text-black text-center w-full max-w-[467px]`}>
									In April 2020, Farm to Feed started as a
									COVID-19 food relief effort – we bought
									farmers' produce that was at risk of going
									to waste and donated to food insecure
									communities who were made more vulnerable at
									the height of the pandemic
								</p>
							</div>
						</div>
					</div>
				</ContentContainer>
				<div
					className="absolute hidden h-[572.259px] items-center justify-center left-[-29px] top-[906px] w-[1477px] lg:flex"
					style={
						{
							"--transform-inner-width": "1185",
							"--transform-inner-height": "21",
						} as React.CSSProperties
					}>
					<div className="-rotate-90 -scale-y-100 flex-none">
						<div
							className="h-[1477px] relative w-[572.259px]"
							data-name="Vector">
							<OurStorySvgs.OurStorySvg54 />
						</div>
					</div>
				</div>
				<div className="absolute hidden inset-x-0 top-[720px] h-[447.28px] w-full lg:block">
					<OurStorySvgs.OurStorySvg55 />
				</div>
				<div className="absolute hidden h-[237.142px] left-[calc(75%+17.66px)] top-[105.35px] w-[238.742px] lg:block">
					<OurStorySvgs.OurStorySvg56 />
				</div>
				<div className="absolute inset-[95.35%_0_-0.05%_0]">
					<OurStorySvgs.OurStorySvg57 />
				</div>
			</div>
			{/* Footer */}
			<Footer />
		</div>
	);
}
