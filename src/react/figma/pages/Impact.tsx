import * as ImpactSvgs from "../imports/Impact/impact-inline-svgs";
import {
	Frame29,
	Frame33,
	Frame41,
	Frame44,
	Frame48,
	Frame51,
	Frame52,
	Frame53,
	Frame54,
	Frame55,
	Frame56,
} from "../imports/Impact/Impact";
import svgPaths from "../imports/Impact/svg-vudvzk9775";
import imgVector from "../../../assets/figma/3372a9518d26006459daf9220be0823028a7e165.png?url";
import imgVector1 from "../../../assets/figma/1e332ee6a59113f24905dfb13230ff232135f1af.png?url";
import imgVector2 from "../../../assets/figma/bde7cbc7ab76e8ddecbaf7d4c120dd2f2e62a08a.png?url";
import imgEWeb011 from "../../../assets/figma/aade65da6cb771bcb6327af304f18018cf0947ca.png?url";
import imgEWeb08 from "../../../assets/figma/62179481a640b008b3a927b6f5d08842e4da69db.png?url";
import imgEWeb02 from "../../../assets/figma/cc2185f0b310709dee42f6daf0be0b2e3e099686.png?url";
import imgEWeb12 from "../../../assets/figma/502905928dbeb373ed80faf5d737f9deeaf091a8.png?url";
import imgEWeb05 from "../../../assets/figma/1f80586f76e14242e368fd97bfa6ec81269151c8.png?url";
import imgEWeb13 from "../../../assets/figma/58b98a20e59bda416dbc1843b124b0c9487bdb7d.png?url";
import imgEWeb041 from "../../../assets/figma/01551b7ef7b205992929ebe5a67972b7fd1e58ca.png?url";
import imgEWeb07 from "../../../assets/figma/edb1bfa07bdade1d9627f16daf258a78ea99e535.png?url";
import imgEWeb15 from "../../../assets/figma/2245e7cc766e13feed3dd1a99b081b289e6082e0.png?url";
import {
	imgGroup,
	imgGroup1,
	imgGroup2,
	imgGroup3,
	imgGroup4,
} from "../imports/Impact/svg-6hsgu";
import { BackgroundBottomImpactSvg } from "../imports/Impact/background-bottom-impact";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ContentContainer } from "../components/layout/ContentContainer";
import { ResponsiveGrid } from "../components/layout/ResponsiveGrid";
import { SectionShell } from "../components/layout/SectionShell";
const indirectSdgIcons = [
	{
		label: "Quality education",
		src: imgEWeb041,
	},
	{
		label: "Gender equality",
		src: imgEWeb05,
	},
	{
		label: "Affordable and clean energy",
		src: imgEWeb07,
	},
	{
		label: "Decent work and economic growth",
		src: imgEWeb08,
	},
	{
		label: "Life on land",
		src: imgEWeb15,
	},
];
const impactPillarRows = [[Frame29, Frame33], [Frame41, Frame44], [Frame48]];
const sdgTargetCards = [Frame51, Frame52, Frame53, Frame54, Frame55, Frame56];
export default function Impact() {
	return (
		<div
			className="bg-white content-stretch flex flex-col items-center relative w-full min-h-screen"
			data-name="Impact">
			{/* Hero */}
			<div
				className="bg-[#eddde6] min-h-[986px] overflow-clip relative shrink-0 w-full"
				data-name="Wireframe - 53">
				<div
					className="absolute flex h-[620.8px] items-center justify-center left-[79.24%] right-[-24.34%] top-[157px]"
					style={{
						containerType: "size",
					}}>
					<div className="flex-none h-[100cqw] rotate-90 w-[100cqh]">
						<div className="relative size-full">
							<ImpactSvgs.ImpactSvg01 />
						</div>
					</div>
				</div>
				<ContentContainer size="wide" className="pt-[246px] pb-[128px]">
					<div className="grid gap-[80px] lg:grid-cols-[minmax(0,515px)_minmax(0,624px)] lg:items-start lg:justify-between">
						<div className="content-stretch flex flex-col gap-[40px] items-start not-italic relative">
							<div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0">
								<div className="font-['Fraunces',serif] font-normal leading-tight relative shrink-0 text-[#0f251b] text-4xl md:text-5xl lg:text-6xl tracking-wide w-[519px] whitespace-pre-wrap">
									<p className="leading-tight mb-0">{`Building `}</p>
									<p className="leading-tight">
										resilient
										<br aria-hidden="true" />
										food systems
									</p>
								</div>
								<p className="font-['Rubik',sans-serif] font-normal leading-[1.68] relative shrink-0 text-[#1e4a35] text-[20px] tracking-[0.6px] w-[515px]">
									Agriculture is the backbone of Kenya’s rural
									economy, yet 7.2 million smallholder farmers
									remain economically vulnerable due to
									fragmented markets and unreliable payments.
								</p>
							</div>
							<p className="font-['Rubik',sans-serif] font-normal leading-[1.68] relative shrink-0 text-[#1e4a35] text-[16px] tracking-[0.48px] w-[515px]">
								At the same time, up to 50% of fresh produce in
								Sub-Saharan Africa is lost between harvest and
								market. With Africa’s population projected to
								double by 2050 and climate change threatening
								productivity, the urgency to build inclusive
								food systems has never been greater.
							</p>
						</div>
						<div className="content-stretch flex flex-col gap-[64px] items-end relative w-full">
							<div className="bg-[#eff6ef] relative rounded-[30px] shrink-0 w-full">
								<div
									aria-hidden="true"
									className="absolute border border-[#f7f7f7] border-solid inset-0 pointer-events-none rounded-[30px]"
								/>
								<div className="content-stretch flex flex-col gap-[27px] items-start px-[32px] py-[48px] relative size-full">
									<div className="content-stretch flex items-center relative shrink-0">
										<p className="font-['Fraunces',serif] font-normal leading-[normal] not-italic relative shrink-0 text-[24px] text-black tracking-[0.72px] w-[210px]">
											Why
										</p>
									</div>
									<p className="font-['Rubik',sans-serif] font-normal leading-[1.68] min-w-full not-italic relative shrink-0 text-[16px] text-black tracking-[0.48px] w-[min-content]">
										Inefficient supply chains cause
										significant food loss, leading to lost
										income, avoidable emissions, and wasted
										resources. African produce remains
										under-utilised globally.
									</p>
									<div className="absolute contents left-[-32px] top-[-49px]">
										<div className="absolute flex h-[80px] items-center justify-center left-[-32px] top-[-49px] w-[82px]">
											<div className="-scale-y-100 flex-none rotate-180">
												<div
													className="h-[80px] relative w-[82px]"
													data-name="Vector">
													<ImpactSvgs.ImpactSvg02 />
												</div>
											</div>
										</div>
										<div className="absolute h-[32px] left-[-19px] top-[-25px] w-[56px]">
											<div
												className="absolute h-[32px] left-0 top-0 w-[56px]"
												data-name="Capa_1">
												<ImpactSvgs.ImpactSvg03 />
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="bg-[#eff6ef] relative rounded-[30px] shrink-0 w-full">
								<div
									aria-hidden="true"
									className="absolute border border-[#f7f7f7] border-solid inset-0 pointer-events-none rounded-[30px]"
								/>
								<div className="content-stretch flex flex-col gap-[27px] items-start px-[32px] py-[48px] relative size-full">
									<div className="content-stretch flex items-center relative shrink-0">
										<p className="font-['Fraunces',serif] font-normal leading-[normal] not-italic relative shrink-0 text-[24px] text-black tracking-[0.72px] w-[210px]">
											How
										</p>
									</div>
									<p className="font-['Rubik',sans-serif] font-normal leading-[1.68] min-w-full not-italic relative shrink-0 text-[16px] text-black tracking-[0.48px] w-[min-content]">
										Farm to Feed builds structured,
										transparent, and demand-driven supply
										chains. Using digital tools, farmer
										training, and value addition, we create
										consistent markets for farmers while
										improving supply chain efficiency,
										extending product shelf life, and
										reducing environmental impact.
									</p>
									<div className="absolute h-[80px] left-[-32px] top-[-50.68px] w-[82px]">
										<ImpactSvgs.ImpactSvg04 />
									</div>
								</div>
							</div>
						</div>
					</div>
				</ContentContainer>
				<Header />
			</div>
			{/* Impact pillars */}
			<div
				className="bg-white min-h-0 overflow-clip relative shrink-0 w-full lg:min-h-[1971px]"
				data-name="Wireframe - 11">
				<BackgroundBottomImpactSvg
					className="absolute inset-x-0 top-0 w-full max-w-none pointer-events-none select-none"
					fill="#EDDDE6"
				/>
				<div
					className="absolute flex inset-[1.61%_31.62%_85.61%_20.85%] items-center justify-center"
					style={{
						containerType: "size",
					}}>
					<div className="flex-none h-[hypot(-97.8483cqw,19.2264cqh)] rotate-[85.86deg] w-[hypot(2.1517cqw,80.7736cqh)]">
						<div className="relative size-full" data-name="Vector">
							<ImpactSvgs.ImpactSvg05 />
						</div>
					</div>
				</div>
				<div
					className="absolute flex inset-[0.33%_22.5%_87.76%_19.93%] items-center justify-center"
					style={{
						containerType: "size",
					}}>
					<div className="flex-none h-[100cqw] rotate-90 w-[100cqh]">
						<div className="relative size-full" data-name="Vector">
							<img
								alt=""
								className="absolute block inset-0 max-w-none size-full"
								height="829"
								src={imgVector}
								width="234.69"
							/>
						</div>
					</div>
				</div>
				<ContentContainer size="wide" className="pt-[180px] pb-[120px] md:pt-[220px] lg:pt-[277px]">
					<div className="content-stretch flex flex-col gap-[32px] items-center relative w-full">
						<div className="content-stretch flex flex-col gap-[32px] items-center max-w-[1052px] not-italic relative shrink-0 text-center w-full">
							<p className="font-['Fraunces',serif] font-normal leading-[normal] relative shrink-0 text-[#0f251b] text-[32px] md:text-[40px] tracking-[1.2px] w-full">
								Our strategy is built on the conviction that
								food systems only work when farmers, markets,
								and the environment are strengthened together.
							</p>
							<p className="font-['Rubik',sans-serif] font-normal leading-[1.68] relative shrink-0 text-[#1e4a35] text-[16px] tracking-[0.48px] w-full">
								We translate this approach into five integrated
								pillars
							</p>
						</div>
						<div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full">
							{impactPillarRows.map((row, index) => (
								<div
									className={`content-stretch flex flex-col gap-[32px] relative shrink-0 w-full lg:flex-row ${index === 2 ? "items-stretch justify-center" : "items-stretch"}`}
									key={index}>
									{row.map((PillarCard) => (
										<PillarCard key={PillarCard.name} />
									))}
								</div>
							))}
						</div>
					</div>
				</ContentContainer>
			</div>
			{/* Impact report CTA */}
			<div
				className="bg-white overflow-clip relative shrink-0 w-full"
				data-name="Wireframe - 10">
				<div className="bg-[#f9ecbd] min-h-[651px] overflow-clip rounded-tl-[40px] rounded-tr-[40px] w-full">
					<ContentContainer size="wide" className="py-[112px]">
						<div className="grid gap-12 lg:grid-cols-[568px_minmax(0,1fr)] lg:items-center">
							<div
								className="absolute hidden lg:flex h-[525.083px] items-center justify-center left-[638.18px] top-[144.34px] w-[619.918px]"
								style={
									{
										"--transform-inner-width": "1185",
										"--transform-inner-height": "21",
									} as React.CSSProperties
								}>
								<div className="flex-none rotate-[-83.81deg]">
									<div
										className="h-[573px] relative w-[466px]"
										data-name="Vector">
										<ImpactSvgs.ImpactSvg06 />
									</div>
								</div>
							</div>
							<div className="content-stretch flex flex-col gap-[43px] items-start relative max-w-[568px]">
								<p className="font-['Fraunces',serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#0f251b] text-[40px] tracking-[1.2px] w-[488px]">
									Impact that travels from farm level to
									customer counter
								</p>
								<p className="font-['Rubik',sans-serif] font-normal leading-[1.68] min-w-full not-italic relative shrink-0 text-[#1e4a35] text-[20px] tracking-[0.6px] w-[min-content]">
									At Farm to Feed, we create impact throughout
									the supply chain, from farm level to
									customer counter. Our long-term outcomes
									lead to prosperous farmers, strong
									communities, and a climate-resilient food
									system that positions Africa as a leader in
									the production of sustainable ingredients.
								</p>
								<div
									className="bg-[#1e4a35] content-stretch flex items-start mb-[32px] px-[24px] py-[12px] relative rounded-[40px] shrink-0 lg:mb-0"
									data-name="order">
									<p className="font-['Rubik',sans-serif] font-normal leading-[1.68] not-italic relative shrink-0 text-[16px] text-center text-white tracking-[0.48px] whitespace-nowrap">
										Read Impact Report 2025
									</p>
								</div>
							</div>
							<div
								className="relative flex h-[360px] md:h-[500px] items-center justify-center w-full"
								style={
									{
										"--transform-inner-width": "1185",
										"--transform-inner-height": "619",
									} as React.CSSProperties
								}>
								<div className="-rotate-90 flex-none">
									<div
										className="h-[615px] relative w-[500px]"
										data-name="Vector">
										<img
											alt=""
											className="absolute block inset-0 max-w-none size-full"
											height="615"
											src={imgVector2}
											width="500"
										/>
									</div>
								</div>
							</div>
						</div>
					</ContentContainer>
				</div>
			</div>
			{/* SDG metrics */}
			<SectionShell
				className="bg-[#f9ecbd] overflow-clip relative shrink-0 w-full pt-[80px] pb-[120px] md:pt-[96px] md:pb-[140px]"
				data-name="Wireframe - 54">
				<div
					className="absolute hidden h-[620.8px] items-center justify-center left-[77.85%] right-[-22.95%] top-[129px] lg:flex"
					style={{
						containerType: "size",
					}}>
					<div className="flex-none h-[100cqw] rotate-90 w-[100cqh]">
						<div className="relative size-full">
							<ImpactSvgs.ImpactSvg07 />
						</div>
					</div>
				</div>
				<div className="relative z-10 flex flex-col gap-[48px] md:gap-[64px]">
					<div className="flex max-w-[737px] flex-col gap-8">
						<p className="font-['Fraunces',serif] font-normal leading-[normal] not-italic text-[#0f251b] text-[32px] tracking-[1.2px] w-full md:text-[40px]">
							Our impact metrics align directly with the SDG
							targets
						</p>
						<p className="font-['Rubik',sans-serif] font-normal leading-[1.68] not-italic text-[#1e4a35] text-[18px] tracking-[0.6px] w-full max-w-[624px] md:text-[20px]">
							In line with the GRI reporting standards, this
							provides transparency and accountability throughout
							the supply chain.
						</p>
					</div>
					<ResponsiveGrid columns={3} className="items-stretch">
						{sdgTargetCards.map((SdgCard) => (
							<SdgCard key={SdgCard.name} />
						))}
					</ResponsiveGrid>
					<div
						className="content-stretch flex flex-col gap-[26px] items-start relative"
						data-name="sdg-extras">
						<p className="font-['Rubik',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[18px] text-black tracking-[0.54px]">
							Farm to feed indirectly contributes to:
						</p>
						<div className="grid grid-cols-3 gap-[16px] relative shrink-0 sm:grid-cols-5">
							{indirectSdgIcons.map((icon) => (
								<div
									className="relative rounded-[4px] shrink-0 size-[89px]"
									key={icon.label}>
									<img
										alt={icon.label}
										className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[4px] size-full"
										src={icon.src}
									/>
								</div>
							))}
						</div>
					</div>
				</div>
				<div className="absolute inset-[97.49%_0_0_0]">
					<ImpactSvgs.ImpactSvg08 />
				</div>
			</SectionShell>
			{/* Footer */}
			<Footer />
		</div>
	);
}
