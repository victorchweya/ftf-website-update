import heroHomeImage from "../imports/Home/hero-home.png?url";
import imgVector1 from "../../../assets/figma/c2c2df3bbbb24de92cb6c214b6dae6d9ec8411a0.png?url";
import imgPlaceholderImage from "../../../assets/figma/2dcd35f0969168b49576839a28be093481c42f9f.png?url";
import imgPlaceholderImage1 from "../../../assets/figma/df46db7e24c63bd9580267e4b92a177fae0edc68.png?url";
import imgPlaceholderImage2 from "../../../assets/figma/456b5ca63fec37944e95e90951a499a07680e2bd.png?url";
import {
	imgGroup,
	imgVector2,
	imgGroup1,
	imgGroup2,
	imgVector3,
	imgGroup3,
	imgGroup4,
} from "../imports/Home/svg-00zst";
import { BackgroundBottomSvg } from "../imports/Home/background-bottom";
import * as HomeSvgs from "../imports/Home/home-inline-svgs";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ContentContainer } from "../components/layout/ContentContainer";

type NewsItem = {
	date: string;
	image: string;
	title: string;
};

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

export default function Home() {
	return (
		<main
			className="bg-white content-stretch flex flex-col items-center relative w-full min-h-screen"
			data-name="home">
			{/* Hero */}
			<div
				className="bg-[#fbf3e9] min-h-[900px] md:min-h-[1040px] lg:min-h-[1162px] overflow-clip relative shrink-0 w-full"
				data-name="HeroSection">
				<div
					className="absolute inset-0 flex items-start justify-center"
					data-name="Hero artwork">
					<img
						alt=""
						className="h-auto min-h-full w-full min-w-[900px] object-cover object-center md:min-w-[1180px] lg:min-w-0 lg:size-full"
						src={heroHomeImage}
					/>
				</div>
				<Header />
				<div className="absolute h-[201px] left-[calc(8.33%+149px)] top-[592px] w-[217px]" />
				<ContentContainer
					size="wide"
					className="relative z-10 flex flex-col items-center gap-[190px] pt-[214px] pb-[120px]">
					<div className="content-stretch flex flex-col gap-[30px] items-center max-w-[666px] not-italic text-center relative w-full">
						<p className="font-serif  relative shrink-0 text-green-500 text-5xl md:text-6xl lg:text-7xl tracking-wide w-full">
							Shaping the Future of Food
						</p>
						<p className="font-['Rubik',sans-serif] font-normal leading-[1.68] min-w-full relative shrink-0 text-[#d78228] text-[20px] tracking-[0.6px] w-[min-content]">
							Connecting farmers, markets, and ingredients through
							smarter supply chains.
						</p>
					</div>
					<div className="content-stretch flex flex-col lg:flex-row gap-[64px] items-center justify-center leading-[0] relative max-w-[1280px] w-full">
						<div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
							<div
								className="col-1 h-[298px] ml-0 mt-[93px] relative row-1 w-[303px]"
								data-name="Vector">
								<div className="absolute inset-[-1.34%_-7.92%_-14.77%_-7.92%]">
									<HomeSvgs.HeroSvg01 />
								</div>
							</div>
							<div
								className="bg-[#1e4a35] col-1 content-stretch flex items-start ml-[99px] mt-[367px] px-[16px] py-[8px] relative rounded-[40px] row-1"
								data-name="order">
								<p className="font-['Rubik',sans-serif] font-normal leading-[1.68] not-italic relative shrink-0 text-[#eee] text-[16px] text-center tracking-[0.48px] whitespace-nowrap">
									Sell with us
								</p>
							</div>
							<div className="col-1 content-stretch flex flex-col gap-[48px] items-center ml-[46px] mt-0 relative row-1 w-[217px]">
								<div className="h-[154px] relative shrink-0 w-[158px]">
									<HomeSvgs.HeroSvg02 />
								</div>
								<div className="content-stretch flex flex-col gap-[32px] items-center not-italic relative shrink-0 text-center w-full">
									<div className="font-['Fraunces',serif] font-normal leading-[0] relative shrink-0 text-[#0f251b] text-[24px] tracking-[0.72px] whitespace-nowrap">
										<p className="leading-[normal] mb-0 whitespace-pre">{`For Kenyan `}</p>
										<p className="leading-[normal] whitespace-pre">
											Farmers
										</p>
									</div>
									<p className="font-['Rubik',sans-serif] font-normal leading-[1.68] min-w-full relative shrink-0 text-[#1e4a35] text-[16px] tracking-[0.48px] w-[min-content]">
										The future of food starts with you
									</p>
								</div>
							</div>
						</div>
						<div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
							<div
								className="col-1 h-[298px] ml-0 mt-[86px] relative row-1 w-[303px]"
								data-name="Vector">
								<div className="absolute inset-[-1.34%_-7.92%_-14.77%_-7.92%]">
									<HomeSvgs.HeroSvg03 />
								</div>
							</div>
							<div
								className="bg-[#1e4a35] col-1 content-stretch flex items-start ml-[83px] mt-[363px] px-[16px] py-[8px] relative rounded-[40px] row-1"
								data-name="order">
								<p className="font-['Rubik',sans-serif] font-normal leading-[1.68] not-italic relative shrink-0 text-[16px] text-center text-white tracking-[0.48px] whitespace-nowrap">
									Buy from us
								</p>
							</div>
							<div className="col-1 content-stretch flex flex-col gap-[48px] items-center ml-[46px] mt-0 relative row-1 w-[217px]">
								<div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
									<div
										className="col-1 h-[154px] ml-0 mt-0 relative row-1 w-[158.083px]"
										data-name="Group">
										<HomeSvgs.HeroSvg04 />
									</div>
									<div
										className="col-1 h-[79.226px] ml-[37.73px] mt-[32.8px] relative row-1 w-[81.741px]"
										data-name="Capa_1">
										<HomeSvgs.HeroSvg05 />
									</div>
								</div>
								<div className="content-stretch flex flex-col gap-[32px] items-center not-italic relative shrink-0 text-center w-full">
									<div className="font-['Fraunces',serif] font-normal leading-[0] relative shrink-0 text-[#0f251b] text-[24px] tracking-[0.72px] whitespace-nowrap">
										<p className="leading-[normal] mb-0 whitespace-pre">{`For Kenyan `}</p>
										<p className="leading-[normal] whitespace-pre">
											Buyers
										</p>
									</div>
									<p className="font-['Rubik',sans-serif] font-normal leading-[1.68] min-w-full relative shrink-0 text-[#1e4a35] text-[16px] tracking-[0.48px] w-[min-content]">
										The future of food, delivered to you
									</p>
								</div>
							</div>
						</div>
						<div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
							<div
								className="col-1 h-[298px] ml-0 mt-[93px] relative row-1 w-[303px]"
								data-name="Vector">
								<div className="absolute inset-[-1.34%_-7.92%_-14.77%_-7.92%]">
									<HomeSvgs.HeroSvg06 />
								</div>
							</div>
							<div
								className="bg-[#1e4a35] col-1 content-stretch flex items-start ml-[92px] mt-[366px] px-[16px] py-[8px] relative rounded-[40px] row-1"
								data-name="order">
								<p className="font-['Rubik',sans-serif] font-normal leading-[1.68] not-italic relative shrink-0 text-[16px] text-center text-white tracking-[0.48px] whitespace-nowrap">
									Learn more
								</p>
							</div>
							<div className="col-1 content-stretch flex flex-col gap-[48px] items-center ml-[46px] mt-0 relative row-1 w-[217px]">
								<div className="h-[154px] relative shrink-0 w-[158px]">
									<HomeSvgs.HeroSvg07 />
								</div>
								<div className="content-stretch flex flex-col gap-[32px] items-center not-italic relative shrink-0 text-center w-full">
									<div className="font-['Fraunces',serif] font-normal leading-[0] relative shrink-0 text-[#0f251b] text-[24px] tracking-[0.72px] whitespace-nowrap">
										<p className="leading-[normal] mb-0 whitespace-pre">{`For Global `}</p>
										<p className="leading-[normal] whitespace-pre">
											Buyers
										</p>
									</div>
									<p className="font-['Rubik',sans-serif] font-normal leading-[1.68] min-w-full relative shrink-0 text-[#1e4a35] text-[16px] tracking-[0.48px] w-[min-content]">
										The future of food, supplied from Kenya
									</p>
								</div>
							</div>
						</div>
					</div>
				</ContentContainer>
			</div>
			{/* Story */}
			<div
				className="bg-[#fbf3e9] min-h-[755px] overflow-clip relative shrink-0 w-full"
				data-name="Wireframe - 11">
				<div
					className="absolute flex inset-[86.19%_-14.03%_-53.63%_-20.21%] items-center justify-center"
					style={{ containerType: "size" }}>
					<div className="-scale-x-100 flex-none h-[100cqw] rotate-90 w-[100cqh]">
						<div className="relative size-full" data-name="Vector">
							<HomeSvgs.StorySvg01 />
						</div>
					</div>
				</div>
				<ContentContainer
					size="wide"
					className="relative z-10 flex justify-center">
					<div className="content-stretch flex flex-col gap-16 items-center  relative w-full">
						<div className="font-serif font-normal  min-w-full not-italic relative shrink-0 text-[#0f251b] text-[40px] text-center tracking-[1.2px] w-[min-content]">
							<p className="mb-0">
								At Farm to Feed, we believe a better food system
								starts with a better supply chain. One that
								works for farmers, businesses, and the planet
								alike.
							</p>
						</div>
						<div className="font-['Rubik',sans-serif] font-normal leading-[0] max-w-[592px] not-italic relative shrink-0 text-[#1e4a35] text-[16px] text-center tracking-[0.48px] w-full whitespace-pre-wrap">
							<p className="leading-[1.68] mb-0">
								In Sub-Saharan Africa, nearly half of all fruits
								and vegetables go to waste - driving emissions,
								hurting farmers, and weakening food security.
								Meanwhile, buyers face unreliable supply, high
								costs, and poor traceability.
							</p>

							<p className="leading-[1.68]">
								Since 2021, Farm to Feed, a women-led Kenyan
								startup has been closing this gap. We rescue
								imperfect and surplus produce, extend shelf
								life, and connect farmers to fair, reliable
								markets while offering buyers a seamless
								platform to source fresh, traceable, and
								affordable food with confidence.
							</p>
						</div>
						<div
							className="bg-[#1e4a35] content-stretch flex items-start px-[24px] py-[12px] relative rounded-[40px] shrink-0"
							data-name="order">
							<p className="font-['Rubik',sans-serif] font-normal leading-[1.68] not-italic relative shrink-0 text-[16px] text-center text-white tracking-[0.48px] whitespace-nowrap">
								Read Impact Report 2025
							</p>
						</div>
					</div>
				</ContentContainer>
			</div>
			{/* Supply chain benefits */}
			<div
				className="bg-[#dae2b6] overflow-clip py-16 md:py-24 lg:py-28 relative shrink-0 w-full"
				data-name="Layout / 28 /">
				<ContentContainer size="wide">
					<div
						className="content-stretch flex flex-col items-center max-w-[1280px] relative shrink-0 w-full"
						data-name="SupplyChainBenefitsContainer">
						<div
							className="content-stretch flex flex-col lg:flex-row gap-12 lg:gap-20 items-center relative shrink-0 w-full"
							data-name="SupplyChainBenefitsContent">
							<div
								className="content-stretch flex flex-col gap-8 md:gap-10 lg:gap-12 items-start relative shrink-0 w-full lg:w-[579px]"
								data-name="SupplyChainBenefitList">
								<div className="border-l-2 border-[#1e4a35] content-stretch flex gap-4 items-start justify-center pl-5 md:pl-8 relative shrink-0 w-full">
									<div
										className="content-stretch flex flex-[1_0_0] flex-col gap-4 items-start justify-center min-w-px not-italic overflow-clip relative"
										data-name="SupplyChainBenefitCopy">
										<p className="font-serif font-medium relative shrink-0 text-green-800 text-3xl md:text-4xl w-full">
											Better Markets for Farmers
										</p>
										<p className="relative shrink-0 text-green-500 w-full">
											We connect farmers to reliable
											buyers, turning harvests into stable
											income and reducing unnecessary food
											loss.
										</p>
									</div>
								</div>
								<div className="border-l-2 border-transparent content-stretch flex gap-4 items-start justify-center pl-5 md:pl-8 relative shrink-0 w-full">
									<div
										className="content-stretch flex flex-[1_0_0] flex-col gap-4 items-start justify-center min-w-px not-italic overflow-clip relative"
										data-name="SupplyChainBenefitCopy">
										<p className="font-serif font-medium relative shrink-0 text-green-800 text-3xl md:text-4xl w-full">
											Better Sourcing for Businesses
										</p>
										<p className="relative shrink-0 text-green-500 w-full">
											Hotels, caterers, processors, and
											global buyers access quality produce
											and ingredients with full
											transparency and consistent supply.
										</p>
									</div>
								</div>
								<div className="border-l-2 border-transparent content-stretch flex gap-4 items-start justify-center pl-5 md:pl-8 relative shrink-0 w-full">
									<div
										className="content-stretch flex flex-[1_0_0] flex-col gap-4 items-start justify-center min-w-px not-italic overflow-clip relative"
										data-name="SupplyChainBenefitCopy">
										<p className="font-serif font-medium relative shrink-0 text-green-800 text-3xl md:text-4xl w-full">
											Better Food Systems for Everyone
										</p>
										<p className="relative shrink-0 text-green-500 w-full">
											By efficiently matching supply and
											demand, we ensure more food is
											consumed rather than wasted. Food
											systems will shape our planet's
											future, with Africa leading the way.
											At Farm to Feed, we create the
											infrastructure for a more inclusive,
											resilient, and waste-free future.
										</p>
									</div>
								</div>
							</div>
							<div
								className="absolute hidden lg:flex h-[555.649px] items-center justify-center right-0 top-[61.68px] w-[574.366px]"
								style={
									{
										"--transform-inner-width": "1185",
										"--transform-inner-height": "21",
									} as React.CSSProperties
								}>
								<div className="flex-none rotate-[9.87deg]">
									<div
										className="h-[477px] relative w-[500px]"
										data-name="Vector">
										<HomeSvgs.SupplyChainBenefitsSvg04 />
									</div>
								</div>
							</div>
							<div
								className="aspect-[517/552] max-w-[517px] relative shrink-0 w-full sm:w-[80%] lg:w-[517px]"
								data-name="Vector">
								<img
									alt=""
									className="absolute block inset-0 object-contain size-full"
									height="552"
									src={imgVector1}
									width="517"
								/>
							</div>
						</div>
					</div>
				</ContentContainer>
			</div>
			{/* Supply chain excellence */}
			<div
				className="bg-white min-h-[887px] overflow-clip relative shrink-0 w-full"
				data-name="Wireframe - 10">
				<BackgroundBottomSvg
					className="absolute inset-x-0 top-0 w-full max-w-none pointer-events-none select-none"
					fill="#DAE2B6"
				/>
				<ContentContainer
					size="wide"
					className="relative z-10 flex justify-center pt-[615px]">
					<div className="content-stretch flex flex-col gap-[64px] items-center relative max-w-[822px] w-full">
						<p className="font-['Fraunces',serif] font-normal leading-[normal] min-w-full not-italic relative shrink-0 text-[#0f251b] text-[40px] text-center tracking-[1.2px] w-[min-content]">
							We produce excellence for all actors in the supply
							chain, from farmer to customer
						</p>
						<div
							className="bg-[#1e4a35] content-stretch flex items-start px-[16px] py-[8px] relative rounded-[40px] shrink-0"
							data-name="order">
							<p className="font-['Rubik',sans-serif] font-normal leading-[1.68] not-italic relative shrink-0 text-[#eee] text-[16px] text-center tracking-[0.48px] whitespace-nowrap">
								Learn More
							</p>
						</div>
					</div>
				</ContentContainer>
				<div
					className="-translate-x-1/2 absolute h-[325px] left-[calc(50%+0.5px)] overflow-clip top-[232px] w-[1281px]"
					data-name="Layer_1">
					<div
						className="absolute contents inset-[24.59%_86.35%_27.41%_8.17%]"
						data-name="Clip path group">
						<div
							className="absolute contents inset-[24.59%_86.35%_27.46%_8.17%]"
							data-name="Group">
							<div
								className="absolute inset-[24.59%_86.35%_27.46%_8.17%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[70.215px_156.009px]"
								style={{ maskImage: `url('${imgGroup}')` }}
								data-name="Group">
								<div className="absolute inset-[0_0_-0.25%_0]">
									<HomeSvgs.SupplyChainExcellenceSvg01 />
								</div>
							</div>
						</div>
					</div>
					<div
						className="absolute inset-[53.72%_55.28%_16.46%_8.74%]"
						data-name="Vector">
						<HomeSvgs.SupplyChainExcellenceSvg02 />
					</div>
					<div
						className="absolute inset-[60.04%_15.7%_18.99%_62.6%]"
						data-name="Vector">
						<HomeSvgs.SupplyChainExcellenceSvg03 />
					</div>
					<div
						className="absolute inset-[65.36%_64.38%_5.82%_0]"
						data-name="Vector">
						<HomeSvgs.SupplyChainExcellenceSvg04 />
					</div>
					<div
						className="absolute inset-[84.38%_88.95%_12.76%_10.77%]"
						data-name="Vector">
						<HomeSvgs.SupplyChainExcellenceSvg05 />
					</div>
					<div
						className="absolute inset-[65.65%_83.75%_26.25%_7.09%]"
						data-name="Group">
						<HomeSvgs.SupplyChainExcellenceSvg06 />
					</div>
					<div
						className="absolute contents inset-[2.58%_41.87%_40.07%_40.36%]"
						data-name="Clip path group">
						<div
							className="absolute contents inset-[2.62%_41.87%_38.68%_40.9%]"
							data-name="Group">
							<div
								className="absolute contents inset-[2.62%_41.87%_38.68%_40.9%]"
								data-name="Group">
								<div
									className="absolute inset-[2.62%_41.87%_40.49%_40.9%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-6.938px_-0.116px] mask-size-[227.536px_186.368px]"
									style={{
										maskImage: `url('${imgVector2}')`,
									}}
									data-name="Vector">
									<HomeSvgs.SupplyChainExcellenceSvg07 />
								</div>
								<div
									className="absolute contents inset-[8.94%_43.28%_38.68%_42.31%]"
									data-name="Clip path group">
									<div
										className="absolute contents inset-[8.94%_43.28%_38.68%_42.31%]"
										data-name="Group">
										<div
											className="absolute inset-[8.94%_43.28%_38.68%_42.31%] mask-position-[-24.958px_-20.664px,_0.016px_-0.002px]"
											style={{
												maskImage: `url('${imgVector2}'), url('${imgGroup1}')`,
											}}
											data-name="Group">
											<HomeSvgs.SupplyChainExcellenceSvg08 />
										</div>
									</div>
								</div>
								<div
									className="absolute contents inset-[16.61%_49.39%_74.9%_47.73%]"
									data-name="Clip path group">
									<div
										className="absolute contents inset-[16.61%_49.39%_74.9%_47.73%]"
										data-name="Group">
										<div
											className="absolute inset-[16.61%_49.39%_74.9%_47.73%] mask-position-[-94.344px_-45.609px,_0.002px_0px]"
											style={{
												maskImage: `url('${imgVector2}'), url('${imgGroup2}')`,
											}}
											data-name="Group">
											<HomeSvgs.SupplyChainExcellenceSvg09 />
										</div>
									</div>
								</div>
								<div
									className="absolute inset-[51.93%_51.55%_39.86%_45.67%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-67.979px_-160.37px] mask-size-[227.536px_186.368px]"
									style={{
										maskImage: `url('${imgVector2}')`,
									}}
									data-name="Vector">
									<HomeSvgs.SupplyChainExcellenceSvg10 />
								</div>
								<div
									className="absolute inset-[51.93%_48.83%_39.86%_48.69%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-106.659px_-160.37px] mask-size-[227.536px_186.368px]"
									style={{
										maskImage: `url('${imgVector2}')`,
									}}
									data-name="Vector">
									<HomeSvgs.SupplyChainExcellenceSvg11 />
								</div>
								<div
									className="absolute inset-[43.71%_50.45%_48.07%_46.47%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-78.24px_-133.656px] mask-size-[227.536px_186.368px]"
									style={{
										maskImage: `url('${imgVector2}')`,
									}}
									data-name="Vector">
									<HomeSvgs.SupplyChainExcellenceSvg12 />
								</div>
								<div
									className="absolute inset-[43.71%_51.77%_52.71%_47.76%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-94.77px_-133.674px] mask-size-[227.536px_186.368px]"
									style={{
										maskImage: `url('${imgVector2}')`,
									}}
									data-name="Vector">
									<HomeSvgs.SupplyChainExcellenceSvg13 />
								</div>
								<div
									className="absolute inset-[51.95%_52.87%_44.47%_46.66%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-80.73px_-160.461px] mask-size-[227.536px_186.368px]"
									style={{
										maskImage: `url('${imgVector2}')`,
									}}
									data-name="Vector">
									<HomeSvgs.SupplyChainExcellenceSvg14 />
								</div>
								<div
									className="absolute inset-[51.95%_49.93%_44.72%_49.6%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-118.347px_-160.463px] mask-size-[227.536px_186.368px]"
									style={{
										maskImage: `url('${imgVector2}')`,
									}}
									data-name="Vector">
									<HomeSvgs.SupplyChainExcellenceSvg15 />
								</div>
							</div>
						</div>
					</div>
					<div
						className="absolute contents inset-[32.61%_34.01%_39.98%_57.5%]"
						data-name="Group">
						<div
							className="absolute contents inset-[32.61%_34.01%_39.98%_57.5%]"
							data-name="Clip path group">
							<div
								className="absolute contents inset-[32.63%_34.01%_39.32%_57.76%]"
								data-name="Group">
								<div
									className="absolute contents inset-[32.63%_34.01%_39.32%_57.76%]"
									data-name="Group">
									<div
										className="absolute inset-[32.63%_34.01%_40.18%_57.76%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-3.316px_-0.056px] mask-size-[108.75px_89.073px] opacity-50"
										style={{
											maskImage: `url('${imgVector3}')`,
										}}
										data-name="Vector">
										<HomeSvgs.SupplyChainExcellenceSvg16 />
									</div>
									<div
										className="absolute contents inset-[35.65%_34.68%_39.32%_58.43%]"
										data-name="Clip path group">
										<div
											className="absolute contents inset-[35.65%_34.68%_39.32%_58.43%]"
											data-name="Group">
											<div
												className="absolute inset-[35.65%_34.68%_39.32%_58.43%] mask-position-[-11.92px_-9.875px,_0.016px_0px] opacity-50"
												style={{
													maskImage: `url('${imgVector3}'), url('${imgGroup3}')`,
												}}
												data-name="Group">
												<HomeSvgs.SupplyChainExcellenceSvg17 />
											</div>
										</div>
									</div>
									<div
										className="absolute contents inset-[39.32%_37.6%_56.63%_61.02%]"
										data-name="Clip path group">
										<div
											className="absolute inset-[39.67%_37.85%_58.22%_61.34%] mask-position-[-49.202px_-22.935px,_-4.112px_-1.138px] opacity-50"
											style={{
												maskImage: `url('${imgVector3}'), url('${imgGroup4}')`,
											}}
											data-name="Group">
											<HomeSvgs.SupplyChainExcellenceSvg18 />
										</div>
									</div>
									<div
										className="absolute inset-[56.19%_38.63%_39.88%_60.04%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-32.491px_-76.646px] mask-size-[108.75px_89.073px] opacity-50"
										style={{
											maskImage: `url('${imgVector3}')`,
										}}
										data-name="Vector">
										<HomeSvgs.SupplyChainExcellenceSvg19 />
									</div>
									<div
										className="absolute inset-[56.19%_37.33%_39.88%_61.48%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-50.976px_-76.646px] mask-size-[108.75px_89.073px] opacity-50"
										style={{
											maskImage: `url('${imgVector3}')`,
										}}
										data-name="Vector">
										<HomeSvgs.SupplyChainExcellenceSvg20 />
									</div>
									<div
										className="absolute inset-[52.27%_38.11%_43.81%_60.42%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-37.394px_-63.88px] mask-size-[108.75px_89.073px] opacity-50"
										style={{
											maskImage: `url('${imgVector3}')`,
										}}
										data-name="Vector">
										<HomeSvgs.SupplyChainExcellenceSvg21 />
									</div>
									<div
										className="absolute inset-[52.27%_38.74%_46.02%_61.04%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-45.293px_-63.889px] mask-size-[108.75px_89.073px] opacity-50"
										style={{
											maskImage: `url('${imgVector3}')`,
										}}
										data-name="Vector">
										<HomeSvgs.SupplyChainExcellenceSvg22 />
									</div>
									<div
										className="absolute inset-[56.21%_39.26%_42.08%_60.51%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-38.583px_-76.693px] mask-size-[108.75px_89.073px] opacity-50"
										style={{
											maskImage: `url('${imgVector3}')`,
										}}
										data-name="Vector">
										<HomeSvgs.SupplyChainExcellenceSvg23 />
									</div>
									<div
										className="absolute inset-[56.21%_37.86%_42.2%_61.92%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-56.562px_-76.693px] mask-size-[108.75px_89.073px] opacity-50"
										style={{
											maskImage: `url('${imgVector3}')`,
										}}
										data-name="Vector">
										<HomeSvgs.SupplyChainExcellenceSvg24 />
									</div>
								</div>
							</div>
						</div>
					</div>
					<div
						className="absolute inset-[24.72%_5.73%_15.81%_81.25%]"
						data-name="Group">
						<HomeSvgs.SupplyChainExcellenceSvg25 />
					</div>
					<div
						className="absolute inset-[45.98%_63.87%_34.19%_29.55%]"
						data-name="Group">
						<HomeSvgs.SupplyChainExcellenceSvg26 />
					</div>
					<div
						className="absolute inset-[82.66%_64.38%_5.82%_1.7%]"
						data-name="Vector">
						<HomeSvgs.SupplyChainExcellenceSvg27 />
					</div>
					<div
						className="absolute inset-[79.98%_90.64%_10.82%_8.04%]"
						data-name="Vector">
						<HomeSvgs.SupplyChainExcellenceSvg28 />
					</div>
					<div
						className="absolute inset-[80.31%_86.79%_10.48%_11.89%]"
						data-name="Vector">
						<HomeSvgs.SupplyChainExcellenceSvg29 />
					</div>
					<div
						className="absolute inset-[80.99%_85.77%_9.8%_12.92%]"
						data-name="Vector">
						<HomeSvgs.SupplyChainExcellenceSvg30 />
					</div>
					<div
						className="absolute inset-[81.66%_88.33%_9.13%_10.35%]"
						data-name="Vector">
						<HomeSvgs.SupplyChainExcellenceSvg31 />
					</div>
					<div
						className="absolute inset-[80.99%_93%_7.18%_5.31%]"
						data-name="Vector">
						<HomeSvgs.SupplyChainExcellenceSvg32 />
					</div>
					<div
						className="absolute inset-[80.91%_71.52%_9.88%_27.16%]"
						data-name="Vector">
						<HomeSvgs.SupplyChainExcellenceSvg33 />
					</div>
					<div
						className="absolute inset-[79.9%_70.07%_10.89%_28.62%]"
						data-name="Vector">
						<HomeSvgs.SupplyChainExcellenceSvg34 />
					</div>
					<div
						className="absolute inset-[82.74%_74.16%_10.72%_24.91%]"
						data-name="Vector">
						<HomeSvgs.SupplyChainExcellenceSvg35 />
					</div>
					<div
						className="absolute inset-[82.02%_75.19%_11.43%_23.87%]"
						data-name="Vector">
						<HomeSvgs.SupplyChainExcellenceSvg36 />
					</div>
					<div
						className="absolute inset-[0_39.46%_14.57%_52.34%]"
						data-name="Group">
						<HomeSvgs.SupplyChainExcellenceSvg37 />
					</div>
					<div
						className="absolute inset-[90.37%_80.37%_8.86%_19.26%]"
						data-name="Vector">
						<HomeSvgs.SupplyChainExcellenceSvg38 />
					</div>
					<div
						className="absolute inset-[86.88%_80.36%_12.36%_19.27%]"
						data-name="Vector">
						<HomeSvgs.SupplyChainExcellenceSvg39 />
					</div>
					<div
						className="absolute inset-[90.76%_76.97%_8.47%_22.65%]"
						data-name="Vector">
						<HomeSvgs.SupplyChainExcellenceSvg40 />
					</div>
					<div
						className="absolute inset-[84.68%_79.79%_14.55%_19.84%]"
						data-name="Vector">
						<HomeSvgs.SupplyChainExcellenceSvg41 />
					</div>
					<div
						className="absolute inset-[89.99%_73.63%_9.24%_25.99%]"
						data-name="Vector">
						<HomeSvgs.SupplyChainExcellenceSvg42 />
					</div>
					<div
						className="absolute inset-[85.38%_82.33%_13.85%_17.29%]"
						data-name="Vector">
						<HomeSvgs.SupplyChainExcellenceSvg43 />
					</div>
					<div
						className="absolute inset-[91.96%_82.15%_7.27%_17.48%]"
						data-name="Vector">
						<HomeSvgs.SupplyChainExcellenceSvg44 />
					</div>
					<div
						className="absolute inset-[89.99%_84.62%_9.24%_15.01%]"
						data-name="Vector">
						<HomeSvgs.SupplyChainExcellenceSvg45 />
					</div>
					<div
						className="absolute inset-[90.4%_87.83%_9.16%_11.93%]"
						data-name="Vector">
						<HomeSvgs.SupplyChainExcellenceSvg46 />
					</div>
					<div
						className="absolute inset-[92.13%_91.47%_7.43%_8.29%]"
						data-name="Vector">
						<HomeSvgs.SupplyChainExcellenceSvg47 />
					</div>
					<div
						className="absolute inset-[86.74%_84.44%_12.35%_15.18%]"
						data-name="Vector">
						<HomeSvgs.SupplyChainExcellenceSvg48 />
					</div>
					<div
						className="absolute inset-[92.35%_86.41%_6.88%_13.21%]"
						data-name="Vector">
						<HomeSvgs.SupplyChainExcellenceSvg49 />
					</div>
					<div
						className="absolute inset-[16.24%_74.55%_12.15%_17.76%]"
						data-name="Group">
						<HomeSvgs.SupplyChainExcellenceSvg50 />
					</div>
					<div
						className="absolute inset-[49.91%_21.99%_30.01%_69.55%]"
						data-name="Group">
						<HomeSvgs.SupplyChainExcellenceSvg51 />
					</div>
					<div
						className="absolute inset-[8.98%_36.64%_86.12%_61.67%]"
						data-name="Vector">
						<HomeSvgs.SupplyChainExcellenceSvg52 />
					</div>
					<div
						className="absolute inset-[9.19%_37.24%_90.05%_62.5%]"
						data-name="Vector">
						<HomeSvgs.SupplyChainExcellenceSvg53 />
					</div>
					<div
						className="absolute inset-[9.77%_37.56%_89.74%_62.36%]"
						data-name="Vector">
						<HomeSvgs.SupplyChainExcellenceSvg54 />
					</div>
					<div
						className="absolute inset-[9.19%_37.67%_90.17%_62.07%]"
						data-name="Vector">
						<HomeSvgs.SupplyChainExcellenceSvg55 />
					</div>
					<div
						className="absolute inset-[10.04%_37.71%_86.45%_61.83%]"
						data-name="Vector">
						<HomeSvgs.SupplyChainExcellenceSvg56 />
					</div>
					<div
						className="absolute inset-[10.38%_37.47%_86.24%_62.22%]"
						data-name="Vector">
						<HomeSvgs.SupplyChainExcellenceSvg57 />
					</div>
					<div
						className="absolute inset-[10.13%_37.09%_86.55%_62.51%]"
						data-name="Vector">
						<HomeSvgs.SupplyChainExcellenceSvg58 />
					</div>
					<div
						className="absolute inset-[9.4%_36.8%_87.43%_62.64%]"
						data-name="Vector">
						<HomeSvgs.SupplyChainExcellenceSvg59 />
					</div>
					<div
						className="absolute inset-[12.36%_36.6%_84.56%_62.77%]"
						data-name="Vector">
						<HomeSvgs.SupplyChainExcellenceSvg60 />
					</div>
					<div
						className="absolute inset-[5.7%_36.55%_83.06%_62.2%]"
						data-name="Vector">
						<HomeSvgs.SupplyChainExcellenceSvg61 />
					</div>
					<div
						className="absolute inset-[12.79%_36.81%_85.36%_63.02%]"
						data-name="Vector">
						<HomeSvgs.SupplyChainExcellenceSvg62 />
					</div>
					<div
						className="absolute inset-[12.5%_36.76%_84.94%_63.03%]"
						data-name="Vector">
						<HomeSvgs.SupplyChainExcellenceSvg63 />
					</div>
					<div
						className="absolute inset-[12.58%_36.68%_85.29%_63.11%]"
						data-name="Vector">
						<HomeSvgs.SupplyChainExcellenceSvg64 />
					</div>
					<div
						className="absolute inset-[13.45%_37%_85.03%_62.81%]"
						data-name="Vector">
						<HomeSvgs.SupplyChainExcellenceSvg65 />
					</div>
					<div
						className="absolute inset-[12.55%_36.86%_85.19%_62.94%]"
						data-name="Vector">
						<HomeSvgs.SupplyChainExcellenceSvg66 />
					</div>
					<div
						className="absolute inset-[13.42%_36.87%_84.97%_62.9%]"
						data-name="Vector">
						<HomeSvgs.SupplyChainExcellenceSvg67 />
					</div>
					<div
						className="absolute inset-[7.1%_35.49%_86.14%_62.85%]"
						data-name="Vector">
						<HomeSvgs.SupplyChainExcellenceSvg68 />
					</div>
					<div
						className="absolute inset-[8.42%_36.83%_88.56%_63%]"
						data-name="Vector">
						<HomeSvgs.SupplyChainExcellenceSvg69 />
					</div>
					<div
						className="absolute inset-[11.56%_36.71%_87.62%_63.15%]"
						data-name="Vector">
						<HomeSvgs.SupplyChainExcellenceSvg70 />
					</div>
					<div
						className="absolute inset-[12.24%_36.41%_86.66%_63.29%]"
						data-name="Vector">
						<HomeSvgs.SupplyChainExcellenceSvg71 />
					</div>
					<div
						className="absolute inset-[7.45%_35.94%_88.09%_63.17%]"
						data-name="Vector">
						<HomeSvgs.SupplyChainExcellenceSvg72 />
					</div>
					<div
						className="absolute inset-[8%_35.96%_91.44%_63.74%]"
						data-name="Vector">
						<HomeSvgs.SupplyChainExcellenceSvg73 />
					</div>
					<div
						className="absolute inset-[9.41%_36.34%_89%_63.53%]"
						data-name="Vector">
						<HomeSvgs.SupplyChainExcellenceSvg74 />
					</div>
					<div
						className="absolute inset-[9.26%_36.18%_89.75%_63.65%]"
						data-name="Vector">
						<HomeSvgs.SupplyChainExcellenceSvg75 />
					</div>
					<div
						className="absolute inset-[8.82%_36.06%_88.94%_63.62%]"
						data-name="Vector">
						<HomeSvgs.SupplyChainExcellenceSvg76 />
					</div>
					<div
						className="absolute inset-[8.68%_35.89%_88.21%_63.81%]"
						data-name="Vector">
						<HomeSvgs.SupplyChainExcellenceSvg77 />
					</div>
					<div
						className="absolute inset-[9.37%_35.83%_87.61%_63.89%]"
						data-name="Vector">
						<HomeSvgs.SupplyChainExcellenceSvg78 />
					</div>
					<div
						className="absolute inset-[10.49%_35.62%_86.84%_63.94%]"
						data-name="Vector">
						<HomeSvgs.SupplyChainExcellenceSvg79 />
					</div>
					<div
						className="absolute inset-[11.99%_35.24%_87.54%_64.56%]"
						data-name="Vector">
						<HomeSvgs.SupplyChainExcellenceSvg80 />
					</div>
					<div
						className="absolute inset-[9.26%_35.34%_90.07%_64.55%]"
						data-name="Vector">
						<HomeSvgs.SupplyChainExcellenceSvg81 />
					</div>
					<div
						className="absolute inset-[11.15%_35.25%_87.8%_64.6%]"
						data-name="Vector">
						<HomeSvgs.SupplyChainExcellenceSvg82 />
					</div>
					<div
						className="absolute inset-[7.33%_35.45%_91.47%_64.22%]"
						data-name="Vector">
						<HomeSvgs.SupplyChainExcellenceSvg83 />
					</div>
					<div
						className="absolute inset-[8.63%_35.14%_83.94%_64.35%]"
						data-name="Vector">
						<HomeSvgs.SupplyChainExcellenceSvg84 />
					</div>
					<div
						className="absolute inset-[6.35%_34.99%_83.57%_64.18%]"
						data-name="Vector">
						<HomeSvgs.SupplyChainExcellenceSvg85 />
					</div>
					<div
						className="absolute inset-[10.99%_35.2%_87.48%_64.5%]"
						data-name="Vector">
						<HomeSvgs.SupplyChainExcellenceSvg86 />
					</div>
					<div
						className="absolute inset-[8.93%_35.26%_89.52%_64.42%]"
						data-name="Vector">
						<HomeSvgs.SupplyChainExcellenceSvg87 />
					</div>
					<div
						className="absolute inset-[10.33%_35.2%_88.76%_64.46%]"
						data-name="Vector">
						<HomeSvgs.SupplyChainExcellenceSvg88 />
					</div>
					<div
						className="absolute inset-[12.59%_35.22%_86.69%_64.57%]"
						data-name="Vector">
						<HomeSvgs.SupplyChainExcellenceSvg89 />
					</div>
					<div
						className="absolute inset-[13.39%_35.23%_85.69%_64.63%]"
						data-name="Vector">
						<HomeSvgs.SupplyChainExcellenceSvg90 />
					</div>
					<div
						className="absolute inset-[14.07%_35.24%_85.45%_64.69%]"
						data-name="Vector">
						<HomeSvgs.SupplyChainExcellenceSvg91 />
					</div>
					<div
						className="absolute inset-[9.28%_34.36%_81.69%_64.4%]"
						data-name="Vector">
						<HomeSvgs.SupplyChainExcellenceSvg92 />
					</div>
					<div
						className="absolute inset-[16.63%_35.28%_82.3%_64.57%]"
						data-name="Vector">
						<HomeSvgs.SupplyChainExcellenceSvg93 />
					</div>
					<div
						className="absolute inset-[16.73%_35.05%_82.72%_64.74%]"
						data-name="Vector">
						<HomeSvgs.SupplyChainExcellenceSvg94 />
					</div>
					<div
						className="absolute inset-[17.32%_34.9%_82.68%_65.09%]"
						data-name="Vector">
						<HomeSvgs.SupplyChainExcellenceSvg95 />
					</div>
					<div
						className="absolute inset-[10.12%_34.47%_83.39%_64.82%]"
						data-name="Vector">
						<HomeSvgs.SupplyChainExcellenceSvg96 />
					</div>
					<div
						className="absolute inset-[12.14%_34.36%_77.9%_61.67%]"
						data-name="Vector">
						<HomeSvgs.SupplyChainExcellenceSvg97 />
					</div>
					<div
						className="absolute inset-[15.88%_34.85%_79.68%_63.96%]"
						data-name="Vector">
						<HomeSvgs.SupplyChainExcellenceSvg98 />
					</div>
					<div
						className="absolute inset-[14.34%_36.38%_85.07%_62.06%]"
						data-name="Vector">
						<HomeSvgs.SupplyChainExcellenceSvg99 />
					</div>
					<div
						className="absolute inset-[15.62%_36.38%_83.86%_62.06%]"
						data-name="Vector">
						<HomeSvgs.SupplyChainExcellenceSvg100 />
					</div>
					<div
						className="absolute inset-[16.9%_36.38%_82.57%_62.06%]"
						data-name="Vector">
						<HomeSvgs.SupplyChainExcellenceSvg101 />
					</div>
					<div
						className="absolute inset-[17.88%_0_0_92.63%]"
						data-name="Group">
						<HomeSvgs.SupplyChainExcellenceSvg102 />
					</div>
				</div>
				{/* Impact */}
			</div>
			<div className="bg-[#f9ecbd] overflow-clip relative shrink-0 w-full">
				<BackgroundBottomSvg
					className="absolute inset-x-0 top-0 w-full max-w-none pointer-events-none select-none"
					fill="#FFFFFF"
				/>
				<ContentContainer size="wide" className="relative z-10">
					<div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[minmax(0,368px)_repeat(3,minmax(0,1fr))] py-24 md:py-32 lg:pb-36 lg:pt-[325px]">
						<p className="font-['Fraunces',serif] font-normal leading-[1.42] not-italic text-[#4c352b] text-[28px] md:text-[32px] text-center lg:text-left tracking-[0.96px] w-full sm:col-span-2 lg:col-span-1">
							By keeping food in the human food supply chain, we
							have an impact on various levels:
						</p>
						<div className="content-stretch flex flex-col gap-8 md:gap-[56px] items-center lg:items-start justify-self-center lg:justify-self-start relative w-full max-w-[214px]">
							<div
								className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0"
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
							<div className="content-stretch flex flex-col gap-[24px] items-center lg:items-start not-italic relative shrink-0 text-center lg:text-left w-full">
								<p className="font-['Fraunces',serif] font-normal leading-[normal] relative shrink-0 text-[#4c352b] text-5xl md:text-[64px] tracking-[1.92px] w-full">
									1K
								</p>
								<p className="font-['Rubik',sans-serif] font-normal leading-[1.68] relative shrink-0 text-[#7b6a62] text-[16px] tracking-[0.48px] w-full">
									tonnes of CO2e avoided
								</p>
							</div>
						</div>
						<div className="content-stretch flex flex-col gap-8 md:gap-[56px] items-center lg:items-start justify-self-center lg:justify-self-start relative w-full max-w-[214px]">
							<div
								className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0"
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
							<div className="content-stretch flex flex-col gap-[24px] items-center lg:items-start not-italic relative shrink-0 text-center lg:text-left w-full">
								<p className="font-['Fraunces',serif] font-normal leading-[normal] relative shrink-0 text-[#4c352b] text-5xl md:text-[64px] tracking-[1.92px] w-full">
									920K
								</p>
								<p className="font-['Rubik',sans-serif] font-normal leading-[1.68] relative shrink-0 text-[#7b6a62] text-[16px] tracking-[0.48px] w-full">
									KG of food saved
								</p>
							</div>
						</div>
						<div className="content-stretch flex flex-col gap-8 md:gap-[56px] items-center lg:items-start justify-self-center lg:justify-self-start relative w-full max-w-[214px]">
							<div
								className="h-[122.46px] relative shrink-0 w-[125.707px]"
								data-name="Group">
								<HomeSvgs.ImpactSvg06 />
							</div>
							<div className="content-stretch flex flex-col gap-[24px] items-center lg:items-start not-italic relative shrink-0 text-center lg:text-left w-full">
								<p className="font-['Fraunces',serif] font-normal leading-[normal] relative shrink-0 text-[#4c352b] text-5xl md:text-[64px] tracking-[1.92px] w-full">
									37%
								</p>
								<p className="font-['Rubik',sans-serif] font-normal leading-[1.68] relative shrink-0 text-[#7b6a62] text-[16px] tracking-[0.48px] w-full">
									increase in farmers' incomes
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
				className="bg-[#fbfafa] overflow-clip py-16 md:py-24 lg:py-[112px] relative shrink-0 w-full"
				data-name="News">
				<ContentContainer size="wide">
					<div className="content-stretch flex flex-col gap-12 lg:gap-[80px] items-start max-w-[1280px] relative shrink-0 w-full">
						<div className="content-stretch flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between relative shrink-0 w-full">
							<div className="content-stretch flex flex-col gap-[16px] items-start max-w-[768px] min-w-px relative">
								<p className="font-['Rubik',sans-serif] font-normal leading-[28px] not-italic relative shrink-0 text-[#b3b3b3] text-[18px] whitespace-nowrap">
									News Stories
								</p>
								<h2 className="font-['Fraunces',serif] font-normal leading-[1.2] not-italic relative shrink-0 text-4xl md:text-[48px] text-black w-full">
									Check out our latest News!
								</h2>
							</div>
							<a
								className="bg-[#1e4a35] content-stretch flex items-start justify-center px-[16px] py-[8px] relative rounded-[40px] shrink-0 w-fit"
								href="/news-events">
								<span className="font-['Rubik',sans-serif] font-normal leading-[1.68] not-italic relative shrink-0 text-[#eee] text-[16px] text-center tracking-[0.48px] whitespace-nowrap">
									View All
								</span>
							</a>
						</div>
						<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 relative shrink-0 w-full">
							{newsItems.map((item) => (
								<article
									key={item.title}
									className="content-stretch flex flex-col items-start min-w-px overflow-clip relative rounded-[32px]">
									<div className="aspect-[405/270] relative shrink-0 w-full">
										<img
											alt={item.title}
											className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
											src={item.image}
										/>
									</div>
									<div className="content-stretch flex flex-col gap-[24px] items-start py-6 md:py-[32px] relative shrink-0 w-full">
										<div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
											<p className="font-['Rubik',sans-serif] font-medium leading-[1.5] not-italic relative shrink-0 text-[#1e4a35] text-[14px] whitespace-nowrap">
												{item.date}
											</p>
											<h3 className="font-['Fraunces',serif] font-normal leading-[32px] not-italic relative shrink-0 text-[#0f251b] text-[22px] md:text-[24px] w-full">
												{item.title}
											</h3>
										</div>
										<a
											className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0"
											href="/news-events">
											<span className="font-['Rubik',sans-serif] font-normal leading-[1.5] not-italic relative shrink-0 text-[#916f96] text-[16px] whitespace-nowrap">
												Read more
											</span>
											<span className="overflow-clip relative shrink-0 size-[24px]">
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
