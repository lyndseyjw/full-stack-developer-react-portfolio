import React, { useState } from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import NavTabs from './components/NavTabs';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('Home');

  const [pageTab, setPageTab] = useState('Home');

  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Contact') {
      return <Contact onPageChange={handlePageChange}/>;
    }
  };
  
  const handlePageChange = (page) => setCurrentPage(page);
  
  return (
    <div>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} pageTab={pageTab} setPageTab={setPageTab}/>
      {renderPage()}
      <Footer />
    </div>
  );
}

export default App;
