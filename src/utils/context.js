import { createContext, useState } from "react";

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
   const [language, setLanguage] = useState("fr");
   const switchLanguage = () => {
      setLanguage(language === "fr" ? "en" : "fr");
   };

   return (
      <LanguageContext.Provider value={{ language, switchLanguage }}>
         {children}
      </LanguageContext.Provider>
   );
};
