import Swiper from "swiper";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

document
	.querySelectorAll("[data-local-buyer-testimonials], [data-supplier-testimonials]")
	.forEach((section) => {
		const swiperElement = section.querySelector(
			"[data-local-buyer-testimonial-swiper], [data-supplier-testimonial-swiper]",
		);
		const previous = section.querySelector(
			"[data-testimonial-previous], [data-story-prev]",
		);
		const next = section.querySelector(
			"[data-testimonial-next], [data-story-next]",
		);

		if (!(swiperElement instanceof HTMLElement)) return;

		new Swiper(swiperElement, {
			modules: [Autoplay, EffectFade, Navigation],
			effect: "fade",
			loop: true,
			autoplay: {
				delay: 3000,
				disableOnInteraction: true,
			},
			navigation: {
				nextEl: next,
				prevEl: previous,
			},
			fadeEffect: {
				crossFade: true,
			},
		});
	});
