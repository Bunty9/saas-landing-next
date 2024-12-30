"use client";
import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import avatar5 from "@/assets/avatar-5.png";
import avatar6 from "@/assets/avatar-6.png";
import avatar7 from "@/assets/avatar-7.png";
import avatar8 from "@/assets/avatar-8.png";
import avatar9 from "@/assets/avatar-9.png";
import Image from "next/image";
import React from "react";
import { twMerge } from "tailwind-merge";
import {
	motion,
	useMotionValueEvent,
	useScroll,
	useTransform,
} from "motion/react";

const testimonials = [
	{
		text: "As a seasoned designer always on the lookout for innovative tools, Framer.com instantly grabbed my attention.",
		imageSrc: avatar1.src,
		name: "Jamie Rivera",
		username: "@jamietechguru00",
	},
	{
		text: "Our team's productivity has skyrocketed since we started using this tool. ",
		imageSrc: avatar2.src,
		name: "Josh Smith",
		username: "@jjsmith",
	},
	{
		text: "This app has completely transformed how I manage my projects and deadlines.",
		imageSrc: avatar3.src,
		name: "Morgan Lee",
		username: "@morganleewhiz",
	},
	{
		text: "I was amazed at how quickly we were able to integrate this app into our workflow.",
		imageSrc: avatar4.src,
		name: "Casey Jordan",
		username: "@caseyj",
	},
	{
		text: "Planning and executing events has never been easier. This app helps me keep track of all the moving parts, ensuring nothing slips through the cracks.",
		imageSrc: avatar5.src,
		name: "Taylor Kim",
		username: "@taylorkimm",
	},
	{
		text: "The customizability and integration capabilities of this app are top-notch.",
		imageSrc: avatar6.src,
		name: "Riley Smith",
		username: "@rileysmith1",
	},
	{
		text: "Adopting this app for our team has streamlined our project management and improved communication across the board.",
		imageSrc: avatar7.src,
		name: "Jordan Patels",
		username: "@jpatelsdesign",
	},
	{
		text: "With this app, we can easily assign tasks, track progress, and manage documents all in one place.",
		imageSrc: avatar8.src,
		name: "Sam Dawson",
		username: "@dawsontechtips",
	},
	{
		text: "Its user-friendly interface and robust features support our diverse needs.",
		imageSrc: avatar9.src,
		name: "Casey Harper",
		username: "@casey09",
	},
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const Testimonialscol = (props: {
	className?: string;
	testimonials: typeof testimonials;
	duration?: number;
}) => (
	<div className={props.className}>
		<motion.div
			className="flex flex-col px-10 gap-6 pb-6"
			animate={{
				translateY: "-50%",
			}}
			transition={{
				repeat: Infinity,
				ease: "linear",
				repeatType: "loop",
				duration: props.duration || 10,
			}}
		>
			{[...new Array(2)].fill(0).map((_, index) => (
				<React.Fragment key={index}>
					{props.testimonials.map(
						({ text, imageSrc, name, username }, index) => (
							<div key={index} className="card">
								<div>{text}</div>
								<div className="flex flex-row items-center gap-2">
									<Image
										src={imageSrc}
										alt=""
										width={40}
										height={40}
										className="h-10 w-10 rounded-full"
									/>
									<div>
										<div className="font-medium tracking-tight leading-5">
											{name}
										</div>
										<div className="leading-5 tracking-normal">{username}</div>
									</div>
								</div>
							</div>
						)
					)}
				</React.Fragment>
			))}
		</motion.div>
	</div>
);

export const Testimonials = () => {
	return (
		<section className="bg-white">
			<div className="container">
				<div className="section-heading">
					<div className="flex justify-center">
						<div className="tag">Testimonials</div>
					</div>
					<h2 className="section-title mt-2">What Our Users Say ...</h2>
					<p className="section-ptag">
						Our app has become an essential tool for users around the world.
					</p>
				</div>
				<div className="flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black,black,black,transparent)]  mt-5 max-h-[738px] overflow-y-hidden">
					<Testimonialscol testimonials={firstColumn} duration={20} />
					<Testimonialscol
						testimonials={secondColumn}
						className="hidden md:block"
						duration={10}
					/>
					<Testimonialscol
						testimonials={thirdColumn}
						className="hidden lg:block"
						duration={15}
					/>
				</div>
			</div>
		</section>
	);
};
