import { useState } from "react";
import { QRCode } from "react-qrcode-logo";

const FileQRCode = () => {
  // const [file, setFile] = useState();

  // const handleFileUpload = (event) => {
  //   const file = event.target.files[0];
  //   console.log(file);
  //   setFile(URL.createObjectURL(file));
  // };

  // return (
  //   <div>
  //     <input
  //       type="file"
  //       // accept=".pdf , .png , .jpg ,.jpeg , .kri"
  //       onChange={handleFileUpload}
  //     />

  //     <QRCode
  //       value={file}
  //       logoImage="../../../assets/logo.png"
  //       size={300}
  //       logoWidth={80}
  //       logoHeight={80}
  //       logoBackgroundColor={"#ffffff"}
  //       logoBackgroundTransparent={false}
  //       blob={"https://qrcode/file"}
  //     />
  //   </div>
  // );

  const [link, setLink] = useState();

  // const handleLinkChange = (event) => {
  //   setLink(event.target.value);
  // };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    console.log(file);
    setLink(URL.createObjectURL(file));
  };

  const qrCodeConfig = {
    size: 300,
    logoImage: "../../../assets/logo.png",
    logoWidth: 100,
    logoHeight: 100,
    qrCodeOptions: {
      text: link,
      logoBackgroundColor: "#ffffff",
      logoBackgroundTransparent: false,
      Blob: "https://qrcode/qq",
    },
  };

  return (
    <div>
      <input type="file" onChange={handleFileUpload} />
      <QRCode {...qrCodeConfig} />
    </div>
  );
};

export default FileQRCode;
