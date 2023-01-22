import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/login';
import NavBar from './components/navbar';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='./components/navbar' element={<NavBar />}></Route>
        <Route path='./components/login' element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  );
}


export default App;