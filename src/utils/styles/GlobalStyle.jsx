import { useContext } from 'react'
import { createGlobalStyle } from 'styled-components'
import { ThemeContext } from '../context'

const StyledGlobalStyle = createGlobalStyle`
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

    body {
        background-color: ${({ isDarkMode }) =>
            isDarkMode ? '#2F2E41' : 'white'};
    }
`

function GlobalStyle() {
    const { theme } = useContext(ThemeContext)

    return <StyledGlobalStyle isDarkMode={theme === 'dark'} />
}

export default GlobalStyle
