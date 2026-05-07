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
import svgPaths from "../imports/SellWithUs-3/svg-q1xyqaotrq";
import imgVector from "../../../assets/figma/cacf4fb7f428c5409ba62d0f3bbae7888dd7f455.png?url";
import imgVector1 from "../../../assets/figma/4e759b9c5633458b4d75d12bad0d3db64761078b.png?url";
import { imgGroup } from "../imports/SellWithUs-3/svg-hwxr2";
import { BottomLandscapeSvg } from "../imports/SellWithUs-3/bottom-landscape";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ContentContainer } from "../components/layout/ContentContainer";
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
const supplierStories = [Group22, Group24, Group23];
export default function SellWithUs() {
	return (
		<div
			className="bg-white content-stretch flex flex-col items-center relative w-full min-h-screen"
			data-name="Sell with us">
			{/* Hero */}
			<div
				className="bg-white min-h-[600px] md:min-h-[1034px] overflow-clip relative shrink-0 w-full"
				data-name="Wireframe - 44">
				<ContentContainer
					size="wide"
					className="pt-[170px] pb-[120px] md:pt-[260px]">
					<div className="content-stretch flex flex-col gap-[40px] items-center relative">
						<div className="content-stretch flex flex-col gap-[32px] md:gap-[64px] items-center relative shrink-0 px-4">
							<div
								className="absolute h-[36px] left-[6px] top-[124px] w-[633px]"
								data-name="objects"
							/>
							<div className="font-['Fraunces',serif] font-normal leading-tight md:leading-normal not-italic relative shrink-0 text-black text-center tracking-wide w-full ">
								<p className="leading-tight md:leading-normal mb-0 text-[#0f251b] text-4xl md:text-5xl lg:text-6xl">
									Making farming
								</p>
								<p className="leading-tight md:leading-normal text-[#1e4a35] text-4xl md:text-5xl lg:text-6xl">
									Fair and Rewarding
								</p>
							</div>
							<div className="font-['Rubik',sans-serif] font-normal leading-[1.68] not-italic relative shrink-0 text-[#1e4a35] text-[14px] md:text-[16px] text-center tracking-[0.48px] w-full max-w-[656px]">
								<p className="leading-[1.68] mb-0">{`We want to keep your hard work in the human food chain, making sure nothing goes to waste. With us, it's easy to access the market and sell your entire harvest -including the odd-shaped and surplus produce- at fair price.`}</p>
								<p className="leading-[1.68]">
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
				<ContentContainer
					size="wide"
					className="pt-[120px] pb-[96px] md:pt-[180px] lg:pt-[234px] lg:pb-[120px]">
					<div className="content-stretch flex flex-col gap-[32px] items-center relative w-full">
						<div className="content-stretch flex flex-col gap-[32px] items-center relative w-full">
							<div className="content-stretch flex flex-col gap-[32px] items-center max-w-[1052px] not-italic relative shrink-0 text-center w-full">
								<p className="font-['Fraunces',serif] font-normal leading-[normal] relative shrink-0 text-[#0f251b] text-[36px] md:text-[48px] lg:text-[56px] tracking-[1.68px] w-full">
									Our Offering
								</p>
								<p className="font-['Rubik',sans-serif] font-normal leading-[1.68] relative shrink-0 text-[#1e4a35] text-[16px] tracking-[0.48px] w-full">
									Farmers who supply to Farm to Feed enjoy:
								</p>
							</div>
							<div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
								<div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full lg:flex-row">
									{offeringRows[0].map((offering) => (
										<div className="bg-[#fbfafa] relative rounded-[30px] w-full lg:flex-1">
											<div className="content-stretch flex flex-col gap-[27px] items-start p-[28px] md:p-[48px] relative size-full">
												<offering.Header />
												<p className="font-['Rubik',sans-serif] font-normal leading-[1.68] relative shrink-0 text-[#1e4a35] text-[16px] tracking-[0.48px] w-full">
													{offering.body}
												</p>
											</div>
										</div>
									))}
								</div>
							</div>
							<div className="content-stretch flex flex-col items-start max-w-[842px] relative shrink-0 w-full">
								<div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full md:flex-row">
									{offeringRows[1].map((offering) => (
										<div className="bg-[#fbfafa] relative rounded-[30px] w-full md:flex-1">
											<div className="content-stretch flex flex-col gap-[27px] items-start p-[28px] md:p-[48px] relative size-full">
												<offering.Header />
												<p className="font-['Rubik',sans-serif] font-normal leading-[1.68] relative shrink-0 text-[#1e4a35] text-[16px] tracking-[0.48px] w-full">
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
					className="absolute bg-black content-stretch flex items-start left-[calc(41.67%+6px)] px-[16px] py-[8px] rounded-[40px] top-[1649px]"
					data-name="order">
					<p className="font-['Rubik',sans-serif] font-normal leading-[1.68] not-italic relative shrink-0 text-[#eee] text-[16px] text-center tracking-[0.48px] whitespace-nowrap">
						Learn More
					</p>
				</div>
			</div>
			{/* How it works */}
			<div
				className="bg-white min-h-[777px] overflow-clip relative shrink-0 w-full"
				data-name="Wireframe - 42">
				<ContentContainer size="wide" className="py-[96px]">
					<div className="relative lg:min-h-[585px]">
						<div className="content-stretch flex flex-col items-center max-w-[1052px] w-full mx-auto lg:-translate-x-1/2 lg:absolute lg:left-1/2 lg:top-[75px]">
							<p className="font-['Fraunces',serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#0f251b] text-[36px] md:text-[48px] lg:text-[56px] text-center tracking-[1.68px] w-full">
								How Does it Work
							</p>
						</div>
						<div className="relative z-10 grid gap-6 pt-[48px] md:grid-cols-2 lg:grid-cols-4 lg:pt-[170px]">
							{supplierProcessSteps.map((step, index) => (
								<div className="flex gap-4 rounded-[24px] bg-white/90 p-5 shadow-sm">
									<div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#1e4a35] font-['Rubik',sans-serif] text-sm font-semibold text-white">
										{index + 1}
									</div>
									<p className="font-['Rubik',sans-serif] font-normal leading-[1.68] not-italic text-[14px] text-black tracking-[0.42px]">
										{step.body}
									</p>
								</div>
							))}
						</div>
						<div
							className="absolute hidden h-[148.815px] items-center justify-center left-[141px] top-[331.01px] w-[829.172px] lg:flex"
							style={
								{
									"--transform-inner-width": "1185",
									"--transform-inner-height": "21",
								} as React.CSSProperties
							}>
							<div className="flex-none rotate-90">
								<div
									className="h-[829.172px] relative w-[148.815px]"
									data-name="Vector">
									<SellWithUsSvgs.SellWithUsSvg02 />
								</div>
							</div>
						</div>
						<div className="absolute hidden h-[198.445px] left-[calc(16.67%+93px)] top-[218px] w-[203.707px] lg:block">
							<SellWithUsSvgs.SellWithUsSvg03 />
						</div>
						<div className="absolute hidden h-[198.445px] left-[calc(41.67%+54px)] top-[365.92px] w-[203.707px] lg:block">
							<SellWithUsSvgs.SellWithUsSvg04 />
						</div>
						<div className="absolute hidden lg:contents left-[calc(66.67%+15px)] top-[248px]">
							<div
								className="absolute h-[198.445px] left-[calc(66.67%+15px)] top-[248px] w-[203.707px]"
								data-name="Vector">
								<SellWithUsSvgs.SellWithUsSvg05 />
							</div>
							<div
								className="absolute inset-[34.62%_25.83%_60.49%_72.29%]"
								data-name="Vector">
								<SellWithUsSvgs.SellWithUsSvg06 />
							</div>
							<div
								className="absolute contents inset-[40.12%_23.05%_47.84%_69.07%]"
								data-name="Group">
								<div
									className="absolute inset-[44.69%_25.25%_54.61%_74.6%]"
									data-name="Vector">
									<SellWithUsSvgs.SellWithUsSvg07 />
								</div>
								<div
									className="absolute inset-[45.45%_23.95%_53.88%_75.98%]"
									data-name="Vector">
									<SellWithUsSvgs.SellWithUsSvg08 />
								</div>
								<div
									className="absolute inset-[44.23%_25.03%_54.82%_74.79%]"
									data-name="Vector">
									<SellWithUsSvgs.SellWithUsSvg09 />
								</div>
								<div
									className="absolute inset-[43.85%_23.67%_55.23%_75.79%]"
									data-name="Vector">
									<SellWithUsSvgs.SellWithUsSvg10 />
								</div>
								<div
									className="absolute inset-[44.85%_23.74%_49.5%_74.59%]"
									data-name="Vector">
									<SellWithUsSvgs.SellWithUsSvg11 />
								</div>
								<div
									className="absolute inset-[42.94%_23.59%_49.26%_74.47%]"
									data-name="Vector">
									<SellWithUsSvgs.SellWithUsSvg12 />
								</div>
								<div
									className="absolute inset-[44.08%_24.94%_54.6%_74.52%]"
									data-name="Vector">
									<SellWithUsSvgs.SellWithUsSvg13 />
								</div>
								<div
									className="absolute inset-[45.09%_23.87%_53.6%_75.59%]"
									data-name="Vector">
									<SellWithUsSvgs.SellWithUsSvg14 />
								</div>
								<div
									className="absolute inset-[46.21%_23.99%_52.75%_75.41%]"
									data-name="Vector">
									<SellWithUsSvgs.SellWithUsSvg15 />
								</div>
								<div
									className="absolute inset-[45.1%_25.28%_54.03%_74.35%]"
									data-name="Vector">
									<SellWithUsSvgs.SellWithUsSvg16 />
								</div>
								<div
									className="absolute inset-[45.78%_25.51%_53.39%_74.27%]"
									data-name="Vector">
									<SellWithUsSvgs.SellWithUsSvg17 />
								</div>
								<div
									className="absolute inset-[46.32%_25.75%_53.24%_74.17%]"
									data-name="Vector">
									<SellWithUsSvgs.SellWithUsSvg18 />
								</div>
								<div
									className="absolute inset-[46.44%_27.01%_50.41%_71.62%]"
									data-name="Vector">
									<SellWithUsSvgs.SellWithUsSvg19 />
								</div>
								<div
									className="absolute h-[80px] left-[calc(75%-59px)] top-[319px] w-[35px]"
									data-name="Vector">
									<SellWithUsSvgs.SellWithUsSvg20 />
								</div>
								<div
									className="absolute inset-[46.88%_27.48%_51.23%_72.15%]"
									data-name="Vector">
									<SellWithUsSvgs.SellWithUsSvg21 />
								</div>
								<div
									className="absolute inset-[46.58%_27.35%_50.8%_72.18%]"
									data-name="Vector">
									<SellWithUsSvgs.SellWithUsSvg22 />
								</div>
								<div
									className="absolute inset-[46.67%_27.19%_51.16%_72.35%]"
									data-name="Vector">
									<SellWithUsSvgs.SellWithUsSvg23 />
								</div>
								<div
									className="absolute inset-[47.55%_27.88%_50.89%_71.69%]"
									data-name="Vector">
									<SellWithUsSvgs.SellWithUsSvg24 />
								</div>
								<div
									className="absolute inset-[46.63%_27.58%_51.06%_71.99%]"
									data-name="Vector">
									<SellWithUsSvgs.SellWithUsSvg25 />
								</div>
								<div
									className="absolute inset-[47.52%_27.61%_50.83%_71.9%]"
									data-name="Vector">
									<SellWithUsSvgs.SellWithUsSvg26 />
								</div>
								<div
									className="absolute inset-[40.12%_26.08%_48.42%_71.86%]"
									data-name="Vector">
									<SellWithUsSvgs.SellWithUsSvg27 />
								</div>
								<div
									className="absolute inset-[42.8%_26.6%_49.96%_72.25%]"
									data-name="Vector">
									<SellWithUsSvgs.SellWithUsSvg28 />
								</div>
								<div
									className="absolute inset-[49.23%_25.2%_49.89%_74.55%]"
									data-name="Vector">
									<SellWithUsSvgs.SellWithUsSvg29 />
								</div>
								<div
									className="absolute inset-[49.31%_24.79%_50.24%_74.84%]"
									data-name="Vector">
									<SellWithUsSvgs.SellWithUsSvg30 />
								</div>
								<div
									className="absolute inset-[49.79%_24.54%_50.2%_75.46%]"
									data-name="Vector">
									<SellWithUsSvgs.SellWithUsSvg31 />
								</div>
								<div
									className="absolute flex inset-[43.21%_23.89%_49.39%_73.96%] items-center justify-center"
									style={{
										containerType: "size",
									}}>
									<div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
										<div className="relative size-full">
											<SellWithUsSvgs.SellWithUsSvg32 />
										</div>
									</div>
								</div>
								<div
									className="absolute inset-[42.66%_27.67%_50.29%_69.5%]"
									data-name="Vector">
									<SellWithUsSvgs.SellWithUsSvg33 />
								</div>
								<div
									className="absolute inset-[43.72%_28.96%_55.72%_70.53%]"
									data-name="Vector">
									<SellWithUsSvgs.SellWithUsSvg34 />
								</div>
								<div
									className="absolute inset-[44.26%_29.72%_55.36%_70.06%]"
									data-name="Vector">
									<SellWithUsSvgs.SellWithUsSvg35 />
								</div>
								<div
									className="absolute inset-[44.71%_29.92%_54.8%_69.72%]"
									data-name="Vector">
									<SellWithUsSvgs.SellWithUsSvg36 />
								</div>
								<div
									className="absolute inset-[44.78%_28.44%_51.03%_70.19%]"
									data-name="Vector">
									<SellWithUsSvgs.SellWithUsSvg37 />
								</div>
								<div
									className="absolute inset-[43.98%_27.88%_52.09%_70.93%]"
									data-name="Vector">
									<SellWithUsSvgs.SellWithUsSvg38 />
								</div>
								<div
									className="absolute flex inset-[41.7%_24.86%_50.49%_72.29%] items-center justify-center"
									style={{
										containerType: "size",
									}}>
									<div className="flex-none h-[hypot(27.6394cqw,89.8061cqh)] rotate-[-11.76deg] w-[hypot(72.3606cqw,-10.1939cqh)]">
										<div className="relative size-full">
											<SellWithUsSvgs.SellWithUsSvg39 />
										</div>
									</div>
								</div>
								<div
									className="absolute inset-[46.2%_27.16%_51.98%_72.36%]"
									data-name="Vector">
									<SellWithUsSvgs.SellWithUsSvg40 />
								</div>
								<div
									className="absolute inset-[45.57%_23.54%_48.87%_69.5%]"
									data-name="Vector">
									<SellWithUsSvgs.SellWithUsSvg41 />
								</div>
								<div
									className="absolute flex inset-[48.72%_23.05%_47.84%_69.07%] items-center justify-center"
									style={{
										containerType: "size",
									}}>
									<div className="-scale-x-100 flex-none h-[hypot(0.759955cqw,83.7893cqh)] rotate-[-2.2deg] w-[hypot(-99.24cqw,16.2107cqh)]">
										<div
											className="relative size-full"
											data-name="Vector">
											<SellWithUsSvgs.SellWithUsSvg42 />
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="absolute hidden h-[198.445px] left-[52px] top-[355px] w-[203.707px] lg:block">
							<SellWithUsSvgs.SellWithUsSvg43 />
						</div>
						<div
							className="absolute hidden h-[18.79px] left-[calc(50%+35px)] top-[426px] w-[26.57px] lg:block"
							data-name="Capa_1">
							<SellWithUsSvgs.SellWithUsSvg44 />
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
											className="absolute inset-[48.28%_18.79%_8.68%_66.58%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-1.17px_-0.16px] mask-size-[122.51px_118.116px]"
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
					className="relative z-10 flex flex-col items-center gap-[56px] pt-[120px] pb-[96px] md:gap-[104px] md:pt-[184px] md:pb-[120px]">
					<div className="font-['Fraunces',serif] font-normal leading-[0] not-italic text-[#0f251b] text-[36px] md:text-[48px] text-center tracking-[1.44px] w-full max-w-[769px] whitespace-pre-wrap">
						<p className="leading-[normal] mb-0">{`Discover how farmers `}</p>
						<p className="leading-[normal]">
							are transforming communities
						</p>
					</div>
					<div className="content-stretch flex flex-wrap gap-[32px] items-center justify-center leading-[0] relative w-full">
						{supplierStories.map((StoryCard) => (
							<div
								className="relative h-[220px] w-[320px] overflow-visible sm:h-[300px] sm:w-[480px] md:h-auto md:w-auto [&>*]:origin-top-left [&>*]:scale-50 sm:[&>*]:scale-75 md:[&>*]:scale-100"
								key={StoryCard.name}>
								<StoryCard />
							</div>
						))}
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
					className="flex justify-center py-[72px] md:pt-[87px] md:pb-[88px]">
					<div
						className="bg-[#4c352b] min-h-[520px] max-w-[1216px] overflow-clip relative rounded-[32px] md:rounded-[40px] w-full flex items-center justify-center p-[28px] md:p-10"
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
						<div className="content-stretch flex flex-col gap-[40px] items-center relative rounded-[40px] z-10">
							<p className="font-['Fraunces',serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#f9ecbd] text-[36px] md:text-[48px] text-center tracking-[1.44px] w-full max-w-[800px]">
								Do you have questions?
							</p>
							<div className="font-['Rubik',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[16px] md:text-[20px] text-center text-white tracking-[0.6px] w-full max-w-[592px] whitespace-pre-wrap">
								<p className="mb-0">
									<span className="leading-[1.68]">{`Do you have questions or would like to register as a farmer with us? Download the Farm to Feed Supplier App from the `}</span>
									<span className="[text-decoration-skip-ink:none] decoration-solid leading-[1.68] underline">
										Google Play Store
									</span>
									<span className="leading-[1.68]">{` or contact our sourcing team:`}</span>
								</p>
								<p>
									<span className="leading-[1.68]">{` `}</span>
									<span className="[text-decoration-skip-ink:none] decoration-solid font-['Rubik',sans-serif] font-medium leading-[1.68] not-italic text-[#d78228] underline">
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
