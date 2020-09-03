import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';

import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import avatar from '../images/avatar.jpg';
import { Chip, Box } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
        borderRadius: '10',
        border: '2px solid #fff'
      },
      media: {
        display: 'flex',
		width: '100%',
		height: '35vh',
		zIndex: 0,
		borderRight: '-2',
		maxHeight: '30%',
		clipPath: 'polygon(0 0, 100% 0%, 100% 84%, 0% 100%)',
      },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
		width: 150,
		height: 150,
		border: '2px solid #fff',
		margin: '-100px 46px 0 auto',
		'& > img': {
			margin: 0,
		},
	},
    skills: {
        fontWeight: '550',
		display: 'flex',
		justifyContent: 'center',
		flexWrap: 'wrap',
		padding: theme.spacing(1),
		margin: '20px 0 0 auto',
	 },
	 chip: {
        margin: theme.spacing(1.5),
        background: '#a5afd7'
     },
     aboutMe: {
        marginLeft: '10px'
	 },
	 removeFocus:{
		borderRight: 0,
		outline: "none"
	 }
  }),
);

export default function RecipeReviewCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [keySkills] = React.useState([
    { key: 0, label: 'NodeJS' },
    { key: 1, label: 'ReactJs' },
    { key: 2, label: 'JavaScript' },
    { key: 3, label: 'MongoDB' },
    { key: 4, label: 'Firebase' },
    { key: 5, label: 'Postman' },
    { key: 6, label: 'AWS' },
    { key: 7, label: 'Docker' },
    { key: 8, label: 'Selenium' },
    { key: 9, label: 'Bootstrap' },
    { key: 10, label: 'Java' },
 ]);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    
    <Card className={classes.root}>
			<CardMedia className={classes.media}
				image='https://unsplash.com/photos/f77Bh3inUpE/download?force=true&w=1920'
            />
            <Avatar className={classes.avatar} src={avatar}/>
			<CardContent>
				<Typography gutterBottom variant="h5" component="h2">
					Software Engineer
				</Typography>
				<Typography gutterBottom variant="h7" component="h3">
					at Capgemini Technology Services India Ltd, Mumbai, India
                </Typography>

				<p variant="body2" color="textSecondary" component="p">
					I am working as a Software Developer for Capgemini Technology Services India Ltd, India, for the past
					1 year 11 months.
                </p>
          
				
				<Box className={classes.skills} >
					{keySkills.map(skill => (
							<Chip
							key={skill.key}
						//  icon={icon}
							label={skill.label}
							className={classes.chip}
						/>
					))}
				</Box>
				
			</CardContent>
			
			<CardActions disableSpacing>
			<Typography gutterBottom variant="h5" component="h2" className={classes.aboutMe}>About Me</Typography>
			<IconButton
				className={clsx(classes.expand, {
					[classes.expandOpen]: expanded,
				})}
				onClick={handleExpandClick}
				aria-expanded={expanded}
				aria-label="show more"
			>
			<ExpandMoreIcon fontSize="large" color="primary"className={classes.removeFocus}/>
			</IconButton>
			</CardActions>
			<Collapse in={expanded} timeout="auto" unmountOnExit>
				<CardContent>
				<Typography variant="h6" color="textSecondary" component="p">
					Experienced Software Developer<br/>

					I have an insightful knowledge in ReactJs, JavaScript, Redux, Flux.<br/><br/>

					I have:<br/>
					Knowledge of NodeJS, Express, MongoDB, Java and developed & deployed MERN Applications live.<br/>
					I have experience in developing Web Applications with MongoDB atlas Database and deployed on AWS.<br/>
					I have designed REST API for endpoint operations in SingPass project to ensure the authenticity of the user.<br/>
					I have experience in designing client side application platform with React for the management of transactions.  <br/>
				</Typography>	
				</CardContent>
			</Collapse>
        </Card>
	);
}
