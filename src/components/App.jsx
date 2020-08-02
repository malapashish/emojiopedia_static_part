import React from "react";
import Entry from "./Entry";
import Emojis from "../emojipedia";

function App() {
  function createEmojiDect(Emoji) {
    return <Entry key={Emoji.key} emoji={Emoji.emoji} name={Emoji.name} meaning={Emoji.meaning} />
  }
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
        {Emojis.map(createEmojiDect)}
      </dl>
    </div>
  );
}

export default App;
