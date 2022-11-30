import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog';
import Body from './components/Body';
import Contact from './components/Contact';
import Nav from './components/Nav';

function App() {
  function amit(){
    let a = 1;
    let b = 2;
    return a - b;

  }
console.log(amit())
  return (
    <>
    <BrowserRouter>
      <Routes>
      <Route path='/' element={[<Nav/>,<Body/>]}/>
      <Route path='/blog' element={<Blog/>}/>

      <Route path='/contact' element={<Contact/>}/>


      </Routes>
    </BrowserRouter>
    </>
  
  );
}

export default App;
