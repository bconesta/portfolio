import React from 'react';
import Navbar from '../components/Navbar';
import Tittle from '../components/Tittle';

export default function About() {
    return (
        <>
            <Navbar class="Navbar"/>
            <Tittle
            tittle="Work in progress!"
            text="This page is being coded right now, if you have any doubt you can find me on LinkedIn or contact me by email: bconesta@gmail.com"
            class="tittle"
            ></Tittle>
        </>
    )
}
