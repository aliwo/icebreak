import _Drawer from '@material-ui/core/Drawer';
import _AppBar from '@material-ui/core/AppBar';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
import { withStyles } from '@material-ui/core/styles';


const AppBar = withStyles({
    root: {
        color: 'black',
        backgroundColor: 'white',
        boxShadow: 'none'
    }
})(_AppBar);


const Drawer = withStyles({
    root: {
    }
})(_Drawer);


export { AppBar, Drawer };
