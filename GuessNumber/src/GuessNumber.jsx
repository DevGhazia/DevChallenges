
import { useState, useRef, useEffect } from "react";
export default function GuessNumber(){
    const [guessNumber, setGuessNumber] = useState(0);
    const [result, setResult] = useState("");
    const generatedNumber = useRef(null);

    useEffect(()=>{
        GuessANumber();
    }, [])
    
    function GuessANumber(){
        generatedNumber.current = Math.floor(Math.random()* 10) + 1; 
        console.log(generatedNumber.current)
    }

    function onInputChange(event){
        setGuessNumber(Number(event.target.value));
    }

    function checkResult(){
        if(guessNumber === generatedNumber.current){
            setResult("You win!")
            GuessANumber();
        }
        else if(guessNumber < generatedNumber.current)
            setResult("You guessed low!")
        else
            setResult("You guessed High!")
    }

    return (
        <div className="container">
            <input type="number" onChange={onInputChange} value={guessNumber}/>
            <button onClick={checkResult}>Guess</button>
            <p>{result}</p>
        </div>
    )
}
