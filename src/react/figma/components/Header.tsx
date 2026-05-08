import { Link } from "./Link";
import { Button } from "./Button";
import { ContentContainer } from "./layout/ContentContainer";
import { typeStyles } from "./layout/typography";
import svgPaths from "../imports/Home/svg-6p5pyqd5kw";

const navTextClass = `${typeStyles.nav} not-italic relative shrink-0 text-black text-center whitespace-nowrap`;
const navTriggerClass =
	"flex gap-[2px] items-center justify-center p-2 relative shrink-0 cursor-pointer";
const dropdownItemClass = `block px-4 py-2 ${typeStyles.dropdown} text-black hover:bg-[#fefcf5] transition-colors`;
const mobileLinkClass = `${typeStyles.nav} block rounded-2xl px-4 py-3 text-left text-[#0f251b] transition-colors hover:bg-green-50`;
const mobileSubLinkClass = `${typeStyles.dropdown} block rounded-xl px-4 py-2 text-left text-green-500 transition-colors hover:bg-green-50`;

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
				data-mobile-menu-line="top"
				className={`absolute left-1/2 top-1/2 h-0.5 w-5 -translate-x-1/2 rounded-full bg-green-500 transition-transform duration-200 ${isOpen ? "-translate-y-1/2 rotate-45" : "-translate-y-[7px]"}`}
			/>
			<span
				data-mobile-menu-line="middle"
				className={`absolute left-1/2 top-1/2 h-0.5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-500 transition-opacity duration-200 ${isOpen ? "opacity-0" : "opacity-100"}`}
			/>
			<span
				data-mobile-menu-line="bottom"
				className={`absolute left-1/2 top-1/2 h-0.5 w-5 -translate-x-1/2 rounded-full bg-green-500 transition-transform duration-200 ${isOpen ? "-translate-y-1/2 -rotate-45" : "translate-y-[7px]"}`}
			/>
		</span>
	);
}

