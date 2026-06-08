import { useState } from "react";
import addButton from "../assets/add.png";
import voiceButton from "../assets/voice.avif";
import dictateButton from "../assets/dictate.png";
import sendButton from "../assets/send.webp"
import "./InputText.css";
function InputText() {
    const [inputText, setInputText] = useState("");

    function saveInputText(event){
        setInputText(event.target.value)
    }
  return (
   <div className="input-text-container">
    <div className="left-side-icon">
        <button>
            <img src={addButton} alt="Add" />
        </button>
    </div>

    <input 
        type="text" 
        className="input-text" 
        placeholder="How may I help you?" 
        onChange={saveInputText}
        value={inputText}
        
    />
    <div className="right-side-icons">
        <button>
            <img src={dictateButton} alt="Mic" />
        </button>
        <button>
            {inputText?<img src={sendButton} alt="Wave" /> : <img src={voiceButton} alt="Wave" />}
        </button>
    </div>
</div>
  );
}
export default InputText;
