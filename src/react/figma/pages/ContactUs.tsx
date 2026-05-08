import * as ContactUsSvgs from "../imports/ContactUs/contactUs-inline-svgs";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { SectionHeader } from "../components/layout/SectionHeader";
import { SectionShell } from "../components/layout/SectionShell";
import svgPaths from "../imports/ContactUs-1/svg-n26o6nsh2k";
import imgMap from "../../../assets/figma/768034251e290c5f148f0125d9e404698150a7ed.png?url";
import imgPegmanOffscreen2X from "../../../assets/figma/747a27fe416ebfaf57b25beae190a98036e77d0e.png?url";
import contactBottomLandscape from "../imports/ContactUs/contact-bg-02.svg?url";
import { typeStyles } from "../components/layout/typography";
const phoneContact = {
	title: "Phone no.",
	helper: "Call us or send a WhatsApp message to",
	links: ["+254 795851756"],
};
const inquiryContacts = [
	{
		helper: "For general inquiries, send an email to",
		links: ["info@farmtofeedkenya.com"],
	},
	{
		helper: "For local purchases, send an email  or call us",
		links: ["sales@farmtofeedkenya.com", "+254 795851756"],
	},
	{
		helper: "For exports, send an email to",
		links: ["exports@farmtofeedkenya.com"],
	},
	{
		helper: "For farmers, reach out via phone or whatsapp",
		links: ["+254 723 740 537"],
	},
];
export default function ContactUs() {
	return (
		<div
			className="bg-yellow-100 flex flex-col items-start relative w-full"
			data-name="Contact Us">
			{/* Contact */}
			<div
				className="bg-yellow-100 min-h-[800px] overflow-clip relative rounded-bl-[40px] rounded-br-[40px] shrink-0 w-full"
				data-name="Contact">
				<Header />
				<div className="absolute inset-[0_0_69.41%_0]">
					<ContactUsSvgs.ContactUsSvg01 />
				</div>
				<div className="absolute flex h-[360px] items-center justify-center left-[-88px] top-[760px] w-[162px] opacity-40 md:h-[480px] md:left-[24px] md:top-[760px] md:w-[216px] md:opacity-70 lg:h-[589px] lg:left-[80px] lg:top-[698px] lg:w-[265px] lg:opacity-100">
					<div className="-scale-y-100 flex-none rotate-180">
						<div
							className="h-[589px] relative w-[265px]"
							data-name="Capa_1">
							<ContactUsSvgs.ContactUsSvg02 />
						</div>
					</div>
				</div>
				<div className="absolute inset-x-0 bottom-0 w-full overflow-hidden">
					<div className="relative bottom-0 left-0 aspect-[1440/158] w-[760px] md:w-[1100px] lg:w-full">
						<img
							alt=""
							className="block size-full object-contain object-left-bottom"
							src={contactBottomLandscape}
						/>
					</div>
				</div>
				<div className="absolute h-[140px] left-[-48px] top-[128px] w-[143px] opacity-45 md:h-[200px] md:left-[72px] md:top-[144.34px] md:w-[204px] md:opacity-70 lg:h-[244.47px] lg:left-[138.87px] lg:w-[249.332px] lg:opacity-100">
					<ContactUsSvgs.ContactUsSvg04 />
				</div>
				<SectionShell
					containerClassName="grid gap-[72px] lg:grid-cols-[minmax(0,1fr)_minmax(420px,592px)] pt-56 pb-80"
					size="wide"
					spacing="none">
					<div className="flex flex-col gap-16 md:gap-[118px] lg:pl-[120px] xl:pl-[160px]">
						<SectionHeader
							className="max-w-[664px]"
							description="Our team works round the clock to respond to all incoming queries."
							title="Contact us"
						/>
						<div
							className="flex flex-col gap-10 items-start relative w-full max-w-[520px] lg:max-w-[320px]"
							data-name="Contact details">
							<div className="flex flex-col gap-2 items-start relative shrink-0 w-full">
								<p
									className={`${typeStyles.body} font-medium leading-contact relative shrink-0 text-[#0f251b] w-full`}>
									{phoneContact.title}
								</p>
								<div className="flex flex-col gap-2 items-start relative shrink-0 w-full">
									<p
										className={`${typeStyles.body} relative shrink-0 text-[#8c8c8c] w-full`}>
										{phoneContact.helper}
									</p>
									{phoneContact.links.map((link) => (
										<div className="flex gap-2 items-center justify-center relative shrink-0">
											<p
												className={`${typeStyles.body} font-medium leading-contact relative shrink-0 text-green-500 break-words`}>
												{link}
											</p>
										</div>
									))}
								</div>
							</div>
							<div className="flex flex-col gap-4 items-start relative shrink-0 w-full">
								<p
									className={`${typeStyles.body} font-medium leading-contact relative shrink-0 text-[#0f251b] w-full`}>
									General inquiries
								</p>
								{inquiryContacts.map((contact) => (
									<div className="flex flex-col gap-2 items-start relative shrink-0 w-full">
										<p
											className={`${typeStyles.body} relative shrink-0 text-[#8c8c8c] w-full`}>
											{contact.helper}
										</p>
										{contact.links.map((link) => (
											<div className="flex gap-2 items-center justify-center relative shrink-0">
												<p
													className={`${typeStyles.body} font-medium leading-contact relative shrink-0 text-green-500 break-words`}>
													{link}
												</p>
											</div>
										))}
									</div>
								))}
							</div>
						</div>
					</div>
					<div className="relative z-10 min-h-[360px] w-full overflow-hidden rounded-[30px] bg-white shadow-[0_24px_80px_rgba(15,37,27,0.12)] md:min-h-[460px] lg:min-h-[560px]">
						<iframe
							allowFullScreen
							className="absolute inset-0 size-full border-0"
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
							src="https://www.google.com/maps?q=tilisi+logistics+park&output=embed"
							title="Map showing Tilisi Logistics Park"
						/>
					</div>
				</SectionShell>
			</div>
			{/* Footer */}
			<Footer />
		</div>
	);
}
