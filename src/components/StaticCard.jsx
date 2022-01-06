import React from 'react'

export default function StaticCard(props) {
    const styles = {
        'container' : {overflow : 'hidden', display : 'flex', alignItems: 'center'},
        'img' : {width : '20%', margin : '20px 5%'},
        'textcontainer' : {margin : '0 3%', width : '65%'}, 
        'text' : {textAlign : 'center'}
    }
    
    if(!props.inverted){
    return (
        <div className={props.class} style={styles.container} to={props.href}>
            <img src={props.src} alt={props.alt} style={styles.img}/>
            <div style={styles.textcontainer}>
                <h3 style={styles.text}>{props.tittle}</h3>
                <p style={styles.text}>{props.text}</p>
            </div>
        </div>
    )
    }
    else{
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
}
