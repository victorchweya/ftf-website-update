import svgPaths from "./svg-6p5pyqd5kw";
import imgVector from "./e633ceac9ddc9469f55691764eff36cd0be98620.png?url";
import imgVector1 from "./c2c2df3bbbb24de92cb6c214b6dae6d9ec8411a0.png?url";
import imgPlaceholderImage from "./2dcd35f0969168b49576839a28be093481c42f9f.png?url";
import imgPlaceholderImage1 from "./df46db7e24c63bd9580267e4b92a177fae0edc68.png?url";
import imgPlaceholderImage2 from "./456b5ca63fec37944e95e90951a499a07680e2bd.png?url";
import { imgGroup, imgVector2, imgGroup1, imgGroup2, imgVector3, imgGroup3, imgGroup4 } from "./svg-00zst";

function Group() {
  return (
    <div className="h-[28px] relative shrink-0 w-[191.825px]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 191.825 28">
        <g id="Group">
          <path d={svgPaths.p28a9e600} fill="var(--fill-0, #D78228)" id="Vector" />
          <g id="Group_2">
            <path d={svgPaths.p37f90d80} fill="var(--fill-0, #1E4A35)" id="Vector_2" />
            <path d={svgPaths.p58cea30} fill="var(--fill-0, #1E4A35)" id="Vector_3" />
            <path d={svgPaths.p3f498b00} fill="var(--fill-0, #1E4A35)" id="Vector_4" />
            <path d={svgPaths.p3e62fe80} fill="var(--fill-0, #1E4A35)" id="Vector_5" />
          </g>
          <g id="Group_3">
            <path d={svgPaths.p2ad99b00} fill="var(--fill-0, #1E4A35)" id="Vector_6" />
            <path d={svgPaths.p27a70e00} fill="var(--fill-0, #1E4A35)" id="Vector_7" />
            <path d={svgPaths.p2e3d2848} fill="var(--fill-0, #1E4A35)" id="Vector_8" />
            <path d={svgPaths.pafe1b00} fill="var(--fill-0, #1E4A35)" id="Vector_9" />
          </g>
          <g id="Group_4">
            <path d={svgPaths.p342b9a80} fill="var(--fill-0, #1E4A35)" id="Vector_10" />
            <path d={svgPaths.p1e055500} fill="var(--fill-0, #1E4A35)" id="Vector_11" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function AboutUs() {
  return (
    <div className="content-stretch flex gap-[2px] items-center justify-center p-[8px] relative shrink-0" data-name="about-us">
      <p className="font-['Rubik',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-black text-center whitespace-nowrap">Buy from us</p>
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="chevron-down">
        <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Icon">
          <div className="absolute inset-[-20%_-10%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 7">
              <path d="M1 1L6 6L11 1" id="Icon" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Sell() {
  return (
    <div className="content-stretch flex items-start px-[16px] py-[8px] relative rounded-[40px] shrink-0" data-name="sell">
      <p className="font-['Rubik',sans-serif] font-normal leading-[1.68] not-italic relative shrink-0 text-[16px] text-black text-center tracking-[0.48px] whitespace-nowrap">Sell with us</p>
    </div>
  );
}

function Solution() {
  return (
    <div className="content-stretch flex items-start p-[8px] relative shrink-0" data-name="solution">
      <p className="font-['Rubik',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-black text-center whitespace-nowrap">Our Impact</p>
    </div>
  );
}

function AboutUs1() {
  return (
    <div className="content-stretch flex gap-[2px] items-center justify-center p-[8px] relative shrink-0" data-name="about-us">
      <p className="font-['Rubik',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-black text-center whitespace-nowrap">About us</p>
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="chevron-down">
        <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Icon">
          <div className="absolute inset-[-20%_-10%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 7">
              <path d="M1 1L6 6L11 1" id="Icon" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Order() {
  return (
    <div className="bg-[#d78228] content-stretch flex items-start px-[16px] py-[8px] relative rounded-[40px] shrink-0" data-name="order">
      <p className="font-['Rubik',sans-serif] font-normal leading-[1.68] not-italic relative shrink-0 text-[#eee] text-[16px] text-center tracking-[0.48px] whitespace-nowrap">Log In</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[25px] items-center relative shrink-0">
      <AboutUs />
      <Sell />
      <Solution />
      <AboutUs1 />
      <Order />
    </div>
  );
}

function Header() {
  return (
    <div className="bg-[#fefcf5] content-stretch flex items-center justify-between px-[32px] py-[20px] relative rounded-[54px] shrink-0 w-[1280px]" data-name="header">
      <Group />
      <Frame />
    </div>
  );
}

function Frame1() {
  return <div className="absolute h-50.25 left-[calc(8.33%+149px)] top-148 w-54.25" />;
}

function Frame17() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col gap-7.5 items-center left-1/2 not-italic text-center top-[calc(50%-271px)] w-[666px]">
      <p className="font-['Fraunces',serif] font-normal leading-[normal] relative shrink-0 text-[#1e4a35] text-[64px] tracking-[1.92px] w-[544px]">Shaping the Future of Food</p>
      <p className="font-['Rubik',sans-serif] font-normal leading-[1.68] min-w-full relative shrink-0 text-[#d78228] text-[20px] tracking-[0.6px] w-min">Connecting farmers, markets, and ingredients through smarter supply chains.</p>
    </div>
  );
}

function Order1() {
  return (
    <div className="bg-[#1e4a35] col-1 content-stretch flex items-start ml-24.75 mt-91.75 px-[16px] py-[8px] relative rounded-[40px] row-1" data-name="order">
      <p className="font-['Rubik',sans-serif] font-normal leading-[1.68] not-italic relative shrink-0 text-[#eee] text-[16px] text-center tracking-[0.48px] whitespace-nowrap">Sell with us</p>
    </div>
  );
}

function Group35() {
  return (
    <div className="h-38.5 relative shrink-0 w-39.5">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 158 154">
        <g id="Group 302">
          <path d={svgPaths.p1ed68a00} fill="var(--fill-0, #707ABE)" id="Vector" />
          <g id="Vector_2">
            <path d={svgPaths.p15d84300} fill="var(--fill-0, #E8EAFC)" />
            <path d={svgPaths.p3f5cad80} fill="var(--fill-0, #E8EAFC)" />
            <path d={svgPaths.p26303400} fill="var(--fill-0, #E8EAFC)" />
            <path d={svgPaths.p21682000} fill="var(--fill-0, #E8EAFC)" />
            <path d={svgPaths.pa76d900} fill="var(--fill-0, #E8EAFC)" />
            <path d={svgPaths.p31d2fd00} fill="var(--fill-0, #E8EAFC)" />
            <path d={svgPaths.p2bfe0100} fill="var(--fill-0, #E8EAFC)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center not-italic relative shrink-0 text-center w-full">
      <div className="font-['Fraunces',serif] font-normal leading-[0] relative shrink-0 text-[#0f251b] text-[24px] tracking-[0.72px] whitespace-nowrap">
        <p className="leading-[normal] mb-0 whitespace-pre">{`For Kenyan `}</p>
        <p className="leading-[normal] whitespace-pre">Farmers</p>
      </div>
      <p className="font-['Rubik',sans-serif] font-normal leading-[1.68] min-w-full relative shrink-0 text-[#1e4a35] text-[16px] tracking-[0.48px] w-min">The future of food starts with you</p>
    </div>
  );
}

function Frame26() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-12 items-center ml-11.5 mt-0 relative row-1 w-54.25">
      <Group35 />
      <Frame25 />
    </div>
  );
}

function Group28() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <div className="col-1 h-74.5 ml-0 mt-23.25 relative row-1 w-75.75" data-name="Vector">
        <div className="absolute inset-[-1.34%_-7.92%_-14.77%_-7.92%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 351 346">
            <g filter="url(#filter0_d_1_1595)" id="Vector">
              <path d={svgPaths.p1a984d00} fill="var(--fill-0, white)" />
              <path d={svgPaths.p1cb35680} stroke="var(--stroke-0, #F7F7F7)" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="346" id="filter0_d_1_1595" width="351" x="-4.61077e-08" y="6.17014e-10">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="20" />
                <feGaussianBlur stdDeviation="12" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.1 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_1595" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_1595" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <Order1 />
      <Frame26 />
    </div>
  );
}

function Order2() {
  return (
    <div className="bg-[#1e4a35] col-1 content-stretch flex items-start ml-20.75 mt-90.75 px-[16px] py-[8px] relative rounded-[40px] row-1" data-name="order">
      <p className="font-['Rubik',sans-serif] font-normal leading-[1.68] not-italic relative shrink-0 text-[16px] text-center text-white tracking-[0.48px] whitespace-nowrap">Buy from us</p>
    </div>
  );
}

function Group1() {
  return (
    <div className="col-1 h-38.5 ml-0 mt-0 relative row-1 w-[158.083px]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 158.083 154">
        <g id="Group">
          <path d={svgPaths.p1d721980} fill="var(--fill-0, #85A687)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Capa() {
  return (
    <div className="col-1 h-[79.226px] ml-[37.73px] mt-[32.8px] relative row-1 w-[81.741px]" data-name="Capa_1">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 81.741 79.2259">
        <g clipPath="url(#clip0_1_1551)" id="Capa_1">
          <path d={svgPaths.p1e1fa900} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p247d79f2} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p22605600} fill="var(--fill-0, white)" id="Vector_3" />
        </g>
        <defs>
          <clipPath id="clip0_1_1551">
            <rect fill="white" height="79.2259" width="81.741" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Group33() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Group1 />
      <Capa />
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center not-italic relative shrink-0 text-center w-full">
      <div className="font-['Fraunces',serif] font-normal leading-[0] relative shrink-0 text-[#0f251b] text-[24px] tracking-[0.72px] whitespace-nowrap">
        <p className="leading-[normal] mb-0 whitespace-pre">{`For Kenyan `}</p>
        <p className="leading-[normal] whitespace-pre">Buyers</p>
      </div>
      <p className="font-['Rubik',sans-serif] font-normal leading-[1.68] min-w-full relative shrink-0 text-[#1e4a35] text-[16px] tracking-[0.48px] w-min">The future of food, delivered to you</p>
    </div>
  );
}

function Frame27() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-12 items-center ml-11.5 mt-0 relative row-1 w-54.25">
      <Group33 />
      <Frame28 />
    </div>
  );
}

function Group26() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <div className="col-1 h-74.5 ml-0 mt-21.5 relative row-1 w-75.75" data-name="Vector">
        <div className="absolute inset-[-1.34%_-7.92%_-14.77%_-7.92%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 351 346">
            <g filter="url(#filter0_d_1_1595)" id="Vector">
              <path d={svgPaths.p1a984d00} fill="var(--fill-0, white)" />
              <path d={svgPaths.p1cb35680} stroke="var(--stroke-0, #F7F7F7)" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="346" id="filter0_d_1_1595" width="351" x="-4.61077e-08" y="6.17014e-10">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="20" />
                <feGaussianBlur stdDeviation="12" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.1 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_1595" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_1595" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <Order2 />
      <Frame27 />
    </div>
  );
}

function Order3() {
  return (
    <div className="bg-[#1e4a35] col-1 content-stretch flex items-start ml-23 mt-91.5 px-[16px] py-[8px] relative rounded-[40px] row-1" data-name="order">
      <p className="font-['Rubik',sans-serif] font-normal leading-[1.68] not-italic relative shrink-0 text-[16px] text-center text-white tracking-[0.48px] whitespace-nowrap">Learn more</p>
    </div>
  );
}

function Group34() {
  return (
    <div className="h-38.5 relative shrink-0 w-39.5">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 158 154">
        <g id="Group 301">
          <path d={svgPaths.p1ed68a00} fill="var(--fill-0, #E0AF62)" id="Vector" />
          <g id="Group 300">
            <path d={svgPaths.p2aa73900} fill="var(--fill-0, white)" id="Vector_2" />
            <path d={svgPaths.p2e45de00} fill="var(--fill-0, white)" id="Vector_3" />
            <path d={svgPaths.p3f69de00} fill="var(--fill-0, white)" id="Vector_4" />
            <path d={svgPaths.p2e085900} fill="var(--fill-0, white)" id="Vector_5" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center not-italic relative shrink-0 text-center w-full">
      <div className="font-['Fraunces',serif] font-normal leading-[0] relative shrink-0 text-[#0f251b] text-[24px] tracking-[0.72px] whitespace-nowrap">
        <p className="leading-[normal] mb-0 whitespace-pre">{`For Global `}</p>
        <p className="leading-[normal] whitespace-pre">Buyers</p>
      </div>
      <p className="font-['Rubik',sans-serif] font-normal leading-[1.68] min-w-full relative shrink-0 text-[#1e4a35] text-[16px] tracking-[0.48px] w-min">The future of food, supplied from Kenya</p>
    </div>
  );
}

function Frame29() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-12 items-center ml-11.5 mt-0 relative row-1 w-54.25">
      <Group34 />
      <Frame30 />
    </div>
  );
}

