import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { styled } from 'styled-components'
import colors from '../../styles/colors'
import { Loader } from '../../styles/links'

const SurveyContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const QuestionTitle = styled.h2`
    text-decoration: underline;
    text-decoration-color: ${colors.primary};
`

const QuestionContent = styled.span`
    margin: 30px;
`

const LinkWrapper = styled.div`
    padding-top: 30px;
    & a {
        color: black;
    }
    & a:first-of-type {
        margin-right: 20px;
    }
`

function Survey() {
    const { questionNumber } = useParams()
    const questionNumberInt = parseInt(questionNumber)
    const prevQuestionNumber =
        questionNumberInt === 1 ? 1 : questionNumberInt - 1
    const nextQuestionNumber = questionNumberInt + 1
    const [surveyData, setSurveyData] = useState({})
    const [isDataLoading, setDataLoading] = useState(false)
    const [error, setError] = useState(null)

    //Méthode plus concise et directe à privilégier si pas d'opérations asynchrones complexes ni gestion d'erreurs
    /*
    useEffect(() => {
        setDataLoading(true)
        fetch(`http://localhost:8000/survey`).then((response) =>
            response.json().then(({ surveyData }) => {
                setSurveyData(surveyData)
                setDataLoading(false)
            })
        )
    }, [])
    */

    useEffect(() => {
        async function fetchSurvey() {
            setDataLoading(true)
            try {
                const response = await fetch(`http://localhost:8000/survey`)
                const { surveyData } = await response.json()
                setSurveyData(surveyData)
            } catch (err) {
                console.log(err)
                setError(true)
            } finally {
                setDataLoading(false)
            }
        }
        fetchSurvey()
    }, [])

    return (
        <SurveyContainer>
            <QuestionTitle>Question {questionNumber}</QuestionTitle>
            {isDataLoading ? (
                <Loader />
            ) : (
                <QuestionContent>{surveyData[questionNumber]}</QuestionContent>
            )}
            <LinkWrapper>
                <Link to={`/survey/${prevQuestionNumber}`}>Précédent</Link>
                {surveyData[questionNumberInt + 1] ? (
                    <Link to={`/survey/${nextQuestionNumber}`}>Suivant</Link>
                ) : (
                    <Link to="/results">Résultats</Link>
                )}
            </LinkWrapper>
        </SurveyContainer>
    )
}

export default Survey
