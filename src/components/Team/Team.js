import React from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from 'react-router-dom';

const useStyles= makeStyles({
    root: {
        textAlign:'center',
        width:350,
        padding:20,
        marginBottom:10,
        marginTop:15,
        margin:'auto'

    },
    media: {
        maxWidth: 160,
    },
    button: {
        marginTop:10
    }
})
const Team = (props) => {
    const history =useHistory()
    const teamHandle=(teamKey)=> {
        history.push(`/team/${teamKey}`)
    }
    const classes= useStyles()
    const {strTeam,strSport,strTeamBadge, idTeam }=props.team;
    return (
        <Card className={classes.root} justify="center">
             <CardMedia>
                <img style={{width:'120px'}} src={strTeamBadge} alt="" />
            </CardMedia>
            <Typography variant="h5">
                {strTeam}
            </Typography>
            <Typography>
                Sports Type:{strSport}
            </Typography>
            <Typography >
                <Button 
                onClick={()=>teamHandle(idTeam)}
                className={classes.button} variant="contained" color="primary">Explore<FontAwesomeIcon style={{marginLeft:'5px'}} icon={faArrowRight} /></Button>
            </Typography>
            
        </Card>
    );
};

export default Team;