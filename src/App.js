import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Header from './components/Header';

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Header/>}/>
      <Route path='/blog' element={<Blog/>}/>
      <Route path='/contact' element={<Contact/>}/>


      </Routes>
    </BrowserRouter>
    </>
  
  );
}

export default App;
