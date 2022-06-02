import React from "react"
import { Link } from 'react-router-dom'
import { HeartOutlined, ReadOutlined } from '@ant-design/icons';
import Logo from "../../images/logo.png";
import './Header.scss'

export default function Header() {
    return (
        <div className="header">
            <div className="header-wrapper">
                <div className="header-container">
                    <Link to="/Home/Home">
                        <img src={Logo} alt="logo" width={200} />
                    </Link>
                    <div className="header-icons">
                        <Link to="/BookList/BookList">
                            <ReadOutlined  style={{ fontSize: 34, color: 'green' }}/>
                        </Link>
                        <Link to="/WishList/WishList">
                            <HeartOutlined style={{ fontSize: 28, color: 'red' }} />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}