function Group27() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <div className="col-1 h-74.5 ml-0 mt-23.25 relative row-1 w-75.75" data-name="Vector">
        <div className="absolute inset-[-1.34%_-7.92%_-14.77%_-7.92%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 351 346">
            <g filter="url(#filter0_d_1_1595)" id="Vector">
              <path d={svgPaths.p1a984d00} fill="var(--fill-0, white)" />
              <path d={svgPaths.p1cb35680} stroke="var(--stroke-0, #F7F7F7)" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="346" id="filter0_d_1_1595" width="351" x="-4.61077e-08" y="6.17014e-10">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="20" />
                <feGaussianBlur stdDeviation="12" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.1 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_1595" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_1595" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <Order3 />
      <Frame29 />
    </div>
  );
}

function Frame31() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex gap-[64px] items-center leading-[0] left-[calc(50%+0.5px)] top-[692px]">
      <Group28 />
      <Group26 />
      <Group27 />
    </div>
  );
}

function Hero() {
  return (
    <div className="bg-[#fbf3e9] h-[1162px] overflow-clip relative shrink-0 w-[1440px]" data-name="Hero">
      <div className="absolute flex inset-[-15.06%_-30.49%_16.27%_-44.65%] items-center justify-center" style={{ containerType: "size" }}>
        <div className="-rotate-90 flex-none h-[100cqw] w-[100cqh]">
          <div className="relative size-full" data-name="Vector">
            <img alt="" className="absolute block inset-0 max-w-none size-full" height="2522" src={imgVector} width="1148" />
          </div>
        </div>
      </div>
      <div className="-translate-x-1/2 absolute content-stretch flex items-start left-1/2 top-[32px]" data-name="header">
        <Header />
      </div>
      <Frame1 />
      <Frame17 />
      <Frame31 />
    </div>
  );
}

function Order4() {
  return (
    <div className="bg-[#1e4a35] content-stretch flex items-start px-[24px] py-[12px] relative rounded-[40px] shrink-0" data-name="order">
      <p className="font-['Rubik',sans-serif] font-normal leading-[1.68] not-italic relative shrink-0 text-[16px] text-center text-white tracking-[0.48px] whitespace-nowrap">Read Impact Report 2025</p>
    </div>
  );
}

function Frame32() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[52px] items-center left-[calc(8.33%+74px)] top-[101px] w-[1052px]">
      <div className="font-['Fraunces',serif] font-normal leading-[0] min-w-full not-italic relative shrink-0 text-[#0f251b] text-[40px] text-center tracking-[1.2px] w-min">
        <p className="leading-[normal] mb-0">At Farm to Feed, we believe a better food system starts with a better supply chain. One that works for</p>
        <p className="leading-[normal]">farmers, businesses, and the planet alike.</p>
      </div>
      <div className="font-['Rubik',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#1e4a35] text-[16px] text-center tracking-[0.48px] w-[592px] whitespace-pre-wrap">
        <p className="leading-[1.68] mb-0">In Sub-Saharan Africa, nearly half of all fruits and vegetables go to waste - driving emissions, hurting farmers, and weakening food security. Meanwhile, buyers face unreliable supply, high costs, and poor traceability.</p>
        <p className="leading-[1.68] mb-0">​</p>
        <p className="leading-[1.68]">Since 2021, Farm to Feed, a women-led Kenyan startup has been closing this gap. We rescue imperfect and surplus produce, extend shelf life, and connect farmers to fair, reliable markets while offering buyers a seamless platform to source fresh, traceable, and affordable food with confidence.</p>
      </div>
      <Order4 />
    </div>
  );
}

function Wireframe1() {
  return (
    <div className="bg-[#fbf3e9] h-[755px] overflow-clip relative shrink-0 w-[1440px]" data-name="Wireframe - 11">
      <div className="absolute flex inset-[86.19%_-14.03%_-53.63%_-20.21%] items-center justify-center" style={{ containerType: "size" }}>
        <div className="-scale-x-100 flex-none h-[100cqw] rotate-90 w-[100cqh]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 509.198 1933">
              <path d={svgPaths.p25bc3000} fill="var(--fill-0, #DAE2B6)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <Frame32 />
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start justify-center min-w-px not-italic overflow-clip relative" data-name="Content">
      <p className="font-['Fraunces',serif] font-medium leading-[1.4] relative shrink-0 text-[#0f251b] text-[32px] w-full">Better Markets for Farmers</p>
      <p className="font-['Rubik',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#1e4a35] text-[18px] w-full">We connect farmers to reliable buyers, turning harvests into stable income and reducing unnecessary food loss.</p>
    </div>
  );
}

