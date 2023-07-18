import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import { Route, Routes } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantMenu';



function App() {
  return (
    <div className='main_app'>
 
      <Header/>
     <Routes>
      <Route path='/' element={<Body/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='restaurant/:resId' element={<RestaurantMenu/>}/>
      <Route path='*' element={<Error/>}/>
     </Routes>

    </div>
  );
}



export default App;
