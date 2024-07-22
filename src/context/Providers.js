"use client"
const { ThemeProvider } = require("next-themes")

import React from 'react'

const ProvidersDarkMode = ({children}) => {
  return (
    <ThemeProvider attribute="class" defaultTheme='dark'>{children}</ThemeProvider>
  )
}

export default ProvidersDarkMode


