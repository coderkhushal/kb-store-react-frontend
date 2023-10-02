import './App.css';
import Login from './Components/Login';
import Main from './Components/Main';
import Navbar from './Components/Navbar';
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import Signup from './Components/Signup';
import Userstate from './Context/user/userstate';
import Productdetails from './Components/Productdetails';
import Sellerdashboard from './Components/Sellerdashboard';



function App() {
  return (
    <Userstate>
      
    <BrowserRouter basename='/kb-store-react-frontend'>
      <Navbar />
      <Routes >
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/details" element={<Productdetails/>} />
        <Route path="/sellerdashboard" element={<Sellerdashboard/>} />
            {/* <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NoPage />} /> */}

      </Routes>
    </BrowserRouter>

    </Userstate>

  );
}

export default App;
