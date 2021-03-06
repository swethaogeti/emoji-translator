import React, { useState } from "react";
import "./styles.css";
var emojiDictionary = {
  "๐": "Happy Face",
  "๐": "Gratified happiness",
  "๐": "Laughing Tears",
  "๐คฃ": "Rolling on the Floor Laughing Face",
  "๐": " Cool",
  "๐": "Squee! or Awesome",
  "๐": "Wink",
  "๐": "genuine happiness ",
  "๐": "Face Savouring Delicious Food",
  "๐": "adoration",
  "๐": "Blow A Kiss",
  "๐ฅฐ": " In Love Face",
  "๐": "Whistling",
  "๐ค": " Hugging",
  "๐คฉ": "Wow Face",
  "๐ฅณ": " Party Face",
  "๐ค": "Thinking Face",
  "๐คจ": "including suspicion",
  "๐ถ": "Blank Face",
  "๐": "Silly",
  "๐คฏ": "Mind Blown",
  "๐ฌ": "nervousness",
  "๐ต": "dizzy Face",
  "๐": "boredom",
  "๐": " Flirting",
  "๐ฃ": " Helpless Face",
  "๐": " angelic behavior",
  "๐ฑ": " Screaming Face",
  "๐ฅฑ": "Yawning Face",
  "๐": "Just kidding!",
  "๐คช": "wackiness",
  "๐คค": "Drool",
  "๐ค": "Mad Face",
  "๐ญ": "Loudly Crying Face",
  "๐ฅต": "Overheated Face"
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
            style={{ fontSize: "2rem", padding: "2rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
