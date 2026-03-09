"use client";

import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { Language } from "@/site-data/types";

type LanguageContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("cn");

  useEffect(() => {
    const stored = window.localStorage.getItem("site-language");
    if (stored === "cn" || stored === "en") {
      setLanguage(stored);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("site-language", language);
    document.documentElement.lang = language === "cn" ? "zh-CN" : "en";
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
