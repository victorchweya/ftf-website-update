import type { SVGProps } from "react";

type BorderTopKenyanBuyersSvgProps = Omit<
	SVGProps<SVGSVGElement>,
	"fill"
> & {
	fill?: string;
};

export function BorderTopKenyanBuyersSvg({
	fill = "white",
	...props
}: BorderTopKenyanBuyersSvgProps) {
	return (
		<svg
			aria-hidden="true"
			fill="none"
			viewBox="0 0 1440 78"
			xmlns="http://www.w3.org/2000/svg"
			{...props}>
			<path
				d="M1357.77 27.8921C901.35 -4.37849 448.994 27.8923 -4.30069 77.259C7.64127 38.6933 -41.3771 -401.247 28.5241 -385.94C85.4203 -406.813 148.944 -412.446 207.341 -417.946C606.427 -498.589 1018.21 -419.119 1419.48 -492.407C1451.18 -488.763 1466.12 -515.136 1460.31 -453.775C1470.69 -416.866 1464.44 -366.439 1457.81 -329.265C1461.81 -287.519 1488.19 55.3916 1428.05 29.8799C1405.04 37.3206 1380.37 36.6229 1357.77 27.8921Z"
				fill={fill}
			/>
		</svg>
	);
}
