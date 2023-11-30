import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Create from './component/Create';
import Read from './component/Read';
import Update from './component/Update';
import Navbar from './component/Navbar';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Create/>}/>
        <Route  path="/all" element={<Read/>}/>
        <Route  path="/all/:id" element={<Update/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
