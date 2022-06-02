import { Button } from 'antd';
import React from 'react'
import { useSelector } from 'react-redux';
import './JointLine.scss'
import { Select } from 'antd';
const { Option } = Select;

export default function JointLine({ sorting, catalog }) {
    const books = useSelector((store => store.books));

    const onChange = (value) => {
        console.log(`selected ${value}`);
    };

    const onSearch = (value) => {
        console.log('search:', value);
    };
    return (
        <div className='jointline-wrapper'>
            <div className='jointline-container'>
                <p>Total: {catalog.length}</p>
                {sorting &&
                    <Select
                        showSearch
                        placeholder="Sort by"
                        optionFilterProp="children"
                        onChange={onChange}
                        onSearch={onSearch}
                        filterOption={(input, option) => option.children.toLowerCase().includes(input.toLowerCase())}
                    >
                        <Option value="alphabet">Alphabet</Option>
                        <Option value="author">Author</Option>
                        <Option value="genre">Genre</Option>
                    </Select>}
            </div>
        </div>
    )
}