function AboutUs() {
	return (
		<div
			aria-controls="desktop-buy-menu"
			aria-expanded="false"
			className={`${navTriggerClass} group`}
			data-name="about-us"
			role="button"
			tabIndex={0}>
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
			<div
				className="absolute top-full left-0 mt-1 invisible opacity-0 pointer-events-none bg-white rounded-lg shadow-lg border border-gray-200 py-2 min-w-[200px] z-50 transition-opacity duration-150 group-hover:visible group-hover:opacity-100 group-hover:pointer-events-auto group-focus-within:visible group-focus-within:opacity-100 group-focus-within:pointer-events-auto"
				id="desktop-buy-menu">
				<Link to="/kenyan-buyers" className={dropdownItemClass}>
					Kenyan Buyers
				</Link>
				<Link to="/global-buys" className={dropdownItemClass}>
					Global Buyers
				</Link>
			</div>
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
	return (
		<div
			aria-controls="desktop-about-menu"
			aria-expanded="false"
			className={`${navTriggerClass} group`}
			data-name="about-us"
			role="button"
			tabIndex={0}>
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
			<div
				className="absolute top-full left-0 mt-1 invisible opacity-0 pointer-events-none bg-white rounded-lg shadow-lg border border-gray-200 py-2 min-w-[200px] z-50 transition-opacity duration-150 group-hover:visible group-hover:opacity-100 group-hover:pointer-events-auto group-focus-within:visible group-focus-within:opacity-100 group-focus-within:pointer-events-auto"
				id="desktop-about-menu">
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

function MobileMenu() {
	return (
		<nav
			aria-label="Mobile navigation"
			className="hidden lg:hidden mt-2 overflow-hidden rounded-[28px] border border-green-100 bg-[#fefcf5] p-3 shadow-xl shadow-green-900/10"
			data-mobile-header-menu
			id="mobile-header-menu">
			<div className="flex flex-col gap-1">
				<button
					aria-controls="mobile-buy-menu"
					aria-expanded="false"
					className={`${mobileLinkClass} flex w-full items-center justify-between`}
					data-mobile-submenu-toggle="mobile-buy-menu"
					type="button">
					<span>Buy from us</span>
					<ChevronIcon />
				</button>
				<div
					className="hidden ml-3 flex-col border-l border-green-100 pl-3"
					id="mobile-buy-menu">
					<Link
						to="/kenyan-buyers"
						className={mobileSubLinkClass}>
						Kenyan Buyers
					</Link>
					<Link
						to="/global-buys"
						className={mobileSubLinkClass}>
						Global Buyers
					</Link>
				</div>
				<Link
					to="/sell-with-us"
					className={mobileLinkClass}>
					Sell with us
				</Link>
				<Link
					to="/our-impact"
					className={mobileLinkClass}>
					Our Impact
				</Link>
				<button
					aria-controls="mobile-about-menu"
					aria-expanded="false"
					className={`${mobileLinkClass} flex w-full items-center justify-between`}
					data-mobile-submenu-toggle="mobile-about-menu"
					type="button">
					<span>About us</span>
					<ChevronIcon />
				</button>
				<div
					className="hidden ml-3 flex-col border-l border-green-100 pl-3"
					id="mobile-about-menu">
					<Link
						to="/our-story"
						className={mobileSubLinkClass}>
						Our Story
					</Link>
					<Link
						to="/our-team"
						className={mobileSubLinkClass}>
						Our Team
					</Link>
					<Link
						to="/news-events"
						className={mobileSubLinkClass}>
						News and Events
					</Link>
				</div>
				<Button
					href="https://shop.farmtofeedkenya.com/auth/login"
					rel="noreferrer"
					target="_blank"
					variant="secondary"
					size="sm"
					className="mt-3 w-full text-[#eee]">
					Log In
				</Button>
			</div>
		</nav>
	);
}

export function Header() {
	return (
		<div
			className="absolute left-0 right-0 top-[24px] z-50 md:top-[32px]"
			data-ftf-header
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
						aria-expanded="false"
						aria-label="Open navigation"
						className="lg:hidden inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-green-50 text-green-500 transition-colors hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-[#fefcf5]"
						data-mobile-menu-toggle
						type="button">
						<MenuIcon isOpen={false} />
					</button>
				</div>
				<MobileMenu />
			</ContentContainer>
			<script
				dangerouslySetInnerHTML={{
					__html: `
(() => {
  const initHeader = (header) => {
    if (header.dataset.ftfHeaderReady === "true") return;
    header.dataset.ftfHeaderReady = "true";

    const menuToggle = header.querySelector("[data-mobile-menu-toggle]");
    const menu = header.querySelector("[data-mobile-header-menu]");
    const topLine = header.querySelector('[data-mobile-menu-line="top"]');
    const middleLine = header.querySelector('[data-mobile-menu-line="middle"]');
    const bottomLine = header.querySelector('[data-mobile-menu-line="bottom"]');

    const setMenuOpen = (isOpen) => {
      if (!menuToggle || !menu) return;
      menuToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
      menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
      menu.classList.toggle("hidden", !isOpen);

      topLine?.classList.toggle("-translate-y-[7px]", !isOpen);
      topLine?.classList.toggle("-translate-y-1/2", isOpen);
      topLine?.classList.toggle("rotate-45", isOpen);

      middleLine?.classList.toggle("opacity-100", !isOpen);
      middleLine?.classList.toggle("opacity-0", isOpen);

      bottomLine?.classList.toggle("translate-y-[7px]", !isOpen);
      bottomLine?.classList.toggle("-translate-y-1/2", isOpen);
      bottomLine?.classList.toggle("-rotate-45", isOpen);
    };

    menuToggle?.addEventListener("click", () => {
      const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
      setMenuOpen(!isOpen);
    });

    header.querySelectorAll("[data-mobile-submenu-toggle]").forEach((toggle) => {
      const menuId = toggle.getAttribute("data-mobile-submenu-toggle");
      const submenu = menuId ? header.querySelector("#" + CSS.escape(menuId)) : null;
      const chevron = toggle.querySelector(".transition-transform");

      toggle.addEventListener("click", () => {
        const isOpen = toggle.getAttribute("aria-expanded") === "true";
        toggle.setAttribute("aria-expanded", isOpen ? "false" : "true");
        submenu?.classList.toggle("hidden", isOpen);
        submenu?.classList.toggle("flex", !isOpen);
        chevron?.classList.toggle("rotate-180", !isOpen);
      });
    });

    menu?.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => setMenuOpen(false));
    });
  };

  const initAllHeaders = () => {
    document.querySelectorAll("[data-ftf-header]").forEach(initHeader);
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initAllHeaders, { once: true });
  } else {
    initAllHeaders();
  }
})();
`,
				}}
			/>
		</div>
	);
}
