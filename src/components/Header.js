import React from "react";

export default function Header() {
  return (
    <div className="header">
      <img
        src="https://cdn3.iconfinder.com/data/icons/popular-memes/48/JD-02-512.png"
        alt="icon"
        className="header--image"
      ></img>
      <h1 className="header--title">Meme Generator</h1>
      <h3 className="header--project">React Project</h3>
    </div>
  );
}
