import React, { useEffect } from "react";
import { Form, Input, Button, Select } from 'antd';
import 'antd/dist/antd.css';
import './BookForm.scss'
import { useDispatch, useSelector } from 'react-redux';
import { addBook, updateBook } from "../../store/actions";
import { v4 as uuid } from 'uuid';

const { Option } = Select;

export default function BookForm({ editBook, setEditBook }) {
    const dispatch = useDispatch();
    const books = useSelector((store => store.books));
    const [form] = Form.useForm();

    const onFinish = (values) => {
        const newBook = {
            id: editBook ? editBook.id : uuid(),
            title: values.title,
            author: values.author,
            genre: values.genre,
            image: values.image
        }

        if (
            books.find(e => e.title === newBook.title) &&
            books.find(e => e.author === newBook.author) &&
            books.find(e => e.genre === newBook.genre) &&
            books.find(e => e.image === newBook.image)
        ) {
            alert('Book is already in catalog!');
        } else if (editBook) {
            dispatch(updateBook(editBook.id, newBook))
        } else {
            dispatch(addBook(newBook));
        }

        form.resetFields();
        setEditBook(null);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    useEffect(() => {
        form.resetFields();
        if (!editBook) return;
        const values = {
            title: editBook.title,
            author: editBook.author,
            genre: editBook.genre,
            image: editBook.image
        }

        form.setFieldsValue(values)
    }, [form, editBook])
    
    return (
        <div className="form-container">
            <h1>Book Form</h1>
            <Form
                form={form}
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
                    name="genre"
                    label="Genre"
                    rules={[
                        {
                            required: true,
                            message: 'Please select a genre!'
                        },
                    ]}
                >
                    <Select
                        placeholder="Select a genre!"
                    >
                        <Option value="classics">classics</Option>
                        <Option value="fantasy">fantasy</Option>
                        <Option value="detective">detective</Option>
                        <Option value="adventure">adventure</Option>
                    </Select>
                </Form.Item>

                <Form.Item
                    label="Image"
                    name="image"
                    rules={[{ required: true, message: 'Please input image link!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item className="form-btn-container" wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit" className="btn">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}
