import type { ReactNode } from "react";
import { cx } from "./ContentContainer";
import { typeStyles } from "./typography";

type Align = "left" | "center";
type TitleSize = "section" | "large" | "hero";
type DescriptionSize = "body" | "large" | "lead";

const titleClasses: Record<TitleSize, string> = {
	section: typeStyles.sectionTitle,
	large: typeStyles.sectionTitleLarge,
	hero: typeStyles.heroTitle,
};

const descriptionClasses: Record<DescriptionSize, string> = {
	body: typeStyles.body,
	large: typeStyles.bodyLarge,
	lead: typeStyles.bodyLead,
};

export function SectionHeader({
	actions,
	align = "left",
	className,
	description,
	descriptionSize = "lead",
	eyebrow,
	title,
	titleSize = "hero",
}: {
	actions?: ReactNode;
	align?: Align;
	className?: string;
	description?: ReactNode;
	descriptionSize?: DescriptionSize;
	eyebrow?: ReactNode;
	title: ReactNode;
	titleSize?: TitleSize;
}) {
	const isCenter = align === "center";

	return (
		<div
			className={cx(
				"flex flex-col gap-4",
				isCenter && "mx-auto items-center text-center",
				className,
			)}>
			{eyebrow ? <p className={typeStyles.eyebrow}>{eyebrow}</p> : null}
			<h1 className={cx(titleClasses[titleSize], "text-[#0f251b]")}>
				{title}
			</h1>
			{description ? (
				<p className={cx(descriptionClasses[descriptionSize], "text-green-500")}>
					{description}
				</p>
			) : null}
			{actions}
		</div>
	);
}
