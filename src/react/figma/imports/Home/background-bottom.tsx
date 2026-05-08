import type { SVGProps } from "react";

type BackgroundBottomSvgProps = Omit<SVGProps<SVGSVGElement>, "fill"> & {
	fill?: string;
};

export function BackgroundBottomSvg({
	fill = "#DAE2B6",
	...props
}: BackgroundBottomSvgProps) {
	return (
		<svg
			aria-hidden="true"
			fill="none"
			viewBox="0 0 1440 103"
			xmlns="http://www.w3.org/2000/svg"
			{...props}>
			<path
				d="M87.9303 -825.879C551.458 -793.115 1010.86 -825.879 1471.21 -876C1459.08 -836.845 1508.87 7.81366 1437.88 -7.72735C1380.09 13.4649 1315.58 19.1836 1256.27 24.7676C850.974 106.644 432.782 25.959 25.2589 100.368C-6.93408 96.6673 -22.1097 123.443 -16.2045 61.1449C-26.745 23.6715 -20.3954 -425.519 -13.6647 -463.261C-17.7285 -505.646 -44.5241 -853.798 16.56 -827.897C39.9261 -835.451 64.9777 -834.743 87.9303 -825.879Z"
				fill={fill}
			/>
		</svg>
	);
}
