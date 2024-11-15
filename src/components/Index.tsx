import { useTranslateOnly } from "@/lib/languageUtils";
import { motion } from "framer-motion";

// Images
import Background from "@/assets/img/top-bg.png";
import Logo from "@/assets/img/logotricktreat.svg";
import Jack from "@/assets/img/jack.png";
import PartyOne from "@/assets/img/party1.png";
import PartyTwo from "@/assets/img/party2.png";
import PartyThree from "@/assets/img/party3.png";

// Styles
import "@/assets/css/style.css";

export const Index = () => {
	const { t } = useTranslateOnly();

	const floatJackAnimation = {
		y: [-10, 40, -10],
        x: [-10, 60, -10],
		transition: {
			duration: 2,
			repeat: Infinity,
			repeatType: "loop",
		},
	};

	return (
		<>
			<div className="flex flex-col items-center">
				<img src={Background} alt="Background" />
				<div className="w-[1000px] absolute top-[180px]">
					<img src={Logo} alt="Trick or Treat?" className="w-[640px] h-fit" />
				</div>
				<div className="w-[1080px]">
					<div className="flex items-center justify-between -mt-[180px]">
						<motion.img
							src={Jack}
							alt="Jack Pumpkin"
							animate={floatJackAnimation}
						/>
						<div className="flex flex-col items-center gap-14">
							<div className="flex flex-col font-outfit text-pumpkin-dark uppercase font-bold">
								<p className="text-[32px]">{t("thebest")}</p>
								<p className="text-[56px] -mt-4">{t("halloween")}</p>
								<p className="text-[32px] text-end -mt-4">{t("party")}</p>
							</div>
							<div className="flex items-center gap-10">
								<div className="flex flex-col gap-10">
									<img src={PartyOne} alt="Party One" />
									<img src={PartyTwo} alt="Party Two" />
								</div>
								<img src={PartyThree} alt="Party Three" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
