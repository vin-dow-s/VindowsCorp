import { styled } from 'styled-components'
import colors from '../../utils/styles/colors'
import errorIllustration from '../../assets/404.svg'

const ErrorContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 30px;
    padding: 60px 90px;
    max-width: 2000px;
    background-color: ${colors.backgroundLight};
`

const ErrorText = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
    font-size: 18px;
    color: #434655;
`

const Illustration = styled.img`
    flex: 1;
    height: 800px;
    width: 800px;
    margin-bottom: 50px;
`

function Error() {
    return (
        <ErrorContainer>
            <ErrorText>Oups...</ErrorText>
            <Illustration src={errorIllustration} alt="404"></Illustration>
            <ErrorText>Il semblerait qu'il y ait un problème</ErrorText>
        </ErrorContainer>
    )
}

export default Error
