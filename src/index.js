import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './component/tailwind.css';
import Nav from "./component/Nav.js";
import How from "./component/how.js";
import Contact from "./component/contact.js";
import Essay from "./component/essay.js";
import Outline from "./component/outline.js";
import Cover from "./component/coverletter.js"
import UserAccount from "./component/useraccount.js";
import ResponseForm from "./component/ResponseForm.js";
import LoginForm from "./component/LoginForm.js";
import SignupForm from "./component/SignupForm.js";
import Footer from './component/footer.js';



createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<LoginForm onSignupClick={() => history.push('/signup')} />} />
        <Route path="/how" element={<How />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/essay-helper" element={<Essay />} />
        <Route path="/outline" element={<Outline />} />
        <Route path="/coverLetter" element={<Cover />} />
        <Route path="/useraccount" element={<UserAccount />} />
        <Route path="/response-form" element={<ResponseForm />} />
      </Routes>
      <Footer />
      <App />
    </Router>
  </React.StrictMode>
);