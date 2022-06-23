import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TabOpt from './Components/Tab';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Todo from './Components/Todo';

function App() {
  return (
    <>
     <Router>
          <Routes>
            <Route path="/" element={<TabOpt/>} />
            <Route path="/Todo" element={<Todo/>} />
          </Routes>
        </Router>
    </>
  );
}

export default App;
