import './App.css';
import Header from './components/header/header'
import Footer from './components/footer'
import ComputerHeader from './components/header/computerHeader';
import Work from './components/work/work';
function App() {
  return (
    <div className="App">
     <ComputerHeader/> 
      <Header />
      <Work></Work>
      <Footer></Footer>
     
    </div>
  );
}

export default App;
