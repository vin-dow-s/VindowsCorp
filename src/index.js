import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Survey from './pages/Survey'
import Header from './components/Header'
import Error from './components/Error'
import Results from './pages/Results'
import Freelances from './pages/Freelances'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    html, body {
        scrollbar-width: thin;
        scrollbar-color: #5843E4 transparent;

        &::-webkit-scrollbar {
            width: 5px;
            border-radius: 10px;
            background-color: transparent;
        }

        &::-webkit-scrollbar-thumb {
            border-radius: 10px;
            background-color: #5843E4;
        }
    }

    * {
        font-family: 'Trebuchet MS', Helvetica, sans-serif;
    }

    /*
    body {
        overflow-y: hidden;
    }
    */
`

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <GlobalStyle />
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/survey/:questionNumber" element={<Survey />} />
                <Route path="/freelances" element={<Freelances />} />
                <Route path="/results" element={<Results />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
)
