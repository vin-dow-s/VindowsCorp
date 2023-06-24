import styled from 'styled-components'
import colors from '../../utils/styles/colors'
import { StyledLink } from '../../utils/styles/links'
import HomeIllustration from '../../assets/home-illustration.svg'
import { useTheme } from '../../utils/hooks'

const HomeWrapper = styled.div`
    display: flex;
    justify-content: center;
`

const HomeContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin: 30px;
    padding: 60px 90px;
    max-width: 2000px;
    background-color: ${({ theme }) =>
        theme === 'light' ? colors.backgroundLight : colors.backgroundDark};
`

const LeftCol = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
    margin-right: 100px;
    ${StyledLink} {
        max-width: 250px;
        min-width: 200px;
    }
`

const StyledTitle = styled.h1`
    padding-bottom: 30px;
    max-width: 350px;
    line-height: 50px;
    color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
`

const Illustration = styled.img`
    flex: 1;
    height: 400px;
`

function Home() {
    const { theme } = useTheme()
    return (
        <HomeWrapper>
            <HomeContainer theme={theme}>
                <LeftCol>
                    <StyledTitle theme={theme}>
                        Repérez vos besoins, on s'occupe du reste, avec les
                        meilleurs talents.
                    </StyledTitle>
                    <StyledLink to="/survey/1" $isFullLink>
                        Faire le test
                    </StyledLink>
                </LeftCol>
                <Illustration src={HomeIllustration} alt="HomeIllustration" />
            </HomeContainer>
        </HomeWrapper>
    )
}

export default Home
