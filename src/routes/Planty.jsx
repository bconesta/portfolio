import React from 'react'
//Styles
import '../App.scss';
//Components
import StaticCard from '../components/StaticCard';
import Navbar from '../components/Navbar';
import VerticalCard from '../components/VerticalCard';
//Images
import Home from '../img/planty/home.PNG';
import Login from '../img/planty/login.PNG';
import Settings from '../img/planty/config.PNG';
import LoginEn from '../img/planty/login_en.PNG';
import Jira from '../img/planty/jira.png';

export default function Planty() {
    return (
        <>
            <Navbar class="Navbar"/>
            <div className='body-static'>
                <StaticCard 
                inverted={false}
                class="card static"
                src={Home}
                alt="Podras"
                tittle="Mi Planty"
                text="This is the final project we made at school. It is composed by a 
                physical system (smart flowerpot) and an app, builded using Ionic/Angular.
                In the image on the left you can see the Home page, where the user is able
                to check its planty's realtime weather."
                ></StaticCard>

                <StaticCard 
                inverted={true}
                class="card static"
                src={Login}
                alt="Podras"
                tittle="Log in and Sign up pages"
                text="Once you open your app, the log in page shows up. If you already used an 
                account, you will be redirected to the home page. Accounts are managed using 
                Firebase Authentication."
                ></StaticCard>

                <StaticCard
                inverted={false}
                class="card static"
                src={Settings}
                alt="Podras"
                tittle="Settings page"
                text=""
                ></StaticCard>

                <StaticCard 
                inverted={true}
                class="card static"
                src={LoginEn}
                alt="Podras"
                tittle="Multiple lenguages available"
                text="The user can select between english and spanish."
                ></StaticCard>

                <VerticalCard
                class="card static"
                src={Jira}
                alt="Podras"
                tittle="Project management"
                text="Jira was used for task management and sprints division, working with the Scrum model."
                ></VerticalCard>
            </div>

        </>
    )
}
