import * as ContactUsSvgs from "../imports/ContactUs/contactUs-inline-svgs";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { SectionHeader } from "../components/layout/SectionHeader";
import { SectionShell } from "../components/layout/SectionShell";
import svgPaths from "../imports/ContactUs-1/svg-n26o6nsh2k";
import imgMap from "../../../assets/figma/768034251e290c5f148f0125d9e404698150a7ed.png?url";
import imgPegmanOffscreen2X from "../../../assets/figma/747a27fe416ebfaf57b25beae190a98036e77d0e.png?url";
const phoneContact = {
  title: "Phone no.",
  helper: "Call us or send a WhatsApp message to",
  links: ["+254 795851756"]
};
const inquiryContacts = [{
  helper: "For general inquiries, send an email to",
  links: ["info@farmtofeedkenya.com"]
}, {
  helper: "For local purchases, send an email  or call us",
  links: ["sales@farmtofeedkenya.com", "+254 795851756"]
}, {
  helper: "For exports, send an email to",
  links: ["exports@farmtofeedkenya.com"]
}, {
  helper: "For farmers, reach out via phone or whatsapp",
  links: ["+254 723 740 537"]
}];
export default function ContactUs() {
  return <div className="bg-white content-stretch flex flex-col items-start relative w-full" data-name="Contact Us">
      {/* Contact */}<div className="bg-[#fefcf5] min-h-[800px] md:min-h-[1200px] lg:min-h-[1498px] overflow-clip relative rounded-bl-[40px] rounded-br-[40px] shrink-0 w-full" data-name="Contact">
      <Header />
      <div className="absolute inset-[0_0_69.41%_0]">
      <ContactUsSvgs.ContactUsSvg01 />
    </div>
      <div className="absolute flex h-[589px] items-center justify-center left-[80px] top-[698px] w-[265px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="h-[589px] relative w-[265px]" data-name="Capa_1">
      <ContactUsSvgs.ContactUsSvg02 />
    </div>
        </div>
      </div>
      <div className="absolute inset-x-0 top-[1259px] h-[312px] w-full">
      <div className="absolute inset-0">
        <ContactUsSvgs.ContactUsSvg03 />
      </div>
    </div>
      <div className="absolute h-[244.47px] left-[138.87px] top-[144.34px] w-[249.332px]">
      <ContactUsSvgs.ContactUsSvg04 />
    </div>
      <SectionShell className="pt-[246px] pb-[260px]" containerClassName="grid gap-[72px] lg:grid-cols-[minmax(0,1fr)_minmax(420px,592px)]" size="wide">
        <div className="flex flex-col gap-[118px]">
          <SectionHeader className="max-w-[664px]" description="Our team works round the clock to respond to all incoming queries." title="Contact us" />
          <div className="content-stretch flex flex-col gap-[40px] items-start relative w-full max-w-[320px]" data-name="Contact details">
      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
        <p className="font-['Rubik',sans-serif] font-medium leading-[30px] relative shrink-0 text-[#0f251b] text-[16px] w-full">
          {phoneContact.title}
        </p>
        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <p className="font-['Rubik',sans-serif] font-normal leading-[24px] min-w-full relative shrink-0 text-[#8c8c8c] text-[16px] w-[min-content]">
        {phoneContact.helper}
      </p>
      {phoneContact.links.map(link => <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0">
      <p className="font-['Rubik',sans-serif] font-medium leading-[30px] relative shrink-0 text-[#1e4a35] text-[16px] whitespace-nowrap">
        {link}
      </p>
    </div>)}
    </div>
      </div>
      <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
        <p className="font-['Rubik',sans-serif] font-medium leading-[30px] relative shrink-0 text-[#0f251b] text-[16px] w-full">
          General inquiries
        </p>
        {inquiryContacts.map(contact => <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <p className="font-['Rubik',sans-serif] font-normal leading-[24px] min-w-full relative shrink-0 text-[#8c8c8c] text-[16px] w-[min-content]">
        {contact.helper}
      </p>
      {contact.links.map(link => <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0">
      <p className="font-['Rubik',sans-serif] font-medium leading-[30px] relative shrink-0 text-[#1e4a35] text-[16px] whitespace-nowrap">
        {link}
      </p>
    </div>)}
    </div>)}
      </div>
    </div>
        </div>
        <div className="pt-0 lg:pt-[267px]">
          <div className="content-stretch flex flex-col gap-[64px] h-[462px] items-start relative w-full" data-name="Content">
      <div className="bg-white flex-[1_0_0] min-h-[360px] md:min-h-[462px] overflow-clip relative w-full" data-name="_Google maps mockup">
      <div className="absolute inset-[-64.07%_-68.92%_-43.72%_-47.3%]" data-name="Map">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgMap} />
      </div>
      <div className="absolute bottom-[2px] h-[26px] left-[6px] w-[66px]" data-name="Google logo">
      <ContactUsSvgs.ContactUsSvg05 />
    </div>
      <div className="absolute right-[8px] size-[28px] top-[69px]" data-name="Street view button">
      <div className="absolute bg-white inset-0 rounded-[2px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.2)]" data-name="Rectangle" />
      <div className="absolute inset-[14.29%_28.57%]" data-name="pegman-offscreen-2x">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPegmanOffscreen2X} />
      </div>
    </div>
      <div className="absolute h-[53px] right-[8px] top-[8px] w-[28px]" data-name="Zoom control buttons">
      <div className="absolute inset-[-3.77%_-10.71%_-7.55%_-10.71%]">
        <ContactUsSvgs.ContactUsSvg06 />
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
              <ContactUsSvgs.ContactUsSvg07 />
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
        <ContactUsSvgs.ContactUsSvg08 />
      </div>
    </div>
    </div>
    </div>
        </div>
      </SectionShell>
    </div>
{/* Footer */}<Footer />
    </div>;
}
