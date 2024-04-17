import { createContext, useState, useContext, useEffect, useCallback } from 'react'
import { isServer } from '../utils/helpers/utility'

const DarkModeContext = createContext()

function DarkModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    const theme = isServer() ? '' : localStorage.theme

    setDarkMode(theme !== 'lightMode')
  }, [setDarkMode])

  const onSetDarkMode = useCallback((value) => {
    localStorage.setItem('theme', value ? 'darkMode' : 'lightMode')
    setDarkMode(value)
  }, [setDarkMode])

  return (
    <DarkModeContext.Provider value={{ darkMode, onSetDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  )
}

function useDarkMode() {
  const context = useContext(DarkModeContext)
  if (context === undefined) {
    throw new Error('useDarkMode must be used within a DarkModeProvider')
  }
  return context
}

export { DarkModeProvider, useDarkMode }