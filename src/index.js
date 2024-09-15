import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.css';
import App from './App'; // Corrected import
import Home from './pages/home.jsx';
import About from './pages/about.jsx';
import ContactUs from './pages/countact.jsx'
import NotFound from "./pages/NotFound.jsx"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Blogs from './pages/Blogs.jsx';
import Header from './common/Header.jsx';
import BlogsDetails from './pages/BlogsDetails.jsx';
import Empty from './pages/Empty.jsx';
import SignUp from './pages/SignUp.jsx';
import RandomPassApp from './pages/randomPasswordApp/RandomPassApp.jsx';
import Weather from './pages/weather/Weather.jsx';
import ToDoList from './pages/ToDoList/ToDoList.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <BrowserRouter>
    <Header/>
    <Routes>
         <Route path='/' element={<Empty />} />  
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} /> 
        <Route path='/todo' element={<ToDoList/>} />
        <Route path='/randomapp' element={<RandomPassApp />} />
        <Route path='/weather' element={<Weather />} /> 
        <Route path='/contact' element={<ContactUs />} />
        <Route path='/blogs' element={<Blogs/>} />
        <Route path='/blogs/:id' element={<BlogsDetails />} />
        <Route path='/signup' element={<SignUp/>} />
        
        
        {/* not found */}
        <Route path='*' element={<NotFound />} />  

      </Routes>
      
      <App />
    </BrowserRouter>
  </div>
);
