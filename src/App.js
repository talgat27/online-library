import './App.css';
import Header from './components/Header/Header';
import { Route, Routes, Navigate } from 'react-router-dom';
import BookList from './components/BookList/BookList';
import WishList from './components/WishList/WishList';
import Home from './components/Home/Home';
import { useState } from 'react';

function App() {
  const [editBook, setEditBook] = useState(null)

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/Home/Home" />} />
        <Route path='/Home/Home' element={<Home />} />
        <Route path='/BookList/BookList' element={<BookList editBook={editBook}  setEditBook={setEditBook}/>} />
        <Route path='/WishList/WishList' element={<WishList />} />
      </Routes>
    </div>
  );
}

export default App;
