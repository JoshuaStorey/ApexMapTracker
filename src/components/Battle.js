import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Collapse } from "@material-ui/core";
import axios from "axios";
import Countdown from "react-countdown";
import ReactLoading from "react-loading";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    fontFamily: "Poppins",
    backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/olympus2.jpg'})`,
    boxShadow: "inset 0 0 0 1000px rgba(0,0,0,.6)",
  },
  container: {
    textAlign: "center",
  },
  title: {
    color: "#fff",
    fontSize: "6rem",
    [theme.breakpoints.down('xs')]: { 
      fontSize: '4rem',
    }
  },
  timeLeft: {
    color: "#fff",
    fontSize: "2.5rem",
  },
}));

const Battle = (props) => {


  const [apexMap, setapexMap] = useState(null);
  const [apexTimeTillNext, setTimeTillNext] = useState(1000);
  const [done, setDoneState] = useState(false);
  const [checked, setChecked] = useState(false);
  
  const url =
    "https://api.mozambiquehe.re/maprotation?version=2&auth=" + process.env.REACT_APP_API_KEY;

  useEffect(() => {
    axios.get(url).then((response) => {
      setapexMap(response.data.battle_royale.current.map);
     
      setTimeTillNext(response.data.battle_royale.current.remainingSecs * 1000);
      setDoneState(true);
      setChecked(true);
    });
  }, [url]);

  const UpdateMap = () => {
      setDoneState(false);
      setTimeout(() => {
        axios.get(url).then((response) => {
          setapexMap(response.data.battle_royale.current.map);
          setTimeTillNext(response.data.battle_royale.current.remainingSecs * 1000);
          setDoneState(true);
        });
      }, 10000);
  

    return (
      <div>
        <h1 className={classes.title}>{apexMap}</h1>
        <h1 className={classes.timeLeft}>
          <Countdown date={Date.now() + apexTimeTillNext} autoStart={true}></Countdown>
        </h1>
      </div>
    );
  };

 



  const classes = useStyles();
  return (
    <div>
    {apexMap !== "Olympus" ? (<div style={{background: `url(${process.env.PUBLIC_URL + '/assets/worldsedge.jpg'})`}} className={classes.root}>
    
    {!done ? (<ReactLoading
          type={"balls"}
          color={"#fff"}
          height={125}
          width={125}
        />): (<div>
            
            <Collapse in={checked} {...(checked ? {timeout: 1000}: {})} collapsedHeight={50}>
            <div className={classes.container}>
              <h1 className={classes.title}>{apexMap}</h1>
              <h1 className={classes.timeLeft}>
                <Countdown date={Date.now() + apexTimeTillNext}>
                  <UpdateMap/>
                </Countdown>
              </h1>
             
            </div>
            </Collapse>
          </div>)}
    </div>) : (<div  className={classes.root}>
    
    {!done ? (<ReactLoading
          type={"balls"}
          color={"#fff"}
          height={125}
          width={125}
        />): (<div>
            
            <Collapse in={checked} {...(checked ? {timeout: 1000}: {})} collapsedHeight={50}>
            <div className={classes.container}>
              <h1 className={classes.title}>{apexMap}</h1>
              <h1 className={classes.timeLeft}>
                <Countdown date={Date.now() + apexTimeTillNext}>
                  <UpdateMap/>
                </Countdown>
              </h1>
             
            </div>
            </Collapse>
          </div>)}
    </div>)}
    </div>
  );
}

export default Battle;
