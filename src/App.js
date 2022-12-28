import {Routes, Route } from 'react-router-dom';
import CardsList from './components/CardsList';
import Navbar from './components/Navbar';
import OneCard from './components/OneCard';

function App() {
  return (
    <div>
       <Navbar/>
      <Routes>
        <Route path='/' element={ <CardsList/>}/>
        <Route path='/product/:productId' element={ <OneCard/>}/>
      </Routes>
     
      
     
    </div>
  );
}

export default App;
