import * as React from 'react';
import { Link } from 'gatsby'
import * as CSS from './layout.module.css'


const Layout=({pagetitle,children})=>{
    return(

        <div className={CSS.container}>
            <title>{pagetitle} </title>
            <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li> <Link to="/aboutMe">About Me</Link></li>
            </ul>
                
            </nav>
    
        <main>
            <h1>{pagetitle} </h1>
            {children}
        </main>

        </div>
    );
}
export default Layout