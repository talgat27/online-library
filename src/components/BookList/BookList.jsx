import React from "react";
import { useSelector } from 'react-redux';
import { Button, Card } from 'antd';
import BookForm from "../BookForm/BookForm";
const { Meta } = Card;

function BookList() {
    const books = useSelector((store => store.books));

    // const dataSource = books;

    // const columns = [
    //     {
    //         title: 'Image',
    //         dataIndex: 'image',
    //         key: 'image',
    //         render: (image) => (
    //             <img src={image} alt="image"  width={140} height={200} />
    //         )
    //     },
    //     {
    //         title: 'Title',
    //         dataIndex: 'title',
    //         key: 'title',
    //     },
    //     {
    //         title: 'Author',
    //         dataIndex: 'author',
    //         key: 'author',
    //     },
    //     {
    //         title: 'Genre',
    //         dataIndex: 'genre',
    //         key: 'genre',
    //     }
    // ];

    return (
        // <div>
        //     <h1>BookList</h1>
        //     <Table dataSource={dataSource} columns={columns} />;
        // </div>
        <div>
            {books.map(book => (
                <Card
                    hoverable
                    style={{
                        width: 200,
                    }}
                    cover={<img alt="book image" src={book.image} />}
                >
                    <Meta title={book.title} description={book.author} />
                    <Button type="primary">Edit</Button>
                </Card>
            ))}
        </div>
    )
}

export default BookList;