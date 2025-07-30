import React from 'react'
import { Link } from "react-router";



const Header = () => {
    return (
        <div style={{ display: 'flex', width: '100vw', justifyContent: "space-between", top: "0px", position: 'absolute', backgroundColor: "black", height: "50px", alignItems: "center" }}>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/products">Products</Link>
            <Link to="/contact">Contact</Link>
        </div>
    )
}

export default Header