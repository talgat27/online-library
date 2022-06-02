import React from 'react'
import { useDispatch ,useSelector } from 'react-redux';
import './WishList.scss'
import { ClearOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import { Card } from 'antd';
import { removeBookFromWL } from "../../store/actions";
import JointLine from '../JointLine/JointLine';
const { Meta } = Card;

export default function WishList() {
    const dispatch = useDispatch();
    const wishListBooks = useSelector((store => store.wishListBooks));

    const dltBook = (id) => {
        dispatch(removeBookFromWL(id));
    };

    return (
        <div className='wl-wrapper'>
            <h1>WishList</h1>
            <JointLine sorting={false} catalog={wishListBooks}/>
            <div className='wl-container'>
                {wishListBooks.map(book => (
                    <div className="card-container">
                        <Card
                            hoverable
                            style={{
                                width: 240,
                            }}
                            cover={<img alt="book image" src={book.image} />}
                        >
                            <Meta title={book.title} description={book.author} />
                            <div className="card-icons">
                                <button onClick={e => {e.preventDefault();dltBook(book.id)}}>
                                    <ClearOutlined style={{ fontSize: 28, color: 'red' }} />
                                </button>
                            </div>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    )
}
