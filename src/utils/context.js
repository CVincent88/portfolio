import { createContext, useState } from "react";

// const userLanguage = window.navigator.userLanguage || window.navigator.language;

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

export const DisplayContext = createContext();

export const DisplayProvider = ({ children }) => {
   const [isDarkScreenDisplayed, setIsDarkScreenDisplayed] = useState(true);
   const [backgroundOpacity, setBackgroundOpacity] = useState(0);
   const [isBackgroundOpacityComplete, setIsBackgroundOpacityComplete] =
      useState(false);

   return (
      <DisplayContext.Provider
         value={{
            isDarkScreenDisplayed,
            setIsDarkScreenDisplayed,
            backgroundOpacity,
            setBackgroundOpacity,
            isBackgroundOpacityComplete,
            setIsBackgroundOpacityComplete,
         }}
      >
         {children}
      </DisplayContext.Provider>
   );
};
