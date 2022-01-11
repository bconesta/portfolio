import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar(props) {

    const styles = {
        'navbar' : {
            height : '50px',
            borderBottom : '1px solid rgb(210,210,210)',
            display : 'flex',
            //justifyContent : 'center',
            alignItems : 'center'
        },
        'textContainer' : {
            position : 'absolute',
            zIndex: '-1',
            width : '100%',
            textAlign : 'center'
        },

    }

    return (
        <div className={props.class} style={styles.navbar}>
            <div style={styles.textContainer}>
                <h3>Bruno Conesta</h3>
            </div>
            <Link className="link" to="/">Work</Link>
            <Link className="link" to="/about">About</Link>
        </div>
    )
}
