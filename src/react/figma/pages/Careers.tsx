import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Button } from "../components/Button";
import { SectionShell } from "../components/layout/SectionShell";
import { typeStyles } from "../components/layout/typography";

type CareerOpening = {
	description?: string;
	position: string;
	location: string;
	contract: string;
	link: string;
	slug?: string;
};

const careerOpenings: CareerOpening[] = [
	{
		position: "Head of Finance",
		location: "Nairobi",
		contract: "Full time",
		link: "https://delta40.bamboohr.com/careers/110?source=aWQ9MjI%3D",
	},
];

function CareersBackground() {
	return (
		<svg
			aria-hidden="true"
			className="absolute right-0 top-28 hidden h-auto w-[42vw] min-w-[520px] max-w-[760px] translate-x-1/4 lg:block"
			fill="none"
			viewBox="0 0 1440 506"
			xmlns="http://www.w3.org/2000/svg">
			<g clipPath="url(#careers-bg-clip)">
				<path
					d="M1321.88 313.569C1291.8 305.286 1284.71 329.369 1321.52 324.454C1437.35 331.773 1554.43 334.337 1669.76 324.882C1724.89 313.943 1781.72 312.72 1836.99 299.369C1843.34 252.783 1828.43 268.411 1807.22 271.902C1645.27 286.555 1483.63 297.777 1321.88 313.569Z"
					fill="#C2CE86"
				/>
				<path
					d="M1281.25 208.568C1244.47 217.72 1258.38 193.443 1258.72 277.218L1260.36 299.551C1274.19 297.927 1288.08 297.267 1301.98 297.576C1322.72 290.193 1347.07 299.75 1367.62 289.151C1512.2 281.805 1657.47 270.186 1800.9 249.914C1798.94 238.933 1799.35 217.603 1800.96 206.824C1722.66 208.432 1644.21 199.651 1565.81 193.573C1471.39 195.941 1374.68 185.6 1281.25 208.568Z"
					fill="#DAE2B6"
				/>
				<path
					d="M1778.55 335.5C1611.34 364.009 1444.07 362.747 1276.05 353.66C1281.38 371.018 1266.21 427.464 1291.57 418.336C1313.02 426.219 1336.53 426.902 1358.16 427.678C1506.98 452.759 1658.54 440.656 1807.99 462.292C1819.57 459.668 1825.71 471.335 1822.09 443.321C1825.02 426.054 1821.51 403.076 1818.18 386.198C1818.64 366.9 1825.89 318.956 1804.36 332.479C1795.72 329.751 1786.65 330.811 1778.55 335.5Z"
					fill="#DAE2B6"
				/>
				<path
					d="M1326.94 122.205C1308.87 122.518 1293.25 116.773 1296.11 144.792C1304.17 177.696 1289.25 187.485 1312.34 180.081C1467.63 149.582 1624.27 172.976 1780.12 174.772C1800.13 177.474 1822.07 180.751 1842.08 178.144C1843.55 133.786 1848.88 131.307 1817.16 134.715C1806.07 132.263 1790.7 131.654 1779.54 130.61C1629.2 106.795 1477.68 114.837 1326.94 122.205Z"
					fill="#C2CE86"
				/>
				<path
					d="M1769.93 51.2691C1788 51.857 1803.71 46.3502 1800.38 74.3224C1791.77 107.099 1806.52 117.114 1783.56 109.36C1628.8 76.5023 1471.79 97.5102 1315.93 96.9348C1295.87 99.3321 1273.88 102.275 1253.92 99.3644C1253.19 54.989 1247.9 52.4299 1279.56 56.32C1290.7 54.0368 1306.07 53.6617 1317.25 52.788C1467.97 31.2632 1619.33 41.6086 1769.93 51.2691Z"
					fill="#DAE2B6"
				/>
			</g>
			<defs>
				<clipPath id="careers-bg-clip">
					<rect fill="white" height="506" width="1440" />
				</clipPath>
			</defs>
		</svg>
	);
}

