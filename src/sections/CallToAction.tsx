"use client";
import ArrowRight from "@/assets/arrow-right.svg";
import starImage from "@/assets/star.png";
import springImage from "@/assets/spring.png";
import Image from "next/image";
import {
	motion,
	useMotionValueEvent,
	useScroll,
	useTransform,
} from "motion/react";
import { useRef } from "react";

export const CallToAction = () => {
	const actionREF = useRef(null);
	const { scrollYProgress } = useScroll({
		target: actionREF,
		offset: ["start end", "end start"],
	});
	const translateY = useTransform(scrollYProgress, [0, 1], [1000, -800]);
	const rotateDeg = useTransform(scrollYProgress, [0, 1], [-80, 40]);
	return (
		<section className="bg-gradient-to-b from-white to-[#c5d2ff] py-16 overflow-x-clip">
			<div className="container">
				<div className="section-heading relative">
					<h2 className="section-title">SignUp for Free Today</h2>
					<p className="section-ptag">
						Celebrate the joy of acomplishment with an app designed to track
						your progress and motive your efforts.
					</p>
					<motion.img
						src={starImage.src}
						alt=""
						width={250}
						height={250}
						className="absolute -left-[250px] -bottom-[500px] hidden md:block"
						style={{
							rotate: rotateDeg,
							translateY: translateY,
						}}
					/>
					<motion.img
						src={springImage.src}
						alt=""
						width={250}
						height={250}
						className="absolute -right-[250px] -bottom-[600px] hidden md:block"
						style={{
							rotate: rotateDeg,
							translateY: translateY,
						}}
					/>
				</div>
				<div className="flex items-center justify-center gap-10 mt-10">
					<button className="btn btn-primary">Get for Free</button>
					<button className="btn btn-text">
						<span>Learn More</span>
						<ArrowRight className="h-5 w-5" />
					</button>
				</div>
			</div>
		</section>
	);
};
