import React from 'react';
import './style.css';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import { BookList } from './BookList';
import { Book } from './Book';

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Home Page </h1>
      <p>Hello Peril</p>
      <button onClick={() => navigate('/book')}>Books </button>
    </div>
  );
};

const Fixed_Component = () => (
  <>
  <nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/book">BookList</Link>
      </li>
    </ul>
  </nav>
  <Outlet context={{hello: 'world'}}/>
  </>
);

const NewBook = () => (
  <h1>
    NewBook
    </h1>
)

const NotFoundPage = () => (
  <h1>
    404 Error :)
    </h1>
)


export default function App() {
  return (
    <>
    {/* Passing html on a route */}
      {/* <Routes>
        <Route path = '/book' element = {<h1>Extra Content</h1>}/>
      </Routes> */}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Nested Routes */}
        <Route path = "/book" element={<Fixed_Component/>}>
          <Route index element={<BookList />} />
          <Route path=":id" element={<Book />} />
          <Route path="new" element={<NewBook />} />
        </Route>
        {/* <Route path="/book" element={<BookList />} />
        <Route path="/book/:id" element={<Book />} />
        <Route path="/book/new" element={<NewBook />} /> */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}
