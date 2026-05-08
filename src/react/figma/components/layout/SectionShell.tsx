import type { ReactNode } from "react";
import { ContentContainer, cx } from "./ContentContainer";
import { sectionSpacing, type SectionSpacing } from "./spacing";

type ContainerSize = "narrow" | "default" | "wide";

export function SectionShell({
	children,
	className,
	containerClassName,
	decorative,
	size = "wide",
	spacing = "none",
}: {
	children: ReactNode;
	className?: string;
	containerClassName?: string;
	decorative?: ReactNode;
	size?: ContainerSize;
	spacing?: SectionSpacing;
}) {
	return (
		<section
			className={cx(
				"relative w-full overflow-clip",
				sectionSpacing[spacing],
				className,
			)}>
			{decorative}
			<ContentContainer className={containerClassName} size={size}>
				{children}
			</ContentContainer>
		</section>
	);
}
