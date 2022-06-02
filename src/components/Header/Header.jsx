import React from "react"
import { Link } from 'react-router-dom'
import { HeartOutlined, ReadOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import Logo from "../../images/logo.png";
import './Header.scss'
import { Badge } from "antd";
import BookList from "../BookList/BookList";

export default function Header() {
    const wishListBooks = useSelector((store => store.wishListBooks));
    const books = useSelector((store => store.books));

    return (
        <div className="header">
            <div className="header-wrapper">
                <div className="header-container">
                    <Link to="/Home/Home">
                        <img src={Logo} alt="logo" width={200} />
                    </Link>
                    <div className="header-icons">
                        <Badge count={books.length} showZero color="darkgreen">
                            <Link to="/BookList/BookList">
                                <ReadOutlined style={{ fontSize: 34, color: 'green' }} />
                            </Link>
                        </Badge>
                        <Badge count={wishListBooks.length} showZero>
                            <Link to="/WishList/WishList">
                                <HeartOutlined style={{ fontSize: 28, color: 'red' }} />
                            </Link>
                        </Badge>
                    </div>
                </div>
            </div>
        </div>
    )
}