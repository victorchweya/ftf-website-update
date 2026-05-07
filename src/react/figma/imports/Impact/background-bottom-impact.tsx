import type { SVGProps } from "react";

type BackgroundBottomImpactSvgProps = Omit<SVGProps<SVGSVGElement>, "fill"> & {
	fill?: string;
};

export function BackgroundBottomImpactSvg({
	fill = "#EDDDE6",
	...props
}: BackgroundBottomImpactSvgProps) {
	return (
		<svg
			aria-hidden="true"
			fill="none"
			viewBox="0 0 1440 123"
			xmlns="http://www.w3.org/2000/svg"
			{...props}>
			<path
				d="M96.2293 -792.633C552.65 -760.363 1005.01 -792.633 1458.3 -842C1446.36 -803.434 1495.38 28.5059 1425.48 13.1989C1368.58 34.0721 1305.06 39.7047 1246.66 45.2046C847.573 125.848 435.794 46.3781 34.5189 119.666C2.81958 116.022 -12.1234 142.395 -6.30872 81.0341C-16.6876 44.125 -10.4353 -398.302 -3.80789 -435.476C-7.80935 -477.222 -34.1941 -820.133 25.9533 -794.621C48.9611 -802.062 73.6287 -801.364 96.2293 -792.633Z"
				fill={fill}
			/>
		</svg>
	);
}
