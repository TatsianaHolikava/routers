import React from 'react';
import {Route, Routes} from "react-router-dom";
import NoPage from "../pages/NoPage";
import BooksHomePage from "../pages/Books/BooksHomePage";
import Store from "../pages/store/store";
import ExpenseTracker from "../pages/expense-tracker/expense-tracker";
import Game3 from "../pages/game3/game3";
import Game4 from "../pages/game4/game4";
import HomePage from "../pages/Travel/HomePage";
import Board from "../pages/tic-tac-toe/Board";
import Switzerland from '../pages/Travel/Switzerland';
import Bali from '../pages/Travel/Bali';
import Egypt from '../pages/Travel/Egypt';
import Bahamas from '../pages/Travel/Bahamas';
import Brazil from '../pages/Travel/Brazil';


const AllRoutes = () => {
    return (
            <Routes>
            <Route path='/' element={<HomePage />}/>
            <Route path='/tic-tac-toe' element={<Board />}/>
            <Route path='/expense-tracker' element={<ExpenseTracker />}/>
            <Route path='/game3' element={<Game3 />}/>
            <Route path='/game4' element={<Game4 />}/>
            <Route path='/books' element={<BooksHomePage/>}/>
            <Route path='/store' element={<Store/>}/>
            <Route path='*' element={<NoPage />}/>
            
            {/* travel page */}
            <Route path='/Brazil' element={<Brazil/>}/>
            <Route path='/Bahamas' element={<Bahamas/>}/>
            <Route path='/Egypt' element={<Egypt/>}/>
            <Route path='/Bali' element={<Bali/>}/>
            <Route path='/Switzerland' element={<Switzerland/>}/>
            </Routes>
    

    );
};

export default AllRoutes;