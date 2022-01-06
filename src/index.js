import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
//Pages
import App from './App';
import Planty from './routes/Planty';
import Domodin from './routes/Domodin'

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/domodin" element={<Domodin />} />
      <Route path="/planty" element={<Planty />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
