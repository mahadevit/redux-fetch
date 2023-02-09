 
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/About'
import Home from './components/Home'
import MainMenu from './components/MainMenu';
import Products from './components/Products'
import Product from './components/Product'

function App() {
  return (
    <div className='bg="dark"'>
      <Router>
        <MainMenu />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/products" element={<Products/>}/>
          <Route path="/products/:id" element={<Product/>}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
