import type {
	AnchorHTMLAttributes,
	ButtonHTMLAttributes,
	ReactNode,
} from "react";

type ButtonVariant = "primary" | "secondary" | "muted" | "none";
type ButtonSize = "xxs" | "xs" | "sm" | "base" | "md" | "lg" | "xl";
type ButtonGap = "xs" | "sm" | "base" | "md" | "lg";

const primaryClass = [
	"text-white",
	"bg-green-500",
	"hover:bg-green-600",
	"focus:ring-green-500",
];

const secondaryClass = [
	"text-white",
	"bg-orange-500",
	"hover:bg-orange-400",
	"focus:ring-orange-500",
];

const mutedClass = [
	"text-neutral-900",
	"bg-neutral-100",
	"hover:bg-neutral-200",
	"focus:ring-neutral-100",
];

const sizes: Record<ButtonSize, string[]> = {
	xxs: ["h-8", "px-3", "text-xs"],
	xs: ["h-9", "px-3", "text-xs"],
	sm: ["h-10", "px-4", "text-xs"],
	base: ["h-11", "px-4", "text-sm"],
	md: ["h-12", "px-4", "text-base"],
	lg: ["h-14", "px-5", "text-lg"],
	xl: ["h-16", "px-6", "text-lg"],
};

const iconSizes: Record<ButtonSize, string[]> = {
	xxs: ["w-8", "h-8", "text-xs"],
	xs: ["w-9", "h-9", "text-xs"],
	sm: ["w-10", "h-10", "text-sm"],
	base: ["w-11", "h-11", "text-base"],
	md: ["w-12", "h-12", "text-base"],
	lg: ["w-14", "h-14", "text-lg"],
	xl: ["w-16", "h-16", "text-lg"],
};

const gapMap: Record<ButtonGap, string[]> = {
	xs: ["gap-2"],
	sm: ["gap-4"],
	base: ["gap-8"],
	md: ["gap-10"],
	lg: ["gap-12"],
};

const variantClass: Record<ButtonVariant, string[]> = {
	primary: primaryClass,
	secondary: secondaryClass,
	muted: mutedClass,
	none: [],
};

const baseClass = [
	"inline-flex",
	"items-center",
	"justify-center",
	"gap-2",
	"font-regular",
	"transition-all",
	"rounded-full",
	"duration-300",
	"focus:ring-2",
	"focus:ring-offset-1",
	"focus:ring-offset-white",
];

function cx(...classes: Array<string | false | null | undefined>) {
	return classes.filter(Boolean).join(" ");
}

type CommonButtonProps = {
	children?: ReactNode;
	className?: string;
	gap?: ButtonGap;
	iconOnly?: boolean;
	leftIcon?: ReactNode;
	onlyIconSize?: ButtonSize;
	rightIcon?: ReactNode;
	size?: ButtonSize;
	variant?: ButtonVariant;
};

type ButtonAsAnchorProps = CommonButtonProps &
	AnchorHTMLAttributes<HTMLAnchorElement> & {
		href: string;
	};

type ButtonAsButtonProps = CommonButtonProps &
	ButtonHTMLAttributes<HTMLButtonElement> & {
		href?: undefined;
	};

type ButtonProps = ButtonAsAnchorProps | ButtonAsButtonProps;

export function Button({
	children,
	className,
	gap,
	iconOnly = false,
	leftIcon,
	onlyIconSize,
	rightIcon,
	size = "base",
	variant = "primary",
	...props
}: ButtonProps) {
	const iconSize = onlyIconSize || size;
	const classNames = cx(
		...baseClass,
		...variantClass[variant],
		...(iconOnly ? iconSizes[iconSize] : sizes[size]),
		...(!iconOnly && gap ? gapMap[gap] : []),
		className,
	);
	const content = iconOnly ? (
		children
	) : (
		<>
			{leftIcon}
			{children}
			{rightIcon}
		</>
	);

	if ("href" in props && props.href) {
		return (
			<a className={classNames} {...props}>
				{content}
			</a>
		);
	}

	return (
		<button className={classNames} {...props}>
			{content}
		</button>
	);
}
