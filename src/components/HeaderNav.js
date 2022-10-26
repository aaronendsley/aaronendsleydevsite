import * as React from 'react';
//import {Link} from 'gatsby';
import { headerNav } from '../styles/HeaderNav.module.css';

export default function HeaderNavigation() {
    return (
        <>
            <header className={headerNav}>
                <h1>AARON ENDSLEY</h1>
                <nav>
                    <ul>
                        <li>HOME</li>
                        <li>PORTFOLIO</li>
                        <li>BLOG</li>
                    </ul>
                </nav>
            </header>
        </>
    )
}