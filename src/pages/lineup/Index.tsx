import { EVENT_LINEUP_ITEMS } from "@/constants/lineup";
import { useTranslation } from "react-i18next";

export const Lineup = () => {
	const { t } = useTranslation();

	return (
		<div className="flex flex-col items-center w-[1200px] mt-20 mb-32">
			<h2 className="font-hennypenny text-pumpkin-dark text-8xl">
				{t("Lineup")}
			</h2>
			<div className="flex justify-between w-full mt-24">
				<div className="flex-grow">
					<h3 className="text-center text-pumpkin-dark font-semibold text-4xl uppercase">
						{t("October, 30")}
					</h3>
					<div className="flex flex-col gap-4 mt-4 text-center">
						{EVENT_LINEUP_ITEMS.filter((item) => item.key <= 5).map((item) => (
							<div key={item.key}>
								<p className="uppercase text-pumpkin-light font-semibold tracking-widest text-2xl">{item.singer}</p>
								<span>
									{item.startHour} | {item.endHour}
								</span>
							</div>
						))}
					</div>
				</div>
				<div className="flex-grow">
					<h3 className="text-center text-pumpkin-dark font-semibold text-3xl">
						{t("October, 31")}
					</h3>
					<div className="flex flex-col gap-4 mt-4 text-center">
						{EVENT_LINEUP_ITEMS.filter((item) => item.key >= 6).map((item) => (
							<div key={item.key}>
								<p className="uppercase text-pumpkin-light font-semibold tracking-widest text-2xl">{item.singer}</p>
								<span>
									{item.startHour} | {item.endHour}
								</span>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};
