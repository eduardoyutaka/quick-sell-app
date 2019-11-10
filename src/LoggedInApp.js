import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import StoreIcon from '@material-ui/icons/Store';
import DataUsageIcon from '@material-ui/icons/DataUsage';
import HomeIcon from '@material-ui/icons/Home';
import SettingsIcon from '@material-ui/icons/Settings';
import PaymentIcon from '@material-ui/icons/Payment';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import { Switch, Route, Link } from 'react-router-dom';
import Dashboard from './Dashboard/Dashboard';
import Checkout from './Checkout/Checkout';
import Orders from './Dashboard/Orders';
import Pricing from './Pricing/Pricing';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function ResponsiveDrawer(props) {
  const { container } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const logout = () => {
    localStorage.removeItem('loggedIn');
    window.location.href = '/';
  }

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <ListItem button key="Home">
            <ListItemIcon><HomeIcon /></ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
        </Link>
        <Link to="/analytics" style={{ textDecoration: "none", color: "inherit" }}>
          <ListItem button key="Analytics">
            <ListItemIcon><DataUsageIcon /></ListItemIcon>
            <ListItemText primary="Analytics" />
          </ListItem>
        </Link>
        <Link to="/purchases" style={{ textDecoration: "none", color: "inherit" }}>
          <ListItem button key="Vendas">
            <ListItemIcon><PaymentIcon /></ListItemIcon>
            <ListItemText primary="Vendas" />
          </ListItem>
        </Link>
        <Link to="/storage" style={{ textDecoration: "none", color: "inherit" }}>
          <ListItem button key="Estoque">
            <ListItemIcon><StoreIcon /></ListItemIcon>
            <ListItemText primary="Estoque" />
          </ListItem>
        </Link>
      </List>
      <Divider />
      <List>
        <Link to="/settings" style={{ textDecoration: "none", color: "inherit" }}>
          <ListItem button key="Configurações">
            <ListItemIcon><SettingsIcon /></ListItemIcon>
            <ListItemText primary="Configurações" />
          </ListItem>
        </Link>
        <Link to="/" onClick={logout} style={{ textDecoration: "none", color: "inherit" }}>
          <ListItem button key="Sair">
            <ListItemIcon><PowerSettingsNewIcon /></ListItemIcon>
            <ListItemText primary="Sair" />
          </ListItem>
        </Link>
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
    {localStorage.getItem('loggedIn') &&
      <React.Fragment>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
              Quick Sell
            </Typography>
          </Toolbar>
        </AppBar>
        <nav className={classes.drawer} aria-label="mailbox folders">
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Hidden smUp implementation="css">
            <Drawer
              container={container}
              variant="temporary"
              anchor={theme.direction === 'rtl' ? 'right' : 'left'}
              open={mobileOpen}
              onClose={handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper,
              }}
              variant="permanent"
              open
            >
              {drawer}
            </Drawer>
          </Hidden>
        </nav>
        <main className={classes.content}>
          <div className={classes.toolbar} />
            <Switch>
              <Route exact path="/">
                Home
              </Route>
              <Route path="/analytics">
                <Dashboard />
              </Route>
              <Route path="/purchases">
                <Checkout />
              </Route>
              <Route path="/storage">
                <Orders />
              </Route>
              <Route path="/settings">
                Settings
              </Route>
              <Route path="/logout">
                <Pricing />
              </Route>
            </Switch>
        </main>
      </React.Fragment>
    }
    </div>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  container: PropTypes.instanceOf(typeof Element === 'undefined' ? Object : Element),
};

export default ResponsiveDrawer;