function TabHorizontal() {
  return (
    <div className="content-stretch flex gap-[32px] items-start justify-center overflow-clip relative shrink-0 w-full" data-name="Tab Horizontal">
      <div className="flex h-0 items-center justify-center relative self-center shrink-0 w-0" style={{ containerType: "size", "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
        <div className="flex-none rotate-90 w-[100cqh]">
          <div className="h-0 relative w-full" data-name="Border">
            <div className="absolute inset-[-2px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 117 2">
                <line id="Border" stroke="var(--stroke-0, #1E4A35)" strokeWidth="2" x2="117" y1="1" y2="1" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Content1 />
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start justify-center min-w-px not-italic overflow-clip relative" data-name="Content">
      <p className="font-['Fraunces',serif] font-medium leading-[1.4] relative shrink-0 text-[#0d0d0d] text-[32px] w-full">Better Sourcing for Businesses</p>
      <p className="font-['Rubik',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#1e4a35] text-[18px] w-full">{`Hotels, caterers, processors, and global buyers access quality produce and ingredients with full transparency and consistent supply. `}</p>
    </div>
  );
}

function TabHorizontal1() {
  return (
    <div className="content-stretch flex gap-[32px] items-start justify-center overflow-clip relative shrink-0 w-full" data-name="Tab Horizontal">
      <div className="flex h-0 items-center justify-center relative self-center shrink-0 w-0" style={{ containerType: "size", "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
        <div className="flex-none rotate-90 w-[100cqh]">
          <div className="h-0 relative w-full" data-name="Border">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
              <line id="Border" opacity="0" stroke="var(--stroke-0, black)" strokeWidth="2" x2="145" y1="-1" y2="-1" />
            </svg>
          </div>
        </div>
      </div>
      <Content2 />
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start justify-center min-w-px not-italic overflow-clip relative" data-name="Content">
      <p className="font-['Fraunces',serif] font-medium leading-[1.4] relative shrink-0 text-[#0d0d0d] text-[32px] w-full">Better Food Systems for Everyone</p>
      <p className="font-['Rubik',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#1e4a35] text-[18px] w-full">{`By efficiently matching supply and demand, we ensure more food is consumed rather than wasted. Food systems will shape our planet's future, with Africa leading the way. At Farm to Feed, we create the infrastructure for a more inclusive, resilient, and waste-free future.`}</p>
    </div>
  );
}

function TabHorizontal2() {
  return (
    <div className="content-stretch flex gap-[32px] items-start justify-center overflow-clip relative shrink-0 w-full" data-name="Tab Horizontal">
      <div className="flex h-0 items-center justify-center relative self-center shrink-0 w-0" style={{ containerType: "size", "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
        <div className="flex-none rotate-90 w-[100cqh]">
          <div className="h-0 relative w-full" data-name="Border">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
              <line id="Border" opacity="0" stroke="var(--stroke-0, black)" strokeWidth="2" x2="201" y1="-1" y2="-1" />
            </svg>
          </div>
        </div>
      </div>
      <Content3 />
    </div>
  );
}

function TabsMenu() {
  return (
    <div className="content-stretch flex flex-col h-[543px] items-center justify-between relative shrink-0 w-[579px]" data-name="Tabs Menu">
      <TabHorizontal />
      <TabHorizontal1 />
      <TabHorizontal2 />
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex gap-[80px] items-center relative shrink-0 w-full" data-name="Content">
      <TabsMenu />
      <div className="absolute flex h-[555.649px] items-center justify-center left-[699.82px] top-[61.68px] w-[574.366px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
        <div className="flex-none rotate-[9.87deg]">
          <div className="h-119.25 relative w-125" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 500 477">
              <path d={svgPaths.p33e26280} fill="var(--fill-0, #C2CE86)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <div className="h-[552px] relative shrink-0 w-[517px]" data-name="Vector">
        <img alt="" className="absolute block inset-0 max-w-none size-full" height="552" src={imgVector1} width="517" />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col items-center max-w-7xl relative shrink-0 w-full" data-name="Container">
      <Content />
    </div>
  );
}

function Layout() {
  return (
    <div className="bg-[#dae2b6] content-stretch flex flex-col items-center overflow-clip pb-[112px] pt-[64px] px-[64px] relative shrink-0 w-[1440px]" data-name="Layout / 28 /">
      <Container />
    </div>
  );
}

function Order5() {
  return (
    <div className="bg-[#1e4a35] content-stretch flex items-start px-[16px] py-[8px] relative rounded-[40px] shrink-0" data-name="order">
      <p className="font-['Rubik',sans-serif] font-normal leading-[1.68] not-italic relative shrink-0 text-[#eee] text-[16px] text-center tracking-[0.48px] whitespace-nowrap">Learn More</p>
    </div>
  );
}

function Frame33() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[64px] items-center left-1/2 top-[615px] w-[822px]">
      <p className="font-['Fraunces',serif] font-normal leading-[normal] min-w-full not-italic relative shrink-0 text-[#0f251b] text-[40px] text-center tracking-[1.2px] w-min">We produce excellence for all actors in the supply chain, from farmer to customer</p>
      <Order5 />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute inset-[24.59%_86.35%_27.46%_8.17%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-[0px_0px] mask-size-[70.215px_156.009px]" style={{ maskImage: `url('${imgGroup}')` }} data-name="Group">
      <div className="absolute inset-[0_0_-0.25%_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 70.2154 156.219">
          <g id="Group">
            <path d={svgPaths.p68406d0} id="Vector" stroke="var(--stroke-0, #4C352B)" strokeMiterlimit="10" strokeWidth="5" />
            <path d={svgPaths.p114abb80} id="Vector_2" stroke="var(--stroke-0, #4C352B)" strokeMiterlimit="10" strokeWidth="5" />
            <path d={svgPaths.p3c9fb3e8} id="Vector_3" stroke="var(--stroke-0, #4C352B)" strokeMiterlimit="10" strokeWidth="5" />
            <path d={svgPaths.p2e3ff00} id="Vector_4" stroke="var(--stroke-0, #4C352B)" strokeMiterlimit="10" strokeWidth="5" />
            <path d={svgPaths.p36d22300} id="Vector_5" stroke="var(--stroke-0, #4C352B)" strokeMiterlimit="10" strokeWidth="5" />
            <path d={svgPaths.p329ff5a0} id="Vector_6" stroke="var(--stroke-0, #4C352B)" strokeMiterlimit="10" strokeWidth="5" />
            <path d={svgPaths.p38266e00} id="Vector_7" stroke="var(--stroke-0, #4C352B)" strokeMiterlimit="10" strokeWidth="5" />
            <path d={svgPaths.p5e262c0} fill="var(--fill-0, #4C352B)" id="Vector_8" />
            <path d={svgPaths.pf4b6700} fill="var(--fill-0, #7B6A62)" id="Vector_9" />
            <path d={svgPaths.p2097500} fill="var(--fill-0, #7B6A62)" id="Vector_10" />
            <path d={svgPaths.p24117800} fill="var(--fill-0, #7B6A62)" id="Vector_11" />
            <path d={svgPaths.p3bd4cc80} fill="var(--fill-0, #7B6A62)" id="Vector_12" />
            <path d={svgPaths.p2250200} fill="var(--fill-0, #7B6A62)" id="Vector_13" />
            <path d={svgPaths.p27c22000} fill="var(--fill-0, #7B6A62)" id="Vector_14" />
            <path d={svgPaths.p59dcd00} fill="var(--fill-0, #7B6A62)" id="Vector_15" />
            <path d={svgPaths.p3b8e8c00} fill="var(--fill-0, #7B6A62)" id="Vector_16" />
            <path d={svgPaths.p1ff84140} fill="var(--fill-0, #7B6A62)" id="Vector_17" />
            <path d={svgPaths.p39595e80} fill="var(--fill-0, #7B6A62)" id="Vector_18" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents inset-[24.59%_86.35%_27.46%_8.17%]" data-name="Group">
      <Group3 />
    </div>
  );
}

function ClipPathGroup() {
  return (
    <div className="absolute contents inset-[24.59%_86.35%_27.41%_8.17%]" data-name="Clip path group">
      <Group2 />
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute inset-[65.65%_83.75%_26.25%_7.09%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 117.322 26.3368">
        <g id="Group">
          <path d={svgPaths.pa295400} fill="var(--fill-0, #4C352B)" id="Vector" />
          <path d={svgPaths.p1aef5000} fill="var(--fill-0, #4C352B)" id="Vector_2" />
          <path d={svgPaths.p2a82cb00} fill="var(--fill-0, #4C352B)" id="Vector_3" />
          <path d={svgPaths.p28201800} fill="var(--fill-0, #4C352B)" id="Vector_4" />
          <path d={svgPaths.p213ac200} fill="var(--fill-0, #4C352B)" id="Vector_5" />
          <path d={svgPaths.p3e6a2e00} fill="var(--fill-0, #4C352B)" id="Vector_6" />
          <path d={svgPaths.p2f087d00} fill="var(--fill-0, #4C352B)" id="Vector_7" />
          <path d={svgPaths.p3304e00} fill="var(--fill-0, #4C352B)" id="Vector_8" />
          <path d={svgPaths.pf6fc900} fill="var(--fill-0, #4C352B)" id="Vector_9" />
          <path d={svgPaths.p38624b00} fill="var(--fill-0, #4C352B)" id="Vector_10" />
          <path d={svgPaths.p1c344f00} fill="var(--fill-0, #4C352B)" id="Vector_11" />
          <path d={svgPaths.pdb39d70} fill="var(--fill-0, #4C352B)" id="Vector_12" />
          <path d={svgPaths.p1f5c5000} fill="var(--fill-0, #4C352B)" id="Vector_13" />
          <path d={svgPaths.p21464d00} fill="var(--fill-0, #4C352B)" id="Vector_14" />
          <path d={svgPaths.p8c0a180} fill="var(--fill-0, #4C352B)" id="Vector_15" />
          <path d={svgPaths.p289a3bc0} fill="var(--fill-0, #4C352B)" id="Vector_16" />
          <path d={svgPaths.p2b147d80} fill="var(--fill-0, #4C352B)" id="Vector_17" />
          <path d={svgPaths.p257d1900} fill="var(--fill-0, #4C352B)" id="Vector_18" />
          <path d={svgPaths.p3aa9a80} fill="var(--fill-0, #4C352B)" id="Vector_19" />
          <path d={svgPaths.p338aa3c0} fill="var(--fill-0, #4C352B)" id="Vector_20" />
          <path d={svgPaths.p39c2cf80} fill="var(--fill-0, #4C352B)" id="Vector_21" />
        </g>
      </svg>
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute inset-[8.94%_43.28%_38.68%_42.31%] mask-position-[-24.958px_-20.664px,_0.016px_-0.002px]" style={{ maskImage: `url('${imgVector2}'), url('${imgGroup1}')` }} data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 184.539 170.225">
        <g id="Group">
          <path d={svgPaths.pbf3b00} fill="var(--fill-0, #F2D4B0)" id="Vector" />
          <path d={svgPaths.p395f600} fill="var(--fill-0, #DFAF62)" id="Vector_2" />
          <path d={svgPaths.p10f19f00} fill="var(--fill-0, #4C352B)" id="Vector_3" />
          <path d={svgPaths.p2aeee5f0} fill="var(--fill-0, #4C352B)" id="Vector_4" />
          <path d={svgPaths.p31fde700} fill="var(--fill-0, #4C352B)" id="Vector_5" />
        </g>
      </svg>
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute contents inset-[8.94%_43.28%_38.68%_42.31%]" data-name="Group">
      <Group8 />
    </div>
  );
}

function ClipPathGroup2() {
  return (
    <div className="absolute contents inset-[8.94%_43.28%_38.68%_42.31%]" data-name="Clip path group">
      <Group7 />
    </div>
  );
}

function Group10() {
  return (
    <div className="absolute inset-[16.61%_49.39%_74.9%_47.73%] mask-position-[-94.344px_-45.609px,_0.002px_0px]" style={{ maskImage: `url('${imgVector2}'), url('${imgGroup2}')` }} data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36.8649 27.5726">
        <g id="Group">
          <path d={svgPaths.p126fbd80} fill="var(--fill-0, #4C352B)" id="Vector" />
          <path d={svgPaths.paf8c500} fill="var(--fill-0, #F5DF91)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group9() {
  return (
    <div className="absolute contents inset-[16.61%_49.39%_74.9%_47.73%]" data-name="Group">
      <Group10 />
    </div>
  );
}

function ClipPathGroup3() {
  return (
    <div className="absolute contents inset-[16.61%_49.39%_74.9%_47.73%]" data-name="Clip path group">
      <Group9 />
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute contents inset-[2.62%_41.87%_38.68%_40.9%]" data-name="Group">
      <div className="absolute inset-[2.62%_41.87%_40.49%_40.9%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-[-6.938px_-0.116px] mask-size-[227.536px_186.368px]" style={{ maskImage: `url('${imgVector2}')` }} data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 220.598 184.902">
          <path d={svgPaths.p1a98fd80} fill="var(--fill-0, #4C352B)" id="Vector" />
        </svg>
      </div>
      <ClipPathGroup2 />
      <ClipPathGroup3 />
      <div className="absolute inset-[51.93%_51.55%_39.86%_45.67%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-[-67.979px_-160.37px] mask-size-[227.536px_186.368px]" style={{ maskImage: `url('${imgVector2}')` }} data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35.6622 26.7116">
          <path d={svgPaths.p19d2af80} fill="var(--fill-0, #4C352B)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[51.93%_48.83%_39.86%_48.69%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-[-106.659px_-160.37px] mask-size-[227.536px_186.368px]" style={{ maskImage: `url('${imgVector2}')` }} data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31.7885 26.7116">
          <path d={svgPaths.p1805ed80} fill="var(--fill-0, #4C352B)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[43.71%_50.45%_48.07%_46.47%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-[-78.24px_-133.656px] mask-size-[227.536px_186.368px]" style={{ maskImage: `url('${imgVector2}')` }} data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 39.4109 26.7116">
          <path d={svgPaths.p2ff3d580} fill="var(--fill-0, #4C352B)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[43.71%_51.77%_52.71%_47.76%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-[-94.77px_-133.674px] mask-size-[227.536px_186.368px]" style={{ maskImage: `url('${imgVector2}')` }} data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.98903 11.6349">
          <path d={svgPaths.p1e04aff0} fill="var(--fill-0, #F5DF91)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[51.95%_52.87%_44.47%_46.66%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-[-80.73px_-160.461px] mask-size-[227.536px_186.368px]" style={{ maskImage: `url('${imgVector2}')` }} data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.97122 11.6349">
          <path d={svgPaths.p314ea500} fill="var(--fill-0, #F5DF91)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[51.95%_49.93%_44.72%_49.6%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-[-118.347px_-160.463px] mask-size-[227.536px_186.368px]" style={{ maskImage: `url('${imgVector2}')` }} data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.97122 10.7917">
          <path d={svgPaths.p3d7e0700} fill="var(--fill-0, #F5DF91)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents inset-[2.62%_41.87%_38.68%_40.9%]" data-name="Group">
      <Group6 />
    </div>
  );
}

function ClipPathGroup1() {
  return (
    <div className="absolute contents inset-[2.58%_41.87%_40.07%_40.36%]" data-name="Clip path group">
      <Group5 />
    </div>
  );
}

function Group15() {
  return (
    <div className="absolute inset-[35.65%_34.68%_39.32%_58.43%] mask-position-[-11.92px_-9.875px,_0.016px_0px] opacity-50" style={{ maskImage: `url('${imgVector3}'), url('${imgGroup3}')` }} data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 88.2071 81.3593">
        <g id="Group">
          <path d={svgPaths.p2b491500} fill="var(--fill-0, #F2D4B0)" id="Vector" />
          <path d={svgPaths.p15cf8300} fill="var(--fill-0, #DFAF62)" id="Vector_2" />
          <path d={svgPaths.p1ea044f0} fill="var(--fill-0, #4C352B)" id="Vector_3" />
          <path d={svgPaths.p3a2d9700} fill="var(--fill-0, #4C352B)" id="Vector_4" />
          <path d={svgPaths.p304b6d70} fill="var(--fill-0, #4C352B)" id="Vector_5" />
        </g>
      </svg>
    </div>
  );
}

function Group14() {
  return (
    <div className="absolute contents inset-[35.65%_34.68%_39.32%_58.43%]" data-name="Group">
      <Group15 />
    </div>
  );
}

function ClipPathGroup5() {
  return (
    <div className="absolute contents inset-[35.65%_34.68%_39.32%_58.43%]" data-name="Clip path group">
      <Group14 />
    </div>
  );
}

function Group16() {
  return (
    <div className="absolute inset-[39.67%_37.85%_58.22%_61.34%] mask-position-[-49.202px_-22.935px,_-4.112px_-1.138px] opacity-50" style={{ maskImage: `url('${imgVector3}'), url('${imgGroup4}')` }} data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.3448 6.8502">
        <g id="Group">
          <path d={svgPaths.pa68ba00} fill="var(--fill-0, #4C352B)" id="Vector" />
          <path d={svgPaths.p3c8cc580} fill="var(--fill-0, #4C352B)" id="Vector_2" />
          <path d={svgPaths.p26497a80} fill="var(--fill-0, #4C352B)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup6() {
  return (
    <div className="absolute contents inset-[39.32%_37.6%_56.63%_61.02%]" data-name="Clip path group">
      <Group16 />
    </div>
  );
}

function Group13() {
  return (
    <div className="absolute contents inset-[32.63%_34.01%_39.32%_57.76%]" data-name="Group">
      <div className="absolute inset-[32.63%_34.01%_40.18%_57.76%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-[-3.316px_-0.056px] mask-size-[108.75px_89.073px] opacity-50" style={{ maskImage: `url('${imgVector3}')` }} data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 105.431 88.3701">
          <path d={svgPaths.p39cd4b40} fill="var(--fill-0, #4C352B)" id="Vector" />
        </svg>
      </div>
      <ClipPathGroup5 />
      <ClipPathGroup6 />
      <div className="absolute inset-[56.19%_38.63%_39.88%_60.04%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-[-32.491px_-76.646px] mask-size-[108.75px_89.073px] opacity-50" style={{ maskImage: `url('${imgVector3}')` }} data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.0434 12.7658">
          <path d={svgPaths.pd9ef900} fill="var(--fill-0, #4C352B)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[56.19%_37.33%_39.88%_61.48%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-[-50.976px_-76.646px] mask-size-[108.75px_89.073px] opacity-50" style={{ maskImage: `url('${imgVector3}')` }} data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.1936 12.7658">
          <path d={svgPaths.p2fbb9700} fill="var(--fill-0, #4C352B)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[52.27%_38.11%_43.81%_60.42%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-[-37.394px_-63.88px] mask-size-[108.75px_89.073px] opacity-50" style={{ maskImage: `url('${imgVector3}')` }} data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.8352 12.7658">
          <path d={svgPaths.p11033e00} fill="var(--fill-0, #4C352B)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[52.27%_38.74%_46.02%_61.04%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-[-45.293px_-63.889px] mask-size-[108.75px_89.073px] opacity-50" style={{ maskImage: `url('${imgVector3}')` }} data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.8629 5.56091">
          <path d={svgPaths.p561a880} fill="var(--fill-0, #F5DF91)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[56.21%_39.26%_42.08%_60.51%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-[-38.583px_-76.693px] mask-size-[108.75px_89.073px] opacity-50" style={{ maskImage: `url('${imgVector3}')` }} data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.85396 5.56091">
          <path d={svgPaths.p32bcefc0} fill="var(--fill-0, #F5DF91)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[56.21%_37.86%_42.2%_61.92%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-[-56.562px_-76.693px] mask-size-[108.75px_89.073px] opacity-50" style={{ maskImage: `url('${imgVector3}')` }} data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.85396 5.15717">
          <path d={svgPaths.p235d2dc0} fill="var(--fill-0, #F5DF91)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Group12() {
  return (
    <div className="absolute contents inset-[32.63%_34.01%_39.32%_57.76%]" data-name="Group">
      <Group13 />
    </div>
  );
}

function ClipPathGroup4() {
  return (
    <div className="absolute contents inset-[32.61%_34.01%_39.98%_57.5%]" data-name="Clip path group">
      <Group12 />
    </div>
  );
}

function Group11() {
  return (
    <div className="absolute contents inset-[32.61%_34.01%_39.98%_57.5%]" data-name="Group">
      <ClipPathGroup4 />
    </div>
  );
}

function Group17() {
  return (
    <div className="absolute inset-[24.72%_5.73%_15.81%_81.25%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 166.73 193.256">
        <g id="Group">
          <path d={svgPaths.p20224e00} fill="var(--fill-0, #C2CE86)" id="Vector" />
          <path d={svgPaths.p1904d400} fill="var(--fill-0, #C2CE86)" id="Vector_2" />
          <path d={svgPaths.p17a9e200} fill="var(--fill-0, #C2CE86)" id="Vector_3" />
          <path d={svgPaths.p3c517b80} fill="var(--fill-0, #C2CE86)" id="Vector_4" />
          <path d={svgPaths.p1df71e40} fill="var(--fill-0, #C2CE86)" id="Vector_5" />
          <path d={svgPaths.p146a7b70} fill="var(--fill-0, #85A687)" id="Vector_6" />
          <path d={svgPaths.p3d4abb40} fill="var(--fill-0, #85A687)" id="Vector_7" />
          <path d={svgPaths.p3fab8c00} fill="var(--fill-0, #85A687)" id="Vector_8" />
          <path d={svgPaths.p1ff0c480} fill="var(--fill-0, #85A687)" id="Vector_9" />
          <path d={svgPaths.p31802400} fill="var(--fill-0, #85A687)" id="Vector_10" />
          <path d={svgPaths.p4974e80} fill="var(--fill-0, #85A687)" id="Vector_11" />
          <path d={svgPaths.p125ade00} fill="var(--fill-0, #85A687)" id="Vector_12" />
          <path d={svgPaths.p1058c600} fill="var(--fill-0, #C2CE86)" id="Vector_13" />
          <path d={svgPaths.p3c937400} fill="var(--fill-0, #85A687)" id="Vector_14" />
          <path d={svgPaths.p19541f70} fill="var(--fill-0, #85A687)" id="Vector_15" />
          <path d={svgPaths.p96c47c0} fill="var(--fill-0, #85A687)" id="Vector_16" />
          <path d={svgPaths.p32315880} fill="var(--fill-0, #85A687)" id="Vector_17" />
          <path d={svgPaths.p13f8800} fill="var(--fill-0, #85A687)" id="Vector_18" />
          <path d={svgPaths.p555c2f0} fill="var(--fill-0, #85A687)" id="Vector_19" />
          <path d={svgPaths.p177bc700} fill="var(--fill-0, #85A687)" id="Vector_20" />
          <path d={svgPaths.p963d680} fill="var(--fill-0, #D78228)" id="Vector_21" />
          <path d={svgPaths.pdd9d000} fill="var(--fill-0, #E0AF62)" id="Vector_22" />
          <path d={svgPaths.p9013400} fill="var(--fill-0, #A35380)" id="Vector_23" />
          <path d={svgPaths.p1bdd5920} fill="var(--fill-0, #BF87A6)" id="Vector_24" />
          <path d={svgPaths.p183377a0} fill="var(--fill-0, #BF87A6)" id="Vector_25" />
          <path d={svgPaths.p1346ff00} fill="var(--fill-0, #BF87A6)" id="Vector_26" />
          <path d={svgPaths.p18f39e00} fill="var(--fill-0, #EBC194)" id="Vector_27" />
          <path d={svgPaths.p21e57500} fill="var(--fill-0, #F9ECBD)" id="Vector_28" />
          <path d={svgPaths.p372364c0} fill="var(--fill-0, #F9ECBD)" id="Vector_29" />
          <path d={svgPaths.p2998c500} fill="var(--fill-0, #F9ECBD)" id="Vector_30" />
          <path d={svgPaths.p1c06a5b0} fill="var(--fill-0, #F9ECBD)" id="Vector_31" />
          <path d={svgPaths.p6ab16a0} fill="var(--fill-0, #E0AF62)" id="Vector_32" />
          <path d={svgPaths.pb2a200} fill="var(--fill-0, #F5E091)" id="Vector_33" />
          <path d={svgPaths.pe04d6f0} fill="var(--fill-0, #F5E091)" id="Vector_34" />
          <path d={svgPaths.p10bcd200} fill="var(--fill-0, #F5E091)" id="Vector_35" />
          <path d={svgPaths.p3ecce6c0} fill="var(--fill-0, #F5E091)" id="Vector_36" />
          <path d={svgPaths.p2f693a70} fill="var(--fill-0, #F5E091)" id="Vector_37" />
          <path d={svgPaths.p2bd99580} fill="var(--fill-0, #85A687)" id="Vector_38" />
          <path d={svgPaths.p30df3600} fill="var(--fill-0, #C2CE86)" id="Vector_39" />
          <path d={svgPaths.p27a56b80} fill="var(--fill-0, #C2CE86)" id="Vector_40" />
          <path d={svgPaths.pd4bd00} fill="var(--fill-0, #C2CE86)" id="Vector_41" />
          <path d={svgPaths.p3cbbca80} fill="var(--fill-0, #C2CE86)" id="Vector_42" />
          <path d={svgPaths.p2c5c5600} fill="var(--fill-0, #C2CE86)" id="Vector_43" />
          <path d={svgPaths.p10ef7800} fill="var(--fill-0, #4C352B)" id="Vector_44" />
          <path d={svgPaths.p2bfe3300} fill="var(--fill-0, #9BA56B)" id="Vector_45" />
          <path d={svgPaths.p1a5d0ac0} fill="var(--fill-0, #1E4A35)" id="Vector_46" />
          <path d={svgPaths.p3df162c0} fill="var(--fill-0, #9BA56B)" id="Vector_47" />
          <path d={svgPaths.pde04940} fill="var(--fill-0, #1E4A35)" id="Vector_48" />
          <path d={svgPaths.pf2b6e00} fill="var(--fill-0, #9BA56B)" id="Vector_49" />
          <path d={svgPaths.p2c29e00} fill="var(--fill-0, #1E4A35)" id="Vector_50" />
          <path d={svgPaths.p3ae46300} fill="var(--fill-0, #9BA56B)" id="Vector_51" />
          <path d={svgPaths.p2c8dd180} fill="var(--fill-0, #1E4A35)" id="Vector_52" />
          <path d={svgPaths.p346f8680} fill="var(--fill-0, #9BA56B)" id="Vector_53" />
          <path d={svgPaths.p31ae9100} fill="var(--fill-0, #1E4A35)" id="Vector_54" />
          <path d={svgPaths.p37e28200} fill="var(--fill-0, #9BA56B)" id="Vector_55" />
          <path d={svgPaths.p1f95f800} fill="var(--fill-0, #1E4A35)" id="Vector_56" />
          <path d={svgPaths.pd7c7a80} fill="var(--fill-0, #9BA56B)" id="Vector_57" />
          <path d={svgPaths.p3c32f900} fill="var(--fill-0, #1E4A35)" id="Vector_58" />
          <path d={svgPaths.p28d25d80} fill="var(--fill-0, #9BA56B)" id="Vector_59" />
          <path d={svgPaths.p3cfecd80} fill="var(--fill-0, #1E4A35)" id="Vector_60" />
          <path d={svgPaths.p29380100} fill="var(--fill-0, #1E4A35)" id="Vector_61" />
          <path d={svgPaths.p16ae1100} fill="var(--fill-0, #9BA56B)" id="Vector_62" />
          <path d={svgPaths.p1fd2200} fill="var(--fill-0, #1E4A35)" id="Vector_63" />
          <path d={svgPaths.pc8c0a00} fill="var(--fill-0, #9BA56B)" id="Vector_64" />
          <path d={svgPaths.p21624d00} fill="var(--fill-0, #1E4A35)" id="Vector_65" />
          <path d={svgPaths.pd148d80} fill="var(--fill-0, #814E18)" id="Vector_66" />
          <path d={svgPaths.p1b60aa40} fill="var(--fill-0, #4C352B)" id="Vector_67" />
          <path d={svgPaths.p14425c00} fill="var(--fill-0, #4C352B)" id="Vector_68" />
        </g>
      </svg>
    </div>
  );
}

function Group18() {
  return (
    <div className="absolute inset-[45.98%_63.87%_34.19%_29.55%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 84.3228 64.4531">
        <g id="Group">
          <path d={svgPaths.p3b776300} fill="var(--fill-0, #B68CBB)" id="Vector" />
          <path d={svgPaths.p2800f600} fill="var(--fill-0, #B68CBB)" id="Vector_2" />
          <path d={svgPaths.p1c8a1480} fill="var(--fill-0, #B68CBB)" id="Vector_3" />
          <path d={svgPaths.p248f7300} fill="var(--fill-0, #B68CBB)" id="Vector_4" />
          <path d={svgPaths.p26f17500} fill="var(--fill-0, #B68CBB)" id="Vector_5" />
          <path d={svgPaths.p2e425400} fill="var(--fill-0, #B68CBB)" id="Vector_6" />
          <path d={svgPaths.pf7c5180} fill="var(--fill-0, #B68CBB)" id="Vector_7" />
          <path d={svgPaths.p11961490} fill="var(--fill-0, #B68CBB)" id="Vector_8" />
          <path d={svgPaths.p3ef0df80} fill="var(--fill-0, #B68CBB)" id="Vector_9" />
          <path d={svgPaths.pd66df80} fill="var(--fill-0, #B68CBB)" id="Vector_10" />
          <path d={svgPaths.p2365c400} fill="var(--fill-0, #B68CBB)" id="Vector_11" />
          <path d={svgPaths.p3d7ff000} fill="var(--fill-0, #EBC194)" id="Vector_12" />
          <path d={svgPaths.p3eca8d80} fill="var(--fill-0, #F7E6D4)" id="Vector_13" />
          <path d={svgPaths.p3d2bb880} fill="var(--fill-0, #F7E6D4)" id="Vector_14" />
          <path d={svgPaths.p1dfed680} fill="var(--fill-0, #F7E6D4)" id="Vector_15" />
          <path d={svgPaths.p1fc2d00} fill="var(--fill-0, #F7E6D4)" id="Vector_16" />
          <path d={svgPaths.pe9b0d00} fill="var(--fill-0, #F7E6D4)" id="Vector_17" />
          <path d={svgPaths.p31464400} fill="var(--fill-0, #F7E6D4)" id="Vector_18" />
          <path d={svgPaths.p277e0c00} fill="var(--fill-0, #F7E6D4)" id="Vector_19" />
          <path d={svgPaths.p12d3c500} fill="var(--fill-0, #A35380)" id="Vector_20" />
          <path d={svgPaths.p178d9900} fill="var(--fill-0, #D78228)" id="Vector_21" />
          <path d={svgPaths.p2a06c080} fill="var(--fill-0, #E0AF62)" id="Vector_22" />
          <path d={svgPaths.p3e488600} fill="var(--fill-0, #D78228)" id="Vector_23" />
          <path d={svgPaths.p1e0f4600} fill="var(--fill-0, #E0AF62)" id="Vector_24" />
          <path d={svgPaths.p1834d8c0} fill="var(--fill-0, #E0AF62)" id="Vector_25" />
          <path d={svgPaths.p3d31f400} fill="var(--fill-0, #E0AF62)" id="Vector_26" />
          <path d={svgPaths.pc755970} fill="var(--fill-0, #E0AF62)" id="Vector_27" />
          <path d={svgPaths.p20d5da00} fill="var(--fill-0, #E0AF62)" id="Vector_28" />
          <path d={svgPaths.p298f18c0} fill="var(--fill-0, #E0AF62)" id="Vector_29" />
          <path d={svgPaths.p3989a380} fill="var(--fill-0, #E0AF62)" id="Vector_30" />
          <path d={svgPaths.p11a2c300} fill="var(--fill-0, #E0AF62)" id="Vector_31" />
          <path d={svgPaths.p2a460900} fill="var(--fill-0, #85A687)" id="Vector_32" />
          <path d={svgPaths.p12c1a400} fill="var(--fill-0, #C2CE86)" id="Vector_33" />
          <path d={svgPaths.p6dc1200} fill="var(--fill-0, #C2CE86)" id="Vector_34" />
          <path d={svgPaths.p18385a80} fill="var(--fill-0, #C2CE86)" id="Vector_35" />
          <path d={svgPaths.p326c3580} fill="var(--fill-0, #C2CE86)" id="Vector_36" />
          <path d={svgPaths.p3fcb9200} fill="var(--fill-0, #C2CE86)" id="Vector_37" />
          <path d={svgPaths.p3bf35300} fill="var(--fill-0, #85A687)" id="Vector_38" />
          <path d={svgPaths.p2686b7f0} fill="var(--fill-0, #C2CE86)" id="Vector_39" />
          <path d={svgPaths.p2c20c10} fill="var(--fill-0, #C2CE86)" id="Vector_40" />
          <path clipRule="evenodd" d={svgPaths.p1f303200} fill="var(--fill-0, #4C352B)" fillRule="evenodd" id="Vector_41" />
        </g>
      </svg>
    </div>
  );
}

function Group19() {
  return (
    <div className="absolute inset-[0_39.46%_14.57%_52.34%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 104.985 277.639">
        <g id="Group">
          <g id="Group_2">
            <path d={svgPaths.p119f95f0} fill="var(--fill-0, #5A381F)" id="Vector" />
            <path d={svgPaths.p18f405b0} fill="var(--fill-0, #372816)" id="Vector_2" />
            <path d={svgPaths.pbe82000} fill="var(--fill-0, #452B17)" id="Vector_3" />
            <path d={svgPaths.p9cce800} fill="var(--fill-0, #122C20)" id="Vector_4" />
            <path d={svgPaths.p39df2000} fill="var(--fill-0, #643D22)" id="Vector_5" />
            <path d={svgPaths.p37f75880} fill="var(--fill-0, #9C968E)" id="Vector_6" />
            <path d={svgPaths.p2943db40} fill="var(--fill-0, #CA8933)" id="Vector_7" />
            <path d={svgPaths.pa787800} fill="var(--fill-0, #332515)" id="Vector_8" />
            <path d={svgPaths.p26a4e000} fill="var(--fill-0, #CA8933)" id="Vector_9" />
            <path d={svgPaths.pf428800} fill="var(--fill-0, #694022)" id="Vector_10" />
            <path d={svgPaths.p3781fc80} fill="var(--fill-0, #211B12)" id="Vector_11" />
            <path d={svgPaths.p28858700} fill="var(--fill-0, #C98832)" id="Vector_12" />
            <path d={svgPaths.p34bcf790} fill="var(--fill-0, #14130E)" id="Vector_13" />
            <path d={svgPaths.p28164f00} fill="var(--fill-0, #CB8B36)" id="Vector_14" />
            <path d={svgPaths.p18c7f380} fill="var(--fill-0, #CC8B34)" id="Vector_15" />
            <path d={svgPaths.p20f3a280} fill="var(--fill-0, #CA8A35)" id="Vector_16" />
            <path d={svgPaths.p8128400} fill="var(--fill-0, #C68734)" id="Vector_17" />
            <path d={svgPaths.p3bae2c00} fill="var(--fill-0, #99938A)" id="Vector_18" />
            <path d={svgPaths.pac18b00} fill="var(--fill-0, #9F998F)" id="Vector_19" />
            <path d={svgPaths.p1b9fb700} fill="var(--fill-0, #9A948B)" id="Vector_20" />
            <path d={svgPaths.p2ce87900} fill="var(--fill-0, #5A381F)" id="Vector_21" />
            <path d={svgPaths.pab3f000} fill="var(--fill-0, #5A381F)" id="Vector_22" />
            <path d={svgPaths.p273c0500} fill="var(--fill-0, #CC8B34)" id="Vector_23" />
            <path d={svgPaths.p15d28f00} fill="var(--fill-0, #452B17)" id="Vector_24" />
            <path d={svgPaths.p3b87a200} fill="var(--fill-0, #242017)" id="Vector_25" />
            <path d={svgPaths.pa64b400} fill="var(--fill-0, #CC8A34)" id="Vector_26" />
            <path d={svgPaths.p37d03b00} fill="var(--fill-0, #CB8933)" id="Vector_27" />
            <path d={svgPaths.p1d7ace00} fill="var(--fill-0, #9C978E)" id="Vector_28" />
            <path d={svgPaths.p1fef3c00} fill="var(--fill-0, #9D978C)" id="Vector_29" />
            <path d={svgPaths.p922dc00} fill="var(--fill-0, #5A381F)" id="Vector_30" />
            <path d={svgPaths.p250c9600} fill="var(--fill-0, #C0BCB6)" id="Vector_31" />
          </g>
          <path d={svgPaths.p1295000} fill="var(--fill-0, #9B8F84)" id="Vector_32" />
        </g>
      </svg>
    </div>
  );
}

function Group20() {
  return (
    <div className="absolute inset-[16.24%_74.55%_12.15%_17.76%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 98.4163 232.752">
        <g id="Group">
          <path d={svgPaths.p1ce71000} fill="var(--fill-0, #35291A)" id="Vector" />
          <path d={svgPaths.p5a2ddc0} fill="var(--fill-0, #553822)" id="Vector_2" />
          <path d={svgPaths.p19b6e600} fill="var(--fill-0, #C48037)" id="Vector_3" />
          <path d={svgPaths.pd748b00} fill="var(--fill-0, #553822)" id="Vector_4" />
          <path d={svgPaths.pd2116b0} fill="var(--fill-0, #35291A)" id="Vector_5" />
          <path d={svgPaths.p7d0c80} fill="var(--fill-0, #35291A)" id="Vector_6" />
          <path d={svgPaths.p335b2000} fill="var(--fill-0, #C48037)" id="Vector_7" />
          <path d={svgPaths.p18625a80} fill="var(--fill-0, #C48037)" id="Vector_8" />
          <path d={svgPaths.p2d597100} fill="var(--fill-0, #C48037)" id="Vector_9" />
          <path d={svgPaths.p10c8f500} fill="var(--fill-0, #C48037)" id="Vector_10" />
          <path d={svgPaths.p1c0ede00} fill="var(--fill-0, #35291A)" id="Vector_11" />
          <path d={svgPaths.pacd83f0} fill="var(--fill-0, #35291A)" id="Vector_12" />
          <path d={svgPaths.p13ea3200} fill="var(--fill-0, #35291A)" id="Vector_13" />
          <path d={svgPaths.p1f9ccd00} fill="var(--fill-0, #C48037)" id="Vector_14" />
          <path d={svgPaths.p2c215780} fill="var(--fill-0, #35291A)" id="Vector_15" />
          <path d={svgPaths.p1a8b3b00} fill="var(--fill-0, #35291A)" id="Vector_16" />
          <path d={svgPaths.p30a10180} fill="var(--fill-0, #E4FFD7)" id="Vector_17" />
          <path d={svgPaths.p21c81f80} fill="var(--fill-0, #C48037)" id="Vector_18" />
        </g>
      </svg>
    </div>
  );
}

function Group21() {
  return (
    <div className="absolute inset-[49.91%_21.99%_30.01%_69.55%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 108.361 65.2806">
        <g id="Group">
          <path d={svgPaths.p18449900} fill="var(--fill-0, #AC6820)" id="Vector" />
          <path d={svgPaths.p1dab6a00} fill="var(--fill-0, #122C20)" id="Vector_2" />
          <path d={svgPaths.p9a647c0} fill="var(--fill-0, #4C352B)" id="Vector_3" />
          <path d={svgPaths.p11bb6700} fill="var(--fill-0, #122C20)" id="Vector_4" />
          <path d={svgPaths.pdd36f40} fill="var(--fill-0, #4C352B)" id="Vector_5" />
          <path d={svgPaths.p10905600} fill="var(--fill-0, #4C352B)" id="Vector_6" />
          <path d={svgPaths.p3437f900} fill="var(--fill-0, #7B6A62)" id="Vector_7" />
          <path d={svgPaths.p2c2d8700} fill="var(--fill-0, #4C352B)" id="Vector_8" />
          <path d={svgPaths.p2de0a380} fill="var(--fill-0, #7B6A62)" id="Vector_9" />
          <path d={svgPaths.p1d8f4900} fill="var(--fill-0, #D78228)" id="Vector_10" />
          <path d={svgPaths.p2ab31480} fill="var(--fill-0, #E0AF62)" id="Vector_11" />
          <path d={svgPaths.p5d2c8c0} fill="var(--fill-0, #D78228)" id="Vector_12" />
          <path d={svgPaths.p1752300} fill="var(--fill-0, #E0AF62)" id="Vector_13" />
          <path d={svgPaths.pdeab480} fill="var(--fill-0, #E0AF62)" id="Vector_14" />
          <path d={svgPaths.p39709340} fill="var(--fill-0, #F5E091)" id="Vector_15" />
          <path d={svgPaths.p187cd980} fill="var(--fill-0, #F5E091)" id="Vector_16" />
          <path d={svgPaths.p441ff00} fill="var(--fill-0, #F5E091)" id="Vector_17" />
          <path d={svgPaths.p37a16a00} fill="var(--fill-0, #F5E091)" id="Vector_18" />
          <path d={svgPaths.p2a0253f0} fill="var(--fill-0, #F5E091)" id="Vector_19" />
          <path d={svgPaths.p182f3700} fill="var(--fill-0, #E0AF62)" id="Vector_20" />
          <path d={svgPaths.p3fea2d80} fill="var(--fill-0, #F5E091)" id="Vector_21" />
          <path d={svgPaths.p1a01ae80} fill="var(--fill-0, #F5E091)" id="Vector_22" />
          <path d={svgPaths.p34950c00} fill="var(--fill-0, #F5E091)" id="Vector_23" />
          <path d={svgPaths.p1cacc900} fill="var(--fill-0, #F5E091)" id="Vector_24" />
          <path d={svgPaths.p33a7a400} fill="var(--fill-0, #F5E091)" id="Vector_25" />
          <path d={svgPaths.p1bb81400} fill="var(--fill-0, #C2CE86)" id="Vector_26" />
          <path d={svgPaths.p127f9000} fill="var(--fill-0, #85A687)" id="Vector_27" />
          <path d={svgPaths.p35516880} fill="var(--fill-0, #85A687)" id="Vector_28" />
          <path d={svgPaths.p2a107d80} fill="var(--fill-0, #85A687)" id="Vector_29" />
          <path d={svgPaths.p2237d6f0} fill="var(--fill-0, #85A687)" id="Vector_30" />
          <path d={svgPaths.p1a78baf0} fill="var(--fill-0, #85A687)" id="Vector_31" />
          <path d={svgPaths.p36b5c500} fill="var(--fill-0, #85A687)" id="Vector_32" />
          <path d={svgPaths.p139cb000} fill="var(--fill-0, #85A687)" id="Vector_33" />
          <path d={svgPaths.p2faa1200} fill="var(--fill-0, #C2CE86)" id="Vector_34" />
          <path d={svgPaths.p879ce00} fill="var(--fill-0, #85A687)" id="Vector_35" />
          <path d={svgPaths.p144bd100} fill="var(--fill-0, #85A687)" id="Vector_36" />
          <path d={svgPaths.p1a695800} fill="var(--fill-0, #85A687)" id="Vector_37" />
          <path d={svgPaths.p17cb6d70} fill="var(--fill-0, #85A687)" id="Vector_38" />
          <path d={svgPaths.p2f80a300} fill="var(--fill-0, #85A687)" id="Vector_39" />
          <path d={svgPaths.p2cf0f380} fill="var(--fill-0, #85A687)" id="Vector_40" />
          <path d={svgPaths.p17644280} fill="var(--fill-0, #85A687)" id="Vector_41" />
          <path d={svgPaths.p286d0b80} fill="var(--fill-0, #85A687)" id="Vector_42" />
          <path d={svgPaths.p91d5a80} fill="var(--fill-0, #85A687)" id="Vector_43" />
          <path d={svgPaths.p13f4c00} fill="var(--fill-0, #85A687)" id="Vector_44" />
          <path d={svgPaths.p5a50480} fill="var(--fill-0, #AC6820)" id="Vector_45" />
          <path d={svgPaths.p3c5780} fill="var(--fill-0, #AC6820)" id="Vector_46" />
          <path d={svgPaths.p1c850180} fill="var(--fill-0, #AC6820)" id="Vector_47" />
          <path d={svgPaths.p31bbc00} fill="var(--fill-0, #AC6820)" id="Vector_48" />
          <path d={svgPaths.p165ce300} fill="var(--fill-0, #AC6820)" id="Vector_49" />
          <path d={svgPaths.p30088e00} fill="var(--fill-0, #AC6820)" id="Vector_50" />
          <path d={svgPaths.p2275d00} fill="var(--fill-0, #AC6820)" id="Vector_51" />
          <path d={svgPaths.pcf6ba00} fill="var(--fill-0, #AC6820)" id="Vector_52" />
          <path d={svgPaths.p2bc0e400} fill="var(--fill-0, #814E18)" id="Vector_53" />
          <path d={svgPaths.p1d680} fill="var(--fill-0, #814E18)" id="Vector_54" />
          <path d={svgPaths.p1a565dc0} fill="var(--fill-0, #814E18)" id="Vector_55" />
        </g>
      </svg>
    </div>
  );
}

function Group22() {
  return (
    <div className="absolute inset-[17.88%_0_0_92.63%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 94.3932 266.876">
        <g id="Group">
          <path d={svgPaths.p1bda7f80} fill="var(--fill-0, #C2CE86)" id="Vector" />
          <path d={svgPaths.pf779900} fill="var(--fill-0, #4F2C15)" id="Vector_2" />
          <path d={svgPaths.pc534480} fill="var(--fill-0, #BC8348)" id="Vector_3" />
          <path d={svgPaths.p3a15c600} fill="var(--fill-0, #221A0F)" id="Vector_4" />
          <path d={svgPaths.p33589d00} fill="var(--fill-0, #D7CCC6)" id="Vector_5" />
          <path d={svgPaths.p6a3c280} fill="var(--fill-0, #663619)" id="Vector_6" />
          <path d={svgPaths.p2cd62ff2} fill="var(--fill-0, #542F17)" id="Vector_7" />
          <path d={svgPaths.p767ba00} fill="var(--fill-0, #606A21)" id="Vector_8" />
          <path d={svgPaths.p379cb700} fill="var(--fill-0, #9BA56B)" id="Vector_9" />
          <path d={svgPaths.p9a0d980} fill="var(--fill-0, #231D13)" id="Vector_10" />
          <path d={svgPaths.p1551cb00} fill="var(--fill-0, #241E13)" id="Vector_11" />
          <path d={svgPaths.pa8ff700} fill="var(--fill-0, #6A3A1C)" id="Vector_12" />
          <path d={svgPaths.p3b389c80} fill="var(--fill-0, #6C3A1B)" id="Vector_13" />
          <path d={svgPaths.pdbc7800} fill="var(--fill-0, #6A3A1B)" id="Vector_14" />
          <path d={svgPaths.p380cc800} fill="var(--fill-0, #211C13)" id="Vector_15" />
          <path d={svgPaths.p31a2d700} fill="var(--fill-0, #C25B18)" id="Vector_16" />
          <path d={svgPaths.p79d72c0} fill="var(--fill-0, #462814)" id="Vector_17" />
          <path d={svgPaths.p295b3500} fill="var(--fill-0, #201B12)" id="Vector_18" />
          <path d={svgPaths.p30520b00} fill="var(--fill-0, #542F17)" id="Vector_19" />
          <path d={svgPaths.p24c72ec0} fill="var(--fill-0, #6D3A1B)" id="Vector_20" />
          <path d={svgPaths.p2f61d130} fill="var(--fill-0, #9BA56B)" id="Vector_21" />
          <path d={svgPaths.p2cbec000} fill="var(--fill-0, #A5713E)" id="Vector_22" />
          <path d={svgPaths.p23197570} fill="var(--fill-0, #9C5118)" id="Vector_23" />
          <path d={svgPaths.p3c7e0000} fill="var(--fill-0, #5E6720)" id="Vector_24" />
          <path d={svgPaths.p2c7ba100} fill="var(--fill-0, #231D12)" id="Vector_25" />
          <path d={svgPaths.p6414df0} fill="var(--fill-0, #A54013)" id="Vector_26" />
          <path d={svgPaths.p3fa85f00} fill="var(--fill-0, #201B12)" id="Vector_27" />
          <path d={svgPaths.p23358f80} fill="var(--fill-0, #58601E)" id="Vector_28" />
          <path d={svgPaths.p27d90a80} fill="var(--fill-0, #BF5915)" id="Vector_29" />
          <path d={svgPaths.p3056cdf0} fill="var(--fill-0, #D68C34)" id="Vector_30" />
          <path d={svgPaths.p33ef8c00} fill="var(--fill-0, #F2F0EA)" id="Vector_31" />
          <path d={svgPaths.pf585c00} fill="var(--fill-0, #E9E7CF)" id="Vector_32" />
          <path d={svgPaths.p3de38080} fill="var(--fill-0, #C2BCB5)" id="Vector_33" />
          <path d={svgPaths.p2c679080} fill="var(--fill-0, #492914)" id="Vector_34" />
          <path d={svgPaths.p16afb900} fill="var(--fill-0, #1F1A10)" id="Vector_35" />
          <path d={svgPaths.p3dc60c00} fill="var(--fill-0, #B86924)" id="Vector_36" />
        </g>
      </svg>
    </div>
  );
}

function Layer() {
  return (
    <div className="-translate-x-1/2 absolute h-81.25 left-[calc(50%+0.5px)] overflow-clip top-58 w-320.25" data-name="Layer_1">
      <ClipPathGroup />
      <div className="absolute inset-[53.72%_55.28%_16.46%_8.74%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 460.933 96.9156">
          <path d={svgPaths.p148be780} fill="var(--fill-0, #7B6A62)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[60.04%_15.7%_18.99%_62.6%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 277.978 68.1563">
          <path d={svgPaths.p38a62600} fill="var(--fill-0, #7B6A62)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[65.36%_64.38%_5.82%_0]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 456.238 93.6745">
          <path d={svgPaths.p78d9b80} fill="var(--fill-0, #7EA06E)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[84.38%_88.95%_12.76%_10.77%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.568 9.2994">
          <path d={svgPaths.p22759c30} fill="var(--fill-0, #9BA56B)" id="Vector" />
        </svg>
      </div>
      <Group4 />
      <ClipPathGroup1 />
      <Group11 />
      <Group17 />
      <Group18 />
      <div className="absolute inset-[82.66%_64.38%_5.82%_1.7%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 434.424 37.4475">
          <path d={svgPaths.p1a9de000} fill="var(--fill-0, #1A5331)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[79.98%_90.64%_10.82%_8.04%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.8519 29.9281">
          <path d={svgPaths.p2acb9480} fill="var(--fill-0, #9BA56B)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[80.31%_86.79%_10.48%_11.89%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.8519 29.9281">
          <path d={svgPaths.p2f2db6c0} fill="var(--fill-0, #9BA56B)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[80.99%_85.77%_9.8%_12.92%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.8518 29.9281">
          <path d={svgPaths.pc1e8a00} fill="var(--fill-0, #9BA56B)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[81.66%_88.33%_9.13%_10.35%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.8518 29.9281">
          <path d={svgPaths.p274c8380} fill="var(--fill-0, #9BA56B)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[80.99%_93%_7.18%_5.31%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.6606 38.4557">
          <path d={svgPaths.p332cd200} fill="var(--fill-0, #9BA56B)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[80.91%_71.52%_9.88%_27.16%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.8518 29.9281">
          <path d={svgPaths.p202f0070} fill="var(--fill-0, #9BA56B)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[79.9%_70.07%_10.89%_28.62%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.8519 29.9281">
          <path d={svgPaths.p1b91ea80} fill="var(--fill-0, #9BA56B)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[82.74%_74.16%_10.72%_24.91%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.9755 21.2622">
          <path d={svgPaths.p266eee80} fill="var(--fill-0, #9BA56B)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[82.02%_75.19%_11.43%_23.87%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.9755 21.2622">
          <path d={svgPaths.pcc21800} fill="var(--fill-0, #9BA56B)" id="Vector" />
        </svg>
      </div>
      <Group19 />
      <div className="absolute inset-[90.37%_80.37%_8.86%_19.26%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.81706 2.49928">
          <path d={svgPaths.p1ef1700} fill="var(--fill-0, #FFF5E0)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[86.88%_80.36%_12.36%_19.27%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.81953 2.4983">
          <path d={svgPaths.p33957f00} fill="var(--fill-0, #FFF5E0)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[90.76%_76.97%_8.47%_22.65%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.81729 2.49928">
          <path d={svgPaths.p1055a800} fill="var(--fill-0, #FFF5E0)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[84.68%_79.79%_14.55%_19.84%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.81706 2.49929">
          <path d={svgPaths.p11fe8c0} fill="var(--fill-0, #FFF5E0)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[89.99%_73.63%_9.24%_25.99%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.81706 2.49928">
          <path d={svgPaths.p1ef1700} fill="var(--fill-0, #FFF5E0)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[85.38%_82.33%_13.85%_17.29%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.81706 2.49929">
          <path d={svgPaths.p11fe8c0} fill="var(--fill-0, #FFF5E0)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[91.96%_82.15%_7.27%_17.48%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.81707 2.49928">
          <path d={svgPaths.p17d0a900} fill="var(--fill-0, #FFF5E0)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[89.99%_84.62%_9.24%_15.01%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.8193 2.4983">
          <path d={svgPaths.p302a8300} fill="var(--fill-0, #FFF5E0)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[90.4%_87.83%_9.16%_11.93%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.07761 1.43922">
          <path d={svgPaths.p20de0000} fill="var(--fill-0, #FFF5E0)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[92.13%_91.47%_7.43%_8.29%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.07761 1.43922">
          <path d={svgPaths.p20de0000} fill="var(--fill-0, #FFF5E0)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[86.74%_84.44%_12.35%_15.18%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.8193 2.94861">
          <path d={svgPaths.p3ca68cf0} fill="var(--fill-0, #FFF5E0)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[92.35%_86.41%_6.88%_13.21%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.8193 2.4983">
          <path d={svgPaths.p302a8300} fill="var(--fill-0, #FFF5E0)" id="Vector" />
        </svg>
      </div>
      <Group20 />
      <Group21 />
      <div className="absolute inset-[8.98%_36.64%_86.12%_61.67%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.6541 15.9103">
          <path d={svgPaths.pe6aa200} fill="var(--fill-0, #D78329)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[9.19%_37.24%_90.05%_62.5%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.2974 2.473">
          <path d={svgPaths.p361ea700} fill="var(--fill-0, #DCA752)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[9.77%_37.56%_89.74%_62.36%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.989535 1.57927">
          <path d={svgPaths.p17fa6800} fill="var(--fill-0, #DCA752)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[9.19%_37.67%_90.17%_62.07%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.34045 2.0907">
          <path d={svgPaths.p3f8de580} fill="var(--fill-0, #DCA752)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[10.04%_37.71%_86.45%_61.83%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.83077 11.412">
          <path d={svgPaths.p27acaff0} fill="var(--fill-0, #DCA752)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[10.38%_37.47%_86.24%_62.22%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.01533 10.9817">
          <path d={svgPaths.p3746e580} fill="var(--fill-0, #DCA752)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[10.13%_37.09%_86.55%_62.51%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.06419 10.7895">
          <path d={svgPaths.p1f592700} fill="var(--fill-0, #DCA752)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[9.4%_36.8%_87.43%_62.64%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.22038 10.2981">
          <path d={svgPaths.p21c40b00} fill="var(--fill-0, #DCA752)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[12.36%_36.6%_84.56%_62.77%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.07915 10.0231">
          <path d={svgPaths.p20282400} fill="var(--fill-0, #C3CE87)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[5.7%_36.55%_83.06%_62.2%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.0214 36.5196">
          <path d={svgPaths.p1d811b00} fill="var(--fill-0, #86A687)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[12.79%_36.81%_85.36%_63.02%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.18443 5.99811">
          <path d={svgPaths.p37a40f00} fill="var(--fill-0, #86A687)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[12.5%_36.76%_84.94%_63.03%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.7362 8.33579">
          <path d={svgPaths.p72a4500} fill="var(--fill-0, #86A687)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[12.58%_36.68%_85.29%_63.11%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.68428 6.9082">
          <path d={svgPaths.p19096280} fill="var(--fill-0, #86A687)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[13.45%_37%_85.03%_62.81%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.49166 4.95642">
          <path d={svgPaths.p29b22b00} fill="var(--fill-0, #86A687)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[12.55%_36.86%_85.19%_62.94%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.51444 7.34987">
          <path d={svgPaths.p3beaedf0} fill="var(--fill-0, #86A687)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[13.42%_36.87%_84.97%_62.9%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.88179 5.24416">
          <path d={svgPaths.p1f79ec0} fill="var(--fill-0, #86A687)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[7.1%_35.49%_86.14%_62.85%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.2142 21.9645">
          <path d={svgPaths.p1f338b80} fill="var(--fill-0, #9A4173)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[8.42%_36.83%_88.56%_63%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.28177 9.81692">
          <path d={svgPaths.pb81d200} fill="var(--fill-0, #B68CBB)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[11.56%_36.71%_87.62%_63.15%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.7565 2.66542">
          <path d={svgPaths.p3b774780} fill="var(--fill-0, #B68CBB)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[12.24%_36.41%_86.66%_63.29%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.88936 3.58649">
          <path d={svgPaths.p35853f80} fill="var(--fill-0, #B68CBB)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[7.45%_35.94%_88.09%_63.17%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.3993 14.4898">
          <path d={svgPaths.p3301b800} fill="var(--fill-0, #B68CBB)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[8%_35.96%_91.44%_63.74%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.88613 1.81161">
          <path d={svgPaths.p258c0e00} fill="var(--fill-0, #B68CBB)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[9.41%_36.34%_89%_63.53%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.55762 5.17279">
          <path d={svgPaths.p1fea0580} fill="var(--fill-0, #B68CBB)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[9.26%_36.18%_89.75%_63.65%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.15328 3.21736">
          <path d={svgPaths.p22e8e100} fill="var(--fill-0, #B68CBB)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[8.82%_36.06%_88.94%_63.62%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.0656 7.25107">
          <path d={svgPaths.p1a730300} fill="var(--fill-0, #B68CBB)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[8.68%_35.89%_88.21%_63.81%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.88695 10.098">
          <path d={svgPaths.p20f45100} fill="var(--fill-0, #B68CBB)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[9.37%_35.83%_87.61%_63.89%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.66066 9.82361">
          <path d={svgPaths.p21789100} fill="var(--fill-0, #B68CBB)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[10.49%_35.62%_86.84%_63.94%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.56841 8.68554">
          <path d={svgPaths.p96ded00} fill="var(--fill-0, #B68CBB)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[11.99%_35.24%_87.54%_64.56%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.57945 1.51458">
          <path d={svgPaths.p13979ac0} fill="var(--fill-0, #C3CE87)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[9.26%_35.34%_90.07%_64.55%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.48386 2.17262">
          <path d={svgPaths.p1ac69b00} fill="var(--fill-0, #C3CE87)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[11.15%_35.25%_87.8%_64.6%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.86896 3.4106">
          <path d={svgPaths.p32a9e980} fill="var(--fill-0, #C3CE87)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[7.33%_35.45%_91.47%_64.22%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.28874 3.90301">
          <path d={svgPaths.p2eda4280} fill="var(--fill-0, #C3CE87)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[8.63%_35.14%_83.94%_64.35%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.45072 24.1308">
          <path d={svgPaths.p17a53000} fill="var(--fill-0, #C3CE87)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[6.35%_34.99%_83.57%_64.18%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5228 32.7777">
          <path d={svgPaths.p24d7e500} fill="var(--fill-0, #86A687)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[10.99%_35.2%_87.48%_64.5%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.82788 4.96395">
          <path d={svgPaths.pc300c00} fill="var(--fill-0, #86A687)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[8.93%_35.26%_89.52%_64.42%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.11423 5.02313">
          <path d={svgPaths.p16a95780} fill="var(--fill-0, #86A687)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[10.33%_35.2%_88.76%_64.46%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.42488 2.9734">
          <path d={svgPaths.p38d87b00} fill="var(--fill-0, #86A687)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[12.59%_35.22%_86.69%_64.57%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.74463 2.3243">
          <path d={svgPaths.pe708d00} fill="var(--fill-0, #86A687)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[13.39%_35.23%_85.69%_64.63%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.90115 2.96225">
          <path d={svgPaths.pb658f00} fill="var(--fill-0, #86A687)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[14.07%_35.24%_85.45%_64.69%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.926653 1.56589">
          <path d={svgPaths.p2dcd8ea0} fill="var(--fill-0, #86A687)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[9.28%_34.36%_81.69%_64.4%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.8224 29.3496">
          <path d={svgPaths.pf518700} fill="var(--fill-0, #9A4173)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[16.63%_35.28%_82.3%_64.57%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.82699 3.47976">
          <path d={svgPaths.p208d5300} fill="var(--fill-0, #B68CBB)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[16.73%_35.05%_82.72%_64.74%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.76622 1.7902">
          <path d={svgPaths.p185544f0} fill="var(--fill-0, #B68CBB)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[17.32%_34.9%_82.68%_65.09%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.00361791 0.00321872">
          <path d={svgPaths.p3a277f00} fill="var(--fill-0, #B68CBB)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[10.12%_34.47%_83.39%_64.82%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.07202 21.0951">
          <path d={svgPaths.p6bf8700} fill="var(--fill-0, #B68CBB)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[12.14%_34.36%_77.9%_61.67%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50.8126 32.3568">
          <path d={svgPaths.p340e5880} fill="var(--fill-0, #4C352B)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[15.88%_34.85%_79.68%_63.96%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.2583 14.4387">
          <path d={svgPaths.p3505d580} fill="var(--fill-0, #FCF6DE)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[14.34%_36.38%_85.07%_62.06%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9933 1.91164">
          <path d={svgPaths.p329aec20} fill="var(--fill-0, #DFAF62)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[15.62%_36.38%_83.86%_62.06%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9933 1.69303">
          <path d={svgPaths.p12b344a0} fill="var(--fill-0, #DFAF62)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[16.9%_36.38%_82.57%_62.06%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9933 1.69527">
          <path d={svgPaths.p14ffc230} fill="var(--fill-0, #DFAF62)" id="Vector" />
        </svg>
      </div>
      <Group22 />
    </div>
  );
}

function Wireframe() {
  return (
    <div className="bg-white h-[887px] overflow-clip relative shrink-0 w-[1440px]" data-name="Wireframe - 10">
      <div className="absolute flex h-[979px] items-center justify-center left-[-23px] top-[-876px] w-[1500px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
        <div className="-rotate-90 -scale-y-100 flex-none">
          <div className="h-[1500px] relative w-[979px]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 979 1500">
              <path d={svgPaths.p3cc40e80} fill="var(--fill-0, #DAE2B6)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <Frame33 />
      <Layer />
    </div>
  );
}

function Capa1() {
  return (
    <div className="col-1 h-12 ml-0 mt-0 relative row-1 w-21" data-name="Capa_1">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 84 48">
        <g clipPath="url(#clip0_1_1146)" id="Capa_1">
          <path d={svgPaths.p530e700} fill="var(--fill-0, #4C352B)" id="Vector" />
          <path d={svgPaths.p322fda00} fill="var(--fill-0, #4C352B)" id="Vector_2" />
          <path d={svgPaths.p12bb9800} fill="var(--fill-0, #4C352B)" id="Vector_3" />
          <path d={svgPaths.p3be66400} fill="var(--fill-0, #4C352B)" id="Vector_4" />
          <path d={svgPaths.p221ebd00} fill="var(--fill-0, #4C352B)" id="Vector_5" />
          <path d={svgPaths.pbd85100} fill="var(--fill-0, #4C352B)" id="Vector_6" />
        </g>
        <defs>
          <clipPath id="clip0_1_1146">
            <rect fill="white" height="48" width="84" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Group31() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-5.25 mt-8.25 place-items-start relative row-1">
      <Capa1 />
    </div>
  );
}

function Group23() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Group">
      <div className="col-1 h-[122.46px] ml-0 mt-0 relative row-1 w-[125.707px]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 125.707 122.46">
          <path d={svgPaths.p32d2ed80} fill="var(--fill-0, #F5E091)" id="Vector" />
        </svg>
      </div>
      <Group31 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start not-italic relative shrink-0 w-full">
      <p className="font-['Fraunces',serif] font-normal leading-[normal] relative shrink-0 text-brown-800 text-[64px] tracking-[1.92px] w-full">1K</p>
      <p className="font-['Rubik',sans-serif] font-normal leading-[1.68] relative shrink-0 text-brown-500 text-[16px] tracking-[0.48px] w-full">tonnes of CO2e avoided</p>
    </div>
  );
}

function Frame19() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[56px] items-start left-[calc(41.67%+13px)] top-[325px] w-[214px]">
      <Group23 />
      <Frame2 />
    </div>
  );
}

function Capa2() {
  return (
    <div className="col-1 h-[52.471px] ml-0 mt-[14.5px] relative row-1 w-[51.611px]" data-name="Capa_1">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 51.6108 52.471">
        <g clipPath="url(#clip0_1_1007)" id="Capa_1">
          <path d={svgPaths.p2bb16000} fill="var(--fill-0, #4C352B)" id="Vector" />
          <path d={svgPaths.p7a9ca00} fill="var(--fill-0, #4C352B)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_1007">
            <rect fill="white" height="52.471" width="51.6108" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Group32() {
  return (
    <div className="col-1 h-[25.289px] ml-0 mt-0 relative row-1 w-[26.005px]">
      <div className="absolute inset-[-1.19%_-1.15%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26.6048 25.8895">
          <g id="Group 193">
            <path d={svgPaths.pede1d00} fill="var(--fill-0, #4C352B)" id="Vector" stroke="var(--stroke-0, #4C352B)" strokeWidth="0.3" />
            <path d={svgPaths.p2fc47100} fill="var(--fill-0, #4C352B)" id="Vector_2" stroke="var(--stroke-0, #4C352B)" strokeWidth="0.2" />
            <path d={svgPaths.p219d9900} fill="var(--fill-0, #4C352B)" id="Vector_3" stroke="var(--stroke-0, #4C352B)" strokeWidth="0.2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group29() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[12.84px] mt-0 place-items-start relative row-1">
      <Group32 />
    </div>
  );
}

function Group30() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[37.19px] mt-[28.03px] place-items-start relative row-1">
      <Capa2 />
      <Group29 />
    </div>
  );
}

function Group24() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Group">
      <div className="col-1 h-[122.46px] ml-0 mt-0 relative row-1 w-[125.707px]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 125.707 122.46">
          <path d={svgPaths.p32d2ed80} fill="var(--fill-0, #F5E091)" id="Vector" />
        </svg>
      </div>
      <Group30 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start not-italic relative shrink-0 w-full">
      <p className="font-['Fraunces',serif] font-normal leading-[normal] relative shrink-0 text-brown-800 text-[64px] tracking-[1.92px] w-full">920K</p>
      <p className="font-['Rubik',sans-serif] font-normal leading-[1.68] relative shrink-0 text-brown-500 text-[16px] tracking-[0.48px] w-full">KG of food saved</p>
    </div>
  );
}

function Frame20() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[56px] items-start left-[calc(58.33%+19px)] top-[325px] w-[213px]">
      <Group24 />
      <Frame3 />
    </div>
  );
}

function Group25() {
  return (
    <div className="h-[122.46px] relative shrink-0 w-[125.707px]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 125.707 122.46">
        <g id="Group">
          <path d={svgPaths.p32d2ed80} fill="var(--fill-0, #F5E091)" id="Vector" />
          <g clipPath="url(#clip0_1_996)" id="Capa_1">
            <path d={svgPaths.p2db61d80} fill="var(--fill-0, #4C352B)" id="Vector_2" />
            <path d={svgPaths.pdf82980} fill="var(--fill-0, #4C352B)" id="Vector_3" />
            <path d={svgPaths.p37032800} fill="var(--fill-0, #4C352B)" id="Vector_4" />
            <path d={svgPaths.p21c0f480} fill="var(--fill-0, #4C352B)" id="Vector_5" />
            <path d={svgPaths.peb27180} fill="var(--fill-0, #4C352B)" id="Vector_6" />
            <path d={svgPaths.p23cbc880} fill="var(--fill-0, #4C352B)" id="Vector_7" />
            <path d={svgPaths.p7b4bd00} fill="var(--fill-0, #4C352B)" id="Vector_8" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_996">
            <rect fill="white" height="72" transform="translate(36 25)" width="53" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start not-italic relative shrink-0 w-full">
      <p className="font-['Fraunces',serif] font-normal leading-[normal] relative shrink-0 text-brown-800 text-[64px] tracking-[1.92px] w-full">37%</p>
      <p className="font-['Rubik',sans-serif] font-normal leading-[1.68] relative shrink-0 text-brown-500 text-[16px] tracking-[0.48px] w-full">increase in farmers’ incomes</p>
    </div>
  );
}

function Frame21() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[56px] items-start left-[calc(75%+24px)] top-[325px] w-[213px]">
      <Group25 />
      <Frame4 />
    </div>
  );
}

