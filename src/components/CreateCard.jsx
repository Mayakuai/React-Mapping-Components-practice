import React from "react";
import Card from "./Card";

function CreateCard(emojiD) {
  return (
    <Card
      key={emojiD.id}
      emoji={emojiD.emoji}
      name={emojiD.name}
      meaning={emojiD.meaning}
    />
  );
}

export default CreateCard;
