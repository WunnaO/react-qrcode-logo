// import { useState } from "react";

const ImageUploadField = ({ name, handleLogoUpload }) => {
  // const retrievePathFile = (files) => {
  //   const file = files[0];
  //   if (file.type !== "image/png" && file.type !== "image/jpeg") {
  //     console.error("Only png and jpg/jpeg allowed.");
  //   } else {
  //     const target = {};
  //     const reader = new FileReader();
  //     reader.readAsDataURL(file);
  //     reader.onloadend = () => {
  //       target.name = name;
  //       target.value = reader.result;
  //       target.logoName = file.name;
  //       handleChange({ target });
  //     };
  //   }
  // };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", marginBottom: "6px" }}
    >
      <label>{name}</label>
      {/* <input
        type="file"
        accept="image/*"
        name={name}
        onChange={(e) => retrievePathFile(e.target.files)}
      /> */}
      <input
        type="file"
        name={name}
        accept=".png, .jpg, .jpeg, .kri , .svg"
        onChange={handleLogoUpload}
      />
    </div>
  );
};

export default ImageUploadField;