function Group36() {
  return (
    <div className="relative size-full">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1440 40">
        <g id="Group 305">
          <path d={svgPaths.p93f1180} fill="var(--fill-0, #EFF6EF)" id="Subtract" />
          <path d={svgPaths.pd0e0780} fill="var(--fill-0, #EFF6EF)" id="Subtract_2" />
        </g>
      </svg>
    </div>
  );
}

function Frame18() {
  return (
    <div className="bg-[#f9ecbd] h-[771px] overflow-clip relative shrink-0 w-[1440px]">
      <Frame19 />
      <Frame20 />
      <Frame21 />
      <p className="absolute font-['Fraunces',serif] font-normal leading-[1.42] left-[calc(8.33%+3px)] not-italic text-brown-800 text-[32px] top-[325px] tracking-[0.96px] w-[368px]">By keeping food in the human food supply chain, we have an impact on various levels:</p>
      <div className="absolute flex h-[982px] items-center justify-center left-[-12px] top-[-876px] w-[1504px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
        <div className="-rotate-90 -scale-y-100 flex-none">
          <div className="h-[1504px] relative w-[982px]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 982 1504">
              <path d={svgPaths.p10fcfe00} fill="var(--fill-0, white)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[94.81%_0_0_0] items-center justify-center" style={{ containerType: "size" }}>
        <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
          <Group36 />
        </div>
      </div>
    </div>
  );
}

