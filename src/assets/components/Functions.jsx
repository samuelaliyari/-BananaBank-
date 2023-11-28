import { useState } from "react";
import "./Functions.css"
const Functions = ({changeKontoStand}) => {
    const [inputBetrag, setInputBetrag] = useState("")
    return (  
        <section>
            <input 
            type="number"
            placeholder="Betrag in €"
            onChange={(e) => setInputBetrag((+e.target.value))}
            value={inputBetrag}
            onClick={(e) => setInputBetrag("")}
            />
            <button onClick={() => changeKontoStand((kontoStand) => kontoStand + inputBetrag)}>Einzahhlen</button>
            <button onClick={() => changeKontoStand((kontoStand) => kontoStand - inputBetrag)}>Auszahlen</button>
        </section>
    );
}

export default Functions;