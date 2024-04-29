import React, { useEffect } from "react";
import "./index.css";

const Drum = ({ content, link, id, setDisplayedId }) => {
  const makeSound = () => {
    const audioElement = document.getElementById(content);
    audioElement.play();
    setDisplayedId(id);
  };

  const handleKeyPress = (event) => {
    const keyElement = document.getElementById(event.key.toUpperCase());
    keyElement.play();
    setDisplayedId(keyElement.parentElement.id);
  };

  useEffect(() => {
    const listener = (event) => handleKeyPress(event);
    document.addEventListener("keydown", listener);
    return () => document.removeEventListener("keydown", listener);
  }, []);

  return (
    <button
      className="btn btn-dark w-50 my-3 mx-1 drum-pad"
      onClick={makeSound}
      id={id}
    >
      <audio src={link} id={content} className="clip"></audio>
      {content}
    </button>
  );
};

export default Drum;
