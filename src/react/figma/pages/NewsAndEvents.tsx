import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { SectionShell } from "../components/layout/SectionShell";
import { typeStyles } from "../components/layout/typography";

const newsEvents: Array<{
	title: string;
	excerpt: string;
	href: string;
}> = [];

export default function NewsAndEvents() {
	return (
		<div className="relative w-full">
			<Header />
			<main>
				<SectionShell className="bg-white" size="wide" spacing="heroCompact">
						<div className="max-w-[760px]">
							<h1 className={`${typeStyles.heroTitle} mb-6 text-green-500`}>
								News and Events
							</h1>
							<p className={`${typeStyles.bodyLarge} mb-8 text-gray-700`}>
								Stay updated with our latest news and upcoming events.
							</p>
						</div>
						{newsEvents.length === 0 ? (
							<div className="bg-[#fefcf5] p-8 rounded-lg">
								<p className={`${typeStyles.body} text-gray-600`}>
									Content coming soon...
								</p>
							</div>
						) : (
							<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
								{newsEvents.map((item) => (
									<article className="bg-[#fefcf5] p-8 rounded-lg" key={item.title}>
										<h2 className={`${typeStyles.cardTitle} text-green-500`}>
											{item.title}
										</h2>
										<p className={`${typeStyles.body} mt-4 text-gray-600`}>
											{item.excerpt}
										</p>
										<a
											className={`${typeStyles.button} mt-6 inline-block text-green-500`}
											href={item.href}>
											Read more
										</a>
									</article>
								))}
							</div>
						)}
				</SectionShell>
			</main>
			<Footer />
		</div>
	);
}
