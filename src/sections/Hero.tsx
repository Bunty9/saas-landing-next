"use client";
import ArrowRight from "@/assets/arrow-right.svg";
import CogImage from "@/assets/cog.png";
import Image from "next/image";
import CylinderImage from "@/assets/cylinder.png";
import NoodleImage from "@/assets/noodle.png";
import {
	motion,
	useMotionValueEvent,
	useScroll,
	useTransform,
} from "motion/react";
import { useRef } from "react";

export const Hero = () => {
	const heroREF = useRef(null);
	const { scrollYProgress } = useScroll({
		target: heroREF,
		offset: ["start end", "end start"],
	});
	const translateY = useTransform(scrollYProgress, [0, 1], [400, -250]);
	const rotateDeg = useTransform(scrollYProgress, [0, 1], [-40, 40]);
	// useMotionValueEvent(translateY, "change", (latest) => console.log(latest));
	return (
		<section
			ref={heroREF}
			className="pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_90%)] overflow-x-clip"
		>
			<div className="container">
				<div className="md:flex items-center">
					<div className="md:w-[478px]">
						<div className="tag">version 2.0 is here</div>
						<h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-gradient-to-b from-black to-[#c42b9b] text-transparent bg-clip-text mt-6">
							Pathway to Productivity
						</h1>
						<p className="text-xl text-[#692f5a] tracking-tight mt-6">
							Celebrate the joy of acomplishment with an app designed to tract
							your progress.
						</p>
						<div className="flex gap-10 items-center mt-[30px] ">
							<button className="btn btn-primary">Get for Free</button>
							<button className="btn btn-text gap-1">
								<span>Learn More</span>
								<ArrowRight className="h-5 w-5" />
							</button>
						</div>
					</div>
					<div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
						<motion.img
							src={CogImage.src}
							alt=""
							className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-12 lg:left-0 "
							animate={{
								rotate: [5, -5],
								translateY: [-20, 20],
							}}
							transition={{
								repeat: Infinity,
								repeatType: "mirror",
								duration: 3,
								ease: "backInOut",
							}}
						/>
						<motion.img
							src={CylinderImage.src}
							alt=""
							width={220}
							height={220}
							className="hidden md:block lg:-top-8 md:-top-28 -left-32 md:absolute"
							style={{
								rotate: rotateDeg,
								translateY: translateY,
							}}
						/>
						<motion.img
							src={NoodleImage.src}
							alt=""
							width={220}
							height={220}
							className="hidden lg:block top-[524px] left-[448px] md:absolute"
							style={{
								rotate: rotateDeg,
								translateY: translateY,
							}}
						/>
					</div>
				</div>
			</div>
		</section>
	);
};
