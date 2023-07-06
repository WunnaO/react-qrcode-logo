import { useState } from "react";

// eslint-disable-next-line react/prop-types
function ImageUploadField({ name, handleChange }) {
  const [errorFile, setErrorFile] = useState(false);

  let target;
  const retrievePathFile = (files) => {
    const file = files[0];
    if (file.type !== "image/png" && file.type !== "image/jpeg") {
      setErrorFile(true);
      console.error("Only png and jpg/jpeg allowed.");
    } else {
      setErrorFile(false);
      target = {};
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        target.name = name;
        target.value = reader.result;
        target.logoName = file.name;
        handleChange({ target });
      };
    }
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", marginBottom: "6px" }}
    >
      <label>{name}</label>
      <input
        type="file"
        accept="image/*"
        name={name}
        onChange={(e) => retrievePathFile(e.target.files)}
      />
      {errorFile && (
        <p className="mb-4 text-red-600 text-[16px] font-[500] text-center mt-3">
          Only png and jpg/jpeg allowed.
        </p>
      )}
      {/* <input
              type="file"
              name={name}
              accept=".png, .jpg, .jpeg, .kri , .svg"
              onChange={handleChange}
            /> */}
      <button
        className="border divide-solid w-[60%] mt-4 bg-gray-300 text-center h-[40px]"
        // onChange={removeLogoHandler}
      >
        Remove Logo
      </button>
    </div>
  );
}

export default ImageUploadField;
