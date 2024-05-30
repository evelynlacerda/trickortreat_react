import { useState } from "react";
import { useTranslation } from "react-i18next";

export const useLanguage = () => {
	const {
		t,
		i18n: { changeLanguage, language },
	} = useTranslation();

	const [currentLanguage, setCurrentLanguage] = useState(language);

	const handleChangeLanguage = () => {
		const newLanguage = currentLanguage === "en" ? "pt-br" : "en";
		changeLanguage(newLanguage);
		setCurrentLanguage(newLanguage);
  };
  
  return {
    t,
    handleChangeLanguage,
  }
};


export const useTranslateOnly = () => {
  const { t } = useTranslation();
  return { t };
};