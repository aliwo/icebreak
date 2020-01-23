import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from "@material-ui/core/Toolbar";
import { Menu as MenuIcon, Mail as MailIcon } from '@material-ui/icons';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { AppBar, Drawer } from './App.material';

class App extends React.Component {

  state = {
      drawerOpen: false
  };

  toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    this.setState({ ...this.state, drawerOpen: open });
  };

  render() {
      return (
          <div className="App">
              <Drawer open={this.state.drawerOpen} onClose={this.toggleDrawer('left', false)}>
                  <List>
                    {['시작하기', '서비스 소개', '내 질문 올리기', '신고하기'].map((text, index) => (
                      <ListItem button key={text}>
                        <ListItemIcon><MailIcon/></ListItemIcon>
                        <ListItemText primary={text} />
                      </ListItem>
                    ))}
                  </List>
              </Drawer>
              <AppBar position="static">
                  <Toolbar>
                      <IconButton edge="start" color="inherit"
                                  aria-label="menu" onClick={this.toggleDrawer('left', true)}>
                        <MenuIcon/>
                      </IconButton>
                  </Toolbar>
              </AppBar>
          </div>
      );
  }
}

export default App;
