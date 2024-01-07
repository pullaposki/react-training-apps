import {useState} from "react";
import DisplayCard from "./DisplayCard.jsx";

function CardForm(){
    const DEFAULT_INPUT_VALUE = "Enter your name";
    
    const [inputValue, setInputValue] = useState(DEFAULT_INPUT_VALUE);
    const [submitValue, setSubmitValue] = useState(DEFAULT_INPUT_VALUE);
    
    const handleSubmit = function (event) {
        event.preventDefault();
        
        setSubmitValue(inputValue);
        setInputValue(DEFAULT_INPUT_VALUE);
    }
    
    const handleInputChange = function(event){
        setInputValue(event.target.value);
    }
    
    return (
        <div>
            <DisplayCard name={submitValue}/>
            
            <form onSubmit={(event)=> handleSubmit(event)}>
                <input value={inputValue} type="text" placeholder={DEFAULT_INPUT_VALUE} onChange={(event)=>handleInputChange(event)}/>
                <button type="submit">Generate Card</button>
            </form>
        </div>
    );
}

export default CardForm;