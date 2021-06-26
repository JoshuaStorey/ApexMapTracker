import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, IconButton, Toolbar} from "@material-ui/core";
import SortIcon from "@material-ui/icons/Sort";
import List from "@material-ui/core/List";
import clsx from "clsx";
import Drawer from "@material-ui/core/Drawer";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import CloseIcon from '@material-ui/icons/Close';
import { withRouter } from "react-router-dom";
const drawerWidth = 360;
const drawerWidthSmall = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    fontFamily: "Poppins",
  },
  appbarTransparent: {
    backgroundColor: "transparent",
    boxShadow: "none",
  },
  appbarSolid: {
    backgroundColor: "#151515",
  },
  appbarTitle: {
    flexGrow: "1",
  },
  icon: {
    color: "#eeeeee",
    fontSize: "2rem",
  },
  hide: {
    display: "none",
  },
  drawerPaper: {
    width: drawerWidth,
    background: "#151515",
    color: "#eeeeee",
    [theme.breakpoints.down('xs')]: {
      width: drawerWidthSmall,
    }
  },
  drawerHeader: {
    display: "flex",
    alignItems: "right",
  },
  copyright: {
    paddingTop: "710px",
  },
  listItemText: { 
    color: "#eeeeee",
    fontSize:'1.4rem',
  },
}));

const Navbar = (props) => {
  const { history } = props;
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [navBackground, setNavBackground] = useState('appbarTransparent');

  const navRef = React.useRef();
  navRef.current = navBackground;


  useEffect(() => {
    const handleScroll = () => { 
      console.log(window.scrollY);
        const show = window.scrollY > 50
        if (show) { 
          setNavBackground('appbarSolid');
          console.log("here");
        }else { 
          setNavBackground('appbarTransparent');
        }
    }
    document.addEventListener('scroll',handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    }
  }, [])

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const navItemsList = [
    {
      text: "Battle Royale Map Tracker",
      onClick: () => history.push("/"),
    },
    {
      text: "Arenas Map Tracker",
      onClick: () => history.push("/arenas"),
    },
    {
      text: "About",
      onClick: () => history.push("/about"),
    },
  ];

  const changeBackground = (e) => { 
    e.target.style.background = '#B8B5FF';
  }
  const changeBackgroundBack = (e) => { 
    e.target.style.background = 'none';
  }

  const handleTitleClick = () => { 
    history.push("/");
  }

  return (
    
    <div>
 
      <AppBar
        className={(classes[navRef.current])}
        evelation={0}
        position="fixed"
      >
        <Toolbar className={classes.appbarWrapper}>
          
          <h1 className={classes.appbarTitle} onClick={handleTitleClick} style={{cursor:'pointer'}}>Apex Legends Map Rotation</h1>
         
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(open && classes.hide)}
          >
            <SortIcon classes={classes.icon} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="temporary"
        anchor="right"
        open={open}
        onEscapeKeyDown= {handleDrawerClose}
        onBackdropClick = {handleDrawerClose}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        {" "}
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            <CloseIcon className={classes.icon} />
          </IconButton>
        </div>
        <List>
          {navItemsList.map((item, index) => {
            const { text, onClick } = item;
            return (
              <ListItem  button key={text} onMouseEnter={changeBackground} onMouseLeave={changeBackgroundBack} onClick={onClick}>
                <ListItemText
                  classes={{primary:classes.listItemText}}
                  primary={text}
                ></ListItemText>
              </ListItem>
            );
          })}
          <ListItem className={classes.copyright}>
            <ListItemText>©2021. All rights reserved.</ListItemText>
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
};

export default withRouter(Navbar);