function TaglineWrapper() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Tagline Wrapper">
      <p className="font-['Rubik',sans-serif] font-normal leading-[28px] not-italic relative shrink-0 text-[#b3b3b3] text-[18px] whitespace-nowrap">News Stories</p>
    </div>
  );
}

function Content4() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Content">
      <p className="font-['Fraunces',serif] font-normal leading-[1.2] not-italic relative shrink-0 text-[48px] text-black w-full">Check out our latest News!</p>
    </div>
  );
}

function SectionTitle() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start max-w-3xl min-w-px relative" data-name="Section Title">
      <TaglineWrapper />
      <Content4 />
    </div>
  );
}

function Order6() {
  return (
    <div className="bg-[#1e4a35] content-stretch flex items-start px-[16px] py-[8px] relative rounded-[40px] shrink-0" data-name="order">
      <p className="font-['Rubik',sans-serif] font-normal leading-[1.68] not-italic relative shrink-0 text-[#eee] text-[16px] text-center tracking-[0.48px] whitespace-nowrap">View All</p>
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full" data-name="Title">
      <SectionTitle />
      <Order6 />
    </div>
  );
}

function Info() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Info">
      <p className="font-['Rubik',sans-serif] font-medium leading-[1.5] not-italic relative shrink-0 text-[#1e4a35] text-[14px] whitespace-nowrap">09 Jan 2026</p>
    </div>
  );
}

