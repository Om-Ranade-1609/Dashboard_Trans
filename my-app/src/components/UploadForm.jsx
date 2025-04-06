import React, { useState } from 'react';
import './UploadForm.css';

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [summary, setSummary] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [dragActive, setDragActive] = useState(false);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileSelect = (e) => {
    if (e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const uploadFile = async () => {
    if (!file) {
      setError("Please select or drop a file.");
      return;
    }

    const formData = new FormData();
    formData.append('document', file);

    setLoading(true);
    setError('');
    setSummary('');

    try {
      const res = await fetch('http://localhost:5000/upload', {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();

      if (res.ok) {
        setSummary(data.summary);
      } else {
        setError(data.error || 'Something went wrong');
      }
    } catch (err) {
      setError('Server error: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="upload-card fade-in">
      <h2>📤 Upload Document</h2>

      <div
        className={`drag-drop-zone ${dragActive ? 'active' : ''}`}
        onDragEnter={handleDrag}
        onDragOver={handleDrag}
        onDragLeave={handleDrag}
        onDrop={handleDrop}
      >
        <p>{file ? `📁 ${file.name}` : 'Drag & drop your file here or click to select'}</p>
        <input
          type="file"
          accept=".pdf,.docx,.txt"
          onChange={handleFileSelect}
          className="file-input"
        />
      </div>

      <div className="button-group">
        <button onClick={uploadFile} disabled={loading}>
          {loading ? '⏳ Uploading...' : '🚀 Upload'}
        </button>
      </div>

      {summary && (
        <div className="summary-output">
          <h4>📄 Summary:</h4>
          <p>{summary}</p>
        </div>
      )}

      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default UploadForm;
