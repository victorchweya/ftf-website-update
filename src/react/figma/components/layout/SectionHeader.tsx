import type { ReactNode } from "react";
import { cx } from "./ContentContainer";

type Align = "left" | "center";

export function SectionHeader({
	actions,
	align = "left",
	className,
	description,
	eyebrow,
	title,
}: {
	actions?: ReactNode;
	align?: Align;
	className?: string;
	description?: ReactNode;
	eyebrow?: ReactNode;
	title: ReactNode;
}) {
	const isCenter = align === "center";

	return (
		<div
			className={cx(
				"flex flex-col gap-4",
				isCenter && "mx-auto items-center text-center",
				className,
			)}>
			{eyebrow ? (
				<p className="font-['Rubik',sans-serif] text-sm font-medium leading-normal tracking-wide text-[#747c50]">
					{eyebrow}
				</p>
			) : null}
			<h1 className="font-['Fraunces',serif] text-4xl font-normal leading-normal tracking-wide text-[#0f251b] md:text-5xl lg:text-6xl">
				{title}
			</h1>
			{description ? (
				<p className="font-['Rubik',sans-serif] text-base font-normal leading-[1.68] tracking-wide text-[#1e4a35] md:text-xl">
					{description}
				</p>
			) : null}
			{actions}
		</div>
	);
}
