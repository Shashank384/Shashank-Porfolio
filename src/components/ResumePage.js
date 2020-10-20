import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import LinearProgress from '@material-ui/core/LinearProgress';
import { Typography } from '@material-ui/core';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const iconColor = "#085489"
const dateColor = "#1798f1"
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    width: "100%",
    padding: theme.spacing(4),
    color: theme.palette.text.secondary,
  },
  gridTitle: {
    color: "#929292",
    fontSize: "2rem",
    marginLeft: "1em",
    [theme.breakpoints.down('xs')]: {
      fontSize: "1rem",
    },
    [theme.breakpoints.down('md')]: {
      fontSize: "1.8rem",
    }
  },
  gridTitleContainer: {
    textAlign: "center",
    fontSize: "3em" , 
    color: `${iconColor}`,
    [theme.breakpoints.down('xs')]: {
      fontSize: "1rem",
    },
    [theme.breakpoints.down('md')]: {
      fontSize: "1.8em",
    }
  },
  expContainer: {
    margin: "1rem"
  },

  date: {
    margin: "30px 0 11px",
    padding: "0 5px",
    fontSize: "0.9rem",
    lineHeight: "18px",
    border: `1px solid ${dateColor}`,
    fontWeight: 400,
    color: `${dateColor}`,
    float: "Left",
  },
  name: {
    margin: "0",
    fontSize: "1.2rem",
    color: "#323232",
    fontWeight: 500,
    textAlign: "left",
  },
  company: {
    margin: "0 0 11px",
    fontSize: "1rem",
    color: "#999",
    fontWeight: 400,
    textAlign: "left",
  },
  singlePost: {
    fontSize: "1.2rem",
    color: "#a1a1a1",
    fontWeight: 200,
    textAlign: "left",
  },
 
  LinearProgress: {
    height: 10,
    borderRadius: 5
  },
  CircularProgressbar: {
    margin:"0.5rem",
    width: "35%",
    [theme.breakpoints.down('md')]: {
      width: "55%",
    },
  },
  gridContainer:{
    alignItems:"center",
    textAlign: "center",
  }


}));

