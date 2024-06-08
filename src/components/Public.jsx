import { Link } from "react-router-dom"

import React from 'react'

const Public = () => {
    const content = (
        <section className="public">
        <header>
            <h1>Welcome to <span className="nowrap">Vishnu Repairs!</span></h1>
        </header>
        <main className="public__main">
            <p>Located in Beautiful Warangal City, Vishnu Repairs  provides a trained staff ready to meet your tech repair needs.</p>
            <address className="public__addr">
                Vishnu Repairs<br />
                Ram Street<br />
                Warangal City<br />
                <a href="tel:+155555555555">(999) 999-9999</a>
            </address>
            <br />
            <p>Owner: Vishnu Dev</p>
        </main>
        <footer>
            <Link to="/login">Employee Login</Link>
        </footer>
    </section>
    )
  return content
}

export default Public