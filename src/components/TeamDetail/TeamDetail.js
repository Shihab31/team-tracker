import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import './TeamDetail.css'
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import TeamImage from '../../images/male.png'
import { makeStyles } from '@material-ui/core/styles';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarCheck ,faFlag, faFutbol, faVenusMars} from '@fortawesome/free-solid-svg-icons'

const useStyles= makeStyles({
    root: {
        backgroundColor:'#3A42FF',
        height:320,
        padding:20,
        borderRadius:10,
        marginTop:20
        
    },
    title: {
        color:'#fff',
        fontSize:25,
        fontWeight:700,
        marginBottom:8,
        marginTop:45
    },
    subTitle:{
        color:'#fff',
        lineHeight:1.7,
        fontSize:16
    },
    description:{
        color:'#fff',
        fontSize:14,
        marginTop:26,
        lineHeight:1.9
    }
})
const TeamDetail = () => {
    const classes= useStyles()
    const {teamKey}=useParams()
    const [teamDetail, setteamDetail]=useState({})
    console.log(teamDetail)
    useEffect(()=> {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamKey}`)
        .then(res=> res.json())
        .then(data => setteamDetail(data.teams[0]))
        
    },[])
    return (
        <div className="team-detail-style">
            <div className="team-details" style={{textAlign:'center'}}>
               <img src={teamDetail.strTeamBadge} alt="" />
            </div>
            <div>
                <Container>
                    <Grid container className={classes.root}>
                        <Grid direction="row" justify="center"  alignItems="center" item md={6}>
                            <Typography variant="h5" className={classes.title}>
                            {teamDetail.strTeam}
                            </Typography>
                            <Typography className={classes.subTitle}>
                            <FontAwesomeIcon style={{marginRight:'10px'}} icon={faCalendarCheck} />  Founded:{teamDetail.intFormedYear}
                            </Typography>
                            <Typography className={classes.subTitle}>
                            <FontAwesomeIcon style={{marginRight:'10px'}} icon={faFlag} /> Country: {teamDetail.strCountry}
                            </Typography>
                            <Typography className={classes.subTitle}>
                            <FontAwesomeIcon style={{marginRight:'10px'}} icon={faFutbol} /> Sports Type:{teamDetail.strSport}
                            </Typography>
                            <Typography className={classes.subTitle}>
                            <FontAwesomeIcon style={{marginRight:'10px'}} icon={faVenusMars} /> Gender: {teamDetail.strGender}
                            </Typography>
                        </Grid>
                        <Grid item direction="row" justify="center"  md={6}>
                            <img style={{width:'100%', height:'65%',marginTop:'19px'}} src={TeamImage} alt="" />
                        </Grid>
                    </Grid>
                    <Grid>
                        <Grid item md={12}>
                            <Typography className={classes.description}>
                                {teamDetail.strStadiumDescription}
                            </Typography>
                            <Typography className={classes.description}>
                                {teamDetail.strStadiumDescription}
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </div>
    );
};

export default TeamDetail;