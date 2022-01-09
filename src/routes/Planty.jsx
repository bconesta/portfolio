import React from 'react'
import '../App.css';
import StaticCard from '../components/StaticCard';
import Navbar from '../components/Navbar';
import Home from '../img/planty/home.PNG';
import Login from '../img/planty/login.PNG';
import Settings from '../img/planty/config.PNG';
import LoginEn from '../img/planty/login_en.PNG';

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

            </div>

        </>
    )
}
