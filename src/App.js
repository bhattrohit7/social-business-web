import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import SignUp from './components/Auth/SignUp';
import Login from './components/Auth/Login';
import UpdateProfile from './components/UpdateProfile/UpdateProfile';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EventsList from './components/EventsList/EventsList.component';

function App() {
  return (
    <Router>
      <Navbar> </Navbar>
        <div className="App">
          <Routes>
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/update-profile" element={<UpdateProfile />} />
            <Route path="/events" element={<EventsList />} />
          </Routes>
        </div>
     
    </Router>
  );
}

export default App;