type CareersProps = {
	careerOpenings?: CareerOpening[];
};

export default function Careers({ careerOpenings: cmsCareerOpenings }: CareersProps) {
	const displayCareerOpenings = cmsCareerOpenings?.length
		? cmsCareerOpenings
		: careerOpenings;

	return (
		<div className="bg-brown-50 flex flex-col items-start relative w-full">
			<Header />
			<main className="w-full">
				<SectionShell
					className="bg-brown-50 overflow-hidden rounded-bl-[40px] rounded-br-[40px]"
					containerClassName="relative pt-44 pb-20 md:pt-52 md:pb-28 lg:pt-56 lg:pb-36"
					decorative={<CareersBackground />}
					size="wide"
					spacing="none">
					<div className="grid gap-10 lg:grid-cols-[minmax(0,420px)_minmax(0,560px)] lg:items-start lg:justify-between">
						<div>
							<p
								className={`${typeStyles.eyebrow} mb-5 text-orange-500`}>
								Careers
							</p>
							<h1
								className={`${typeStyles.heroTitleLarge} text-[#0f251b]`}>
								Browse opportunities
							</h1>
						</div>
						<p
							className={`${typeStyles.bodyLead} max-w-[560px] text-green-500`}>
							At Farm to Feed, we value honesty, transparency, and
							a can-do attitude that leads to meaningful impact.
							We are tackling a big problem and we know we cannot
							do it alone. We work best in a team and we always
							love odd ideas.
						</p>
					</div>
				</SectionShell>

				<SectionShell size="wide" spacing="none" className="pb-24">
					<div className="flex flex-col gap-8">
						<p className={`${typeStyles.bodyLead} text-green-900`}>
							List of openings
						</p>

						{displayCareerOpenings.length ? (
							<div className="overflow-x-auto">
								<table className="w-full min-w-[720px] border-separate border-spacing-0 text-left">
									<thead>
										<tr className="border-b border-[#dfeddf]">
											<th
												className={`${typeStyles.caption} border-b border-[#dfeddf] px-0 py-4 text-green-500`}>
												Position
											</th>
											<th
												className={`${typeStyles.caption} border-b border-[#dfeddf] px-6 py-4 text-green-500`}>
												Location
											</th>
											<th
												className={`${typeStyles.caption} border-b border-[#dfeddf] px-6 py-4 text-green-500`}>
												Contract Type
											</th>
											<th className="border-b border-[#dfeddf] px-0 py-4">
												<span className="sr-only">
													Actions
												</span>
											</th>
										</tr>
									</thead>
									<tbody>
										{displayCareerOpenings.map((opening) => (
											<tr
												key={opening.slug ?? opening.position}
												className="group">
												<td
													className={`${typeStyles.cardTitleSmall} border-b border-[#dfeddf] py-7 pr-6 text-[#0f251b]`}>
													{opening.position}
												</td>
												<td
													className={`${typeStyles.body} border-b border-[#dfeddf] px-6 py-7 text-green-500`}>
													{opening.location}
												</td>
												<td
													className={`${typeStyles.body} border-b border-[#dfeddf] px-6 py-7 text-green-500`}>
													{opening.contract}
												</td>
												<td className="border-b border-[#dfeddf] py-7 pl-6 text-right">
													<Button
														href={opening.link}
														rel="noreferrer"
														target="_blank"
														size="lg">
														Apply
													</Button>
												</td>
											</tr>
										))}
									</tbody>
								</table>
							</div>
						) : (
							<div className="rounded-[30px] bg-[#fefcf5] p-8 text-center">
								<p
									className={`${typeStyles.body} text-green-500`}>
									No openings at the moment. Please check back
									later.
								</p>
							</div>
						)}
					</div>
				</SectionShell>
			</main>
			<Footer />
		</div>
	);
}
