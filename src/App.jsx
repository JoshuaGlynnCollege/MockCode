import { useState } from 'react'
import reactLogo from './pages/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from "./pages/Navbar.jsx";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Contact from "./pages/Contact.jsx";
import Tutors from "./pages/Tutors.jsx";
import SignUp from "./pages/Signup.jsx";
import NoPage from "./pages/NoPage.jsx";
function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route
                    path="/tutors"
                    element={<Tutors />}/>
                <Route
                    path="/signup"
                    element={<SignUp />}
                
                />
                <Route
                    path="*"
                    element={<NoPage />}/>
            </Routes>
        </Router>
    );
}
 
export default App;