function Content7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Content">
      <p className="font-['Fraunces',serif] font-normal leading-[32px] not-italic relative shrink-0 text-[#0f251b] text-[24px] w-full">Farm to Feed has published their first Impact Report</p>
    </div>
  );
}

function Content6() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Content">
      <Info />
      <Content7 />
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Button">
      <p className="font-['Rubik',sans-serif] font-normal leading-[1.5] not-italic relative shrink-0 text-[#916f96] text-[16px] whitespace-nowrap">Read more</p>
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="chevron_right">
        <div className="absolute inset-[25.72%_36.66%_25.88%_35.46%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.69159 11.6166">
            <path d={svgPaths.p36daa800} fill="var(--fill-0, #916F96)" id="Vector" stroke="var(--stroke-0, #916F96)" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Content5() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start py-[32px] relative shrink-0 w-full" data-name="Content">
      <Content6 />
      <Button />
    </div>
  );
}

function Card() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative rounded-4xl" data-name="Card">
      <div className="aspect-[405.3333435058594/270] relative shrink-0 w-full" data-name="Placeholder Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPlaceholderImage} />
      </div>
      <Content5 />
    </div>
  );
}

function Info1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Info">
      <p className="font-['Rubik',sans-serif] font-medium leading-[1.5] not-italic relative shrink-0 text-[#1e4a35] text-[14px] whitespace-nowrap">09 Jan 2026</p>
    </div>
  );
}

