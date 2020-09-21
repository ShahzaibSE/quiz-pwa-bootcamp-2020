import React, {useState,useContext} from 'react'
import {Grid, Card} from "@material-ui/core"
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import NavigateNext from "@material-ui/icons/NavigateNext"
import Typography from '@material-ui/core/Typography';
import {AnimationWrapper} from "react-hover-animation"
import LinearProgress from '@material-ui/core/LinearProgress';
import { Fade } from "react-awesome-reveal";
// Assets
import "./CategoryList.scss"
import {categoryStyle, questionLoaderStyles, circularQuizLoader} from "./CateogoryList.style"
import {questionStyles} from "./../QuestionCard/QuestionCard.style"
// Context.
import {CategoryContext} from "./categories_context/Category.context"
// Components.
import QuestionCard from "./../QuestionCard/QuestionCard"
import Scorecard from "./../ScoreCard/ScoreCard"
// API.
import {QuestionsAPI, DIFFICULTIES, QuestionState} from "./../api/index.api"
// Utils.
import {removeDuplicates} from "./../api/utils"

// Total questions.
const total_questions: number = 10;

type AnswerObject = {
    question: string;
    answer: string;
    isCorrectAnswer: boolean;
    correct_answer: string;
}

const CategoryList = () => {
    const [isQuiz, setQuiz] = useState(false)
    const [isScoreCard, setScoreCard] = useState(false)
    const [categoryNumber, setCategoryNumber] = useState(0)
    const [difficulty, setDifficulty] = useState("easy")
    const [isEasyDifficulty, setEasyDifficultySelected] = useState(false)
    const [isMediumDifficulty, setMediumDifficultySelected] = useState(false)
    const [isHardDifficulty, setHardDifficultySelected] = useState(false)
    // Styles //
    const category_classes = categoryStyle()
    const question_classes = questionStyles()
    const question_loader_classes = questionLoaderStyles()
    const circular_loader_classes = circularQuizLoader()

    // -- //
    const {categories: {general_knowledge,
                        geogprahy, video_games, 
                        history, mathematics, computers}} = useContext(CategoryContext)  
    // Quiz prequisites.
    let questions_api = new QuestionsAPI()

    // Question prequisites
    const [isLoading, setLoading] = useState(false);
    const [questions, setQuestions] = useState<QuestionState[]>([]);
    const [number, setNumber] = useState(0);
    const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
    const [score, setScore] = useState(0);
    const [gameOver, setGameOver] = useState(true)   
    // -- //   

    const select_difficulty = (selected_difficulty:string) => {
        if (selected_difficulty === "easy") {
            setDifficulty(DIFFICULTIES.EASY)
            setEasyDifficultySelected(!isEasyDifficulty)
            setMediumDifficultySelected(false)
            setHardDifficultySelected(false)
            console.log("Selected difficulty")
            console.log(selected_difficulty)
        }
        if (selected_difficulty === "medium") {
            setDifficulty(DIFFICULTIES.MEDIUM)
            setEasyDifficultySelected(false)
            setMediumDifficultySelected(!isMediumDifficulty)
            setHardDifficultySelected(false)
            console.log("Selected difficulty")
            console.log(selected_difficulty)
        }
        if (selected_difficulty === "hard") {
            setDifficulty(DIFFICULTIES.HARD)
            setEasyDifficultySelected(false)
            setMediumDifficultySelected(false)
            setHardDifficultySelected(!isHardDifficulty)
            console.log("Selected difficulty")
            console.log(selected_difficulty)
        }
    }
    // -- Quiz Handler -- //
    const start_quiz = async (category:any) => {
        if (category === "General Knowledge"){
            setCategoryNumber(general_knowledge.id)
            // Starting Quiz here //
            setLoading(true)
            setGameOver(false)
            // 
            const newQuestions = await questions_api.getQuestions(total_questions, categoryNumber, difficulty)
            console.log("Fetched questions")
            console.log(newQuestions)
            setQuestions(newQuestions)
            setScore(0)
            setUserAnswers([])
            setNumber(0)
            setLoading(false)
            // -- //
            setQuiz(!isQuiz)
        }
        if(category === "Geography"){
            setCategoryNumber(geogprahy.id)
            // Starting Quiz here //
            setLoading(true)
            setGameOver(false)
            // 
            const newQuestions = await questions_api.getQuestions(total_questions, categoryNumber, difficulty)
            console.log("Fetched questions")
            console.log(newQuestions)
            setQuestions(newQuestions)
            setScore(0)
            setUserAnswers([])
            setNumber(0)
            setLoading(false)
             // -- //
            setQuiz(!isQuiz)
        } 
        if(category === "Video Games"){
            setCategoryNumber(video_games.id)
            // Starting Quiz here //
            setLoading(true)
            setGameOver(false)
            // 
            const newQuestions = await questions_api.getQuestions(total_questions, categoryNumber, difficulty)
            setQuestions(newQuestions)
            setScore(0)
            setUserAnswers([])
            setNumber(0)
            setLoading(false)
            // -- //
            setQuiz(!isQuiz)
        } 
        if(category === "History"){
            setCategoryNumber(history.id)
            // Starting Quiz here //
            setLoading(true)
            setGameOver(false)
            // 
            const newQuestions = await questions_api.getQuestions(total_questions, categoryNumber, difficulty)
            setQuestions(newQuestions)
            setScore(0)
            setUserAnswers([])
            setNumber(0)
            setLoading(false)
            // -- //
            setQuiz(!isQuiz)
        } 
        if(category === "Mathematics"){
            setCategoryNumber(mathematics.id)
            // Starting Quiz here //
            setLoading(true)
            setGameOver(false)
            // 
            const newQuestions = await questions_api.getQuestions(total_questions, categoryNumber, difficulty)
            setQuestions(newQuestions)
            setScore(0)
            setUserAnswers([])
            setNumber(0)
            setLoading(false)
            // -- //
            setQuiz(!isQuiz)
        } 
        if(category === "Computers"){
            setCategoryNumber(computers.id)
            // Starting Quiz here //
            setLoading(true)
            setGameOver(false)
            // 
            const newQuestions = await questions_api.getQuestions(total_questions, categoryNumber, difficulty)
            setQuestions(newQuestions)
            setScore(0)
            setUserAnswers([])
            setNumber(0)
            setLoading(false)
            // -- //
            setQuiz(!isQuiz)
        } 
    }
    // 
    console.log(questions_api.getQuestions(total_questions, 9, DIFFICULTIES.EASY))
    //
    console.log("Questions")
    console.log(questions)
    //
    const checkAnswer = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!gameOver) {
            const answer = e.currentTarget.value
            console.log(`User's answer: ${answer}`)
            console.log(`Number: ${String(number)}`)
            // Checking correct answer.
            const isCorrectAnswer = questions[number].correct_answer === answer;
            //
            if(isCorrectAnswer) { setScore(prev => prev + 1) }
            // Save user answer in the array.
            const answerObject = {
                question: questions[number].question,
                answer,
                isCorrectAnswer,
                correct_answer: questions[number].correct_answer
            }
            // console.log("Answer Object")
            // console.log(answerObject)
            setUserAnswers((prev) => removeDuplicates([...prev, answerObject],'question'))
        }
    }
    // console.log("User Answers")
    // console.log(userAnswers)
    //
    console.log("After removing duplicates answers.")
    console.log(removeDuplicates(userAnswers, 'question'))

    const nextQuestion = () => {
        // To navigate to next question.
        const nextQuestion = number + 1;
        //
        if (nextQuestion === total_questions) {
            setGameOver(true)
        }else {
            setNumber(nextQuestion);
        }
    }

    const submitAnswers = () => {
        setScoreCard(!isScoreCard)
    }

    // --- //
    if (isScoreCard) {
        return (<Fade><Scorecard score={score} totalQuestions={total_questions} /></Fade>)
    }
    else if (isQuiz) {
        return(
           <Fade> 
            <div className="quiz_container">
                <Grid container alignItems="center" justify="center">
                    <Grid item xs={12} sm={12} md={6} lg={6}>

                        <Card className={question_classes.root}>

                            {/* {!gameOver ? <Typography component="h6">Score:</Typography> : null} */}

                            {isLoading &&
                            <div className="question_loader">
                                <LinearProgress color="secondary" />
                            </div>}

                            {!isLoading && !gameOver && (

                            <QuestionCard 
                                questionNum = {number + 1}
                                totalQuestions = {total_questions}
                                question = {questions[number].question}
                                answers = {questions[number].answers}
                                userAnswer = {userAnswers[number] ? userAnswers : undefined}
                                callback = {checkAnswer}
                            />)}
                            {/* {!gameOver && !isLoading && userAnswers.length === number + 1 &&  */}
                            {!gameOver && !isLoading && userAnswers.length === number + 1 &&
                                number !== total_questions - 1 ? 
                                <CardActions className={question_classes.card_actions_container}>
                                    <Fab color="primary" onClick={nextQuestion}><NavigateNext/></Fab>
                                </CardActions> : null}
                            {!gameOver && number === total_questions - 1 ? 
                                <CardActions className={question_classes.card_actions_container}>
                                    <Button variant="contained" color="secondary" onClick={submitAnswers}>
                                        Submit
                                    </Button>
                                </CardActions>: null}    
                        </Card>

                    </Grid>
                </Grid>  
            </div>
            </Fade>
        )
    }else{
                                  
        return (
        <Fade>
        <div>   
            <div className="difficulty_container">
                <Grid container spacing={3} alignItems="center" justify="center">
                    <Grid item sm={2} md={2} lg={2}>
                        <AnimationWrapper config={{
                                            transform:{initial:'scale(1)',onHover:'scale(1.1)'},
                                            opacity: {initial:'1',onHover:'1'}
                                        }}>  
                            <Button id={isEasyDifficulty ? 'easy_difficulty_selected' : 'easy_button'}
                                className="button_dimensions" variant="contained" color="primary" 
                                onClick={()=>{select_difficulty('easy')}}>EASY</Button>
                        </AnimationWrapper>    
                    </Grid>
                    <Grid item sm={2} md={2} lg={2}>
                        <AnimationWrapper config={{
                                            transform:{initial:'scale(1)',onHover:'scale(1.1)'},
                                            opacity: {initial:'1',onHover:'1'}
                                        }}>
                            <Button id={isMediumDifficulty ? 'medium_difficulty_selected' : 'medium_button'} 
                                    className="button_dimensions" variant="contained" color="secondary"
                                    onClick={()=>{select_difficulty('medium')}}>MEDIUM</Button>
                        </AnimationWrapper>            
                    </Grid>
                    <Grid item sm={2} md={2} lg={2}>
                        <AnimationWrapper config={{
                                            transform:{initial:'scale(1)',onHover:'scale(1.1)'},
                                            opacity: {initial:'1',onHover:'1'}
                                        }}>
                            <Button id={isHardDifficulty ? 'hard_difficulty_selected' : 'hard_button'}  className="button_dimensions" variant="contained" color="secondary"
                                    onClick={()=>{select_difficulty('hard')}}>HARD</Button>
                        </AnimationWrapper>            
                    </Grid>
                </Grid>
            </div>    
            <div className="category_list_container"> 
                    <Grid container spacing={3}>
                        <Grid item sm={6} md={2} lg={2}>
                            <AnimationWrapper config={{
                                        transform:{initial:'scale(1)',onHover:'scale(1.1)'},
                                        opacity: {initial:'1',onHover:'1'}
                                    }}>
                            <Card className={category_classes.root}>
                                <CardContent>
                                    <Typography variant="subtitle1" className={category_classes.card_heading}>
                                                {general_knowledge.name}</Typography>
                                    <div>
                                        <img className="image_container" src={general_knowledge.image} 
                                            alt="General Knowledege" width={40} height={40} />
                                    </div>
                                </CardContent>
                                <CardActions>
                                    <Button className={category_classes.btn} variant="contained" color="secondary"
                                            onClick={()=>{start_quiz('General Knowledge')}}>
                                        Start Quiz
                                    </Button>
                                </CardActions>
                            </Card>
                            </AnimationWrapper>
                        </Grid>

                        <Grid item sm={6} md={2} lg={2}>
                            <AnimationWrapper config={{
                                            transform:{initial:'scale(1)',onHover:'scale(1.1)'},
                                            opacity: {initial:'1',onHover:'1'}
                                        }}>
                            <Card className={category_classes.root}>
                                <CardContent>
                                    <Typography variant="subtitle1" className={category_classes.card_heading}>
                                                {geogprahy.name}</Typography>
                                    <div>
                                        <img className="image_container" src={geogprahy.image} 
                                            alt="Geography" width={40} height={40} />
                                    </div>
                                </CardContent>
                                <CardActions>
                                    <Button className={category_classes.btn} variant="contained" color="secondary"
                                    onClick={()=>{start_quiz('Geography')}}>
                                        Start Quiz
                                    </Button>
                                </CardActions>
                            </Card>
                        </AnimationWrapper> 
                        </Grid>

                        <Grid item sm={6} md={2} lg={2}>
                            <AnimationWrapper config={{
                                            transform:{initial:'scale(1)',onHover:'scale(1.1)'},
                                            opacity: {initial:'1',onHover:'1'}
                                        }}>
                            <Card className={category_classes.root}>
                                <CardContent>
                                    <Typography variant="subtitle1" className={category_classes.card_heading}>
                                                {video_games.name}</Typography>
                                    <div>
                                        <img className="image_container" src={video_games.image} 
                                            alt="Video Games" width={40} height={40} />
                                    </div>
                                </CardContent>
                                <CardActions>
                                    <Button className={category_classes.btn} variant="contained" color="secondary"
                                    onClick={()=>{start_quiz('Video Games')}}>
                                        Start Quiz
                                    </Button>
                                </CardActions>
                            </Card>
                        </AnimationWrapper> 
                        </Grid>
                        <Grid item sm={6} md={2} lg={2}>
                        <AnimationWrapper config={{
                                        transform:{initial:'scale(1)',onHover:'scale(1.1)'},
                                        opacity: {initial:'1',onHover:'1'}
                                    }}>
                            <Card className={category_classes.root}>
                                <CardContent>
                                    <Typography variant="subtitle1" className={category_classes.card_heading}>
                                                {history.name}</Typography>
                                    <div>
                                        <img className="image_container" src={history.image} 
                                            alt="History" width={40} height={40} />
                                    </div>
                                </CardContent>
                                <CardActions>
                                    <Button className={category_classes.btn} variant="contained" color="secondary"
                                    onClick={()=>{start_quiz('History')}}>
                                        Start Quiz
                                    </Button>
                                </CardActions>
                            </Card>
                        </AnimationWrapper> 
                        </Grid>

                        <Grid item sm={6} md={2} lg={2}>
                            <AnimationWrapper config={{
                                            transform:{initial:'scale(1)',onHover:'scale(1.1)'},
                                            opacity: {initial:'1',onHover:'1'}
                                        }}>
                            <Card className={category_classes.root}>
                                <CardContent>
                                    <Typography variant="subtitle1" className={category_classes.card_heading}>
                                                {mathematics.name}</Typography>
                                    <div>
                                        <img className="image_container" src={mathematics.image} 
                                            alt="Mathematics" width={40} height={40} />
                                    </div>
                                </CardContent>
                                <CardActions>
                                    <Button className={category_classes.btn} variant="contained" color="secondary"
                                    onClick={()=>{start_quiz('Mathematics')}}>
                                        Start Quiz
                                    </Button>
                                </CardActions>
                            </Card>
                        </AnimationWrapper> 
                        </Grid>

                        <Grid item sm={6} md={2} lg={2}>
                            <AnimationWrapper config={{
                                            transform:{initial:'scale(1)',onHover:'scale(1.1)'},
                                            opacity: {initial:'1',onHover:'1'}
                                        }}>
                            <Card className={category_classes.root}>
                                <CardContent>
                                    <Typography variant="subtitle1" className={category_classes.card_heading}>
                                                {computers.name}</Typography>
                                    <div>
                                        <img className="image_container" src={computers.image} 
                                            alt="Computers" width={40} height={40} />
                                    </div>
                                </CardContent>
                                <CardActions>
                                    <Button className={category_classes.btn} variant="contained" color="secondary"
                                    onClick={()=>{start_quiz('Computers')}}>
                                        Start Quiz
                                    </Button>
                                </CardActions>
                            </Card>
                        </AnimationWrapper> 
                        </Grid>

                    </Grid>
            </div>
        </div> 
        </Fade>
        )
        }
}

export default CategoryList
