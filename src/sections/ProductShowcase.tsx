import productImage from "@/assets/product-image.png";
import Image from "next/image";
import pyramidImage from "@/assets/pyramid.png";
import tubeImage from "@/assets/tube.png";

export const ProductShowcase = () => {
	return (
		<section className="bg-gradient-to-b from -[#FFF] to-[#D2DCFF] py-24 overflow-x-clip">
			<div className="container">
				<div className="max-w-[540px] mx-auto">
					<div className="flex justify-center">
						<div className="tag">Boost your Productivity</div>
					</div>
					<h2 className="text-center text-3xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#273d88] text-transparent bg-clip-text mt-4">
						A more effective way to track your Progress
					</h2>
					<p className="text-center text-[18px] leading-[20px] tracking-tighter text-[#191c3b] mt-4">
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
