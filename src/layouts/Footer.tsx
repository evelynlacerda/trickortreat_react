import Cemitery from "@/assets/img/cemit.png";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { FaInstagram, FaFacebook, FaTiktok, FaXTwitter } from "react-icons/fa6";

export const Footer = () => {
	const { t } = useTranslation();

	return (
		<footer className="w-full footer">
			<img src={Cemitery} alt="Cemitery" className="w-full" />
			<div className="sub-footer flex items-center flex-col w-full">
				<div className="flex gap-2 w-[1200px] justify-between mb-12">
					<h6>{t("Hello Hallow")}</h6>
					<div className="flex flex-col gap-2">
						<p>{t("Festival")}</p>
						<NavLink to="/" className="link">
							{t("About")}
						</NavLink>
						<NavLink to="/" className="link">
							{t("Tickets")}
						</NavLink>
					</div>
					<div className="flex flex-col gap-2">
						<p>{t("Contact")}</p>
						<NavLink to="/" className="link">
							{t("Faq")}
						</NavLink>
						<NavLink to="/" className="link">
							{t("Support")}
						</NavLink>
					</div>
					<div>
						<p className="mb-2">{t("Social Networks")}</p>
						<div className="flex gap-2">
							<NavLink to="/" className="social">
								<FaInstagram />
							</NavLink>
							<NavLink to="/" className="social">
								<FaFacebook />
							</NavLink>
							<NavLink to="/" className="social">
								<FaTiktok />
							</NavLink>
							<NavLink to="/" className="social">
								<FaXTwitter />
							</NavLink>
						</div>
					</div>
					<div className="flex flex-col items-end gap-2 ml-16">
						<p>{t("Join our newsletter")}</p>
						<form className="form flex rounded-full p-1">
							<input type="email" placeholder={t("Enter your email")} />
							<button>{t("Subscribe")}</button>
						</form>
					</div>
				</div>
				<div className="copyright w-full flex justify-center">
					<div className="w-[1200px] flex justify-end my-8">
						<span>{t("© Treat or Trick Festival. All rights reserved.")}</span>
					</div>
				</div>
			</div>
		</footer>
	);
};
