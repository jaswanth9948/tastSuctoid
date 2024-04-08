import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import About from './pages/About'
import Analytics from './pages/Analytics'
import Comment from './pages/Comment';
import Products from './pages/Analytics';
import ProductList from './pages/ProductList';
import Dashboard from "./pages/Dashboard"
const App = () => {
  return (
    <BrowserRouter>
    <Header />
      <Sidebar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/home" element={<Dashboard />} />
          <Route path="/About" element={<About />} />
          <Route path="/products" element={<Products/>} />
          <Route path="/productList" element={<ProductList/>} />
          <Route path="/Analytics" element={<Analytics />} />
          <Route path="/Comment" element={<Comment/>} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;
