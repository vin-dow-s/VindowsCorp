import { Link, useParams } from 'react-router-dom'
import { styled } from 'styled-components'

const SurveyContainer = styled.div`
    display: flex;
    justify-content: center;
`

const QuestionTitle = styled.h1``

function Survey() {
    const { questionNumber } = useParams()
    const questionNumberInt = parseInt(questionNumber)
    const previousQuestionNumber =
        questionNumberInt === 1 ? 1 : questionNumberInt - 1
    const nextQuestionNumber = questionNumberInt + 1
    return (
        <SurveyContainer>
            <QuestionTitle>Question {questionNumber}</QuestionTitle>
            <Link to={`/survey/${previousQuestionNumber}`}>
                Question précédente
            </Link>
            {questionNumberInt === 10 ? (
                <Link to="/results">Résultats</Link>
            ) : (
                <Link to={`/survey/${nextQuestionNumber}`}>
                    Question suivante
                </Link>
            )}
        </SurveyContainer>
    )
}

export default Survey
