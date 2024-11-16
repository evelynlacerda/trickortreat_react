import { LINEUP_ITEMS } from "@/constants/lineup";
import { useTranslation } from "react-i18next";
import { FaClock, FaMapLocationDot } from "react-icons/fa6";

export const Lineup = () => {
	const { t } = useTranslation();
	return (
		<>
			<div className="tickets w-full py-3 text-center bg-blue-1 text-pumpkin-dark font-medium">
				<span>{t("Click here and buy your ticket")}</span>
			</div>
			<div className="lineup w-full bg-pumpkin-dark text-blue-1 flex justify-center py-11">
				<div className="w-[1080px] flex gap-5">
					{LINEUP_ITEMS.map((item) => (
						<div className="line flex-grow flex items-center gap-5 p-6 rounded-3xl">
							<div className="flex flex-col items-center justify-center">
								<p className="text-8xl">{item.date}</p>
								<p className="px-2 py-1 uppercase text-sm tracking-[.3em] bg-blue-1 text-pumpkin-dark">
									{t(item.month)}
								</p>
							</div>
							<div className="flex-grow">
								<div className="flex mb-5 uppercase">
									<p className="tracking-[4px] text-4xl border border-dashed border-blue-1 pr-4 pl-5 py-2 text-center">
										{item.singerName}
									</p>
									<p className="flex-grow pl-2 tracking-[8px] font-semibold text-4xl bg-blue-1 py-2 text-pumpkin-dark text-center">
										{item.singerSurname}
									</p>
								</div>
								<div className="flex gap-2 justify-center items-center mb-1">
									<FaMapLocationDot />
									<p className="text-sm text-center">{item.address}</p>
								</div>
								<div className="flex gap-2 justify-center items-center">
									<FaClock />
									<p className="text-sm text-center">{`Start at ${item.startHour} - Finish at ${item.endHour}`}</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
			<div className="tickets w-full py-3 text-center bg-blue-1 text-pumpkin-dark font-medium">
				<span>{t("Have a ticket? Confirm here!")}</span>
			</div>
		</>
	);
};
