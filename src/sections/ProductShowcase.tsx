import productImage from "@/assets/product-image.png";
import Image from "next/image";
import pyramidImage from "@/assets/pyramid.png";
import tubeImage from "@/assets/tube.png";

export const ProductShowcase = () => {
	return (
		<section className="bg-gradient-to-b from-[#FFF] to-[#a6b8fc] overflow-x-clip">
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
					<Image
						src={pyramidImage}
						alt=""
						className="hidden md:block absolute -right-28 -top-24 "
						height={250}
						width={250}
					/>
					<Image
						src={tubeImage}
						alt=""
						className="hidden md:block absolute -left-28 bottom-2 "
						height={250}
						width={250}
					/>
				</div>
			</div>
		</section>
	);
};
