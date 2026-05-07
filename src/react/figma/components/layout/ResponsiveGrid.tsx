import type { ReactNode } from "react";
import { cx } from "./ContentContainer";

type GridColumns = 2 | 3 | 4;

const columnClasses: Record<GridColumns, string> = {
	2: "md:grid-cols-2",
	3: "md:grid-cols-2 lg:grid-cols-3",
	4: "sm:grid-cols-2 lg:grid-cols-4",
};

export function ResponsiveGrid({
	children,
	className,
	columns = 3,
}: {
	children: ReactNode;
	className?: string;
	columns?: GridColumns;
}) {
	return (
		<div className={cx("grid grid-cols-1 gap-8", columnClasses[columns], className)}>
			{children}
		</div>
	);
}
