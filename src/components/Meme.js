import React from "react";

export default function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    img: "http://i.imgflip.com/1bij.jpg",
  });
  const [allMemes, setAllMemes] = React.useState([]);

  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemes(data.data.memes));
  }, []);
  function handleClick() {
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomNumber].url;
    setMeme((prevState) => ({ ...prevState, img: url }));
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevState) => ({ ...prevState, [name]: value }));
  }
  return (
    <div className="form">
      <div className="caption-div">
        <input
          type="text"
          className="caption"
          placeholder="top text"
          value={meme.topText}
          name="topText"
          onChange={handleChange}
        />
        <input
          type="text"
          className="caption"
          placeholder="bottom text"
          value={meme.bottomText}
          name="bottomText"
          onChange={handleChange}
        />
      </div>
      <button className="form-button" onClick={handleClick}>
        Get a new image
      </button>

      <div className="meme">
        <p className="meme-text top">{meme.topText}</p>
        <img src={meme.img} alt="meme" className="meme-img"></img>
        <p className="meme-text bottom">{meme.bottomText}</p>
      </div>
    </div>
  );
}
