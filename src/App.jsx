import './App.css';
import React from 'react'; 
import {Route, Switch} from 'react-router-dom'
import Header from './components/header/header'
import Footer from './components/footer'
import ComputerHeader from './components/header/computerHeader';
import Work from './components/work/work';
import Animation from './components/work/show/2d_animation'; 
import Absalon from './components/work/show/absalon'; 
import Conspiracy from './components/work/show/conspiracy'; 
import Cradle from './components/work/show/cradle_to_grave'; 
import Frankenstein from './components/work/show/frankenstein'; 
import Illustration from './components/work/show/illustration'; 
import About from './components/about/about'; 

function App() {
  return (
    <div className="App">
     <ComputerHeader/> 
      <Header />
      <Switch>
        <Route path="/animation" component={Animation}></Route>
        <Route path="/absalon" component={Absalon}></Route>
        <Route path="/conspiracy" component={Conspiracy}></Route>
        <Route path="/cradle" component={Cradle}></Route>
        <Route path="/frankenstein" component={Frankenstein}></Route>
        <Route path="/illustration" component={Illustration}></Route>
        <Route path="/about" component={About}></Route>
        <Work></Work>
      </Switch>
      <Footer></Footer>
     
    </div>
  );
}

export default App;
