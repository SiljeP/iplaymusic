"use client"
import { Switch } from "@nextui-org/react"
import { useEffect, useState } from "react"

export default function DarkMode({ className }) {
    const [darkMode, setDarkMode] = useState()

    useEffect(() => {
        const theme = localStorage.getItem("theme")
        // Hvis localstorage er DARK, set til True
        if (theme === "dark") setDarkMode(true)
    }, [])

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark")
            localStorage.setItem("theme", "dark")
        } else {
            document.documentElement.classList.remove("dark")
            localStorage.setItem("theme", "light")
        }
    }, [darkMode])

    return (
        <>
            <Switch
                className={className}
                isSelected={darkMode}
                onClick={() => setDarkMode(!darkMode)}
            />

        </>
    )
}