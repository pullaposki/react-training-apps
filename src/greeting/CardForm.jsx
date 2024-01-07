import {useState} from "react";
import DisplayCard from "./DisplayCard.jsx";
import data from "./greetings.json";

function CardForm(){
    const DEFAULT_INPUT_VALUE = "Enter your name";
    
    const [inputValue, setInputValue] = useState("");
    const [greeting, setGreeting] = useState("");
    
    const handleSubmit = function (event) {
               
        event.preventDefault();
        
        if (inputValue === ""){
            console.log("empty")
            return;
        }
        
        const chosenGreeting = selectRandomGreeting();
        setGreeting(chosenGreeting + ", " + inputValue);
        setInputValue("");
    }
    
    const handleInputChange = function(event){
        setInputValue(event.target.value);
    }
    
    const clear = function () {
        setGreeting("");
        setInputValue("");
    }

    const selectRandomGreeting=function (){
        const numberOfGreetings = data.length;
        
        if(numberOfGreetings === 0){
            console.log("data empty");
            return;
        }
            
        
        const randomIndex = Math.floor(Math.random() * numberOfGreetings);
        const randomGreeting = data[randomIndex];
        return randomGreeting.greeting
    }
    
    return (
        <div>
            <DisplayCard name={greeting}/>
            
            <form onSubmit={(event)=> handleSubmit(event)}>
                <input value={inputValue} type="text" placeholder={DEFAULT_INPUT_VALUE} onChange={(event)=>handleInputChange(event)}/>
                <button type="submit">Generate Card</button>
            </form>
            
            <button onClick={clear}>Clear</button>
        </div>
    );
}

export default CardForm;