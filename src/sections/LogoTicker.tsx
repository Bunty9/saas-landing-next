import acmeLogo from "@/assets/logo-acme.png";
import quantumLogo from "@/assets/logo-quantum.png";
import echoLogo from "@/assets/logo-echo.png";
import celestialLogo from "@/assets/logo-celestial.png";
import apexLogo from "@/assets/logo-apex.png";
import pulseLogo from "@/assets/logo-pulse.png";
import Image from "next/image";

export const LogoTicker = () => {
	return (
		<div className="py-8 md:py-12 bg-white">
			<div className="container">
				<div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,black,black,transparent)]">
					<div className="flex gap-10 flex-none">
						<Image src={acmeLogo} alt="" className="logo-ticker" />
						<Image src={quantumLogo} alt="" className="logo-ticker" />
						<Image src={echoLogo} alt="" className="logo-ticker" />
						<Image src={celestialLogo} alt="" className="logo-ticker" />
						<Image src={apexLogo} alt="" className="logo-ticker" />
						<Image src={pulseLogo} alt="" className="logo-ticker" />
					</div>
				</div>
			</div>
		</div>
	);
};
