import DefaultPicture from '../../assets/profile.png'
import Card from '../../components/Card'
import styled from 'styled-components'
import colors from '../../styles/colors'
import { Loader } from '../../styles/links'
import { useState, useEffect } from 'react'

const PageTitle = styled.h1`
    text-align: center;
    padding-bottom: 20px;
    font-size: 30px;
    color: black;
`

const PageSubtitle = styled.h2`
    text-align: center;
    padding-bottom: 50px;
    font-size: 20px;
    font-weight: 300;
    color: ${colors.secondary};
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
    const [freelancersList, setFreelancersList] = useState([])
    const [isDataLoading, setDataLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        async function fetchFreelances() {
            setDataLoading(true)
            try {
                const response = await fetch(`http://localhost:8000/freelances`)
                const { freelancersList } = await response.json()
                setFreelancersList(freelancersList)
            } catch (err) {
                console.log(err)
                setError(true)
            } finally {
                setDataLoading(false)
                //document.body.style.overflowY = 'auto' // Rétablit l'affichage de la barre de défilement
            }
        }
        fetchFreelances()
    }, [])

    if (error) {
        return <span>Oups... Il y a eu un problème...</span>
    }

    return (
        <div>
            <PageTitle>Trouvez votre prestataire</PageTitle>
            <PageSubtitle>
                Chez Shiny nous réunissons les meilleurs profils pour vous.
            </PageSubtitle>
            {isDataLoading ? (
                <LoaderWrapper>
                    <Loader />
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
