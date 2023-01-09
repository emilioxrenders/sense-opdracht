import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Overzicht from './component/overzicht';
import AlguesSeawater from './component/posts/algues-seawater';
import AloeVera from './component/posts/aloe-vera';
import AnisEucalyptus from './component/posts/anis-eucalyptus';
import Anis from './component/posts/anis';
import AquaDiParma from './component/posts/aqua-di-parma';
import logo from './logo.svg';
import './styles/app.css';
import './styles/overzicht.css';
import './styles/post.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import logo from './logo.svg';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="app-logo d-flex justify-content-center py-5">
            <Link to="/">
              <img src={logo} className="App-logo" alt="logo" />
            </Link>
          </div>

          <Routes>
            <Route exact path='/' element={< Overzicht />}></Route>
            <Route exact path='/1' element={< AlguesSeawater />}></Route>
            <Route exact path='/2' element={< AloeVera />}></Route>
            <Route exact path='/3' element={< AnisEucalyptus />}></Route>
            <Route exact path='/4' element={< Anis />}></Route>
            <Route exact path='/6' element={< AquaDiParma />}></Route>
          </Routes>
        </div>
      </Router>
    );
  }
}
export default App;
