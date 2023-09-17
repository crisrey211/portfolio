import "./App.css"
import NavBar from "@/components/NavBar.jsx"
import About from "@/components/About"
import Stack from "@/components/Stack"
import Footer from "@/components/Footer"
import Projects from "./components/Projects"
import Experience from "./components/Experience"
import Main from "./components/Main"
import { MainApp } from "./components/MainApp"

import LocalizationContext from "./contexts/localization/context"
import localizationStorage from "./contexts/localization/storage"

import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import translationsEs from "./i18n/translations/es.json"
import translationsEn from "./i18n/translations/en.json"
import translationsDe from "./i18n/translations/de.json"
import { useEffect, useState } from "react"

function App() {
  const [currentLanguage, setCurrentLanguage] = useState(null)
  const [availableLanguages, setAvailableLanguages] = useState(
    !process.env.NODE_ENV ||
      (process.env.NODE_ENV === "production" && ["en", "es"]) || ["en", "es"]
  )

  const restoreLanguage = () => {
    let lang =
      localizationStorage.getStoredLanguage() ||
      navigator.language ||
      navigator.userLanguage ||
      "en"
    lang = lang.substring(0, 2)
    if (!availableLanguages.find((l) => l == lang)) {
      lang = availableLanguages.find((l) => true)
    }
    setCurrentLanguage(lang)
    localizationStorage.storeLanguage(lang)
    i18n.use(initReactI18next).init({
      resources: {
        es: { translation: translationsEs },
        en: { translation: translationsEn },
        de: { translation: translationsDe },
      },
      lng: lang,
      fallbackLng: "es",
      interpolation: { escapeValue: false },
    })
  }

  useEffect(() => {
    restoreLanguage()
  }, [])

  return (
    <LocalizationContext.Provider
      value={{
        currentLanguage,
        setCurrentLanguage,
        availableLanguages,
        setAvailableLanguages,
      }}
    >
      <MainApp>
        <NavBar />
        <Main />
        <About />
        <Stack />
        <Experience />
        <Projects />
        <Footer />
      </MainApp>
    </LocalizationContext.Provider>
  )
}

export default App
