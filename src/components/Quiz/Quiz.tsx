import React, {useState} from 'react'
import {Grid} from "@material-ui/core"
// API.
import {QuestionsAPI, DIFFICULTIES, QuestionState} from "./../api/index.api"
// Assets.
import "./Quiz.scss"
// Component
import QuestionCard from "../QuestionCard/QuestionCard"

const total_questions: number = 10

type QuizPropes = {
    category: number,
    difficulty: string
}

type AnswerObject = {
    question: string;
    answer: string;
    isCorrectAnswer: boolean;
    correctAnswer: string;
}

const Quiz = ({category, difficulty}:QuizPropes) => {
    let questions_api = new QuestionsAPI()
    // Question prequisites
    const [isLoading, setLoading] = useState(false);
    const [questions, setQuestions] = useState<QuestionState[]>([]);
    const [number, setNumber] = useState(0);
    const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
    const [score, setScore] = useState(0);
    const [gameOver, setGameOver] = useState(false)
    // 
    console.log(questions_api.getQuestions(total_questions, 9, DIFFICULTIES.EASY))
    //
    // Quiz handlers.
    const startQuiz = async ()=>{
        setLoading(true)
        setGameOver(false)
        // 
        const newQuestions = await questions_api.getQuestions(total_questions, category, difficulty)
        console.log("Fetched questions")
        console.log(newQuestions)
        setQuestions(newQuestions)
        setScore(0)
        setUserAnswers([])
        setNumber(0)
        setLoading(false)

    }

    startQuiz()

    console.log("Questions")
    console.log(questions)

    const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {}

    const nextQuestion = () => {}

    // Accessing API.
    // useEffect(()=>{
    //     questions_api.getQuestions(10,9,'easy').then(response => {
    //         questions = response.data
    //         console.log("Questions")
    //         console.log(questions)
    //     })
    // },[])
    //
    console.log(`Category Number: ${String(category)}`)
    console.log(`Difficulty: ${difficulty}`)
    //
    return (
        <div className="quiz_container">
          <Grid container alignItems="center" justify="center">
               <Grid item xs={12} sm={12} md={6} lg={6}>
                   {/* <QuestionCard 
                     questionNum = {number + 1}
                     totalQuestions = {total_questions}
                     question = {questions[number].question}
                     answers = {questions[number].answers}
                     userAnswer = {userAnswers[number] ? userAnswers : undefined}
                     callback = {checkAnswer}
                   /> */}
               </Grid>
            </Grid>  
            {/* {questions.map(question => (
                <h2>{question.question}</h2>
            ))} */}
        </div>
    )
}

export default Quiz
