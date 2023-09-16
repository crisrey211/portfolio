const key = "language"

const storeLanguage = (language) => {
  localStorage.setItem(key, language)
}

const getStoredLanguage = () => {
  return localStorage.getItem(key)
}

const removeStoredLanguage = () => {
  localStorage.removeItem(key)
}

export default { storeLanguage, getStoredLanguage, removeStoredLanguage }
