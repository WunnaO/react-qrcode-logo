import { useState } from "react";
import { QRCode } from "react-qrcode-logo";
// import QRCodeLogo from "react-qrcode-logo/lib/QRCodeLogo";
// import QRCodeLoader from "file-loader";

function FileUploadQRCode() {
  const [text, setText] = useState("");
  const [logo, setLogo] = useState();
  console.log(text);

  // Function to handle file upload
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    console.log(file);
    setText(URL.createObjectURL(file));
  };

  const handleLogoUpload = (event) => {
    const file = event.target.files[0];
    setLogo(URL.createObjectURL(file));
  };

  // Function to handle text input

  return (
    <div>
      <h1>File QRCode Generator</h1>
      <br />
      <input
        type="file"
        // accept=".pdf , .png , .jpg ,.jpeg , .kri"
        onChange={handleFileUpload}
      />
      <input
        type="file"
        accept=".png, .jpg, .jpeg, .kri , .svg"
        onChange={handleLogoUpload}
      />

      <QRCode
        value={text}
        logoImage={logo}
        logoWidth={80}
        logoHeight={80}
        qrStyle={{
          borderRadius: 10,
        }}
        size={256}
        // logoCustomComponent={QRCodeLogo}
        // logoLoaderComponent={QRCodeLoader}
      />
    </div>
  );
}

export default FileUploadQRCode;
