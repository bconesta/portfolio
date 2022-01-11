import React from 'react';
import ReactDOM from 'react-dom';
import { Routes, Route, HashRouter } from "react-router-dom";
import './index.css';
//Pages
import App from './App';
import About from './routes/About';
import Planty from './routes/Planty';
import Domodin from './routes/Domodin';
import Blog from './routes/Blog';
import Ecloxs from './routes/Ecloxs'

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/domodin" element={<Domodin />} />
        <Route path="/planty" element={<Planty />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/ecloxs" element={<Ecloxs />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
