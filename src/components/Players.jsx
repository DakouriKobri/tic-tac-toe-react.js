// NPM Packages
import { useState } from 'react';

export default function Players({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);
  console.log('isEditing:', isEditing);

  function handleEditClick() {
    setIsEditing(true);
  }

  let playerName = <span className="player-name">{name}</span>;
  if (isEditing) {
    playerName = <input type="text" required placeholder="Enter name" />;
  }

  return (
    <li>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>Edit</button>
    </li>
  );
}
