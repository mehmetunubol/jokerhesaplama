import { makeStyles } from '@material-ui/core/styles';
import CoverImage from '../images/fastfoods.jpg';

export const useStyles = makeStyles(theme => ({
  appBar: {
    position: 'relative',
    textAlign: 'justify',
  },
  headerText: {
    textAlign: 'center',
    color: '#b81705',
    padding: "10px",
  },
  cover: {
    backgroundImage: `url(${CoverImage})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '1000px'
  },
  layout: {
    backgroundColor: 'black',
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  
}));