function Content10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Content">
      <p className="font-['Fraunces',serif] font-normal leading-[32px] not-italic relative shrink-0 text-[#0f251b] text-[24px] w-full">Farm to Feed Wins Global Startup Award and Secures New Investment</p>
    </div>
  );
}

function Content9() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Content">
      <Info1 />
      <Content10 />
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Button">
      <p className="font-['Rubik',sans-serif] font-normal leading-[1.5] not-italic relative shrink-0 text-[#916f96] text-[16px] whitespace-nowrap">Read more</p>
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="chevron_right">
        <div className="absolute inset-[25.72%_36.66%_25.88%_35.46%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.69159 11.6166">
            <path d={svgPaths.p36daa800} fill="var(--fill-0, #916F96)" id="Vector" stroke="var(--stroke-0, #916F96)" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Content8() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start py-[32px] relative shrink-0 w-full" data-name="Content">
      <Content9 />
      <Button1 />
    </div>
  );
}

function Card1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative rounded-4xl" data-name="Card">
      <div className="aspect-[405.3333435058594/270] relative shrink-0 w-full" data-name="Placeholder Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPlaceholderImage1} />
      </div>
      <Content8 />
    </div>
  );
}

function Info2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Info">
      <p className="font-['Rubik',sans-serif] font-medium leading-[1.5] not-italic relative shrink-0 text-[#1e4a35] text-[14px] whitespace-nowrap">09 Jan 2026</p>
    </div>
  );
}

