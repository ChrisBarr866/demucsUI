import { useRef } from "react";

export default function dragToUpload({ children }) {
  // Create a reference to the hidden file input element
  const hiddenFileInput = useRef(null);

  // Programatically click the hidden file input element
  // when the Button component is clicked
  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };
  // Call a function (passed as a prop from the parent component)
  // to handle the user-selected file
  const handleChange = (event) => {
    const fileUploaded = event.target.files[0];
    props.handleFile(fileUploaded);
  };

  return (
    <div className="flex justify-center w-full h-20 px-3 text-lg text-center align-middle border-2 border-dashed text-neutral border-primary hover:border-accent">
      <button
        className="w-full text-primary hover:text-accent"
        onClick={handleClick}
      >
        Drag file or click here to upload
      </button>
      <input
        type="file"
        ref={hiddenFileInput}
        onChange={handleChange}
        style={{ display: "none" }}
      />
      {children}
    </div>
  );
}
