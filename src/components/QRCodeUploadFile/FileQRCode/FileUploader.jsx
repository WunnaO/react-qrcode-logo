import { useDropzone } from "react-dropzone";

const FileUploader = ({ onFileUpload }) => {
  const onDrop = (acceptedFiles) => {
    // Assuming single file upload, access the first file
    const file = acceptedFiles[0];
    const reader = new FileReader();

    reader.onload = () => {
      const fileContent = reader.result;
      onFileUpload(fileContent);
    };

    reader.readAsDataURL(file);
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      <button className="p-2 bg-blue-500 font-[10px]">
        Drag and drop a file here, or click to select a file
      </button>
    </div>
  );
};

export default FileUploader;
