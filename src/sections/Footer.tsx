import logo from "@/assets/logosaas.png";
import Image from "next/image";
import SocialX from "@/assets/social-x.svg";
import SocialInsta from "@/assets/social-insta.svg";
import SocialLinkedin from "@/assets/social-linkedin.svg";
import SocialPin from "@/assets/social-pin.svg";
import SocialYoutube from "@/assets/social-youtube.svg";

export const Footer = () => {
	return (
		<footer className="bg-black text-[#BCBCBC] text-sm py-10 text-center">
			<div className="container items-center justify-center gap-4">
				<div className="inline-flex relative before:content-[''] before:top-2 before:bottom-0 before:blur-md before:w-full before:bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] before:absolute">
					<Image
						src={logo}
						alt=""
						height={60}
						width={60}
						className="relative "
					/>
				</div>
				<nav className="flex flex-col md:flex-row items-center justify-center gap-6 text-xl mt-5">
					<a href="#">About</a>
					<a href="#">Features</a>
					<a href="#">Customers</a>
					<a href="#">Pricing</a>
					<a href="#">Help</a>
					<a href="#">Careers</a>
				</nav>
				<div className="flex items-center justify-center gap-6 mt-5">
					<SocialInsta className="h-10 w-10" />
					<SocialLinkedin className="h-10 w-10" />
					<SocialPin className="h-10 w-10" />
					<SocialX className="h-10 w-10" />
					<SocialYoutube className="h-10 w-10" />
				</div>
				<p className="mt-6">
					&copy; 2024 Your Company, Inc. All Rights reserved.
				</p>
				<p>Made with ❤️ by - Bunty9</p>
			</div>
		</footer>
	);
};
