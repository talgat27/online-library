import './App.css';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import BookList from './components/BookList/BookList';
import BookForm from './components/BookForm/BookForm';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/BookList/BookList' element={<BookList />} />
        <Route path='/BookForm/BookForm' element={<BookForm />} />
      </Routes>
    </div>
  );
}

export default App;
