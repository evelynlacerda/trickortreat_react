import { NavLink, useLocation } from "react-router-dom";
import Flag from "@/assets/img/translate.png";
import { useLanguage } from "@/lib/languageUtils";
import Background from "@/assets/img/background.png";

export const Header = () => {
	const { t, handleChangeLanguage } = useLanguage();
	const location = useLocation();

	return (
		<div className="relative w-full flex flex-col items-center">
			<div className="absolute flex w-[1200px] items-center justify-between my-12">
				<NavLink
					to="/"
					className="uppercase font-outfit text-pumpkin-light font-bold text-lg"
				>
					Hello Hallow
				</NavLink>
				<div className="flex gap-4 items-center">
					<div className="flex items-center leading-none gap-4 text-pumpkin-light uppercase h-12 px-4 rounded-lg nav-menu backdrop-blur-md">
						<NavLink to="/">{t("Home")}</NavLink>
						<NavLink to="/about">{t("About")}</NavLink>
						<NavLink to="/lineup">{t("Lineup")}</NavLink>
						<NavLink to="/tickets">{t("Tickets")}</NavLink>
						<NavLink to="/support">{t("Support")}</NavLink>
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
			{location.pathname === "/" ? (
				<img src={Background} alt="Background" className="w-full -z-10" />
			) : (
				<div className="w-full h-36 bg-blue-1"></div>
			)}
		</div>
	);
};
