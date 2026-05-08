import { Link } from "./Link";
import { useEffect, useRef, useState } from "react";
import { ContentContainer } from "./layout/ContentContainer";
import { typeStyles } from "./layout/typography";
import svgPaths from "../imports/Home/svg-6p5pyqd5kw";

const DROPDOWN_DELAY_MS = 160;
const navTextClass = `${typeStyles.nav} not-italic relative shrink-0 text-black text-center whitespace-nowrap`;
const navTriggerClass =
  "flex gap-[2px] items-center justify-center p-2 relative shrink-0 cursor-pointer";
const dropdownItemClass = `block px-4 py-2 ${typeStyles.dropdown} text-black hover:bg-[#fefcf5] transition-colors`;
const pillLinkClass = "hidden md:flex items-start px-4 py-2 relative rounded-[40px] shrink-0";
const pillTextClass = `${typeStyles.button} not-italic relative shrink-0 text-black text-center whitespace-nowrap`;
const loginTextClass = `${typeStyles.button} not-italic relative shrink-0 text-[#eee] text-center whitespace-nowrap`;

function useDropdownDelay() {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearDropdownTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  const openDropdown = () => {
    clearDropdownTimeout();
    timeoutRef.current = setTimeout(() => {
      setIsOpen(true);
    }, DROPDOWN_DELAY_MS);
  };

  const closeDropdown = () => {
    clearDropdownTimeout();
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, DROPDOWN_DELAY_MS);
  };

  useEffect(() => clearDropdownTimeout, []);

  return { closeDropdown, isOpen, openDropdown };
}

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
  const { closeDropdown, isOpen, openDropdown } = useDropdownDelay();

  return (
    <div
      className={navTriggerClass}
      data-name="about-us"
      onMouseEnter={openDropdown}
      onMouseLeave={closeDropdown}
    >
      <p className={navTextClass}>Buy from us</p>
      <div className="overflow-clip relative shrink-0 size-5" data-name="chevron-down">
        <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Icon">
          <div className="absolute inset-[-20%_-10%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 7">
              <path d="M1 1L6 6L11 1" id="Icon" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="absolute top-full left-0 mt-1 bg-white rounded-lg shadow-lg border border-gray-200 py-2 min-w-[200px] z-50">
          <Link
            to="/kenyan-buyers"
            className={dropdownItemClass}
          >
            Kenyan Buyers
          </Link>
          <Link
            to="/global-buys"
            className={dropdownItemClass}
          >
            Global Buyers
          </Link>
        </div>
      )}
    </div>
  );
}

function Sell() {
  return (
    <Link to="/sell-with-us" className={pillLinkClass} data-name="sell">
      <p className={pillTextClass}>Sell with us</p>
    </Link>
  );
}

function Solution() {
  return (
    <Link to="/our-impact" className="flex items-start p-2 relative shrink-0" data-name="solution">
      <p className={navTextClass}>Our Impact</p>
    </Link>
  );
}

function AboutUs1() {
  const { closeDropdown, isOpen, openDropdown } = useDropdownDelay();

  return (
    <div
      className={navTriggerClass}
      data-name="about-us"
      onMouseEnter={openDropdown}
      onMouseLeave={closeDropdown}
    >
      <p className={navTextClass}>About us</p>
      <div className="overflow-clip relative shrink-0 size-5" data-name="chevron-down">
        <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Icon">
          <div className="absolute inset-[-20%_-10%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 7">
              <path d="M1 1L6 6L11 1" id="Icon" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="absolute top-full left-0 mt-1 bg-white rounded-lg shadow-lg border border-gray-200 py-2 min-w-[200px] z-50">
          <Link
            to="/our-story"
            className={dropdownItemClass}
          >
            Our Story
          </Link>
          <Link
            to="/our-team"
            className={dropdownItemClass}
          >
            Our Team
          </Link>
          <Link
            to="/news-events"
            className={dropdownItemClass}
          >
            News and Events
          </Link>
        </div>
      )}
    </div>
  );
}

function Order() {
  return (
    <div className="bg-orange-500 flex items-start px-4 py-2 relative rounded-[40px] shrink-0" data-name="order">
      <p className={loginTextClass}>Log In</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="hidden md:flex gap-[25px] items-center relative shrink-0">
      <AboutUs />
      <Sell />
      <Solution />
      <AboutUs1 />
      <Order />
    </div>
  );
}

export function Header() {
  return (
    <div className="absolute left-0 right-0 top-[32px] z-30" data-name="header">
      <ContentContainer size="wide" className="px-4 sm:px-6 lg:px-10">
        <div className="bg-[#fefcf5] flex items-center justify-between px-[20px] py-[20px] relative rounded-[54px] shrink-0 w-full sm:px-[32px]" data-name="header">
        <Link to="/">
          <Group />
        </Link>
        <Frame />
      </div>
      </ContentContainer>
    </div>
  );
}
