import React from 'react'

export default function VerticalCard(props) {

    const styles = {
        'container' : {overflow : 'hidden', display : 'block', alignItems: 'center'},
        'img' : {width : '60%', margin : '30px 0'},
        'textcontainer' : {margin : '30px 10% 0'}, 
        'text' : {textAlign : 'center'}
    }

    return (
        <div className={props.class} style={styles.container} to={props.href}>
            <div style={styles.textcontainer}>
                <h3 style={styles.text}>{props.tittle}</h3>
                <p style={styles.text}>{props.text}</p>
            </div>
            <img src={props.src} alt={props.alt} style={styles.img}/>
        </div>
    )
}
