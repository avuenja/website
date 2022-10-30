'use client'

import React from 'react'
import Button from './button'
import MoonIcon from './icons/moon'
import SunIcon from './icons/sun'

const ToggleTheme = () => {
  const [darkTheme, setDarkTheme] = React.useState(false)

  React.useEffect(() => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      setDarkTheme(true)
    } else {
      setDarkTheme(false)
    }
  }, [])

  React.useEffect(() => {
    onControlClass()
  }, [darkTheme])

  const onControlClass = () => {
    if (darkTheme) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  const onToggleTheme = () => {
    console.log('toggle')
    setDarkTheme((dark) => {
      localStorage.theme = dark ? 'light' : 'dark'

      return !dark
    })
  }

  return (
    <Button onClick={onToggleTheme}>
      {darkTheme ? <SunIcon className="text-slate-900" /> : <MoonIcon />}
    </Button>
  )
}

export default ToggleTheme
