import React, { useState } from "react";

const useLocale = (defaultValue = "id") => {
  const storedLocale = localStorage.getItem("locale");
  const [locale, setLocale] = useState(storedLocale || defaultValue);

  const toggleLocale = () => {
    setLocale((prevLocale) => {
      const newLocale = prevLocale === "id" ? "en" : "id";
      localStorage.setItem("locale", newLocale);
      return newLocale;
    });
  };

  return [locale, toggleLocale];
};

export default useLocale;
