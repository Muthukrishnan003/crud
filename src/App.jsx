import React from 'react';
import Home from './Components/Home';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Create from './Components/Create';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/Create' element={<Create/>}></Route>
            </Routes>
        </BrowserRouter>
         
    );
}

export default App;
