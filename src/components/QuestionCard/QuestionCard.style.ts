import { makeStyles } from '@material-ui/core/styles';

export const questionStyles = makeStyles({
    root: {
      minWidth: 275,
      borderRadius: 10
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    card_actions_container:{
      float:"right",
      fontWeight:"bold"
    },
    question_text: {
      fontWeight:"bold"
    },
    form_container:{
      paddingTop:20,
      paddingBottom:20
    }
  });
