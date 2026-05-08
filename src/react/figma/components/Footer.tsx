import { Link } from "./Link";
import { Button } from "./Button";
import { ContentContainer } from "./layout/ContentContainer";
import { typeStyles } from "./layout/typography";
import svgPaths from "../imports/Home/svg-6p5pyqd5kw";

const footerColumnClass = "flex flex-col gap-4 items-start relative w-full max-w-[384px]";
const footerGroupClass = "flex flex-col gap-[14px] items-start not-italic relative shrink-0 w-full";
const footerHeadingClass = `${typeStyles.bodyLead} relative shrink-0 text-white whitespace-nowrap`;
const footerCopyClass = `${typeStyles.body} font-light relative shrink-0 text-[#dfeddf] w-full max-w-[379px]`;
const contactRowClass = "flex gap-4 items-start relative shrink-0 w-full";
const footerLinkWrapperClass = "flex items-center justify-center p-2 relative shrink-0";
const footerLinkTextClass = `${typeStyles.button} not-italic relative shrink-0 text-center text-white whitespace-nowrap`;
const footerIconClass = "relative shrink-0 size-6";

const exploreLinks = [
  { label: "Kenyan Buyers", to: "/kenyan-buyers" },
  { label: "Global Buyers", to: "/global-buys" },
  { label: "Careers", to: "/careers" },
  { label: "Contact Us", to: "/contact-us" },
  { label: "FAQs", to: "/faqs" },
];

const socialLinks = {
  facebook: "https://www.facebook.com/farmtofeedkenya/",
  instagram: "https://instagram.com/farm_to_feed_kenya?igshid=1gymo74ypgrj0",
  linkedin: "https://www.linkedin.com/company/farm-to-feed-kenya/",
};

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
    <div className="relative h-[56.919px] w-[110.949px]" data-name="farm-to-feed-logo">
      <Icon />
      <Farm />
      <Feed />
      <ToUnderline />
    </div>
  );
}

function Frame6() {
  return (
    <div className={footerGroupClass}>
      <p className={footerHeadingClass}>Quick Actions</p>
      <p className={footerCopyClass}>Buy or Sell produce that makes sense for your business and the planet</p>
    </div>
  );
}

function Order7() {
  return (
    <Button
      href="/sell-with-us"
      variant="none"
      size="lg"
      className="relative shrink-0 bg-[#eff6ef] text-green-500"
      data-name="order">
      Sell With Us
    </Button>
  );
}

function Frame5() {
  return (
    <div className="flex items-center relative shrink-0 w-full">
      <Order7 />
    </div>
  );
}

function Order8() {
  return (
    <Button
      data-name="order"
      href="https://shop.farmtofeedkenya.com/auth/login"
      rel="noreferrer"
      target="_blank"
      variant="secondary"
      size="lg"
      className="relative shrink-0 text-[#eff6ef]">
      Log In
    </Button>
  );
}

function Frame7() {
  return (
    <div className="flex items-center relative shrink-0 w-full">
      <Order8 />
    </div>
  );
}

function Frame23() {
  return (
    <div className={footerColumnClass}>
      <Frame6 />
      <Frame5 />
      <Frame7 />
    </div>
  );
}

function Frame9() {
  return (
    <div className={footerGroupClass}>
      <p className={footerHeadingClass}>Get more information</p>
      <p className={footerCopyClass}>Contact us in any of these channels</p>
    </div>
  );
}

function PrimeEnvelope() {
  return (
    <div className={footerIconClass} data-name="prime:envelope">
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
    <div className={contactRowClass}>
      <PrimeEnvelope />
      <a
        className={`${typeStyles.body} font-light not-italic relative text-white break-words`}
        href="mailto:info@farmtofeedkenya.com">
        info@farmtofeedkenya.com
      </a>
    </div>
  );
}

function PrimePhone() {
  return (
    <div className={footerIconClass} data-name="prime:phone">
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
    <div className={contactRowClass}>
      <PrimePhone />
      <a
        className={`flex-[1_0_0] ${typeStyles.body} font-light min-w-px not-italic relative text-white`}
        href="tel:+254795851756">
        +254 795 851 756
      </a>
    </div>
  );
}

function PrimeMapMarker() {
  return (
    <div className={footerIconClass} data-name="prime:map-marker">
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
    <div className={contactRowClass}>
      <PrimeMapMarker />
      <p className={`${typeStyles.body} font-light not-italic relative text-white`}>Tilisi Business Park, Kiambu, Kenya</p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="flex flex-col gap-6 items-start justify-center relative shrink-0 w-full">
      <Frame11 />
      <Frame12 />
      <Frame13 />
    </div>
  );
}

