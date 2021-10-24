import React, { useState } from "react";
import "./styles.css";
var emojiDictionary = {
  "😀": "Happy Face",
  "😁": "Gratified happiness",
  "😂": "Laughing Tears",
  "🤣": "Rolling on the Floor Laughing Face",
  "😎": " Cool",
  "😆": "Squee! or Awesome",
  "😉": "Wink",
  "😊": "genuine happiness ",
  "😋": "Face Savouring Delicious Food",
  "😍": "adoration",
  "😘": "Blow A Kiss",
  "🥰": " In Love Face",
  "😗": "Whistling",
  "🤗": " Hugging",
  "🤩": "Wow Face",
  "🥳": " Party Face",
  "🤔": "Thinking Face",
  "🤨": "including suspicion",
  "😶": "Blank Face",
  "🙃": "Silly",
  "🤯": "Mind Blown",
  "😬": "nervousness",
  "😵": "dizzy Face",
  "🙄": "boredom",
  "😏": " Flirting",
  "😣": " Helpless Face",
  "😇": " angelic behavior",
  "😱": " Screaming Face",
  "🥱": "Yawning Face",
  "😛": "Just kidding!",
  "🤪": "wackiness",
  "🤤": "Drool",
  "😤": "Mad Face",
  "😭": "Loudly Crying Face",
  "🥵": "Overheated Face"
};

export default function App() {
  const [meaning, setMeaning] = useState(" ");
  function emojjiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    if (meaning === undefined) {
      meaning = "we don't have this in our database";
    }
    setMeaning(meaning);
  }

  function emojiCLickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  var emojisWeKnow = Object.keys(emojiDictionary);

  return (
    <div className="App">
      <h1 style={{ backgroundColor: "#ffde34" }}>Emoji Translator</h1>
      <input style={{ fontSize: "2rem" }} onChange={emojjiInputHandler} />
      <h2> {meaning}</h2>
      <h3>Emojis we know</h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiCLickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
