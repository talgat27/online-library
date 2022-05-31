import React from "react";
import { Form, Input, Button, Select } from 'antd';
import 'antd/dist/antd.css';
import './BookForm.css'
import { useDispatch} from 'react-redux';
import { addBook } from "../../store/actions";
import { v4 as uuid } from 'uuid';

const { Option } = Select;

function BookForm() {
    const dispatch = useDispatch();

    const onFinish = (values) => {
        const newBook = {
            id: uuid(),
            title: values.title,
            author: values.author,
            genre: values.genre,
            image: values.image
        }

        dispatch(addBook(newBook))

        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

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
                        placeholder="Select a genre"
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