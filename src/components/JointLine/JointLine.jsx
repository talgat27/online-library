import { Button } from 'antd';
import React from 'react'
import { useSelector } from 'react-redux';
import './JointLine.scss'
import { Select } from 'antd';
const { Option } = Select;

export default function JointLine({ sorting, catalog, isSortedList, setIsSortedList }) {
    const books = useSelector((store => store.books));

    const sortBookList = () => {
        setIsSortedList(!isSortedList);
    };

    const onChangeAuthor = (value) => {
        console.log(`selected ${value}`);
    };

    const onChangeGenre = (value) => {
        console.log(`selected ${value}`);
    };

    const uniqueBooks = [...new Set(books.map(b => b.author))]

    return (
        <div className='jointline-wrapper'>
            <div className='jointline-container'>
                <p>Total: {catalog.length}</p>
                {sorting &&
                    <div className='jointline-sort-container'>
                        <Button onClick={e => { e.preventDefault(); sortBookList() }}>Sort by Alphabet</Button>
                        <Select
                            placeholder="Filter by Author"
                            optionFilterProp="children"
                            onChange={onChangeAuthor}
                            filterOption={(input, option) => option.children.toLowerCase().includes(input.toLowerCase())}
                        >
                            <Option value='default'>default</Option>
                            {uniqueBooks.map(author => (
                                <Option value={author}>{author}</Option>
                            ))}
                        </Select>
                        <Select
                            placeholder="Filter by Genre"
                            optionFilterProp="children"
                            onChange={onChangeGenre}
                            filterOption={(input, option) => option.children.toLowerCase().includes(input.toLowerCase())}
                        >
                            <Option value='default'>default</Option>
                            <Option value='classics'>classics</Option>
                            <Option value='fantasy'>fantasy</Option>
                            <Option value='detective'>detective</Option>
                            <Option value='adventure'>adventure</Option>
                        </Select>
                    </div>
                }
            </div>
        </div>
    )
}