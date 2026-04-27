import { useState } from "react"

export default function Player({initialName, symbol, isActive, onSaveNames}) {
    const [playerName,setPlayerName] = useState(initialName);
    const [isEditing,setIsEditing] = useState(false);
    function handleClick(){
        setIsEditing((editing) => !editing); 
        if(isEditing){
            onSaveNames(symbol, playerName);
        }
    }
    function handleChange(event) {
        setPlayerName((name)=> event.target.value);
    }
    let editablePlayerName = <span className="player-name">{playerName}</span>;
    if(isEditing) {
        editablePlayerName = <input type="text" value={playerName} required onChange={handleChange}/>
    }
    return <li className={isActive? 'active':''}>
            <span className="player">
              {editablePlayerName}
              <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleClick}>{isEditing?"Save":"Edit"}</button>
          </li>
}