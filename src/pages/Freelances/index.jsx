import DefaultPicture from '../../assets/profile.png'
import Card from '../../components/Card'
import styled from 'styled-components'
import colors from '../../utils/styles/colors'
import { Loader } from '../../utils/styles/links'
import { useFetch, useTheme } from '../../utils/hooks'

const PageTitle = styled.h1`
    text-align: center;
    padding-bottom: 20px;
    font-size: 30px;
    color: black;
    color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
`

const PageSubtitle = styled.h2`
    text-align: center;
    padding-bottom: 50px;
    font-size: 20px;
    font-weight: 300;
    color: ${colors.secondary};
    color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
`

const LoaderWrapper = styled.div`
    display: flex;
    justify-content: center;
`

const CardsContainer = styled.div`
    display: grid;
    gap: 24px;
    grid-template-rows: 350px 350px;
    grid-template-columns: repeat(3, 0fr);
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 1100px) {
        grid-template-columns: repeat(2, 0fr);
    }

    @media screen and (max-width: 750px) {
        grid-template-columns: repeat(1, 0fr);
    }

    @media screen and (min-width: 1800px) {
        grid-template-columns: repeat(4, 0fr);
    }
`

function Freelances() {
    const { theme } = useTheme()
    const { data, isLoading, error } = useFetch(
        'http://localhost:8000/freelances'
    )
    const freelancersList = data?.freelancersList

    if (error) {
        return (
            <LoaderWrapper>
                <span>Oups... Il y a eu un problème...</span>
            </LoaderWrapper>
        )
    }

    return (
        <div>
            <PageTitle theme={theme}>Trouvez votre prestataire</PageTitle>
            <PageSubtitle theme={theme}>
                Chez Shiny nous réunissons les meilleurs profils pour vous.
            </PageSubtitle>
            {isLoading ? (
                <LoaderWrapper>
                    <Loader theme={theme} data-testid="loader" />
                </LoaderWrapper>
            ) : (
                <CardsContainer>
                    {freelancersList.map((profile, index) => (
                        <Card
                            key={`${profile.name}-${index}`}
                            label={profile.job}
                            title={profile.name}
                            picture={profile.picture}
                        />
                    ))}
                </CardsContainer>
            )}
        </div>
    )
}

export default Freelances
