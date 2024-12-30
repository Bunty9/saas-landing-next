"use client";
import ArrowRight from "@/assets/arrow-right.svg";
import Logo from "@/assets/logosaas.png";
import Image from "next/image";
import MenuIcon from "@/assets/menu.svg";
import { useState } from "react";

export const Header = () => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);

	const toggleSidebar = () => {
		setIsSidebarOpen((prev) => !prev);
	};

	return (
		<header className="sticky top-0 backdrop-blur backdrop-grayscale-[0.2] z-10 overflow-x-clip">
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
						<div className="logo-blur">
							<Image
								src={Logo}
								alt=""
								height={40}
								width={40}
								className="relative"
							/>
						</div>
						<MenuIcon className="h-5 w-5 md:hidden" onClick={toggleSidebar} />
						<nav className="hidden md:flex gap-6 font-bold text-black/90 items-center">
							<a href="#">About</a>
							<a href="#">Features</a>
							<a href="#">Customers</a>
							<a href="#">Updates</a>
							<a href="#">Help</a>
							<button className="btn btn-primary">Get for Free</button>
						</nav>
					</div>
				</div>
				{/* Sidebar */}
				<div
					className={`md:hidden lg:hidden fixed top-10 right-0 z-30 h-96 w-64 bg-white rounded-xl  ${
						isSidebarOpen ? "translate-x-0" : "translate-x-full"
					} transition-transform duration-300 ease-in-out z-20`}
				>
					<div className="flex justify-between items-center p-4 border-b">
						<h2 className="text-lg font-bold">Menu</h2>
						<ArrowRight
							className="h-5 w-5 cursor-pointer "
							onClick={toggleSidebar}
						/>
					</div>
					<nav className="flex flex-col gap-4 p-4 text-black bg-white">
						<a href="#" className="hover:text-[#896fff]">
							About
						</a>
						<a href="#" className="hover:text-[#896fff]">
							Features
						</a>
						<a href="#" className="hover:text-[#896fff]">
							Customers
						</a>
						<a href="#" className="hover:text-[#896fff]">
							Updates
						</a>
						<a href="#" className="hover:text-[#896fff]">
							Help
						</a>
						<button className="btn btn-primary mt-10">Get for Free</button>
					</nav>
				</div>
			</div>
		</header>
	);
};
