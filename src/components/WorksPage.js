import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => {

})
const WorksPage = () => (
    <div>
        <Carousel autoPlay>
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
    </div>
);

export default WorksPage;