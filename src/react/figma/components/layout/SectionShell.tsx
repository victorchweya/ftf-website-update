import type { ReactNode } from "react";
import { ContentContainer, cx } from "./ContentContainer";

type ContainerSize = "narrow" | "default" | "wide";

export function SectionShell({
	children,
	className,
	containerClassName,
	decorative,
	size = "wide",
}: {
	children: ReactNode;
	className?: string;
	containerClassName?: string;
	decorative?: ReactNode;
	size?: ContainerSize;
}) {
	return (
		<section className={cx("relative w-full overflow-clip", className)}>
			{decorative}
			<ContentContainer className={containerClassName} size={size}>
				{children}
			</ContentContainer>
		</section>
	);
}
