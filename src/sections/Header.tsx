import ArrowRight from "@/assets/arrow-right.svg";
import Logo from "@/assets/logosaas.png";
import Image from "next/image";
import MenuIcon from "@/assets/menu.svg";
export const Header = () => {
	return (
		<header>
			<div className="flex justify-center items-center bg-black text-white text-sm py-3 gap-3">
				<p className="text-white/60 hidden md:block">
					Streamline workflow and boot productivity.
				</p>
				<div className="inline-flex gap-2 items-center justify-center">
					<p>Get started for free</p>
					<ArrowRight className="h-5 w-5 inline-flex justify-center items-center " />
				</div>
			</div>
			<div className="py-4">
				<div className="container ">
					<div className="flex justify-between items-center">
						<Image src={Logo} alt="" height={40} width={40} />
						<MenuIcon className="h-5 w-5 md:hidden" />
						<nav className="md:flex gap-6 text-black/60 items-center">
							<a href="#">About</a>
							<a href="#">Features</a>
							<a href="#">Customers</a>
							<a href="#">Updates</a>
							<a href="#">Help</a>
							<button className="bg-black text-white py-2 px-4 rounded-lg font-medium inline-flex align-items justify-center tracking-tighter">
								Get for Free
							</button>
						</nav>
					</div>
				</div>
			</div>
		</header>
	);
};
