import { Link } from "./Link";
import { Button } from "./Button";
import { useEffect, useRef, useState } from "react";
import { ContentContainer } from "./layout/ContentContainer";
import { typeStyles } from "./layout/typography";
import svgPaths from "../imports/Home/svg-6p5pyqd5kw";

const DROPDOWN_DELAY_MS = 160;
const navTextClass = `${typeStyles.nav} not-italic relative shrink-0 text-black text-center whitespace-nowrap`;
const navTriggerClass =
	"flex gap-[2px] items-center justify-center p-2 relative shrink-0 cursor-pointer";
const dropdownItemClass = `block px-4 py-2 ${typeStyles.dropdown} text-black hover:bg-[#fefcf5] transition-colors`;
const mobileLinkClass = `${typeStyles.nav} block rounded-2xl px-4 py-3 text-left text-[#0f251b] transition-colors hover:bg-green-50`;
const mobileSubLinkClass = `${typeStyles.dropdown} block rounded-xl px-4 py-2 text-left text-green-500 transition-colors hover:bg-green-50`;

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
		<div
			className="h-[22px] relative shrink-0 w-[150px] sm:h-[28px] sm:w-[191.825px]"
			data-name="Group">
			<svg
				className="absolute block inset-0 size-full"
				fill="none"
				preserveAspectRatio="none"
				viewBox="0 0 191.825 28">
				<g id="Group">
					<path
						d={svgPaths.p28a9e600}
						fill="var(--fill-0, #D78228)"
						id="Vector"
					/>
					<g id="Group_2">
						<path
							d={svgPaths.p37f90d80}
							fill="var(--fill-0, #1E4A35)"
							id="Vector_2"
						/>
						<path
							d={svgPaths.p58cea30}
							fill="var(--fill-0, #1E4A35)"
							id="Vector_3"
						/>
						<path
							d={svgPaths.p3f498b00}
							fill="var(--fill-0, #1E4A35)"
							id="Vector_4"
						/>
						<path
							d={svgPaths.p3e62fe80}
							fill="var(--fill-0, #1E4A35)"
							id="Vector_5"
						/>
					</g>
					<g id="Group_3">
						<path
							d={svgPaths.p2ad99b00}
							fill="var(--fill-0, #1E4A35)"
							id="Vector_6"
						/>
						<path
							d={svgPaths.p27a70e00}
							fill="var(--fill-0, #1E4A35)"
							id="Vector_7"
						/>
						<path
							d={svgPaths.p2e3d2848}
							fill="var(--fill-0, #1E4A35)"
							id="Vector_8"
						/>
						<path
							d={svgPaths.pafe1b00}
							fill="var(--fill-0, #1E4A35)"
							id="Vector_9"
						/>
					</g>
					<g id="Group_4">
						<path
							d={svgPaths.p342b9a80}
							fill="var(--fill-0, #1E4A35)"
							id="Vector_10"
						/>
						<path
							d={svgPaths.p1e055500}
							fill="var(--fill-0, #1E4A35)"
							id="Vector_11"
						/>
					</g>
				</g>
			</svg>
		</div>
	);
}

