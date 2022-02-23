import React from 'react'
import './App.css';
import Header from './Components/Header/Header';
import SideBar from './Components/SideBar/SideBar';
import ReccomendedVideos from './Components/ReccomendedVideos/ReccomendedVideos';
import SearchPage from './Components/SearchPage/SearchPage';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
function App() {
  return (
    <div className="app">
      <Router>
      <Header/>
        <Switch>
          <Route path="/search/:searchInput">
            <div className='app_page'>
            <SideBar/>
            <SearchPage/>
          </div>
          </Route>
          <Route path="/">
          <div className='app_page'>
            <SideBar/>
            <ReccomendedVideos/>
          </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
