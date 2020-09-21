import { makeStyles, Theme, createStyles, createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme();

theme.typography.h3 = {
  fontSize: '1.2rem',
  '@media (min-width:600px)': {
    fontSize: '1.5rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2.4rem',
  },
};

export const scoreCardStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      minWidth: 30,
      // height: "40rem",
      marginTop:90,
      borderRadius:10
    },
    media: {
      minHeight: 100,
      minWidth: 100,
      paddingTop: '56.25%', // 16:9
    },
    scorecard_result_text: {
      textAlign:"center",
      fontWeight:"bold"
    },
    quiz_score: {
      textAlign:"center",
      fontWeight:"bold"
    },
    restart_btn:{
      width:70,
      height:70
    },
    restart_icon: {
      fontSize:30
    }
  })
);