import React, { useEffect, useState } from 'react'
import './Nav.scss';


function Nav() {
    const [show, setShow] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 100 ? setShow(true) : setShow(false)
        })
        return () => {
            window.removeEventListener('scroll')
        }
    }, [])

    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img
                className="nav__logo"
                src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
                alt="Netflix logo"
            />
            <img className="nav__avatar"
                src="avatar.svg"
                alt="avatat"
            />

        </div>
    )
}

export default Nav
