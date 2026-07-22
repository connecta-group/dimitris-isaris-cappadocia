import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { translations } from "./translations";

const STORAGE_KEY = "dimitris_site_language";
const SUPPORTED = ["en", "tr"];
const DEFAULT = "en";

const LanguageContext = createContext(null);

function readStored() {
  try {
    const v = localStorage.getItem(STORAGE_KEY);
    return SUPPORTED.includes(v) ? v : DEFAULT;
  } catch {
    return DEFAULT;
  }
}

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(readStored);

  // Keep <html lang> and storage in sync with the active language.
  useEffect(() => {
    document.documentElement.setAttribute("lang", lang);
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* storage unavailable — language still applies for this session */
    }
  }, [lang]);

  const setLang = (next) => {
    if (SUPPORTED.includes(next)) setLangState(next);
  };

  const value = useMemo(
    () => ({ lang, setLang, t: translations[lang], languages: SUPPORTED }),
    [lang]
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

/** Access the active language, setter and the current-language dictionary. */
export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
}
