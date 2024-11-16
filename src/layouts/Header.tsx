import React from "react";
import { NavLink } from "react-router-dom";
import Flag from "@/assets/img/translate.png";
import { useLanguage } from "@/lib/languageUtils";

export const Header: React.FC = () => {
	const { t, handleChangeLanguage } = useLanguage();

	return (
		<div className="flex items-center justify-between my-12">
			<span className="uppercase font-outfit text-pumpkin-light font-bold text-lg">
				Hello Hallow
			</span>
			<div className="flex gap-4 items-center">
				<div className="flex gap-4 text-pumpkin-light uppercase py-2 px-4 rounded-lg nav-menu backdrop-blur-md">
					<NavLink to="/">{t("About")}</NavLink>
					<NavLink to="/">{t("Lineup")}</NavLink>
					<NavLink to="/">{t("Tickets")}</NavLink>
					<NavLink to="/">{t("Support")}</NavLink>
				</div>
				<button
					type="button"
					onClick={handleChangeLanguage}
					className="w-7 h-fit rounded-full overflow-hidden"
				>
					<img src={Flag} alt="Translate" />
				</button>
			</div>
		</div>
	);
};
