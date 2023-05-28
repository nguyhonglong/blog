import React from 'react'
import './header.css'
import avatar from '../assets/images/avatar.jpg'


export default function Header() {
    return (
        <div>
            <nav>
                <ul>
                    <li><img className="avatar" src={avatar} alt="avatar"/></li>
                    <li><a href="/">Home</a></li>
                    <li><a href="/gioi-thieu">Blog</a></li>
                    <li><a href="/san-pham">Introduce</a></li>
                    <li><a href="/lien-he">Linktree</a></li>
                </ul>
            </nav>
        </div>
    )
}