function Content13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Content">
      <p className="font-['Fraunces',serif] font-normal leading-[32px] not-italic relative shrink-0 text-[#0f251b] text-[24px] w-full">Farm to Feed Expands Operations to New Region</p>
    </div>
  );
}

function Content12() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Content">
      <Info2 />
      <Content13 />
    </div>
  );
}

function Button2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Button">
      <p className="font-['Rubik',sans-serif] font-normal leading-[1.5] not-italic relative shrink-0 text-[#916f96] text-[16px] whitespace-nowrap">Read more</p>
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="chevron_right">
        <div className="absolute inset-[25.72%_36.66%_25.88%_35.46%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.69159 11.6166">
            <path d={svgPaths.p36daa800} fill="var(--fill-0, #916F96)" id="Vector" stroke="var(--stroke-0, #916F96)" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Content11() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start py-[32px] relative shrink-0 w-full" data-name="Content">
      <Content12 />
      <Button2 />
    </div>
  );
}

function Card2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative rounded-4xl" data-name="Card">
      <div className="aspect-[405.3333435058594/270] relative shrink-0 w-full" data-name="Placeholder Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPlaceholderImage2} />
      </div>
      <Content11 />
    </div>
  );
}

function Row() {
  return (
    <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full" data-name="Row">
      <Card />
      <Card1 />
      <Card2 />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col gap-[80px] items-start max-w-7xl relative shrink-0 w-full" data-name="Container">
      <Title />
      <Row />
    </div>
  );
}

function Group37() {
  return (
    <div className="absolute inset-[95.35%_0_-0.02%_0]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1440 40">
        <g id="Group 305">
          <path d={svgPaths.paeb3800} fill="var(--fill-0, #1E4A35)" id="Subtract" />
          <path d={svgPaths.p353afe00} fill="var(--fill-0, #1E4A35)" id="Subtract_2" />
        </g>
      </svg>
    </div>
  );
}

function News() {
  return (
    <div className="bg-[#fbfafa] content-stretch flex flex-col gap-[80px] h-[857px] items-center overflow-clip px-[64px] py-[112px] relative shrink-0 w-[1440px]" data-name="News">
      <Container1 />
      <Group37 />
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute h-[56.919px] left-0 top-0 w-[16.705px]" data-name="icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.7045 56.919">
        <g id="icon">
          <path d={svgPaths.p327cfc80} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p37a93280} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p39e4ca80} fill="var(--fill-0, white)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Farm() {
  return (
    <div className="absolute h-[23.963px] left-[20.94px] top-[4.33px] w-[71.124px]" data-name="farm">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 71.1241 23.9628">
        <g id="farm">
          <path d={svgPaths.p14292330} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p14096500} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p2cdc8200} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.p28d95800} fill="var(--fill-0, white)" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function Feed() {
  return (
    <div className="absolute h-[24.417px] left-[46.17px] top-[32.5px] w-[64.778px]" data-name="feed">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64.778 24.4172">
        <g id="feed">
          <path d={svgPaths.p15a67c90} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p1cff6200} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p33c73580} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.p329c2300} fill="var(--fill-0, white)" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function ToUnderline() {
  return (
    <div className="absolute h-[24.364px] left-[21.08px] top-[32.55px] w-[20.999px]" data-name="to + underline">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.9995 24.3642">
        <g id="Group 123">
          <path d={svgPaths.p3bdeac80} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p15288800} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p6f55900} fill="var(--fill-0, white)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function FarmToFeedLogo() {
  return (
    <div className="absolute h-[56.919px] left-[80px] top-[406px] w-[110.949px]" data-name="farm-to-feed-logo">
      <Icon />
      <Farm />
      <Feed />
      <ToUnderline />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start leading-[1.68] not-italic relative shrink-0 w-full">
      <p className="font-['Rubik',sans-serif] font-normal relative shrink-0 text-[20px] text-white tracking-[0.6px] whitespace-nowrap">Quick Actions</p>
      <p className="font-['Rubik',sans-serif] font-light relative shrink-0 text-[#dfeddf] text-[16px] tracking-[0.48px] w-[379px]">Buy or Sell produce that makes sense for your business and the planet</p>
    </div>
  );
}

function Order7() {
  return (
    <div className="bg-[#eff6ef] content-stretch flex items-start px-[24px] py-[12px] relative rounded-[40px] shrink-0" data-name="order">
      <p className="font-['Rubik',sans-serif] font-normal leading-[1.68] not-italic relative shrink-0 text-[#1e4a35] text-[16px] text-center tracking-[0.48px] whitespace-nowrap">Sell With Us</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <Order7 />
    </div>
  );
}

function Order8() {
  return (
    <div className="bg-[#d78228] content-stretch flex items-start px-[24px] py-[12px] relative rounded-[40px] shrink-0" data-name="order">
      <p className="font-['Rubik',sans-serif] font-normal leading-[1.68] not-italic relative shrink-0 text-[#eff6ef] text-[16px] text-center tracking-[0.48px] whitespace-nowrap">Log In</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <Order8 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-start left-[80px] py-[24px] top-[48px] w-[384px]">
      <Frame6 />
      <Frame5 />
      <Frame7 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] h-[75px] items-start leading-[1.68] not-italic relative shrink-0 w-full">
      <p className="font-['Rubik',sans-serif] font-normal relative shrink-0 text-[20px] text-white tracking-[0.6px] whitespace-nowrap">Get more information</p>
      <p className="font-['Rubik',sans-serif] font-light relative shrink-0 text-[#dfeddf] text-[16px] tracking-[0.48px] w-[379px]">Contact us in any of these channels</p>
    </div>
  );
}

function PrimeEnvelope() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="prime:envelope">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="prime:envelope">
          <path d={svgPaths.p21e8d370} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0">
      <PrimeEnvelope />
      <p className="font-['Rubik',sans-serif] font-light leading-[1.68] not-italic relative shrink-0 text-[16px] text-white tracking-[0.48px] whitespace-nowrap">info@farmtofeedkenya.com</p>
    </div>
  );
}

function PrimePhone() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="prime:phone">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="prime:phone">
          <path d={svgPaths.p2a80e180} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
      <PrimePhone />
      <p className="flex-[1_0_0] font-['Rubik',sans-serif] font-light leading-[1.68] min-w-px not-italic relative text-[16px] text-white tracking-[0.48px]">+254 795 851 756</p>
    </div>
  );
}

function PrimeMapMarker() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="prime:map-marker">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="prime:map-marker">
          <path d={svgPaths.p1eac3c40} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p2c253480} fill="var(--fill-0, white)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0">
      <PrimeMapMarker />
      <p className="font-['Rubik',sans-serif] font-light leading-[1.68] not-italic relative shrink-0 text-[16px] text-white tracking-[0.48px] whitespace-nowrap">Tilisi Business Park, Kiambu, Kenya</p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start justify-center relative shrink-0 w-full">
      <Frame11 />
      <Frame12 />
      <Frame13 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-start left-[calc(66.67%-16px)] py-[24px] top-[48px] w-[384px]">
      <Frame9 />
      <Frame10 />
    </div>
  );
}

function Solution1() {
  return (
    <div className="content-stretch flex items-start p-[8px] relative shrink-0" data-name="solution">
      <p className="font-['Rubik',sans-serif] font-normal leading-[1.68] not-italic relative shrink-0 text-[16px] text-center text-white tracking-[0.48px] whitespace-nowrap">Kenyan Buyers</p>
    </div>
  );
}

function AboutUs2() {
  return (
    <div className="content-stretch flex items-center justify-center p-[8px] relative shrink-0" data-name="about-us">
      <p className="font-['Rubik',sans-serif] font-normal leading-[1.68] not-italic relative shrink-0 text-[16px] text-center text-white tracking-[0.48px] whitespace-nowrap">Global Buyers</p>
    </div>
  );
}

function AboutUs3() {
  return (
    <div className="content-stretch flex items-center justify-center p-[8px] relative shrink-0" data-name="about-us">
      <p className="font-['Rubik',sans-serif] font-normal leading-[1.68] not-italic relative shrink-0 text-[16px] text-center text-white tracking-[0.48px] whitespace-nowrap">Careers</p>
    </div>
  );
}

function AboutUs4() {
  return (
    <div className="content-stretch flex items-center justify-center p-[8px] relative shrink-0" data-name="about-us">
      <p className="font-['Rubik',sans-serif] font-normal leading-[1.68] not-italic relative shrink-0 text-[16px] text-center text-white tracking-[0.48px] whitespace-nowrap">Contact Us</p>
    </div>
  );
}

function AboutUs5() {
  return (
    <div className="content-stretch flex items-center justify-center p-[8px] relative shrink-0" data-name="about-us">
      <p className="font-['Rubik',sans-serif] font-normal leading-[1.68] not-italic relative shrink-0 text-[16px] text-center text-white tracking-[0.48px] whitespace-nowrap">FAQs</p>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0">
      <Solution1 />
      <AboutUs2 />
      <AboutUs3 />
      <AboutUs4 />
      <AboutUs5 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-full">
      <p className="font-['Rubik',sans-serif] font-normal leading-[1.68] not-italic relative shrink-0 text-[20px] text-white tracking-[0.6px] whitespace-nowrap">Explore</p>
      <Frame22 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[calc(33.33%+48px)] py-[24px] top-[48px] w-[384px]">
      <Frame15 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="absolute content-stretch flex gap-[32px] items-start left-[80px] top-[552px]">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="facebook">
        <div className="absolute bottom-[8.33%] left-[29.17%] right-1/4 top-[8.33%]" data-name="Icon">
          <div className="absolute inset-[-5%_-9.09%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 22">
              <path d={svgPaths.p2f694ec0} id="Icon" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="instagram">
        <div className="absolute inset-[8.33%]" data-name="Icon">
          <div className="absolute inset-[-5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
              <path d={svgPaths.p37bc6180} id="Icon" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="linkedin">
        <div className="absolute inset-[8.33%_8.33%_12.5%_8.33%]" data-name="Icon">
          <div className="absolute inset-[-5.26%_-5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 21">
              <g id="Icon">
                <path d={svgPaths.p6a8300} stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                <path d="M5 8H1V20H5V8Z" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                <path d={svgPaths.pafef4f0} stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function AboutUs6() {
  return (
    <div className="content-stretch flex items-center justify-center p-[8px] relative shrink-0" data-name="about-us">
      <p className="font-['Rubik',sans-serif] font-normal leading-[1.68] not-italic relative shrink-0 text-[16px] text-center text-white tracking-[0.48px] whitespace-nowrap">Privacy Policy</p>
    </div>
  );
}

function AboutUs7() {
  return (
    <div className="content-stretch flex items-center justify-center p-[8px] relative shrink-0" data-name="about-us">
      <p className="font-['Rubik',sans-serif] font-normal leading-[1.68] not-italic relative shrink-0 text-[16px] text-center text-white tracking-[0.48px] whitespace-pre">{`Cookie  Policy`}</p>
    </div>
  );
}

function Frame24() {
  return (
    <div className="absolute content-stretch flex gap-[24px] items-center left-[calc(33.33%+48px)] top-[542px]">
      <AboutUs6 />
      <AboutUs7 />
    </div>
  );
}

function AboutUs8() {
  return (
    <div className="absolute content-stretch flex items-center justify-end left-[calc(75%+37px)] p-[8px] top-[542px]" data-name="about-us">
      <p className="font-['Rubik',sans-serif] font-normal leading-[1.68] not-italic relative shrink-0 text-[16px] text-right text-white tracking-[0.48px] whitespace-nowrap">©2026 All right reserved</p>
    </div>
  );
}

export default function Home() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="home">
      <Hero />
      <Wireframe1 />
      <Layout />
      <Wireframe />
      <Frame18 />
      <News />
      <div className="bg-[#1e4a35] h-[640px] overflow-clip relative shrink-0 w-[1440px]" data-name="Footer">
        <FarmToFeedLogo />
        <Frame23 />
        <Frame8 />
        <Frame14 />
        <Frame16 />
        <p className="absolute font-['Fraunces',serif] font-normal leading-[normal] left-[calc(33.33%+49px)] not-italic text-[#f5e091] text-[56px] top-[410px] tracking-[1.68px] w-[800px]">Shaping the Future of Food</p>
        <Frame24 />
        <AboutUs8 />
      </div>
    </div>
  );
}