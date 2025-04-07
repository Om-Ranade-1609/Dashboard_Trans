import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import NonReadableUpload from '../components/NonReadableUpload';
import './Home.css';
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();
    const [isNonReadable, setIsNonReadable] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleFileUploaded = (nonReadable) => {
        setIsNonReadable(nonReadable);
        if (nonReadable) {
            setErrorMessage(
                "This document appears to be non-machine-readable. To process it effectively, please convert it to a machine-readable format."
            );
        } else {
            setErrorMessage('');
        }
    };

    const handleConversionRedirect = () => {
        navigate('/conversion');
    };

    return (
        <div className="home-container">
            <Navbar />
            <div className="upload-section">
                <NonReadableUpload onFileUploaded={handleFileUploaded} />
                {errorMessage && <p className="error-message">{errorMessage}</p>}
            </div>
            {isNonReadable && (
                <div className="conversion-prompt">
                    <p>Convert this document to machine-readable JSON format.</p>
                    <button onClick={handleConversionRedirect}>Convert to JSON</button>
                </div>
            )}
        </div>
    );
}

export default Home;