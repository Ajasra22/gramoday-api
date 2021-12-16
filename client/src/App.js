import React from 'react'
import Post from "./Posts/Post.js";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Home from './Posts/Home.js';
export default function App() {
  return (
    <Router>
    
    <Routes>
    <Route exact path="/" element={<Home/>}/>
    <Route exact path="/reports" element={<Post/>} />
    </Routes>
          
    </Router>
  )
}


