import React from 'react';
import { Toaster } from 'react-hot-toast';
import { Navigate, Route, Routes } from "react-router-dom";
import Contact from './components/Contact';
import Home from './components/Home';
import Signup from './components/Signup';
import { useAuth } from "./contex/AuthProider";
import Courses from './courses/Courses';

function App() {

  const [authUser,setAuthUser] = useAuth()
  console.log(authUser);


  return (
    <div className="dark:bg-slate-900 dark:text-white">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={authUser?<Courses />:<Navigate to="/signup"/>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
