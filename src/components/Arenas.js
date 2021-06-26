import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Collapse } from "@material-ui/core";
import axios from "axios";
import Countdown from "react-countdown";
import ReactLoading from "react-loading";

const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: "Poppins",
  },
  pageContent: { 
    width: '100%',
  },
  container: { 
    display: 'flex',
    alignItems: 'center',
    justifyContent : 'center',
    textAlign: "center",
    flexWrap: 'wrap',
    alignContent: 'center',
  },
  column: { 
    flexDirection: 'column',
  },
  row: { 
    flexDirection: 'row',
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
  arenaSection : { 
    minHeight: '100vh',
    backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/arenas.jpg'})`,
    boxShadow: "inset 0 0 0 1000px rgba(0,0,0,.6)",
  },
}));

const Arenas = () => {
  const [apexMap, setapexMap] = useState(null);
  const [apexTimeTillNext, setTimeTillNext] = useState(1000);
  const [done, setDoneState] = useState(undefined);
  const [checked, setChecked] = useState(false);

  const url =
  "https://api.mozambiquehe.re/maprotation?version=2&auth=" + process.env.REACT_APP_API_KEY;

  useEffect(() => {
    axios.get(url).then((response) => {
      setapexMap(response.data.arenas.current.map);
      setTimeTillNext(response.data.arenas.current.remainingSecs * 1000);
      setDoneState(true);
      setChecked(true);
    });
  }, [url]);

  const UpdateMap = () => {
    setDoneState(false);
    setTimeout(() => {
        axios.get(url).then((response) => {
            setapexMap(response.data.arenas.current.map);
            setTimeTillNext(response.data.arenas.current.remainingSecs * 1000);
            setDoneState(true);
          });
      }, 10000);
   

    return (
      <div className={`${classes.container} ${classes.column}`}>
        <h1 className={classes.title}>{apexMap}</h1>
        <h1 className={classes.timeLeft}>
          <Countdown
            date={Date.now() + apexTimeTillNext}
            autoStart={true}
          ></Countdown>
        </h1>
      </div>
    );
  };

  const classes = useStyles();
  return (
    <div className={`${classes.root} ${classes.pageContent}`}>
     <section className={`${classes.container} ${classes.arenaSection}`}>
      <div>
      {!done ? (
        <ReactLoading type={"balls"} color={"#fff"} height={125} width={125} />
      ) : (
        <div className={`${classes.container}`}>
          <Collapse
            in={checked}
            {...(checked ? { timeout: 1000 } : {})}
            collapsedHeight={50}
          >
            <div className={`${classes.container} ${classes.column}`}>
              <h1 className={classes.title}>{apexMap}</h1>
              <h1 className={classes.timeLeft}>
                <Countdown date={Date.now() + apexTimeTillNext}>
                  <UpdateMap />
                </Countdown>
              </h1>
            </div>
          </Collapse>
        </div>
      )}
      </div>
    
    </section> 
    </div>
  );
};

export default Arenas;