function ChevronIcon({ isOpen }: { isOpen?: boolean }) {
	return (
		<span
			className={`relative size-5 shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
			aria-hidden="true">
			<svg
				className="absolute inset-0 size-full"
				fill="none"
				viewBox="0 0 20 20">
				<path
					d="M5 7.5L10 12.5L15 7.5"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
				/>
			</svg>
		</span>
	);
}

function MenuIcon({ isOpen }: { isOpen: boolean }) {
	return (
		<span className="relative block size-6" aria-hidden="true">
			<span
				className={`absolute left-1/2 top-1/2 h-0.5 w-5 -translate-x-1/2 rounded-full bg-green-500 transition-transform duration-200 ${isOpen ? "-translate-y-1/2 rotate-45" : "-translate-y-[7px]"}`}
			/>
			<span
				className={`absolute left-1/2 top-1/2 h-0.5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-500 transition-opacity duration-200 ${isOpen ? "opacity-0" : "opacity-100"}`}
			/>
			<span
				className={`absolute left-1/2 top-1/2 h-0.5 w-5 -translate-x-1/2 rounded-full bg-green-500 transition-transform duration-200 ${isOpen ? "-translate-y-1/2 -rotate-45" : "translate-y-[7px]"}`}
			/>
		</span>
	);
}

function AboutUs() {
	const { closeDropdown, isOpen, openDropdown } = useDropdownDelay();

	return (
		<div
			className={navTriggerClass}
			data-name="about-us"
			onMouseEnter={openDropdown}
			onMouseLeave={closeDropdown}>
			<p className={navTextClass}>Buy from us</p>
			<div
				className="overflow-clip relative shrink-0 size-5"
				data-name="chevron-down">
				<div
					className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]"
					data-name="Icon">
					<div className="absolute inset-[-20%_-10%]">
						<svg
							className="block size-full"
							fill="none"
							preserveAspectRatio="none"
							viewBox="0 0 12 7">
							<path
								d="M1 1L6 6L11 1"
								id="Icon"
								stroke="var(--stroke-0, black)"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
							/>
						</svg>
					</div>
				</div>
			</div>
			{isOpen && (
				<div className="absolute top-full left-0 mt-1 bg-white rounded-lg shadow-lg border border-gray-200 py-2 min-w-[200px] z-50">
					<Link to="/kenyan-buyers" className={dropdownItemClass}>
						Kenyan Buyers
					</Link>
					<Link to="/global-buys" className={dropdownItemClass}>
						Global Buyers
					</Link>
				</div>
			)}
		</div>
	);
}

function Sell() {
	return (
		<Link
			to="/sell-with-us"
			className="flex items-start p-2 relative shrink-0"
			data-name="sell">
			<p className={navTextClass}> Sell with us</p>
		</Link>
	);
}

function Solution() {
	return (
		<Link
			to="/our-impact"
			className="flex items-start p-2 relative shrink-0"
			data-name="solution">
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
			onMouseLeave={closeDropdown}>
			<p className={navTextClass}>About us</p>
			<div
				className="overflow-clip relative shrink-0 size-5"
				data-name="chevron-down">
				<div
					className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]"
					data-name="Icon">
					<div className="absolute inset-[-20%_-10%]">
						<svg
							className="block size-full"
							fill="none"
							preserveAspectRatio="none"
							viewBox="0 0 12 7">
							<path
								d="M1 1L6 6L11 1"
								id="Icon"
								stroke="var(--stroke-0, black)"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
							/>
						</svg>
					</div>
				</div>
			</div>
			{isOpen && (
				<div className="absolute top-full left-0 mt-1 bg-white rounded-lg shadow-lg border border-gray-200 py-2 min-w-[200px] z-50">
					<Link to="/our-story" className={dropdownItemClass}>
						Our Story
					</Link>
					<Link to="/our-team" className={dropdownItemClass}>
						Our Team
					</Link>
					<Link to="/news-events" className={dropdownItemClass}>
						News and Events
					</Link>
				</div>
			)}
		</div>
	);
}

function Order() {
	return (
		<Button
			href="https://shop.farmtofeedkenya.com/auth/login"
			rel="noreferrer"
			target="_blank"
			variant="secondary"
			size="sm"
			className="relative shrink-0 text-[#eee]"
			data-name="order">
			Log In
		</Button>
	);
}

function Frame() {
	return (
		<div className="hidden lg:flex gap-[25px] items-center relative shrink-0">
			<AboutUs />
			<Sell />
			<Solution />
			<AboutUs1 />
			<Order />
		</div>
	);
}

function MobileMenu({
	closeMenu,
	isAboutOpen,
	isBuyOpen,
	setIsAboutOpen,
	setIsBuyOpen,
}: {
	closeMenu: () => void;
	isAboutOpen: boolean;
	isBuyOpen: boolean;
	setIsAboutOpen: (isOpen: boolean) => void;
	setIsBuyOpen: (isOpen: boolean) => void;
}) {
	return (
		<nav
			aria-label="Mobile navigation"
			className="lg:hidden mt-2 overflow-hidden rounded-[28px] border border-green-100 bg-[#fefcf5] p-3 shadow-xl shadow-green-900/10"
			id="mobile-header-menu">
			<div className="flex flex-col gap-1">
				<button
					aria-controls="mobile-buy-menu"
					aria-expanded={isBuyOpen}
					className={`${mobileLinkClass} flex w-full items-center justify-between`}
					onClick={() => setIsBuyOpen(!isBuyOpen)}
					type="button">
					<span>Buy from us</span>
					<ChevronIcon isOpen={isBuyOpen} />
				</button>
				{isBuyOpen ? (
					<div
						className="ml-3 flex flex-col border-l border-green-100 pl-3"
						id="mobile-buy-menu">
						<Link
							to="/kenyan-buyers"
							className={mobileSubLinkClass}
							onClick={closeMenu}>
							Kenyan Buyers
						</Link>
						<Link
							to="/global-buys"
							className={mobileSubLinkClass}
							onClick={closeMenu}>
							Global Buyers
						</Link>
					</div>
				) : null}
				<Link
					to="/sell-with-us"
					className={mobileLinkClass}
					onClick={closeMenu}>
					Sell with us
				</Link>
				<Link
					to="/our-impact"
					className={mobileLinkClass}
					onClick={closeMenu}>
					Our Impact
				</Link>
				<button
					aria-controls="mobile-about-menu"
					aria-expanded={isAboutOpen}
					className={`${mobileLinkClass} flex w-full items-center justify-between`}
					onClick={() => setIsAboutOpen(!isAboutOpen)}
					type="button">
					<span>About us</span>
					<ChevronIcon isOpen={isAboutOpen} />
				</button>
				{isAboutOpen ? (
					<div
						className="ml-3 flex flex-col border-l border-green-100 pl-3"
						id="mobile-about-menu">
						<Link
							to="/our-story"
							className={mobileSubLinkClass}
							onClick={closeMenu}>
							Our Story
						</Link>
						<Link
							to="/our-team"
							className={mobileSubLinkClass}
							onClick={closeMenu}>
							Our Team
						</Link>
						<Link
							to="/news-events"
							className={mobileSubLinkClass}
							onClick={closeMenu}>
							News and Events
						</Link>
					</div>
				) : null}
				<Button
					href="https://shop.farmtofeedkenya.com/auth/login"
					rel="noreferrer"
					target="_blank"
					variant="secondary"
					size="sm"
					className="mt-3 w-full text-[#eee]"
					onClick={closeMenu}>
					Log In
				</Button>
			</div>
		</nav>
	);
}

export function Header() {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [isMobileBuyOpen, setIsMobileBuyOpen] = useState(false);
	const [isMobileAboutOpen, setIsMobileAboutOpen] = useState(false);
	const closeMobileMenu = () => {
		setIsMobileMenuOpen(false);
		setIsMobileBuyOpen(false);
		setIsMobileAboutOpen(false);
	};

	return (
		<div
			className="absolute left-0 right-0 top-[24px] z-50 md:top-[32px]"
			data-name="header">
			<ContentContainer size="wide" className="px-4 sm:px-6 lg:px-10">
				<div
					className="bg-[#fefcf5] flex items-center justify-between px-[18px] py-[16px] relative rounded-[54px] shrink-0 w-full sm:px-[32px] sm:py-[20px]"
					data-name="header">
					<Link to="/">
						<Group />
					</Link>
					<Frame />
					<button
						aria-controls="mobile-header-menu"
						aria-expanded={isMobileMenuOpen}
						aria-label={isMobileMenuOpen ? "Close navigation" : "Open navigation"}
						className="lg:hidden inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-green-50 text-green-500 transition-colors hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-[#fefcf5]"
						onClick={() => setIsMobileMenuOpen((isOpen) => !isOpen)}
						type="button">
						<MenuIcon isOpen={isMobileMenuOpen} />
					</button>
				</div>
				{isMobileMenuOpen ? (
					<MobileMenu
						closeMenu={closeMobileMenu}
						isAboutOpen={isMobileAboutOpen}
						isBuyOpen={isMobileBuyOpen}
						setIsAboutOpen={setIsMobileAboutOpen}
						setIsBuyOpen={setIsMobileBuyOpen}
					/>
				) : null}
			</ContentContainer>
		</div>
	);
}
