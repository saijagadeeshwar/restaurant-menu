import React, { useState } from 'react';
import { BrowserMultiFormatReader } from '@zxing/library';

const QRCodeScanner = ({ onScan }) => {
  const [result, setResult] = useState(null);

  const scanQRCode = () => {
    const codeReader = new BrowserMultiFormatReader();
    codeReader.decodeFromInputVideoDevice(undefined, 'video').then((result) => {
      setResult(result.text);
      onScan(result.text);  // Pass the scanned data to the parent component
    }).catch((err) => {
      console.error(err);
    });
  };

  return (
    <div>
      <video id="video" width="300" height="200" onClick={scanQRCode}></video>
      <p>{result ? `Scanned: ${result}` : 'Scan a QR code'}</p>
    </div>
  );
};

export default QRCodeScanner;
