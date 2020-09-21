import { makeStyles } from '@material-ui/core/styles';
import { spacing } from '@material-ui/system';


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