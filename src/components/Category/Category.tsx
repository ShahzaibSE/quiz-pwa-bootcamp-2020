import React, {useState} from 'react'
import {Card} from "@material-ui/core"
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {BrowserRouter as Router, Routes, useParams} from "react-router-dom"
// Assets.
import {categoryStyle} from "./Category.style"
import general_knowledge from "./../images/gk-pic.png"
import "./Category.scss"
// Component.
import Quiz from "./../Quiz/Quiz"

// Props.
type CategoryProps = {
    category: {id:number ,name:string, image:any}
}

const Category = ({category}: CategoryProps) => {
    const [isStartQuiz, setStartQuiz] = useState(false)
    const classes = categoryStyle()
    let {name, image} = category
    //
    const start_quiz = () => {
        setStartQuiz(!isStartQuiz)
    }
    //
    return (
        <div>
            <Card className={classes.root}>
                <CardContent>
                    <Typography variant="subtitle1" className={classes.card_heading}>{name}</Typography>
                    <div>
                        <img className="image_container" src={image} 
                            alt="General Knowledege" width={40} height={40} />
                    </div>
                </CardContent>
                <CardActions>
                    <Button className={classes.btn} variant="contained" color="secondary">
                        Start Quiz
                    </Button>
                </CardActions>
            </Card>
        </div>    
    )
}

export default Category
