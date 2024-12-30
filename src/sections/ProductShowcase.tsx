"use client";
import productImage from "@/assets/product-image.png";
import Image from "next/image";
import pyramidImage from "@/assets/pyramid.png";
import tubeImage from "@/assets/tube.png";
import { useRef } from "react";
import {
	motion,
	useMotionValueEvent,
	useScroll,
	useTransform,
} from "motion/react";

export const ProductShowcase = () => {
	const productREF = useRef(null);
	const { scrollYProgress } = useScroll({
		target: productREF,
		offset: ["start end", "end start"],
	});
	const translateY = useTransform(scrollYProgress, [0, 1], [400, -250]);
	const rotateDeg = useTransform(scrollYProgress, [0, 1], [-40, 40]);
	return (
		<section
			ref={productREF}
			className="bg-gradient-to-b from-[#FFF] to-[#a6b8fc] overflow-x-clip"
		>
			<div className="container">
				<div className="section-heading">
					<div className="flex justify-center">
						<div className="tag">Boost your Productivity</div>
					</div>
					<h2 className="section-title">
						A more effective way to track your Progress
					</h2>
					<p className="section-ptag">
						Effortlessly turn your ideas into a fully functional, responsive,
						SaaS website in just minutes.
					</p>
				</div>
				<div className="flex items-center justify-center relative">
					<Image
						src={productImage}
						alt=""
						className="mt-4 md:object-scale-down md:h-80 lg:h-[550px] w-auto"
					/>
					<motion.img
						src={pyramidImage.src}
						alt=""
						className="hidden md:block absolute -right-28 -top-24 "
						height={250}
						width={250}
						style={{
							rotate: rotateDeg,
							translateY: translateY,
						}}
					/>
					<motion.img
						src={tubeImage.src}
						alt=""
						className="hidden md:block absolute -left-28 bottom-2 "
						height={250}
						width={250}
						style={{
							rotate: rotateDeg,
							translateY: translateY,
						}}
					/>
				</div>
			</div>
		</section>
	);
};
