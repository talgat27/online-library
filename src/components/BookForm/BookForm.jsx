import React from "react";
import { Form, Input, Button, Checkbox } from 'antd';
import 'antd/dist/antd.css';
import './BookForm.css'
import { useDispatch, useSelector } from 'react-redux';
import { addBook } from "../../store/actions";

function BookForm() {
    const dispatch = useDispatch();
    const books = useSelector((store => store.books))

    const onFinish = (values) => {
        const newBook = {
            title: values.title,
            author: values.author,
            genre: values.genre
          }

        dispatch(addBook(newBook))
      
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    console.log(books);

    return (
        <div>
            <h1>Book Form</h1>
            <Form
                className="form"
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Title"
                    name="title"
                    rules={[{ required: true, message: 'Please input title!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Author"
                    name="author"
                    rules={[{ required: true, message: 'Please input author!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Genre"
                    name="genre"
                    rules={[{ required: true, message: 'Please input genre!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default BookForm;