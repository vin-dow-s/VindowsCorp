import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../utils/styles/colors'
import { StyledLink } from '../../utils/styles/links'
import DarkLogo from '../../assets/dark-logo.png'
import LightLogo from '../../assets/light-logo.png'
import { useTheme } from '../../utils/hooks'

const NavContainer = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    padding-right: 30px;
`

const HomeLogo = styled.img`
    height: 70px;
`

function Header() {
    const { theme } = useTheme()
    return (
        <NavContainer>
            <Link to="/">
                <HomeLogo src={theme === 'light' ? DarkLogo : LightLogo} />
            </Link>
            <div style={{ overflowY: 'visible' }}>
                <StyledLink $theme={theme} to="/">
                    Accueil
                </StyledLink>
                <StyledLink $theme={theme} to="/freelances">
                    Profils
                </StyledLink>
                <StyledLink to="/survey/1" $isFullLink>
                    Faire le test
                </StyledLink>
            </div>
        </NavContainer>
    )
}

export default Header
