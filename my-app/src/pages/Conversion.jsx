import React from 'react';
import Navbar from '../components/Navbar';
import UploadForm from '../components/UploadForm';
import DocumentList from '../components/DocumentList';
import './Conversion.css';

function Conversion() {
    return (
        <div className="conversion-container">
            <Navbar />
            <div className="conversion-content">
                <UploadForm />
                <DocumentList />
            </div>
        </div>
    );
}

export default Conversion;