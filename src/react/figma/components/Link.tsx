import type { AnchorHTMLAttributes, ReactNode } from "react";

type LinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
	to: string;
	children?: ReactNode;
};

export function Link({ to, children, ...props }: LinkProps) {
	return (
		<a href={to} {...props}>
			{children}
		</a>
	);
}
