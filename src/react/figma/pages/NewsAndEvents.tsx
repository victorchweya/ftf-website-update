import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { SectionShell } from "../components/layout/SectionShell";
import { sectionSpacing } from "../components/layout/spacing";
import { typeStyles } from "../components/layout/typography";
import imgPlaceholderImage from "../../../assets/figma/2dcd35f0969168b49576839a28be093481c42f9f.png?url";
import imgPlaceholderImage1 from "../../../assets/figma/df46db7e24c63bd9580267e4b92a177fae0edc68.png?url";
import imgPlaceholderImage2 from "../../../assets/figma/456b5ca63fec37944e95e90951a499a07680e2bd.png?url";
import * as HomeSvgs from "../imports/Home/home-inline-svgs";

type NewsEvent = {
	date: string;
	image: string;
	title: string;
	href: string;
};

const newsEvents: NewsEvent[] = [
	{
		date: "09 Jan 2026",
		image: imgPlaceholderImage,
		title: "Farm to Feed has published their first Impact Report",
		href: "/news-events",
	},
	{
		date: "09 Jan 2026",
		image: imgPlaceholderImage1,
		title: "Farm to Feed Wins Global Startup Award and Secures New Investment",
		href: "/news-events",
	},
	{
		date: "09 Jan 2026",
		image: imgPlaceholderImage2,
		title: "Farm to Feed Expands Operations to New Region",
		href: "/news-events",
	},
];

export default function NewsAndEvents() {
	return (
		<div className="relative w-full bg-yellow-100">
			<Header />
			<main>
				<SectionShell
					className={`bg-yellow-100 ${sectionSpacing.default}`}
					containerClassName="pt-24"
					size="wide"
					spacing="none">
					<div className="flex flex-col gap-16 lg:gap-[88px] items-start max-w-[1280px] relative shrink-0 w-full">
						<h1
							className={`${typeStyles.heroTitleLarge} max-w-[720px] relative shrink-0 text-green-900`}>
							Read the latest from Farm to Feed
						</h1>
						<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 relative shrink-0 w-full">
							{newsEvents.map((item) => (
								<article
									key={item.title}
									className="flex flex-col items-start min-w-px overflow-clip relative rounded-[32px]">
									<div className="aspect-[405/270] relative shrink-0 w-full">
										<img
											alt={item.title}
											className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
											src={item.image}
										/>
									</div>
									<div className="flex flex-col gap-6 items-start py-6 md:py-[32px] relative shrink-0 w-full">
										<div className="flex flex-col gap-4 items-start relative shrink-0 w-full">
											<p
												className={`${typeStyles.caption} not-italic relative shrink-0 text-green-500 whitespace-nowrap`}>
												{item.date}
											</p>
											<h2
												className={`${typeStyles.cardTitleSmall} not-italic relative shrink-0 text-[#0f251b] md:text-2xl w-full`}>
												{item.title}
											</h2>
										</div>
										<a
											className="flex gap-2 items-center justify-center relative shrink-0"
											href={item.href}>
											<span
												className={`${typeStyles.body} leading-normal not-italic relative shrink-0 text-[#916f96] whitespace-nowrap`}>
												Read more
											</span>
											<span className="overflow-clip relative shrink-0 size-6">
												<span className="absolute inset-[25.72%_36.66%_25.88%_35.46%]">
													<HomeSvgs.NewsSvg01 />
												</span>
											</span>
										</a>
									</div>
								</article>
							))}
						</div>
					</div>
				</SectionShell>
			</main>
			<Footer />
		</div>
	);
}
