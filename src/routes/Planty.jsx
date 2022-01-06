import React from 'react'
import '../App.css';
import StaticCard from '../components/StaticCard';
import Navbar from '../components/Navbar'
import Home from '../img/planty/home.PNG'
import Login from '../img/planty/login.PNG'

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
                href="/planty"
                ></StaticCard>

                <StaticCard 
                inverted={true}
                class="card static"
                src={Login}
                alt="Podras"
                tittle="Log in and Sign up pages"
                text="Once you open your app, the log in page shows up. If you already used an 
                account, you will be redirected to the home page"
                href="/planty"
                ></StaticCard>

            </div>

        </>
    )
}
