import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-text text-center py-5">
      <h1 className="display-4 mb-3" style={{color : "#d31b62"}}>Build Your First Mobile App /WebAPP With Us</h1>
      <p className="lead mb-4">If you want to make an app/WebApp for your startup, book a free consultancy today and let's start your journey together!</p>
      <Link to="/contact" className="btn btn-danger btn-lg">Book Free Consultation</Link>
    </header>
  );
}

export default Header;