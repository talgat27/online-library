import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Card } from 'antd'
import { ToolOutlined, PaperClipOutlined, ClearOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import BookForm from "../BookForm/BookForm";
import './BookList.scss'
import JointLine from "../JointLine/JointLine";
import { removeBook } from "../../store/actions";
const { Meta } = Card;


export default function BookList() {
    const books = useSelector((store => store.books));
    const dispatch = useDispatch();

    const edit = () => {
        console.log('Edit');
    };

    const dltBook = (id) => {
        dispatch(removeBook(id));
    };

    const addWL = () => {
        console.log('addWL');
    };

    return (
        <div>
            <BookForm />
            <JointLine />
            <div className="books-container">
                {books.map(book => (
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
                                <button onClick={edit}>
                                    <ToolOutlined style={{ fontSize: 28, color: 'deepskyblue' }}></ToolOutlined>
                                </button>
                                <button onClick={e => {e.preventDefault();dltBook(book.id)}}>
                                    <ClearOutlined style={{ fontSize: 28, color: 'red' }} />
                                </button>
                                <button onClick={addWL}>
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