import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../styles/colors'
import { StyledLink } from '../../styles/links'
import mainLogo from '../../assets/dark-logo.png'

const NavContainer = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
`

const MainLogo = styled.img`
    height: 70px;
`

function Header() {
    return (
        <NavContainer>
            <Link to="/">
                <MainLogo src={mainLogo} />
            </Link>
            <div style={{ overflowY: 'visible' }}>
                <StyledLink to="/">Accueil</StyledLink>
                <StyledLink to="/freelances">Profils</StyledLink>
                <StyledLink to="/survey/1" $isFullLink>
                    Faire le test
                </StyledLink>
            </div>
        </NavContainer>
    )
}

export default Header
