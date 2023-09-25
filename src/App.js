import './assets/css/base/base.css';
import './assets/css/componentes/card.css';
import Home from"./pages/Home";
import Sobre from "./pages/Sobre";
import Page404 from './pages/Page404';
import Header from './components/Header';
import  { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Posts from './pages/Posts';
import Categoria from './pages/Categoria';

function App() {

  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/sobre" element={<Sobre/>}/>
        <Route path='/posts/:id' element={<Posts/>}/>
        <Route path='/categoria/:id*' element={<Categoria/>}/>
        <Route path='*' element={<Page404/>}/>
      </Routes>
    </Router>
  );
}

export default App;
