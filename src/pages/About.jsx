import React from 'react'
import { Link, Outlet } from 'react-router'

const About = () => {
    return (
        <>
            <h1>About</h1>
            <hr />
            <Link to="employee">Çalışanlar Hakkında</Link>
            <Link to="company">Şirket Hakkında</Link>

            <Outlet />
        </>
    )
}

export default About