import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) =>({
    paper: {
        textAlign: "center",
        margin: theme.spacing(-1),
        padding: theme.spacing(0.5,2),
    
        [theme.breakpoints.down('xs')]: {
          margin: theme.spacing(-1),
          padding: theme.spacing(1,2.5,2,1)
        },
    },
    carousel: {
        '& .carousel-root': {
            width: '55%',
            margin: theme.spacing(5),
            [theme.breakpoints.down('xs')]: {
              width: '50%',
              margin: theme.spacing(0.5),
            }
          }    
    }
})
    
)
export default function WorksPage () {
    const classes = useStyles();
    return (
    <paper className={classes.paper}>
        <Carousel autoPlay className={classes.carousel} style={{width: "10%"}}>
        <div>
            <img alt="" src={require('../images/img1.PNG')} />
            <p className="legend">Portfolio App</p>
        </div>
        <div>
            <img alt="" src={require('../images/img2.PNG')} />
            <p className="legend">Weather App</p>
        </div>
        <div>
            <img alt="" src={require('../images/img3.PNG')} />
            <p className="legend">Portfolio App</p>
        </div>
        <div>
            <img alt="" src={require('../images/img4.PNG')} />
            <p className="legend">Web App</p>
        </div>
    
    </Carousel>
    </paper>
    )
}
