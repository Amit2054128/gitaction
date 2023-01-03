import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog';
import Contact from './components/Contact';

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Blog/>}/>
      <Route path='/contact' element={<Contact/>}/>


      </Routes>
    </BrowserRouter>
    </>
  
  );
}

export default App;
