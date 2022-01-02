import React from 'react'

export default function Card(props) {
    const styles = {
                    'container' : {maxHeight : props.height, overflow : 'hidden', display : 'flex', alignItems: 'center'},
                    'img' : {width : '20%'},
                    'textcontainer' : {marginLeft : '2%', marginRight : '2%'}, 
                    'text' : {textAlign : 'center'}
                   }
    return (
        <div className={props.class} style={styles.container}>
            <img src={props.src} alt={props.alt} style={styles.img}/>
            <div style={styles.textcontainer}>
                <h3 style={styles.text}>{props.tittle}</h3>
                <p style={styles.text}>{props.text}</p>
            </div>
        </div>
    )
}
