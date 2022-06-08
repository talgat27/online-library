import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Card } from 'antd'
import { ToolOutlined, PaperClipOutlined, ClearOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import BookForm from "../BookForm/BookForm";
import './BookList.scss'
import JointLine from "../JointLine/JointLine";
import { removeBook, addBookToWL } from "../../store/actions";
const { Meta } = Card;


export default function BookList({ editBook, setEditBook }) {
    const books = useSelector((store => store.books));
    const wishListBooks = useSelector((store => store.wishListBooks));
    const dispatch = useDispatch();
    const [isSortedList, setIsSortedList] = useState(false)
    console.log(isSortedList);

    const dltBook = (id) => {
        dispatch(removeBook(id));
    };

    const addWL = (book) => {
        if (wishListBooks.find(e => e.id === book.id)) {
            alert('Book is already in WishList!');
            return;
        } else {
            dispatch(addBookToWL(book));
            alert('Book has been added to WishList!');
        }

        console.log('success');
    };

    const compare = (a, b) => {
        if (a.title > b.title) return 1
        else if (a.title < b.title) return -1
        else return 0
    }

    const sortedBooks = books.sort(compare);
    
    return (
        <div>
            <BookForm editBook={editBook} setEditBook={setEditBook} />
            <JointLine sorting={true} catalog={books} isSortedList={isSortedList} setIsSortedList={setIsSortedList} />
            <div className="books-container">
                {books.map(book => (
                    <div className="card-container">
                        <Card
                            hoverable
                            style={{
                                width: 240,
                                height: 'fit-content'
                            }}
                            cover={<img alt="book image" src={book.image} />}
                        >
                            <Meta title={book.title} description={book.author} />
                            <div className="card-icons">
                                <button onClick={e => { e.preventDefault(); setEditBook(book) }}>
                                    <ToolOutlined style={{ fontSize: 28, color: 'deepskyblue' }}></ToolOutlined>
                                </button>
                                <button onClick={e => { e.preventDefault(); dltBook(book.id) }}>
                                    <ClearOutlined style={{ fontSize: 28, color: 'red' }} />
                                </button>
                                <button onClick={e => { e.preventDefault(); addWL(book) }}>
                                    <PaperClipOutlined style={{ fontSize: 28, color: 'green' }} />
                                </button>
                            </div>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    )
}