import './App.css';
import Homepage from './Components/Homepage/Home';
import LogIn from './Components/LoginComponents/Login';
import SignUp from './Components/SignUp/Signup';
import Contact from './Components/Contact/Contact';
import Search from './Components/Search/search';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes> <Route path="/" element={<Homepage/>} /></Routes>
      <Routes> <Route path="/login" element={<LogIn/>} /></Routes>
      <Routes> <Route path="/signup" element={<SignUp/>} /></Routes>
      <Routes> <Route path="/contact" element={<Contact/>} /></Routes>
      <Routes> <Route path="/search" element={<Search/>} /></Routes>
    </div>
  );
}

export default App;
