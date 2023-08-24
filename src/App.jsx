import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from '@/components/Home.jsx'
import { Main } from './components/Main'

function App() {
    return (
        <>
            <Home />
            <Main />
        </>
    )
}

export default App
