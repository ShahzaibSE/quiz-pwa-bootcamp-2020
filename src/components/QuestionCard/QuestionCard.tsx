import React from 'react'
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Fade } from "react-awesome-reveal";
import { AllHtmlEntities } from "html-entities";
// Assets.
import {questionStyles} from "./QuestionCard.style";
import "./QuestionCard.scss";

type QuestionProps = {
    question: string;
    answers: string[];
    callback: (e: React.ChangeEvent<HTMLInputElement>) => void;
    userAnswer: any;
    questionNum: number;
    totalQuestions: number;
}


const QuestionCard: React.FC<QuestionProps> = ({question, answers, questionNum, callback, totalQuestions}) => {
    const classes = questionStyles()
    // HTML Entity decoder.
    const {decode} = new AllHtmlEntities();
    //
    const [value, setValue] = React.useState('');
    const [error, setError] = React.useState(false);
    const [helperText, setHelperText] = React.useState('Choose wisely');
    // For question type.
    let type:string = "boolean"

    const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue((event.target as HTMLInputElement).value);
        setHelperText(' ');
        setError(false);
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    
        // if (value === 'best') {
        // //   setHelperText('You got it!');
        //   setError(false);
        // } else if (value === 'worst') {
        // //   setHelperText('Sorry, wrong answer!');
        //   setError(true);
        // } else {
        // //   setHelperText('Please select an option.');
        //   setError(true);
        // }
    };
    //
    //
    return (
        <div> 
        <form>   
            {/* <Card className={classes.root}> */}
                <Fade>
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Question: {questionNum} / {totalQuestions}
                    </Typography>
                    <Typography className={classes.question_text} variant="h5">{decode(question)}</Typography>
                    <RadioGroup className={classes.form_container} 
                                aria-label="quiz" name="quiz" value={decode(value)} onChange={handleRadioChange}>
                        {answers.map(answer => (  
                            <FormControlLabel key={decode(answer)} value={decode(answer)} control={<Radio onChange={callback} />} 
                                    label={decode(answer)} />       
                        ))}
                    </RadioGroup>
                </CardContent>
                </Fade>

                {/* <CardActions className={classes.card_actions_container}>
                    <Fab color="primary"><NavigateNext/></Fab>
                </CardActions> */}

            {/* </Card> */}
        </form>
    </div>  
    )
    //
}

export default QuestionCard