export default function ResumePage() {
  const classes = useStyles();

  return (  
    <div className={classes.root}>
      <Grid container spacing={1} >
          
        <Grid item sm={12} md={6}>
          <Paper className={classes.paper}>
            
                <div className={classes.gridTitleContainer}>
                    <i class="fa fa-briefcase"/>
                    <span className={classes.gridTitle}>Experience</span>
                </div>
                <Divider variant="middle"/>
            
                
            <Grid container direction="column" >
              <Grid item>
              <div className={classes.date}>June 2020 - Present </div>               
              </Grid>
              <Grid item><div className={classes.name}>React Developer</div>
              </Grid>
              <Grid item><div className={classes.company}>Capgemini Technology Services India Ltd. </div>
              </Grid>
              <Grid item><Typography className={classes.singlePost}>Collaborate with the creative and development <br>
                    </br>teams on the execution of ideas. </Typography>
              </Grid>

              <Grid item>
                <Typography className={classes.date}> Jan 2020 - May 2020 </Typography>               
              </Grid>
              <Grid item><Typography className={classes.name}>Senior Software Developer</Typography>
              </Grid>
              <Grid item><Typography className={classes.company}>Capgemini Technology Services India Ltd., Mumbai </Typography>
              </Grid>
              <Grid item><Typography className={classes.singlePost}>Collaborate with the creative and development <br>
                    </br>teams on the execution of ideas. </Typography>
              </Grid>
            

            
              <Grid item>
                <Typography className={classes.date}>Sep 2018 - Nov 2019 </Typography>               
              </Grid>
              <Grid item><Typography className={classes.name}>Software Developer</Typography>
              </Grid>
              <Grid item><Typography className={classes.company}>Capgemini Technology Services India Ltd., Mumbai </Typography>
              </Grid>
              <Grid item><Typography className={classes.singlePost}>Collaborate with the creative and development <br>
                    </br>teams on the execution of ideas. </Typography>
              </Grid>
          
            </Grid>
          </Paper>
        </Grid>


        
        <Grid item sm={12} md={6}>
          <Paper className={classes.paper}>
            <div className={classes.gridTitleContainer}>
                <i class="fa fa-university"/>
                <span className={classes.gridTitle}>Education</span>    
            </div>
            <Divider variant="middle"/>

            <Grid container direction="column">
              <Grid item>
                <div className={classes.date}>2014 - 2018 </div>               
              </Grid>
              <Grid item><div className={classes.name}>Sathyabama University</div>
              </Grid>
              <Grid item><div className={classes.company}>Chennai, Tamil Nadu </div>
              </Grid>
              <Grid item className={classes.singlePost}><p>Bachelor's degree in Computer Science & Technology </p>
              </Grid>
           

              <Grid item>
                <div className={classes.date}>2012 - 2014 </div>               
              </Grid>
              <Grid item><div className={classes.name}>Kiddy Convent High School</div>
              </Grid>
              <Grid item><div className={classes.company}>Patna, Bihar </div>
              </Grid>
              <Grid item className={classes.singlePost}><p>12th from Kiddy Convent High School, Patna </p>
              </Grid>

              <Grid item>
                <div className={classes.date}>2010 - 2012 </div>               
              </Grid>
              <Grid item><div className={classes.name}>Kendriya Vidyalaya</div>
              </Grid>
              <Grid item><div className={classes.company}>Chandigarh, Punjab </div>
              </Grid>
              <Grid item className={classes.singlePost}><p>Matriculation </p>
              </Grid>

            </Grid>
          </Paper>
        </Grid> 

      </Grid>


{/* This is First Part Skills*/}

      <Grid container spacing={1}
          className={classes.gridContainer} 
             >

        <Grid item sm={12} md={6}>
        <Paper className={classes.paper}>
              <div className={classes.gridTitleContainer}>
                <i class="fa fa-codiepie"></i>
                <span className={classes.gridTitle}>Skills</span>
              </div>
          <Divider variant="middle"/><br/>

          <Grid item >
            <Typography variant="h6" align="left" component="h1">Web Design</Typography>
              <LinearProgress className={classes.LinearProgress}
              variant="determinate" value={80} /><br/>
            <Typography variant="h6" align="left" component="h1">Photoshop</Typography>
              <LinearProgress className={classes.LinearProgress}
                variant="determinate" value={70} /><br/>
            <Typography variant="h6" align="left" component="h1">Material-UI</Typography>
              <LinearProgress className={classes.LinearProgress}
                variant="determinate" value={75} /><br/>     
          </Grid>

          <Grid container justify="center" alignItems="center" spacing={1}>
              <Grid item container>
                <Grid item xs>
                  <CircularProgressbar className={classes.CircularProgressbar}
                              value={80} text={`${80}%`} />
                  <Typography variant="h6" component="h1">JavaScript</Typography>
                </Grid>
                <Grid item xs>
                  <CircularProgressbar className={classes.CircularProgressbar}
                              value={80} text={`${80}%`} />
                  <Typography variant="h6" component="h1">ReactJs</Typography>
                </Grid>
              </Grid>
              <Grid item container>
                <Grid item xs>
                <CircularProgressbar className={classes.CircularProgressbar}
                value={90} text={`${90}%`} />
                <Typography variant="h6" component="h1">HTML/CSS</Typography>
                </Grid>
                <Grid item xs>
                  <CircularProgressbar className={classes.CircularProgressbar}
                              value={75} text={`${75}%`} />
                  <Typography variant="h6" component="h1">NodeJs</Typography>
                </Grid>
              </Grid>
               
            </Grid>
          </Paper> 
        </Grid>
    {/* This is second Part Languages*/}
        <Grid item sm={12} md={6}>
        <Paper className={classes.paper}>
        <div className={classes.gridTitleContainer}>
          <i class="fa fa-globe"></i>
          <span className={classes.gridTitle} >Languages</span>
        </div>
    <Divider variant="middle"/><br/>

    <Grid item direction="column">
      <Typography variant="h6" align="left" component="h1">English</Typography>
        <LinearProgress className={classes.LinearProgress}
        variant="determinate" value={90} /><br/>
      <Typography variant="h6" align="left" component="h1">Hindi</Typography>
        <LinearProgress className={classes.LinearProgress}
          variant="determinate" value={95} /><br/>
      <Typography variant="h6" align="left" component="h1">Punjabi</Typography>
        <LinearProgress className={classes.LinearProgress}
          variant="determinate" value={60} /><br/>     
    </Grid>

    <Grid container justify="center" alignItems="center" spacing={1}>
        <Grid item container>
        <Grid item xs style={{block: "inline"}}>
        <CircularProgressbar className={classes.CircularProgressbar}
                    value={85} text={`${85}%`} />
        <Typography variant="h6" component="h1">MongoDB</Typography>
      </Grid>
          <Grid item xs style={{block: "inline"}}>
            <CircularProgressbar className={classes.CircularProgressbar}
                        value={70} text={`${70}%`} />
            <Typography variant="h6" component="h1">Express</Typography>
          </Grid>
        </Grid>
        <Grid item container>
          <Grid item xs>
          <CircularProgressbar className={classes.CircularProgressbar}
          value={80} text={`${80}%`} />
          <Typography variant="h6" component="h1">RestAPI</Typography>
          </Grid>
          <Grid item xs>
            <CircularProgressbar className={classes.CircularProgressbar}
                        value={80} text={`${80}%`} />
            <Typography variant="h6" component="h1">Postman</Typography>
          </Grid>
        </Grid>
         
      </Grid>
    </Paper> 
        </Grid>
      </Grid>
    </div>
  );
}

