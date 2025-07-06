"use client";

import { useRef, useState } from "react";
import cssClasses from "./image-picker.module.css";
import Image from "next/image";

export default function ImagePicker({ label, name }) {
  const input = useRef();
  const [inputImage, setInputImage] = useState();

  function handlePickClick() {
    input.current.click();
  }

  function handleInputChange(event) {
    const file = event.target.files[0];
    if (!file) {
      setInputImage(null);
      return;
    }
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setInputImage(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  }

  return (
    <div className={cssClasses.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={cssClasses.controls}>
        <div className={cssClasses.preview}>
          {!inputImage && <p>No image picked yet.</p>}
          {inputImage && (
            <Image src={inputImage} alt="Image picked by user" fill />
          )}
        </div>
        <input
          className={cssClasses.input}
          name={name}
          id={name}
          type="file"
          accept="image/png, image/jpeg"
          ref={input}
          onChange={handleInputChange}
          required
        />
        <button
          className={cssClasses.button}
          type="button"
          onClick={handlePickClick}
        >
          {label}
        </button>
      </div>
    </div>
  );
}
