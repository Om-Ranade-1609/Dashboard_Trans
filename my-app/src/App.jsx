import React from 'react';
import UploadForm from './components/UploadForm';
import DocumentList from './components/DocumentList';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <div className="container">
      <header>
        <Navbar />
      </header>
      <UploadForm />
      <DocumentList />
    </div>
  );
}

export default App;
