import { useState } from "react";
import { QRCode } from "react-qrcode-logo";
import FileReader from "react-file-reader";

const FileDatabase = () => {
  const [logo, setLogo] = useState(null);
  const [qrCodeValue, setQRCodeValue] = useState("");
  const [fileLink, setFileLink] = useState("");
  const [downloadLink, setDownloadLink] = useState("");
  console.log(fileLink);
  console.log(qrCodeValue);

  const handleFileUpload = (files) => {
    const reader = new FileReader();
    reader.onload = () => {
      setLogo(reader.result);
      setFileLink("https://www.facebook.com/profile.php?id=100043952992964"); // Replace with the actual file URL from your database
      setDownloadLink(files[0].name);
    };
    reader.readAsDataURL(files[0]);
  };

  const handleQRCodeValueChange = (event) => {
    setQRCodeValue(event.target.value);
  };

  return (
    <div>
      <h1>QR Code Generator</h1>
      <input
        type="text"
        value={qrCodeValue}
        onChange={handleQRCodeValueChange}
      />
      <FileReader
        handleFiles={handleFileUpload}
        multipleFiles={false}
        base64={true}
      >
        <button>Upload Logo</button>
      </FileReader>
      {downloadLink && <p>${downloadLink}</p>}
      {logo && <QRCode value={qrCodeValue} logoImage={logo} />}
      {fileLink && <a href={fileLink}>Download File</a>}
    </div>
  );
};

export default FileDatabase;