function Frame8() {
  return (
    <div className={footerColumnClass}>
      <Frame9 />
      <Frame10 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="flex flex-col items-start justify-center relative shrink-0">
      {exploreLinks.map((link) => (
        <Link
          className={footerLinkWrapperClass}
          data-name="footer-link"
          key={link.to}
          to={link.to}>
          <p className={footerLinkTextClass}>{link.label}</p>
        </Link>
      ))}
    </div>
  );
}

function Frame15() {
  return (
    <div className="flex flex-col gap-[14px] items-start relative shrink-0 w-full">
      <p className={footerHeadingClass}>Explore</p>
      <Frame22 />
    </div>
  );
}

function Frame14() {
  return (
    <div className={footerColumnClass}>
      <Frame15 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="flex gap-8 items-start relative">
      <a
        aria-label="Farm to Feed on Facebook"
        className="overflow-clip relative shrink-0 size-6"
        data-name="facebook"
        href={socialLinks.facebook}
        rel="noreferrer"
        target="_blank">
        <div className="absolute bottom-[8.33%] left-[29.17%] right-1/4 top-[8.33%]" data-name="Icon">
          <div className="absolute inset-[-5%_-9.09%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 22">
              <path d={svgPaths.p2f694ec0} id="Icon" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </a>
      <a
        aria-label="Farm to Feed on Instagram"
        className="overflow-clip relative shrink-0 size-6"
        data-name="instagram"
        href={socialLinks.instagram}
        rel="noreferrer"
        target="_blank">
        <div className="absolute inset-[8.33%]" data-name="Icon">
          <div className="absolute inset-[-5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
              <path d={svgPaths.p37bc6180} id="Icon" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </a>
      <a
        aria-label="Farm to Feed on LinkedIn"
        className="overflow-clip relative shrink-0 size-6"
        data-name="linkedin"
        href={socialLinks.linkedin}
        rel="noreferrer"
        target="_blank">
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
      </a>
    </div>
  );
}

function AboutUs6() {
  return (
    <div className={footerLinkWrapperClass} data-name="about-us">
      <p className={footerLinkTextClass}>Privacy Policy</p>
    </div>
  );
}

function AboutUs7() {
  return (
    <div className={footerLinkWrapperClass} data-name="about-us">
      <p className={`${footerLinkTextClass} whitespace-pre`}>{`Cookie  Policy`}</p>
    </div>
  );
}

function Frame24() {
  return (
    <div className="flex gap-6 items-center relative">
      <AboutUs6 />
      <AboutUs7 />
    </div>
  );
}

function AboutUs8() {
  return (
    <div className="flex items-center justify-end p-2 relative" data-name="about-us">
      <p className={`${footerLinkTextClass} text-right`}>&copy;2026 All right reserved</p>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="bg-green-500 overflow-hidden relative shrink-0 w-full" data-name="Footer">
      <ContentContainer size="wide" className="py-12 md:py-16 lg:py-20">
        <div className="grid gap-10 md:grid-cols-3 md:gap-8 lg:grid-cols-[minmax(260px,1fr)_minmax(220px,0.85fr)_minmax(360px,1fr)] lg:gap-16">
          <Frame23 />
          <Frame14 />
          <Frame8 />
        </div>
        <div className="mt-16 grid gap-x-8 gap-y-10 md:grid-cols-[220px_minmax(0,1fr)] md:items-end lg:mt-20 lg:grid-cols-[minmax(260px,1fr)_minmax(220px,0.85fr)_minmax(360px,1fr)] lg:gap-x-16">
          <div className="flex items-start">
            <FarmToFeedLogo />
          </div>
          <p className={`${typeStyles.footerTagline} not-italic text-[#f5e091] md:col-start-2 lg:col-span-2 lg:col-start-2 lg:self-center`}>
            Shaping the Future of Food
          </p>
          <div className="flex items-center md:col-start-1">
            <Frame16 />
          </div>
          <div className="flex items-center md:col-start-2 lg:col-start-2">
            <Frame24 />
          </div>
          <div className="flex items-center md:col-span-2 md:justify-start lg:col-span-1 lg:col-start-3 lg:justify-end">
            <AboutUs8 />
          </div>
        </div>
      </ContentContainer>
    </footer>
  );
}
