import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { SectionShell } from "../components/layout/SectionShell";
import { typeStyles } from "../components/layout/typography";

const careerOpenings: Array<{
	title: string;
	location: string;
	href: string;
}> = [];

export default function Careers() {
	return (
		<div className="bg-white flex flex-col items-start relative w-full">
			<Header />
			<main className="w-full">
				<SectionShell
					className="bg-[#fefcf5]"
					size="wide"
					spacing="heroCompact">
						<div className="max-w-[760px]">
							<p className={`${typeStyles.eyebrow} mb-5 text-orange-500`}>
								Careers
							</p>
							<h1 className={`${typeStyles.heroTitle} text-[#0f251b]`}>
								Join the team reshaping food systems
							</h1>
							<p className={`${typeStyles.bodyLarge} mt-8 max-w-[620px] text-green-500`}>
								Explore open roles and learn how to join Farm to Feed as we build a more resilient, less wasteful fresh produce supply chain.
							</p>
						</div>
				</SectionShell>
				{careerOpenings.length === 0 ? null : (
					<SectionShell className="bg-white" size="wide" spacing="default">
							<div className="grid gap-6 md:grid-cols-2">
								{careerOpenings.map((opening) => (
									<article
										className="border border-[#dfeddf] p-8 rounded-lg"
										key={opening.title}>
										<h2 className={`${typeStyles.cardTitle} text-[#0f251b]`}>
											{opening.title}
										</h2>
										<p className={`${typeStyles.body} mt-3 text-green-500`}>
											{opening.location}
										</p>
										<a
											className={`${typeStyles.button} mt-6 inline-block text-green-500`}
											href={opening.href}>
											View role
										</a>
									</article>
								))}
							</div>
					</SectionShell>
				)}
			</main>
			<Footer />
		</div>
	);
}
