import axios from "axios"
// Extra utilities.
import {shuffleArray} from "./utils"

export type Question = {
    category: string;
    type: string;
    difficulty: string;
    question: string;
    correct_answer: string;
    incorrect_answers: string[];
}

export type QuestionState = Question & {answers:string[]}

// Describing set of constants which are our difficulties.
export enum DIFFICULTIES {
    EASY = "easy",
    MEDIUM = "medium",
    HARD = "hard"
}

export enum ENCODING {
    URLLEGACY = "urlLegacy",
    URL3986 = "url3986",
    URLBASE64 = "base64"
}

export class QuestionsAPI {
    baseUrl: string = "https://opentdb.com/api.php"

    async getQuestions(amount:number, category:number, difficulty:string) {
        const question_url = `${this.baseUrl}?amount=${String(amount)}&category=${category}&difficulty=${difficulty}`
        let data = await (await axios.get(question_url)).data
        console.log(question_url)
        //
        return data.results.map((question:Question) => ({
            ...question,
            answers: shuffleArray([...question.incorrect_answers, question.correct_answer])
        }))
    }
}