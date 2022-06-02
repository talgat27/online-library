import './App.css';
import Header from './components/Header/Header';
import { Route, Routes, Navigate } from 'react-router-dom';
import BookList from './components/BookList/BookList';
import WishList from './components/WishList/WishList';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/Home/Home" />} />
        <Route path='/Home/Home' element={<Home />} default />
        <Route path='/BookList/BookList' element={<BookList />} />
        <Route path='/WishList/WishList' element={<WishList />} />
      </Routes>
    </div>
  );
}

export default App;
