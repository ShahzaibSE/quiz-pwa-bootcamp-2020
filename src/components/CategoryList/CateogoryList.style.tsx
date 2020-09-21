import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';


export const categoryStyle = makeStyles(theme => ({
    root: {
      flexGrow:1
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
    card_heading: {
      fontWeight:"bold",
      fontSize:18,
      textAlign:'center'
    },
    btn: {
      margin: theme.spacing(1),
      minWidth: '11rem',
      marginLeft: 10,
      marginRight: 10,
      flexGrow:1
    }
}));

export const questionLoaderStyles = makeStyles((theme: Theme) =>
      createStyles({
        root: {
          width: '70%',
          // '& > * + *': {
          //   marginTop: theme.spacing(2),
          // },
        },
      }),
);

export const circularQuizLoader = makeStyles((theme: Theme) =>
createStyles({
  root: {
      display: 'flex',
      '& > * + *': {
        marginLeft: theme.spacing(2),
      },
    },
  }),
);