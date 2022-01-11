import React from 'react';
//Styles
import '../App.scss';
//Components
import VerticalCard from '../components/VerticalCard';
import Navbar from '../components/Navbar';
//Images
import Blogs from '../img/blog1.PNG';

export default function Blog() {
    return (
        <>
            <Navbar class="Navbar"/>
            <div className='body-static'>
                <VerticalCard
                class="card static"
                src={Blogs}
                alt="Podras"
                tittle="Personal Blog"
                text="This is my first personal blog, made using HTML, CSS, JS and Bootstrap.
                Despite of being simple, its purpose was testing bootstrap and making my first
                responsive page."
                ></VerticalCard>
            </div>
        </>
    )
}
