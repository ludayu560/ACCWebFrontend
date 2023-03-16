import React, { useState, useEffect } from 'react';
import UploadService from '../../services/ FileUploadService.js';
import { Button, Stack } from '@mui/material';

const ImageUpload = () => {
  const [currentFile, setCurrentFile] = useState(undefined);
  const [previewImage, setPreviewImage] = useState(undefined);
  const [progress, setProgress] = useState(0);
  const [message, setMessage] = useState('');

  const [imageInfos, setImageInfos] = useState([]);

  const selectFile = (event) => {
    setCurrentFile(event.target.files[0]);
    setPreviewImage(URL.createObjectURL(event.target.files[0]));
    setProgress(0);
    setMessage('');
  };

  const upload = () => {
    setProgress(0);

    UploadService.upload(currentFile, (event) => {
      setProgress(Math.round((100 * event.loaded) / event.total));
    })
      .then((response) => {
        setMessage(response.data.message);
        return UploadService.getFiles();
      })
      .then((files) => {
        setImageInfos(files.data);
      })
      .catch((err) => {
        setProgress(0);

        if (err.response && err.response.data && err.response.data.message) {
          setMessage(err.response.data.message);
        } else {
          setMessage('Could not upload the Image!');
        }

        setCurrentFile(undefined);
      });
  };

  useEffect(() => {
    UploadService.getFiles().then((response) => {
      setImageInfos(response.data);
    });
  }, []);

  return (
    <div>
      <Stack height={'10vh'}></Stack>
      <div>
        <div>
          <Button variant="contained" component="label">
            Upload File
            <input type="file" hidden accept="image/*" onChange={selectFile} />
          </Button>
        </div>

        <div>
          <Button variant="contained" disabled={!currentFile} onClick={upload}>
            Upload
          </Button>
        </div>
      </div>
      {currentFile && (
        <div>
          <div
            role="progressbar"
            aria-valuenow={progress}
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ width: progress + '%' }}
          >
            {progress}%
          </div>
        </div>
      )}

      {previewImage && (
        <div>
          <img src={previewImage} alt="" width={'10%'} />
        </div>
      )}

      {message && <div>{message}</div>}

      <div>
        <div>List of Images</div>
        <ul>
          {imageInfos &&
            imageInfos.map((img, index) => (
              <li key={index}>
                <p>
                  <a href={img.url}>{img.name}</a>
                </p>
                <img src={img.url} alt={img.name} height="80px" />
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default ImageUpload;
