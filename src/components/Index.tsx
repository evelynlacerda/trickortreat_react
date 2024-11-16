import { motion } from "framer-motion";

// Images
import Background from "@/assets/img/top-bg.png";
import Logo from "@/assets/img/logotricktreat.svg";
import Jack from "@/assets/img/jack.png";
import PartyOne from "@/assets/img/party1.png";
import PartyTwo from "@/assets/img/party2.png";
import PartyThree from "@/assets/img/party3.png";
import Ready from "@/assets/img/ready.svg";

// Styles
import "@/assets/css/style.css";
import { Lineup } from "./Lineup";
import { useTranslation } from "react-i18next";

export const Index = () => {
	const { t } = useTranslation()

	const floatJackAnimation = {
		y: [-10, 50, -10],
		transition: {
			duration: 2,
			repeat: Infinity,
			repeatType: "loop" as const,
		},
	};

    const floatReadyImg = {
        y: [-10, 10, -10],
        transition: {
            duration: 6,
            repeat: Infinity,
            repeatType: "loop" as const,
        }
    }

	return (
		<div className="flex flex-col items-center">
			<img src={Background} alt="Background" />
			<div className="w-[1000px] absolute top-[180px]">
				<img src={Logo} alt="Trick or Treat?" className="w-[640px] h-fit" />
			</div>
			<div className="w-[1080px] mb-32">
				<div className="flex items-center justify-between mt-[-180px]">
					<motion.img
						src={Jack}
						alt="Jack Pumpkin"
						animate={floatJackAnimation}
					/>
					<div className="flex flex-col items-center gap-14">
						<div className="flex flex-col font-outfit text-pumpkin-dark uppercase font-bold">
							<p className="text-[32px]">{t("The best")}</p>
							<p className="text-[56px] -mt-4">{t("halloween")}</p>
							<p className="text-[32px] text-end -mt-4">{t("party ever!")}</p>
						</div>
						<div className="flex items-center gap-10">
							<div className="flex flex-col gap-10">
								<img src={PartyOne} alt="Party One" className="image-party" />
								<img src={PartyTwo} alt="Party Two" className="image-party" />
							</div>
							<img src={PartyThree} alt="Party Three" className="image-party" />
						</div>
					</div>
				</div>
			</div>
			<Lineup />
			<motion.img
				src={Ready}
				alt="Are you ready?"
				animate={floatReadyImg}
				className="mt-32 mb-14"
			/>
		</div>
	);
};
