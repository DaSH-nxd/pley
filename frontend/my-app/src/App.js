import './App.css';
import Homepage from './Components/Homepage/Home';
import LoginPage from './Components/Login/LoginPage';
import SignUp from './Components/SignUp/SignupPage';
import Contact from './Components/Contact/Contact';
import Profile from './Components/Profilepage/Profile'
import Search from './Components/Search/search';
import { Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/search" element={<Search/>}/>
        <Route path="/profile" element={<Profile/>}/>
      </Routes>
    </div>
  );
}

export default App;
