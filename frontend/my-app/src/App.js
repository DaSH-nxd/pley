import './App.css';
import Homepage from './Components/Home';
import LogIn from './Components/LoginComponents/Login';
import SignUp from './Components/Signup';
import Contact from './Components/Contact';
import { Routes, route, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes> <Route path="/" element={<Homepage/>} /></Routes>
      <Routes> <Route path="/login" element={<LogIn/>} /></Routes>
      <Routes> <Route path="/signup" element={<SignUp/>} /></Routes>
      <Routes> <Route path="/contact" element={<Contact/>} /></Routes>
    </div>
  );
}

export default App;
