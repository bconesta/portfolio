import React from 'react'
import { Link } from 'react-router-dom'

export default function Card(props) {
    const styles = {
        'container' : {maxHeight : props.height, overflow : 'hidden', display : 'flex', alignItems: 'center'},
        'img' : {width : '60%'},
        'textcontainer' : {marginLeft : '2%', marginRight : '2%', width : '40%'}, 
        'text' : {textAlign : 'center'}
    }
    
    if(!props.inverted){
    return (
        <Link className={props.class} style={styles.container} to={props.href}>
            <img src={props.src} alt={props.alt} style={styles.img}/>
            <div style={styles.textcontainer}>
                <h3 style={styles.text}>{props.tittle}</h3>
                <p style={styles.text}>{props.text}</p>
            </div>
        </Link>
    )
    }
    else{
    return (
        <Link className={props.class} style={styles.container} to={props.href}>
            <div style={styles.textcontainer}>
                <h3 style={styles.text}>{props.tittle}</h3>
                <p style={styles.text}>{props.text}</p>
            </div>
            <img src={props.src} alt={props.alt} style={styles.img}/>
        </Link>
    )
    }
}
