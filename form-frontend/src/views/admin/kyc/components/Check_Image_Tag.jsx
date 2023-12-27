import React, { useState } from 'react';

const ImageUploader = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [buttonText, setButtonText] = useState('Browse');

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    
    if (file) {
      setSelectedFile(file);

      const reader = new FileReader();
      reader.onloadend = () => {
        setButtonText('Browse another pic');
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="container">
      <label className="label" htmlFor="file">
        {selectedFile ? selectedFile.name : 'Please upload a picture!'}
      </label>

      <div className="input">
        <input
          name="input"
          id="file"
          type="file"
          onChange={handleFileChange}
          style={{ display: 'none' }}
        />
        <button onClick={() => document.getElementById('file').click()}>
          {buttonText}
        </button>
      </div>

      {selectedFile && (
        <img
          src={URL.createObjectURL(selectedFile)}
          alt="Uploaded file"
          width="100"
        />
      )}
    </div>
  );
};

export default ImageUploader;
