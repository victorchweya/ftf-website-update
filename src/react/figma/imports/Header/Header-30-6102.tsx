import svgPaths from "./svg-quzorfvnn2";

export default function Header({ className }: { className?: string }) {
  return (
    <div className={className || "content-stretch flex items-start relative"} data-name="header">
      <div className="bg-[#fcf6de] content-stretch flex items-center justify-between px-[32px] py-[20px] relative rounded-[54px] shrink-0 w-[1280px]" data-name="header">
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
        <div className="content-stretch flex gap-[25px] items-center relative shrink-0">
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
          <div className="content-stretch flex items-start px-[16px] py-[8px] relative rounded-[40px] shrink-0" data-name="sell">
            <p className="font-['Rubik',sans-serif] font-normal leading-[1.68] not-italic relative shrink-0 text-[16px] text-black text-center tracking-[0.48px] whitespace-nowrap">Sell with us</p>
          </div>
          <div className="content-stretch flex items-start p-[8px] relative shrink-0" data-name="solution">
            <p className="font-['Rubik',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-black text-center whitespace-nowrap">Our Impact</p>
          </div>
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
          <div className="bg-[#d78228] content-stretch flex items-start px-[16px] py-[8px] relative rounded-[40px] shrink-0" data-name="order">
            <p className="font-['Rubik',sans-serif] font-normal leading-[1.68] not-italic relative shrink-0 text-[#eee] text-[16px] text-center tracking-[0.48px] whitespace-nowrap">Log In</p>
          </div>
        </div>
      </div>
    </div>
  );
}