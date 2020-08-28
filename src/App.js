import React, {useState} from 'react';
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
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import DrawerData from '../src/data/drawerData';
import AppRouter from '../src/components/AppRouter'
import { Link as RouterLink} from 'react-router-dom';
import {Avatar} from '@material-ui/core';
import avatar from "./images/logo.png"
import GetAppRoundedIcon from '@material-ui/icons/GetAppRounded';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const drawerWidth = 240;
const appBarColor = "#0B72B9"
const drawerItemColor = "#0B72B9"
const drawerSelectedColor = "#1798f1"
const iconColor = "#085489"

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    
  },
  avatar:{
    display: "block",
    border: `2px solid ${iconColor}`,
    margin: "1.2rem auto -2.5rem auto",
    background: "#fff",
    width: theme.spacing(12),
    height: theme.spacing(12)
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
      background: `${appBarColor}`,
      color: "#fff",
    },
    [theme.breakpoints.down('sm')]: {
      background: `${appBarColor}`
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
    
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  isActive: {
    color: 'green',
    fontWeight: 'bold',
    background: 'red'
  },
    drawerItem: {
    // color: "#003777",
    color: `${drawerItemColor}`,
    opacity: 0.8,
    fontFamily: "Raleway",
    textTransform: "none",
    fontWeight: 800,
    fontSize: "1rem",
    textDecoration: "none",
  },
  drawerItemSelected: {
    "& .MuiListItemText-root": {
      opacity: 1,
      color: `${drawerSelectedColor}`,   
    }, 
  },
  name: {
    [theme.breakpoints.down('md')]: {
      fontSize:"1.3rem"
    },
  },
  resumeDownload: {
    color: "white", 
    fontSize:"1.2rem",
    [theme.breakpoints.down('md')]: {
      fontSize:"0.8rem"
    },
  }
}));

function ResponsiveDrawer(props) {
  const { container } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  const matches = useMediaQuery(theme.breakpoints.down("sm"))

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  
  const [selectedIndex, setSelectedIndex] = useState(1);
  
  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };
  const drawer = (
    <div>
    <Avatar className={classes.avatar} src={avatar} alt="Users Image"/>
      <div className={classes.toolbar} />

      <Divider color="primary"/>

      <List>
        {Object.keys(DrawerData.menu).map(menu => (
          <Link className={classes.isActive} component={RouterLink} to={DrawerData.menu[menu].route} underline='none'>
            <ListItem button key={menu} classes={{selected: classes.drawerItemSelected}}
                selected={selectedIndex === menu}  
                onClick={(event) => handleListItemClick(event, menu)}>
              <ListItemIcon style={{color: `${iconColor}`}}> {React.createElement(DrawerData.menu[menu].icon)} </ListItemIcon>
              {
                matches ? 
                <ListItemText className={classes.drawerItem} disableTypography primary={menu} onClick={handleDrawerToggle} />: 
                <ListItemText className={classes.drawerItem} disableTypography primary={menu}  /> 
              }
            </ListItem>
          </Link>
        ))}
      </List>

      <Divider color="primary"/>
      <Divider color="primary"/>
      
      <List>
        {Object.keys(DrawerData.social).map(social => (
          <Link href={DrawerData.social[social].route} color='inherit' target='_blank' rel='noopener' underline="none">
          <ListItem button key={social} selected={selectedIndex === social}
                    classes={{selected: classes.drawerItemSelected}}
                    onClick={(event) => handleListItemClick(event, social)}>
            <ListItemIcon style={{color: `${iconColor}`}}>{React.createElement(DrawerData.social[social].icon)}</ListItemIcon>
            <ListItemText className={classes.drawerItem} disableTypography primary={social}  />
          </ListItem>
          </Link>
        ))}
      </List>

      <Divider color="primary"/>
      <Divider color="primary"/>
      <Typography color="primary" style={{margin: "8px auto 0 50px", fontStyle:"italic", fontWeight: 400}}>{'\u00A9'} 2020 IDEAQU</Typography>
    </div>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar} color="secondary">
        <Toolbar >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h4"  className={classes.name}>
            Shashank Kumar
          </Typography>
          <GetAppRoundedIcon style={{marginLeft:"auto"}}/>
          <div className={classes.resumeDownload}>         
            <a style={{textDecoration: "none", color: "#fff"}} href={require('./data/resume.pdf')} download="Shashank's Resume">            
             Resume</a>              
          </div>
          
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
        <AppRouter/>
      </main>
    </div>
  );
}

ResponsiveDrawer.propTypes = {
  window: PropTypes.func,
};

export default ResponsiveDrawer;