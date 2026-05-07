import * as KenyanBuyersSvgs from "../imports/BuyFromUsLocal/kenyanBuyers-inline-svgs";
import { Order4, Frame6, Order5 } from "../imports/BuyFromUsLocal/BuyFromUsLocal";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ContentContainer } from "../components/layout/ContentContainer";
import svgPaths from "../imports/BuyFromUsLocal-1/svg-d7gbia4w81";
import imgMap from "../../../assets/figma/768034251e290c5f148f0125d9e404698150a7ed.png?url";
import imgPegmanOffscreen2X from "../../../assets/figma/747a27fe416ebfaf57b25beae190a98036e77d0e.png?url";
import { imgGroup } from "../imports/BuyFromUsLocal-1/svg-efcb2";
import { BorderBottomKenyanBuyersSvg } from "../imports/BuyFromUsLocal-1/border-bottom-kenyan-buyers";
import { BorderTopKenyanBuyersSvg } from "../imports/BuyFromUsLocal-1/border-top-kenyan-buyers";
const partnerProductCategories = [["Dairy", "Cereals, grains & pulses", "Tea & Coffee"], ["spices", "Snacks"]];
const localBuyerHowItWorksSteps = [{
  body: "Our Sales team is ready to speak with you",
  color: "#8C98EE",
  textColor: "#e6e6e6",
  title: "Connect with sales"
}, {
  body: "Explore our wide range of fresh and dry products online",
  color: "#A35380",
  textColor: "#e6e6e6",
  title: "Browse the shop"
}, {
  body: "Select your delivery window and checkout your cart",
  color: "#85A687",
  textColor: "#e6e6e6",
  title: "Place Order"
}, {
  body: "Receive fresh, high quality ingredients directly to your doorstep",
  color: "#EBC194",
  textColor: "#2b1a08",
  title: "Enjoy Delivery"
}];
const localBuyerTestimonialControls = [Order4, Frame6, Order5];
export default function KenyanBuyers() {
  return <div className="bg-white content-stretch flex flex-col items-start relative w-full" data-name="Buy from us - local">
			{/* Hero */}<div className="bg-[#f9ecbd] min-h-[600px] md:min-h-[800px] lg:h-[926px] overflow-clip relative shrink-0 w-full" data-name="Wireframe - 53">
			<div className="absolute hidden md:flex h-[400px] lg:h-[620.8px] items-center justify-center right-[-10%] lg:right-[-24.34%] lg:left-[79.24%] top-[200px] md:top-[352px] opacity-50 lg:opacity-100" style={{
        containerType: "size"
      }}>
				<div className="flex-none h-[100cqw] rotate-90 w-[100cqh]">
					<div className="relative size-full">
			<KenyanBuyersSvgs.KenyanBuyersSvg01 />
		</div>
				</div>
			</div>
			<Header />
			<ContentContainer size="wide" className="pt-[211px]">
				<div className="grid gap-12 items-center lg:grid-cols-[minmax(0,1fr)_minmax(0,563px)]">
			<div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0">
			<div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0">
			<div className="absolute h-[14px] left-0 top-[130.5px] w-[443px]" data-name="objects">
			<KenyanBuyersSvgs.KenyanBuyersSvg02 />
		</div>
			<p className="font-['Fraunces',serif] font-normal leading-tight not-italic relative shrink-0 text-[#0f251b] text-4xl md:text-5xl lg:text-6xl tracking-wide w-[519px]">
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
			<p className="font-['Rubik',sans-serif] font-medium italic leading-[1.68] relative shrink-0 text-[#d78228] text-[20px] tracking-[0.6px] w-[515px]">{`"Mboga bora, faida bora, mazingira bora zaidi"`}</p>
		</div>
			<div className="font-['Rubik',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#1e4a35] text-[16px] tracking-[0.48px] w-[515px] whitespace-pre-wrap">
				<p className="mb-0">
					<span className="leading-[1.68]">
						Built with farmers at the centre, our solution brings
						oddly good products to businesses, retailers, schools,
						feeding programmes, and event companies. Reliable
						quality, healthy margins, and less waste — all in one
						smarter supply chain.
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
			<div aria-hidden="true" className="absolute border border-[#f7f7f7] border-solid inset-0 pointer-events-none rounded-[30px]" />
			<div className="content-stretch flex flex-col gap-[32px] items-start p-[40px] relative size-full">
				<div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full">
			<div className="content-stretch flex items-center relative shrink-0">
			<p className="font-['Rubik',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#0f251b] text-[24px] tracking-[0.72px] w-[210px]">
				Buy from us
			</p>
		</div>
			<p className="font-['Rubik',sans-serif] font-normal leading-[1.68] min-w-full not-italic relative shrink-0 text-[#1e4a35] text-[16px] tracking-[0.48px] w-[min-content]">
				Fill out the form and our sales team will contact you shortly.
			</p>
		</div>
				<div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
			<div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Inputs">
			<div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative" data-name="Input">
			<p className="font-['Rubik',sans-serif] font-medium leading-[1.5] not-italic relative shrink-0 text-[#0f251b] text-[12px] w-full">
				Your Name *
			</p>
			<div className="bg-[#fbfafa] h-[48px] relative rounded-[35px] shrink-0 w-full" data-name="Text input">
			<div aria-hidden="true" className="absolute border border-[#e6e6e6] border-solid inset-[-1px] pointer-events-none rounded-[36px]" />
			<div className="flex flex-row items-center size-full">
				<div className="content-stretch flex items-center p-[12px] relative size-full" />
			</div>
		</div>
		</div>
		</div>
			<div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Inputs">
			<div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative" data-name="Input">
			<p className="font-['Rubik',sans-serif] font-medium leading-[1.5] not-italic relative shrink-0 text-[#0f251b] text-[12px] w-full">
				Your Email *
			</p>
			<div className="bg-[#fbfafa] relative rounded-[24px] shrink-0 w-full" data-name="Text input">
			<div aria-hidden="true" className="absolute border border-[#e6e6e6] border-solid inset-[-1px] pointer-events-none rounded-[25px]" />
			<div className="flex flex-row items-center size-full">
				<div className="content-stretch flex gap-[8px] items-center p-[12px] relative size-full">
					<div className="overflow-clip relative shrink-0 size-[24px]" data-name="credit_card">
			<div className="absolute left-[4px] size-[16px] top-[4px]" data-name="prime:envelope">
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
			<div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative" data-name="Input">
			<p className="font-['Rubik',sans-serif] font-medium leading-[1.5] not-italic relative shrink-0 text-[#0f251b] text-[12px] w-full">
				Phone Number *
			</p>
			<div className="bg-[#fbfafa] h-[48px] relative rounded-[24px] shrink-0 w-full" data-name="Text input">
			<div aria-hidden="true" className="absolute border border-[#e6e6e6] border-solid inset-[-1px] pointer-events-none rounded-[25px]" />
			<div className="flex flex-row items-center size-full">
				<div className="content-stretch flex items-center p-[12px] relative size-full" />
			</div>
		</div>
		</div>
		</div>
			<div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Inputs">
			<div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative" data-name="Input">
			<p className="font-['Rubik',sans-serif] font-medium leading-[1.5] not-italic relative shrink-0 text-[#0f251b] text-[12px] w-full">
				Company Name *
			</p>
			<div className="bg-[#fbfafa] h-[48px] relative rounded-[24px] shrink-0 w-full" data-name="Text input">
			<div aria-hidden="true" className="absolute border border-[#e6e6e6] border-solid inset-[-1px] pointer-events-none rounded-[25px]" />
			<div className="flex flex-row items-center size-full">
				<div className="content-stretch flex items-center p-[12px] relative size-full" />
			</div>
		</div>
		</div>
			<div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative" data-name="Input">
			<p className="font-['Rubik',sans-serif] font-medium leading-[1.5] not-italic relative shrink-0 text-[#0f251b] text-[12px] w-full">
				Job Title
			</p>
			<div className="bg-[#fbfafa] h-[48px] relative rounded-[24px] shrink-0 w-full" data-name="Text input">
			<div aria-hidden="true" className="absolute border border-[#e6e6e6] border-solid inset-[-1px] pointer-events-none rounded-[25px]" />
			<div className="flex flex-row items-center size-full">
				<div className="content-stretch flex items-center p-[12px] relative size-full" />
			</div>
		</div>
		</div>
		</div>
			<div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Input">
			<p className="font-['Rubik',sans-serif] font-medium leading-[1.5] not-italic relative shrink-0 text-[#0f251b] text-[12px] w-full">
				Business Category *
			</p>
			<div className="bg-[#fbfafa] relative rounded-[24px] shrink-0 w-full" data-name="Select">
			<div aria-hidden="true" className="absolute border border-[#e6e6e6] border-solid inset-[-1px] pointer-events-none rounded-[25px]" />
			<div className="flex flex-row items-center size-full">
				<div className="content-stretch flex gap-[16px] items-center p-[12px] relative size-full">
					<p className="flex-[1_0_0] font-['Rubik',sans-serif] font-normal leading-[1.5] min-w-px not-italic relative text-[#1e4a35] text-[14px]">
						Select one...
					</p>
					<div className="overflow-clip relative shrink-0 size-[24px]" data-name="keyboard_arrow_down">
						<div className="absolute inset-[35.51%_25.93%_36.66%_25.88%]" data-name="Vector">
							<KenyanBuyersSvgs.KenyanBuyersSvg04 />
						</div>
					</div>
				</div>
			</div>
		</div>
		</div>
			<div className="bg-[#1e4a35] relative rounded-[40px] shrink-0 w-full" data-name="order">
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
{/* Products */}<div className="bg-white min-h-[600px] md:min-h-[900px] overflow-clip relative shrink-0 w-full" data-name="Wireframe - 11">
			<div className="absolute flex inset-[-13.58%_-0.63%_91.95%_-3.75%] items-center justify-center" style={{
        containerType: "size"
      }}>
				<div className="flex-none h-[100cqw] rotate-90 w-[100cqh]">
					<div className="relative size-full" data-name="Vector">
						<KenyanBuyersSvgs.KenyanBuyersSvg05 />
					</div>
				</div>
			</div>
			<ContentContainer size="wide" className="relative z-10 flex flex-col items-center gap-12 pt-[164px] pb-[120px]">
				<div className="content-stretch flex flex-col gap-[64px] items-center relative w-full max-w-[1280px]">
			<div className="content-stretch flex flex-col gap-[32px] items-center max-w-[1052px] not-italic relative shrink-0 text-center w-full">
			<p className="font-['Fraunces',serif] font-normal leading-[normal] relative shrink-0 text-[#0f251b] text-[48px] tracking-[1.44px] w-full">
				Why choose Farm to Feed?
			</p>
			<p className="font-['Rubik',sans-serif] font-normal leading-[1.68] relative shrink-0 text-[#1e4a35] text-[16px] tracking-[0.48px] w-full">
				We are reshaping the food supply chain to benefit everyone
				involved while protecting our planet.
			</p>
		</div>
			<div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full">
			<div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
			<div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full">
			<div className="bg-[#fbfafa] flex-[1_0_0] min-w-px relative rounded-[30px]">
			<div className="content-stretch flex flex-col gap-[27px] items-start p-[40px] relative size-full">
				<div className="content-stretch flex flex-col gap-[32px] items-start justify-center relative shrink-0">
			<div className="h-[64px] relative shrink-0 w-[65.697px]" data-name="Group">
			<KenyanBuyersSvgs.KenyanBuyersSvg06 />
		</div>
			<p className="font-['Fraunces',serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#0f251b] text-[24px] tracking-[0.72px] whitespace-nowrap">
				One Stop Shop
			</p>
		</div>
				<p className="font-['Rubik',sans-serif] font-normal leading-[1.68] min-w-full not-italic relative shrink-0 text-[#1e4a35] text-[16px] tracking-[0.48px] w-[min-content]">
					All you need to run your food business. From fresh to dry,
					and ready-to-use products.
				</p>
			</div>
		</div>
			<div className="bg-[#fbfafa] flex-[1_0_0] min-w-px relative rounded-[30px]">
			<div className="content-stretch flex flex-col gap-[27px] items-start p-[40px] relative size-full">
				<div className="content-stretch flex flex-col gap-[32px] items-start justify-center relative shrink-0">
			<div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
			<div className="col-1 h-[64px] ml-0 mt-0 relative row-1 w-[65.697px]" data-name="Group">
			<KenyanBuyersSvgs.KenyanBuyersSvg07 />
		</div>
			<div className="col-1 h-[33.97px] ml-[16.72px] mt-[14.15px] relative row-1 w-[33.448px]" data-name="Capa_1">
			<KenyanBuyersSvgs.KenyanBuyersSvg08 />
		</div>
		</div>
			<p className="font-['Fraunces',serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#0f251b] text-[24px] tracking-[0.72px] whitespace-nowrap">
				Best Pricing
			</p>
		</div>
				<p className="font-['Rubik',sans-serif] font-normal leading-[1.68] min-w-full not-italic relative shrink-0 text-[#1e4a35] text-[16px] tracking-[0.48px] w-[min-content]">
					Products that make your store stand out. Pay less, expect
					better and grow your margins.
				</p>
			</div>
		</div>
			<div className="bg-[#fbfafa] flex-[1_0_0] min-w-px relative rounded-[30px]">
			<div className="content-stretch flex flex-col gap-[27px] items-start p-[40px] relative size-full">
				<div className="content-stretch flex flex-col gap-[32px] items-start justify-center relative shrink-0">
			<div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
			<div className="col-1 h-[64px] ml-0 mt-0 relative row-1 w-[65.697px]" data-name="Group">
			<KenyanBuyersSvgs.KenyanBuyersSvg09 />
		</div>
			<div className="col-1 h-[32.925px] ml-[15.68px] mt-[13.63px] relative row-1 w-[33.97px]" data-name="Capa_1">
			<KenyanBuyersSvgs.KenyanBuyersSvg10 />
		</div>
		</div>
			<p className="font-['Fraunces',serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#0f251b] text-[24px] tracking-[0.72px] whitespace-nowrap">
				Full Harvest
			</p>
		</div>
				<p className="font-['Rubik',sans-serif] font-normal leading-[1.68] min-w-full not-italic relative shrink-0 text-[#1e4a35] text-[16px] tracking-[0.48px] w-[min-content]">
					Choose from our range of rescue produce or Grade 1 — we
					procure full harvest from farmers so that nothing goes to
					waste.
				</p>
			</div>
		</div>
		</div>
		</div>
			<div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
			<div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full">
			<div className="bg-[#fbfafa] flex-[1_0_0] min-w-px relative rounded-[30px]">
			<div className="content-stretch flex flex-col gap-[27px] items-start p-[40px] relative size-full">
				<div className="content-stretch flex flex-col gap-[32px] items-start justify-center relative shrink-0">
			<div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
			<div className="col-1 h-[64px] ml-0 mt-0 relative row-1 w-[65.697px]" data-name="Group">
			<KenyanBuyersSvgs.KenyanBuyersSvg11 />
		</div>
			<div className="col-1 h-[31.357px] ml-[20.9px] mt-[16.77px] relative row-1 w-[25.086px]" data-name="Capa_1">
			<KenyanBuyersSvgs.KenyanBuyersSvg12 />
		</div>
		</div>
			<p className="font-['Fraunces',serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#0f251b] text-[24px] tracking-[0.72px] whitespace-nowrap">
				Customer Service
			</p>
		</div>
				<p className="font-['Rubik',sans-serif] font-normal leading-[0] min-w-full not-italic relative shrink-0 text-[#1e4a35] text-[16px] tracking-[0.48px] w-[min-content]">
					<span className="leading-[1.68]">{`If your order is anything less than supreme, we'll fix it. Connect with our team on WhatsApp or call us at `}</span>
					<span className="font-['Rubik',sans-serif] font-medium leading-[1.68]">
						0795851756.
					</span>
				</p>
			</div>
		</div>
			<div className="bg-[#fbfafa] flex-[1_0_0] min-w-px relative rounded-[30px]">
			<div className="content-stretch flex flex-col gap-[27px] items-start p-[40px] relative size-full">
				<div className="content-stretch flex flex-col gap-[32px] items-start justify-center relative shrink-0">
			<div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
			<div className="col-1 h-[64px] ml-0 mt-0 relative row-1 w-[65.697px]" data-name="Group">
			<KenyanBuyersSvgs.KenyanBuyersSvg13 />
		</div>
			<div className="col-1 h-[32.402px] ml-[16.72px] mt-[13.63px] relative row-1 w-[35.016px]" data-name="Capa_1">
			<KenyanBuyersSvgs.KenyanBuyersSvg14 />
		</div>
		</div>
			<p className="font-['Fraunces',serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#0f251b] text-[24px] tracking-[0.72px] whitespace-nowrap">
				Measurable Impact
			</p>
		</div>
				<p className="font-['Rubik',sans-serif] font-normal leading-[1.68] min-w-full not-italic relative shrink-0 text-[#1e4a35] text-[16px] tracking-[0.48px] w-[min-content]">
					For every kg of odd-looking produce you buy, you reduce your
					carbon footprint and directly boost farmer incomes.
				</p>
			</div>
		</div>
			<div className="bg-[#fbfafa] flex-[1_0_0] min-w-px relative rounded-[30px]">
			<div className="content-stretch flex flex-col gap-[27px] items-start p-[40px] relative size-full">
				<div className="content-stretch flex flex-col gap-[32px] items-start justify-center relative shrink-0">
			<div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
			<div className="col-1 h-[64px] ml-0 mt-0 relative row-1 w-[65.697px]" data-name="Group">
			<KenyanBuyersSvgs.KenyanBuyersSvg15 />
		</div>
			<div className="col-1 h-[39.336px] ml-[15.15px] mt-[11.68px] relative row-1 w-[33.972px]">
			<KenyanBuyersSvgs.KenyanBuyersSvg16 />
		</div>
		</div>
			<p className="font-['Fraunces',serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#0f251b] text-[24px] tracking-[0.72px] whitespace-nowrap">
				Flexible Delivery
			</p>
		</div>
				<p className="font-['Rubik',sans-serif] font-normal leading-[1.68] min-w-full not-italic relative shrink-0 text-[#1e4a35] text-[16px] tracking-[0.48px] w-[min-content]">{`Choose your delivery date and window and we'll get freshness delivered to you. On Time, In Full.`}</p>
			</div>
		</div>
		</div>
		</div>
		</div>
		</div>
				<div className="bg-black content-stretch flex items-start px-[16px] py-[8px] rounded-[40px] relative" data-name="order">
			<p className="font-['Rubik',sans-serif] font-normal leading-[1.68] not-italic relative shrink-0 text-[#eee] text-[16px] text-center tracking-[0.48px] whitespace-nowrap">
				Learn More
			</p>
		</div>
			</ContentContainer>
		</div>
{/* Contact */}<div className="bg-[#0f251b] min-h-[600px] md:min-h-[900px] lg:h-[1085px] overflow-clip relative shrink-0 w-full" data-name="Wireframe - 51">
			<div className="absolute bottom-[814.78px] flex h-[223.22px] items-center justify-center right-[-330.48px] w-[838.475px]" style={{
        "--transform-inner-width": "1185",
        "--transform-inner-height": "21"
      } as React.CSSProperties}>
				<div className="-scale-y-100 flex-none rotate-[-93.75deg]">
					<div className="h-[829.172px] relative w-[169.318px]" data-name="Vector">
						<KenyanBuyersSvgs.KenyanBuyersSvg17 />
					</div>
				</div>
			</div>
			<div className="absolute bottom-[520.68px] flex h-[169.318px] items-center justify-center left-[-548px] w-[829.172px]" style={{
        "--transform-inner-width": "1185",
        "--transform-inner-height": "21"
      } as React.CSSProperties}>
				<div className="-rotate-90 flex-none">
					<div className="h-[829.172px] relative w-[169.318px]" data-name="Vector">
						<KenyanBuyersSvgs.KenyanBuyersSvg18 />
					</div>
				</div>
			</div>
			<div className="-translate-x-1/2 absolute flex h-[227.965px] items-center justify-center left-[calc(45.83%+19.92px)] top-[1426.15px] w-[486.457px]" style={{
        "--transform-inner-width": "1185",
        "--transform-inner-height": "21"
      } as React.CSSProperties}>
				<div className="flex-none rotate-[111.36deg] scale-y-99 skew-x-[9.89deg]">
					<div className="h-[440.366px] relative w-[150.712px]" data-name="Group">
			<KenyanBuyersSvgs.KenyanBuyersSvg19 />
		</div>
				</div>
			</div>
			<BorderTopKenyanBuyersSvg className="absolute inset-x-0 top-0 w-full max-w-none pointer-events-none select-none" fill="white" />
			<ContentContainer size="wide" className="relative z-10">
				<div className="grid gap-12 pt-[241px] lg:grid-cols-2 lg:items-start">
					<div className="content-stretch flex flex-col gap-[64px] items-start relative w-full max-w-[624px]">
			<div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
			<p className="font-['Fraunces',serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#f5e091] text-[48px] tracking-[1.44px] w-full">
				Your One Stop Shop
			</p>
		</div>
			<div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0">
			<div className="content-stretch flex gap-[15px] items-start relative shrink-0 w-[535px]">
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
			<div className="content-stretch flex gap-[15px] items-start relative shrink-0 w-[535px]">
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
				We cut, peel, slice and process fresh produce so you don’t have
				to. Save time and storage space by ordering our ready to use
				products.
			</p>
		</div>
		</div>
			<div className="content-stretch flex gap-[15px] items-start relative shrink-0 w-[535px]">
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
			{partnerProductCategories.map((row, index) => <div className={`content-stretch flex items-start relative shrink-0 ${index === 0 ? "gap-[12px]" : "gap-[16px]"}`} key={index}>
					{row.map(category => <div className="bg-[#122c20] content-stretch flex items-start px-[16px] py-[8px] relative rounded-[40px] shrink-0">
			<div aria-hidden="true" className="absolute border border-[#0f251b] border-solid inset-0 pointer-events-none rounded-[40px]" />
			<p className="font-['Rubik',sans-serif] font-normal leading-[1.68] relative shrink-0 text-[#f7f7f7] text-[16px] text-center tracking-[0.48px] whitespace-nowrap">
				{category}
			</p>
		</div>)}
				</div>)}
		</div>
		</div>
		</div>
		</div>
		</div>
			<div className="content-stretch flex gap-[32px] items-start justify-center overflow-clip relative shrink-0 w-full" data-name="Tab Horizontal">
			<div className="flex items-center justify-center relative self-stretch shrink-0 w-0" style={{
                containerType: "size",
                "--transform-inner-width": "1185",
                "--transform-inner-height": "21"
              } as React.CSSProperties}>
				<div className="flex-none rotate-90 w-[100cqh]">
					<div className="h-0 relative w-full" data-name="Border">
						<div className="absolute inset-[-2px_0_0_0]">
							<KenyanBuyersSvgs.KenyanBuyersSvg23 />
						</div>
					</div>
				</div>
			</div>
			<div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px overflow-clip relative" data-name="Content">
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
					<div className="content-stretch flex flex-col items-end relative w-full max-w-[625px]">
			<div className="bg-white relative rounded-[30px] shrink-0 w-full">
			<div aria-hidden="true" className="absolute border border-[#f7f7f7] border-solid inset-0 pointer-events-none rounded-[30px]" />
			<div className="content-stretch flex flex-col gap-[27px] items-start p-[40px] relative size-full">
				<div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
			<div className="content-stretch flex items-center relative shrink-0 w-full">
			<p className="flex-[1_0_0] font-['Rubik',sans-serif] font-medium leading-[normal] min-w-px not-italic relative text-[24px] text-black tracking-[0.72px]">
				Delivery Areas
			</p>
		</div>
		</div>
				<div className="content-stretch flex flex-col gap-[64px] h-[462px] items-start relative shrink-0 w-full" data-name="Content">
			<div className="bg-white flex-[1_0_0] min-h-px overflow-clip relative w-full" data-name="_Google maps mockup">
			<div className="absolute inset-[-64.07%_-68.92%_-43.72%_-47.3%]" data-name="Map">
				<img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgMap} />
			</div>
			<div className="absolute bottom-[2px] h-[26px] left-[6px] w-[66px]" data-name="Google logo">
			<KenyanBuyersSvgs.KenyanBuyersSvg24 />
		</div>
			<div className="absolute right-[8px] size-[28px] top-[69px]" data-name="Street view button">
			<div className="absolute bg-white inset-0 rounded-[2px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.2)]" data-name="Rectangle" />
			<div className="absolute inset-[14.29%_28.57%]" data-name="pegman-offscreen-2x">
				<img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPegmanOffscreen2X} />
			</div>
		</div>
			<div className="absolute h-[53px] right-[8px] top-[8px] w-[28px]" data-name="Zoom control buttons">
			<div className="absolute inset-[-3.77%_-10.71%_-7.55%_-10.71%]">
				<KenyanBuyersSvgs.KenyanBuyersSvg25 />
			</div>
		</div>
			<div className="absolute h-[29px] left-[8px] top-[8px] w-[94px]" data-name="Map type button group">
			<div className="absolute bg-white inset-0 rounded-[2px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.2)]" data-name="Rectangle" />
			<p className="absolute font-['Roboto:Regular',sans-serif] font-normal inset-[27.59%_8.51%_27.59%_48.94%] leading-[normal] text-[#565656] text-[11px] whitespace-nowrap" style={{
                        fontVariationSettings: "'wdth' 100"
                      }}>
				Satellite
			</p>
			<div className="absolute flex inset-[0_59.57%_0_40.43%] items-center justify-center" style={{
                        containerType: "size"
                      }}>
				<div className="flex-none h-[1px] rotate-90 w-[100cqh]">
					<div className="relative size-full" data-name="Line">
						<div className="absolute inset-[-1px_0_0_0]">
							<KenyanBuyersSvgs.KenyanBuyersSvg26 />
						</div>
					</div>
				</div>
			</div>
			<p className="absolute font-['Roboto:Medium',sans-serif] font-medium inset-[27.59%_68.09%_27.59%_8.51%] leading-[normal] text-[11px] text-black whitespace-nowrap" style={{
                        fontVariationSettings: "'wdth' 100"
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
			<div aria-hidden="true" className="absolute border border-[#f7e6d4] border-solid inset-0 pointer-events-none rounded-[16px]" />
			<div className="content-stretch flex flex-col items-start p-[16px] relative size-full">
				<div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
			<div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative">
			<div className="relative shrink-0 size-[24px]" data-name="prime:info-circle">
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
					Contact our sales team
				</span>
				<span className="font-['Rubik',sans-serif] font-bold leading-[normal] text-[#2b1a08] text-[14px]">{` `}</span>
				<span className="leading-[normal] text-[#2b1a08] text-[14px]">
					to hear more.
				</span>
			</p>
		</div>
			<div className="bg-[#d78228] content-stretch flex items-start px-[16px] py-[8px] relative rounded-[40px] shrink-0" data-name="order">
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
{/* How it works */}<div className="bg-white min-h-[600px] md:min-h-[800px] overflow-clip relative shrink-0 w-full" data-name="Wireframe - 42">
			<ContentContainer size="wide" className="relative z-10 pb-[120px]">
				<div className="mx-auto max-w-[592px] pt-[151px] text-center">
					<p className="font-['Fraunces',serif] font-normal leading-[normal] not-italic text-[#0f251b] text-[48px] tracking-[1.44px] w-full">
						How does it work?
					</p>
					<p className="font-['Rubik',sans-serif] font-normal leading-[1.68] mt-2 not-italic text-[#1e4a35] text-[16px] tracking-[0.48px] w-full">
						Four simple steps to get fresh and sustainable products
						delivered to you
					</p>
				</div>
				<div className="relative mt-[56px]">
					<div className="absolute h-[200px] left-[88px] top-[150px] w-[205.303px]" data-name="Group">
			<KenyanBuyersSvgs.KenyanBuyersSvg29 />
		</div>
					<div className="absolute h-[198.445px] left-[calc(25%+22px)] top-[13px] w-[203.707px]">
			<KenyanBuyersSvgs.KenyanBuyersSvg30 />
		</div>
					<div className="absolute h-[200px] left-[calc(41.67%+63px)] top-[176px] w-[205.303px]" data-name="Group">
			<KenyanBuyersSvgs.KenyanBuyersSvg31 />
		</div>
					<div className="absolute contents left-[calc(66.67%+51px)] top-[43px]">
			<div className="absolute h-[198.445px] left-[calc(66.67%+51px)] top-[43px] w-[203.707px]" data-name="Vector">
				<KenyanBuyersSvgs.KenyanBuyersSvg32 />
			</div>
			<div className="absolute inset-[41.83%_23.33%_53.89%_74.79%]" data-name="Vector">
				<KenyanBuyersSvgs.KenyanBuyersSvg33 />
			</div>
			<div className="absolute contents inset-[46.64%_20.55%_42.81%_71.57%]" data-name="Group">
			<div className="absolute inset-[50.65%_22.75%_48.74%_77.1%]" data-name="Vector">
				<KenyanBuyersSvgs.KenyanBuyersSvg34 />
			</div>
			<div className="absolute inset-[51.32%_21.45%_48.1%_78.48%]" data-name="Vector">
				<KenyanBuyersSvgs.KenyanBuyersSvg35 />
			</div>
			<div className="absolute inset-[50.24%_22.53%_48.93%_77.29%]" data-name="Vector">
				<KenyanBuyersSvgs.KenyanBuyersSvg36 />
			</div>
			<div className="absolute inset-[49.91%_21.17%_49.28%_78.29%]" data-name="Vector">
				<KenyanBuyersSvgs.KenyanBuyersSvg37 />
			</div>
			<div className="absolute inset-[50.79%_21.24%_44.26%_77.09%]" data-name="Vector">
				<KenyanBuyersSvgs.KenyanBuyersSvg38 />
			</div>
			<div className="absolute inset-[49.11%_21.09%_44.05%_76.97%]" data-name="Vector">
				<KenyanBuyersSvgs.KenyanBuyersSvg39 />
			</div>
			<div className="absolute inset-[50.11%_22.44%_48.73%_77.02%]" data-name="Vector">
				<KenyanBuyersSvgs.KenyanBuyersSvg40 />
			</div>
			<div className="absolute inset-[51%_21.37%_47.85%_78.09%]" data-name="Vector">
				<KenyanBuyersSvgs.KenyanBuyersSvg41 />
			</div>
			<div className="absolute inset-[51.98%_21.49%_47.11%_77.91%]" data-name="Vector">
				<KenyanBuyersSvgs.KenyanBuyersSvg42 />
			</div>
			<div className="absolute inset-[51.01%_22.78%_48.23%_76.85%]" data-name="Vector">
				<KenyanBuyersSvgs.KenyanBuyersSvg43 />
			</div>
			<div className="absolute inset-[51.6%_23.01%_47.67%_76.77%]" data-name="Vector">
				<KenyanBuyersSvgs.KenyanBuyersSvg44 />
			</div>
			<div className="absolute inset-[52.08%_23.25%_47.54%_76.67%]" data-name="Vector">
				<KenyanBuyersSvgs.KenyanBuyersSvg45 />
			</div>
			<div className="absolute inset-[52.18%_24.51%_45.06%_74.12%]" data-name="Vector">
				<KenyanBuyersSvgs.KenyanBuyersSvg46 />
			</div>
			<div className="absolute h-[80px] left-[calc(75%-23px)] top-[421px] w-[35px]" data-name="Vector">
			<KenyanBuyersSvgs.KenyanBuyersSvg47 />
		</div>
			<div className="absolute inset-[52.57%_24.98%_45.78%_74.65%]" data-name="Vector">
				<KenyanBuyersSvgs.KenyanBuyersSvg48 />
			</div>
			<div className="absolute inset-[52.3%_24.85%_45.4%_74.68%]" data-name="Vector">
				<KenyanBuyersSvgs.KenyanBuyersSvg49 />
			</div>
			<div className="absolute inset-[52.38%_24.69%_45.72%_74.85%]" data-name="Vector">
				<KenyanBuyersSvgs.KenyanBuyersSvg50 />
			</div>
			<div className="absolute inset-[53.15%_25.38%_45.48%_74.19%]" data-name="Vector">
				<KenyanBuyersSvgs.KenyanBuyersSvg51 />
			</div>
			<div className="absolute inset-[52.35%_25.08%_45.63%_74.49%]" data-name="Vector">
				<KenyanBuyersSvgs.KenyanBuyersSvg52 />
			</div>
			<div className="absolute inset-[53.13%_25.11%_45.43%_74.4%]" data-name="Vector">
				<KenyanBuyersSvgs.KenyanBuyersSvg53 />
			</div>
			<div className="absolute inset-[46.64%_23.58%_43.32%_74.36%]" data-name="Vector">
				<KenyanBuyersSvgs.KenyanBuyersSvg54 />
			</div>
			<div className="absolute inset-[48.99%_24.1%_44.67%_74.75%]" data-name="Vector">
				<KenyanBuyersSvgs.KenyanBuyersSvg55 />
			</div>
			<div className="absolute inset-[54.63%_22.7%_44.61%_77.05%]" data-name="Vector">
				<KenyanBuyersSvgs.KenyanBuyersSvg56 />
			</div>
			<div className="absolute inset-[54.69%_22.29%_44.91%_77.34%]" data-name="Vector">
				<KenyanBuyersSvgs.KenyanBuyersSvg57 />
			</div>
			<div className="absolute inset-[55.12%_22.04%_44.88%_77.96%]" data-name="Vector">
				<KenyanBuyersSvgs.KenyanBuyersSvg58 />
			</div>
			<div className="absolute flex inset-[49.35%_21.39%_44.17%_76.46%] items-center justify-center" style={{
                containerType: "size"
              }}>
				<div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
					<div className="relative size-full">
			<KenyanBuyersSvgs.KenyanBuyersSvg59 />
		</div>
				</div>
			</div>
			<div className="absolute inset-[48.87%_25.17%_44.96%_72%]" data-name="Vector">
				<KenyanBuyersSvgs.KenyanBuyersSvg60 />
			</div>
			<div className="absolute inset-[49.8%_26.46%_49.72%_73.03%]" data-name="Vector">
				<KenyanBuyersSvgs.KenyanBuyersSvg61 />
			</div>
			<div className="absolute inset-[50.27%_27.22%_49.4%_72.56%]" data-name="Vector">
				<KenyanBuyersSvgs.KenyanBuyersSvg62 />
			</div>
			<div className="absolute inset-[50.67%_27.42%_48.91%_72.22%]" data-name="Vector">
				<KenyanBuyersSvgs.KenyanBuyersSvg63 />
			</div>
			<div className="absolute inset-[50.72%_25.94%_45.6%_72.69%]" data-name="Vector">
				<KenyanBuyersSvgs.KenyanBuyersSvg64 />
			</div>
			<div className="absolute inset-[50.02%_25.38%_46.53%_73.43%]" data-name="Vector">
				<KenyanBuyersSvgs.KenyanBuyersSvg65 />
			</div>
			<div className="absolute flex inset-[48.03%_22.36%_45.13%_74.79%] items-center justify-center" style={{
                containerType: "size"
              }}>
				<div className="flex-none h-[hypot(27.6394cqw,89.8061cqh)] rotate-[-11.76deg] w-[hypot(72.3606cqw,-10.1939cqh)]">
					<div className="relative size-full">
			<KenyanBuyersSvgs.KenyanBuyersSvg66 />
		</div>
				</div>
			</div>
			<div className="absolute inset-[51.97%_24.66%_46.44%_74.86%]" data-name="Vector">
				<KenyanBuyersSvgs.KenyanBuyersSvg67 />
			</div>
			<div className="absolute inset-[51.42%_21.04%_43.71%_72%]" data-name="Vector">
				<KenyanBuyersSvgs.KenyanBuyersSvg68 />
			</div>
			<div className="absolute flex inset-[54.18%_20.55%_42.81%_71.57%] items-center justify-center" style={{
                containerType: "size"
              }}>
				<div className="-scale-x-100 flex-none h-[hypot(0.759955cqw,83.7893cqh)] rotate-[-2.2deg] w-[hypot(-99.24cqw,16.2107cqh)]">
					<div className="relative size-full" data-name="Vector">
						<KenyanBuyersSvgs.KenyanBuyersSvg69 />
					</div>
				</div>
			</div>
		</div>
		</div>
					<div className="relative z-10 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
					{localBuyerHowItWorksSteps.map((step, index) => <div className="content-stretch flex gap-[16px] items-start relative">
			<div className="flex size-[40px] shrink-0 items-center justify-center rounded-full font-['Rubik',sans-serif] text-[16px] font-medium tracking-[0.48px]" style={{
                backgroundColor: step.color,
                color: step.textColor
              }}>
				{index + 1}
			</div>
			<div className="content-stretch flex flex-col gap-[16px] items-start not-italic relative shrink-0 w-[204px]">
				<p className="font-['Fraunces',serif] font-normal leading-[normal] relative shrink-0 text-[#0f251b] text-[20px] tracking-[0.6px] w-full">
					{step.title}
				</p>
				<p className="font-['Rubik',sans-serif] font-normal leading-[1.68] relative shrink-0 text-[#1e4a35] text-[14px] tracking-[0.42px] w-full">
					{step.body}
				</p>
			</div>
		</div>)}
					</div>
					<div className="absolute flex h-[145.923px] items-center justify-center left-[190px] top-[12px] w-[143.362px]" style={{
            "--transform-inner-width": "1185",
            "--transform-inner-height": "21"
          } as React.CSSProperties}>
						<div className="-scale-y-100 flex-none rotate-[132.38deg]">
							<div className="h-[82.59px] relative w-[122.18px]" data-name="Design">
			<KenyanBuyersSvgs.KenyanBuyersSvg70 />
		</div>
						</div>
					</div>
					<div className="absolute flex h-[138.813px] items-center justify-center left-[461px] top-[215.55px] w-[110.247px]" style={{
            "--transform-inner-width": "1185",
            "--transform-inner-height": "21"
          } as React.CSSProperties}>
						<div className="flex-none rotate-[-104.32deg]">
							<div className="h-[82.59px] relative w-[122.18px]" data-name="Design">
			<KenyanBuyersSvgs.KenyanBuyersSvg71 />
		</div>
						</div>
					</div>
					<div className="absolute flex h-[94.387px] items-center justify-center left-[824px] top-[229px] w-[129.822px]" style={{
            "--transform-inner-width": "1185",
            "--transform-inner-height": "21"
          } as React.CSSProperties}>
						<div className="flex-none rotate-[-174.26deg]">
							<div className="h-[82.59px] relative w-[122.18px]" data-name="Design">
			<KenyanBuyersSvgs.KenyanBuyersSvg72 />
		</div>
						</div>
					</div>
				</div>
			</ContentContainer>
			<BorderBottomKenyanBuyersSvg className="absolute inset-x-0 top-0 w-full max-w-none pointer-events-none select-none" fill="#0F251B" />
		</div>
{/* Testimonials */}<div className="bg-[#f3f5e7] min-h-[600px] md:min-h-[750px] overflow-clip relative rounded-bl-[40px] rounded-br-[40px] shrink-0 w-full" data-name="Testimonial">
			<ContentContainer size="wide" className="relative z-10 flex flex-col items-center gap-[80px] pt-[184px] pb-[120px]">
				<p className="font-['Fraunces',serif] font-normal leading-[normal] not-italic text-[#0f251b] text-[48px] text-center tracking-[1.44px] w-[800px] max-w-full">
					Hear from businesses making an impact with Farm to Feed.
				</p>
				<div className="content-stretch flex gap-[40px] items-center justify-center relative w-full">
			{localBuyerTestimonialControls.map(Control => <Control key={Control.name} />)}
		</div>
			</ContentContainer>
			<div className="absolute flex h-[137.947px] items-center justify-center left-[calc(75%+23.37px)] top-[231.07px] w-[206.385px]" style={{
        "--transform-inner-width": "1185",
        "--transform-inner-height": "21"
      } as React.CSSProperties}>
				<div className="flex-none rotate-[-15.41deg]">
					<div className="h-[91px] relative w-[189px]" data-name="Capa_1">
			<KenyanBuyersSvgs.KenyanBuyersSvg73 />
		</div>
				</div>
			</div>
			<div className="absolute flex h-[307.61px] items-center justify-center left-[31px] top-[160px] w-[332.171px]" style={{
        "--transform-inner-width": "1185",
        "--transform-inner-height": "252"
      } as React.CSSProperties}>
				<div className="flex-none rotate-[38.46deg]">
					<div className="h-[151.494px] overflow-clip relative w-[303.868px]" data-name="Capa_1">
			<div className="absolute contents inset-[46.94%_-0.01%_5.53%_67.34%]" data-name="Group">
			<div className="absolute contents inset-[46.94%_-0.01%_5.53%_67.34%]" data-name="Group">
			<div className="absolute inset-[46.94%_-0.01%_5.53%_67.34%]" data-name="Vector">
				<KenyanBuyersSvgs.KenyanBuyersSvg74 />
			</div>
			<div className="absolute contents inset-[46.94%_-0.01%_5.53%_67.34%]" data-name="Clip path group">
			<div className="absolute inset-[48.28%_18.79%_8.68%_66.58%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-1.17px_-0.16px] mask-size-[122.51px_118.116px]" style={{
                    maskImage: `url('${imgGroup}')`
                  }} data-name="Group">
			<KenyanBuyersSvgs.KenyanBuyersSvg75 />
		</div>
		</div>
		</div>
			<div className="absolute inset-[53.61%_20.85%_13.05%_69.52%]" data-name="Vector">
				<div className="absolute inset-[-0.99%_-1.71%]">
					<KenyanBuyersSvgs.KenyanBuyersSvg76 />
				</div>
			</div>
			<div className="absolute inset-[57.31%_23.09%_17.53%_71.61%]" data-name="Vector">
				<div className="absolute inset-[-1.31%_-3.11%]">
					<KenyanBuyersSvgs.KenyanBuyersSvg77 />
				</div>
			</div>
		</div>
			<div className="absolute inset-[39.79%_23.6%_0_58.17%]" data-name="Group">
			<KenyanBuyersSvgs.KenyanBuyersSvg78 />
		</div>
			<div className="absolute inset-[0_71.17%_39.23%_0]" data-name="Vector">
				<KenyanBuyersSvgs.KenyanBuyersSvg79 />
			</div>
			<div className="absolute inset-[45.69%_58.11%_38.2%_12.15%]" data-name="Vector">
				<KenyanBuyersSvgs.KenyanBuyersSvg80 />
			</div>
			<div className="absolute inset-[21.92%_56.03%_50.52%_14.04%]" data-name="Vector">
				<KenyanBuyersSvgs.KenyanBuyersSvg81 />
			</div>
			<div className="absolute inset-[22.12%_69.87%_48.92%_6.48%]" data-name="Vector">
				<KenyanBuyersSvgs.KenyanBuyersSvg82 />
			</div>
			<div className="absolute inset-[33.5%_62.34%_50.52%_16.54%]" data-name="Vector">
				<KenyanBuyersSvgs.KenyanBuyersSvg83 />
			</div>
			<div className="absolute inset-[30.28%_27.75%_11.86%_52.01%]" data-name="Group">
			<KenyanBuyersSvgs.KenyanBuyersSvg84 />
		</div>
			<div className="absolute inset-[34.94%_41.44%_7.36%_30.22%]" data-name="Vector">
				<KenyanBuyersSvgs.KenyanBuyersSvg85 />
			</div>
		</div>
				</div>
			</div>
			<div className="absolute flex h-[858px] items-center justify-center left-[-2.92%] right-[-1.39%] top-[-767px]" style={{
        containerType: "size"
      }}>
				<div className="-scale-x-100 flex-none h-[100cqw] rotate-90 w-[100cqh]">
					<div className="relative size-full" data-name="Vector">
						<KenyanBuyersSvgs.KenyanBuyersSvg86 />
					</div>
				</div>
			</div>
			<div className="absolute flex h-[203.64px] items-center justify-center left-[128px] top-[561px] w-[245.05px]" style={{
        "--transform-inner-width": "1185",
        "--transform-inner-height": "105"
      } as React.CSSProperties}>
				<div className="flex-none rotate-[34.14deg]">
					<div className="h-[83.796px] overflow-clip relative w-[239.258px]" data-name="Capa_1">
			<div className="absolute inset-[6.94%_64.93%_13.37%_0.68%]" data-name="Group">
			<KenyanBuyersSvgs.KenyanBuyersSvg87 />
		</div>
			<div className="absolute inset-[5.45%_47.3%_7.78%_26.47%]" data-name="Group">
			<KenyanBuyersSvgs.KenyanBuyersSvg88 />
		</div>
			<div className="absolute inset-[0_28.06%_2.86%_40.72%]" data-name="Group">
			<KenyanBuyersSvgs.KenyanBuyersSvg89 />
		</div>
			<div className="absolute inset-[4.39%_13.86%_2.28%_57.71%]" data-name="Group">
			<KenyanBuyersSvgs.KenyanBuyersSvg90 />
		</div>
			<div className="absolute inset-[0_0.75%_24.42%_74.76%]" data-name="Group">
			<KenyanBuyersSvgs.KenyanBuyersSvg91 />
		</div>
		</div>
				</div>
			</div>
		</div>
{/* Footer */}<Footer />
		</div>;
}
