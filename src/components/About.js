import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Container } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: { 
    backgroundColor: 'white',
    fontFamily: 'Poppins',
  },
  pageContent: { 
    width: '100%',
  },
  container: { 
    display: 'flex',
    alignItems: 'left',
    justifyContent : 'center',
    flexWrap: 'wrap',
    alignContent: 'left',
  },
  column: { 
    flexDirection: 'column',
  },
  row: { 
    flexDirection: 'row',
  },
  aboutSection : { 
    minHeight: '40vh',
    backgroundColor: '#7e57c2',
    padding: '0 0 0 60px',
    [theme.breakpoints.down('xs')]:{ 
      padding: '70px 20px 20px 20px',
    }
  },
 
  FaqSection : { 
    minHeight: '60vh',
    backgroundColor: '#eeeeee',
    padding: '0 0 20px 60px',
    [theme.breakpoints.down('xs')]:{ 
      padding: '0 20px 20px 20px',
    }
  },
  contactSection : { 
    minHeight: '20vh',
    backgroundColor: '#151515',
    padding: '0 20px 0 60px',
    [theme.breakpoints.down('xs')]:{ 
      padding: '0 20px 20px 20px',
    }
  },
  Titles: {
    justifyContent: "left",
    textAlign: "left",
    fontSize: "3rem",
    padding : '0 0 0 0',
    margin: '10px 0 5px 0',
    [theme.breakpoints.down('xs')]:{ 
      margin: '30px 0 5px 0',
    }
  },
}));

const About = () => {
  const classes = useStyles();
  return (
    <div className={`${classes.root} ${classes.pageContent}`}>
      
     <section className={`${classes.container} ${classes.column} ${classes.aboutSection}`}>
      <div className = {`${classes.container} ${classes.column}`}>
      <h1 className={classes.Titles}>About</h1>
      <Typography variant="h6">
          Only want to play a specific map in Apex Legends?
        </Typography>
        <br></br>
        <Typography variant="h6">
          Check here to find the current map in rotation in both Battle Royale
          and Arenas!
        </Typography>
      </div>
     </section>
     <section className={`${classes.container} ${classes.column} ${classes.FaqSection}`}>
      <div className = {`${classes.container} ${classes.column}`}>
      <h1 className={classes.Titles}>FAQ</h1>
        <Typography variant="h6" style={{ color: "#7e57c2", fontWeight: 'bold' }}>
          <br/>
          What is an Apex Legends Map Rotation Tool?
        </Typography>
        <br/>
        <Typography variant="h6" style={{ color: "#151515" }}>
          Apex Legends is a video game created by Respawn Entertainment. The video game has multiple maps that are on a set timer. Some players prefer to only play on select maps. This tool allows them to easily check without having to login to their computers and or the game.
        </Typography>
        <br/>
        <Typography variant="h6" style={{ color: "#7e57c2", fontWeight: 'bold' }}>
          How do you know the current maps?
        </Typography>
        <br/>
        <Typography variant="h6" style={{ color: "#151515" }}>
          The map rotation is not actually random at all. There are many ways of actually finding out the rotation. However, I am making use of a publicly available API in order to fetch the current map for both Battle Royale and Arenas and displaying it on your screen. 
        </Typography>
        <br/>
        <Typography variant="h6" style={{ color: "#7e57c2", fontWeight: 'bold' }}>
          Why did you make this when there is already a tool out there?
        </Typography>
        <br/>
        <Typography variant="h6" style={{ color: "#151515" }}>
         This was a fun little project that tests some of the skills i've recently been learning.
        </Typography>
        <br/>
        <Typography variant="h6" style={{ color: "#7e57c2", fontWeight: 'bold' }}>
          What technologies did you use?
        </Typography>
        <br/>
        <Typography variant="h6" style={{ color: "#151515" }}>
         UI was built with React. 
        </Typography>
      </div>
     </section>
     <section className={`${classes.container} ${classes.column} ${classes.contactSection}`}>
      <div className = {`${classes.container} ${classes.column}`}>
      <h1 className={classes.Titles} style={{ color: "#ffeb3b" }} >Contact</h1>
      <Typography variant="h6" style={{ color: "#eeeeee", fontWeight: 'bold' }}>
          <br/>
         Encountered an issue?
        </Typography>
        <br/>
        <Typography variant="h6" style={{ color: "#eeeeee" }}>
         Open an issue on the github page and it will be resolved soon!
        </Typography>
        <br/>
      </div>
     </section>
    </div>
  );
};

export default About;
