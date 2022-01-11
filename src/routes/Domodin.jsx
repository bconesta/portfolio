import React from 'react'
import '../App.scss';
import StaticCard from '../components/StaticCard';
import Navbar from '../components/Navbar'
import Home from '../img/domodin/home.PNG'
import Login from '../img/domodin/login.PNG'

export default function Domodin() {
    return (
        <>
            <Navbar class="Navbar"/>
            <div className='body-static'>
                <StaticCard 
                inverted={false}
                class="card static"
                src={Home}
                alt="Podras"
                tittle="Domodin"
                text="Made with Ionic and Angular, Domodin was the first app I developed using 
                this framework. It was a PWA capable of controlling any house you linked it with.
                Working with Firebase Realtime Database and Firebase Authentication, the user
                could change its lamp state, turning on the air conditioner or setting those things
                to operate automatically."
                ></StaticCard>

                <StaticCard 
                inverted={true}
                class="card static"
                src={Login}
                alt="Podras"
                tittle="Log in page"
                text="Each user was linked with a house system. This way only the account owner would
                be able to control the devices."
                ></StaticCard>

            </div>

        </>
    )
}
