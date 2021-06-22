import React from 'react';
import Team from '../Team/Team';
import { useEffect } from 'react';
import { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import './Home.css'
import Image from '../../images/header.jpg'


const Home = () => {
    const [club, setClub] = useState([])
    useEffect(()=> {
        fetch('https://www.thesportsdb.com/api/v1/json/1/lookup_all_teams.php?id=4328')
        .then(res => res.json())
        .then(data => setClub(data.teams))
    
    },[])
    return (
        <div className="home-bg">
            <div className="header-image">
                <h2>Team Tracker</h2>
            </div>
            <Grid container justify="center">
                {
                club.map(team => 
                <Grid xs={12} sm={6} md={4}>
                    <Team team={team}></Team>
                </Grid>
                ) 
                }
            </Grid>
            
       </div>
    );
};

export default Home;