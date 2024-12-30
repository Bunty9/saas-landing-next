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
				<div className="relative">
					<Image src={productImage} alt="" className="mt-4" />
					<Image
						src={pyramidImage}
						alt=""
						className="hidden md:block absolute -right-36 -top-24 "
						height={200}
						width={200}
					/>
					<Image
						src={tubeImage}
						alt=""
						className="hidden md:block absolute -left-36 bottom-2 "
						height={200}
						width={200}
					/>
				</div>
			</div>
		</section>
	);
};
