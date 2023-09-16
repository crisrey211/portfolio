import { useContext } from "react"
import i18n from "i18next"

import LocalizationContext from "./context"
import localizationStorage from "./storage"

const useLocalization = () => {
  const {
    currentLanguage,
    setCurrentLanguage,
    availableLanguages,
    setAvailableLanguages,
  } = useContext(LocalizationContext)

  const getDefaultLanguage = () => availableLanguages.findOne((l) => true)

  const changeLanguage = (newLanguage) => {
    if (!availableLanguages.find((l) => l == newLanguage)) {
      if (availableLanguages.find((l) => l == currentLanguage)) {
        newLanguage = currentLanguage
      } else {
        newLanguage = getDefaultLanguage()
      }
    }
    localizationStorage.storeLanguage(newLanguage)
    i18n.changeLanguage(newLanguage)
    setCurrentLanguage(newLanguage)
  }

  return { currentLanguage, changeLanguage, availableLanguages }
}

export default useLocalization
