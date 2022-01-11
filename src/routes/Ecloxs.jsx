import React from 'react';
//Styles
import '../App.scss';
//Components
import VerticalCard from '../components/VerticalCard';
import Navbar from '../components/Navbar';
//Images
import Home from '../img/ecloxs/ecloxs.PNG';
import Grid from '../img/ecloxs/grid.PNG';
import Product from '../img/ecloxs/pdp.PNG';

export default function Ecloxs() {
    return (
        <>
            <Navbar class="Navbar"/>
            <div className='body-static'>
                <VerticalCard
                class="card static"
                src={Home}
                alt="Podras"
                tittle="eCloxs"
                text="It was a clocks entrepreneurship we made at school with the Junior Achievement program 'Aprender a emprender'"
                ></VerticalCard>

                <VerticalCard
                class="card static"
                src={Grid}
                alt="Podras"
                tittle="Grid"
                text=""
                ></VerticalCard>

                <VerticalCard
                class="card static"
                src={Product}
                alt="Podras"
                tittle="Product Page"
                text=""
                ></VerticalCard>
            </div>
        </>
    )
}
