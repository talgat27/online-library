import React from "react"
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <div className="header">
            <div>
                <Link to="/BookList/BookList">
                    <button>One</button>
                </Link>
                <Link to="/BookForm/BookForm">
                    <button>Two</button>
                </Link>
            </div>
        </div>
    )
}