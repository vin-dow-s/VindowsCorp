import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Survey from './pages/Survey'
import Header from './components/Header'
import Error from './components/Error'
import Results from './pages/Results'
import Freelances from './pages/Freelances'
import GlobalStyle from './utils/styles/GlobalStyle'
import { SurveyProvider, ThemeProvider } from './utils/context'
import Footer from './components/Footer'

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <ThemeProvider>
                <SurveyProvider>
                    <GlobalStyle />
                    <Header />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route
                            path="/survey/:questionNumber"
                            element={<Survey />}
                        />
                        <Route path="/freelances" element={<Freelances />} />
                        <Route path="/results" element={<Results />} />
                        <Route path="*" element={<Error />} />
                    </Routes>
                    <Footer />
                </SurveyProvider>
            </ThemeProvider>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
)
