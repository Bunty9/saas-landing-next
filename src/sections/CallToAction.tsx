import ArrowRight from "@/assets/arrow-right.svg";
import starImage from "@/assets/star.png";
import springImage from "@/assets/spring.png";
import Image from "next/image";

export const CallToAction = () => {
	return (
		<section className="bg-gradient-to-b from-white to-[#c5d2ff] py-16 overflow-x-clip">
			<div className="container">
				<div className="section-heading relative">
					<h2 className="section-title">SignUp for Free Today</h2>
					<p className="section-ptag">
						Celebrate the joy of acomplishment with an app designed to track
						your progress and motive your efforts.
					</p>
					<Image
						src={starImage}
						alt=""
						width={250}
						height={250}
						className="absolute -left-[200px] -top-[140px] hidden md:block"
					/>
					<Image
						src={springImage}
						alt=""
						width={250}
						height={250}
						className="absolute -right-[200px] -top-[20px] hidden md:block"
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
