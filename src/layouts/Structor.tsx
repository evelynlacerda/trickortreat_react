import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import "@/assets/css/global.css";
import "@/assets/css/style.css";

export const Structor: React.FC = () => {
	return (
		<React.StrictMode>
			<div className="w-full flex flex-col items-center static">
				<div className="absolute w-[1080px]">
					<Header />
				</div>
				<Outlet />
				<Footer />
			</div>
		</React.StrictMode>
	);
};
