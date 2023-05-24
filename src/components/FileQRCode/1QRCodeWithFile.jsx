import { useState } from "react";
// import FileUploader from "./FileUploader";
import { QRCode } from "react-qrcode-logo";
import logo from "../../assets/react.svg";
// import FileUploadQRCode from "./1FileUploader";

// const QRCodeWithFile = () => {
//   const [fileContent, setFileContent] = useState(null);

//   const handleFileUpload = (content) => {
//     setFileContent(content);
//   };
//   return (
//     <div>
//       <FileUploader onFileUpload={handleFileUpload} />
//       {fileContent && (
//         <QRCode
//           value={fileContent}
//           logoImage={logo}
//           logoWidth={80}
//           logoHeight={80}
//         />
//       )}
//     </div>
//   );
// };

const QRCodeWithFile = () => {
  const [file, setFile] = useState(null);
  const [fileContent, setFileContent] = useState("");
  console.log(fileContent);
  console.log(file);

  const handleFileUpload = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);

    const reader = new FileReader();
    reader.onload = (event) => {
      setFileContent(event.target.result);
    };
    reader.readAsText(selectedFile);
  };

  return (
    <div>
      {/* <FileUploadQRCode onFileUpload={handleFileUpload} /> */}

      <br />

      <input type="file" onChange={handleFileUpload} />

      <QRCode
        value={fileContent}
        logoImage={logo}
        logoWidth={80}
        logoHeight={80}
      />
    </div>
  );
};

export default QRCodeWithFile;
