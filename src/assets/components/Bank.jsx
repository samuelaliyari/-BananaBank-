import { useState } from "react";
import Functions from "./Functions";
import "./Bank.css"

const Bank = () => {
    const [kontoStand, setKontoStand] = useState(0)
    return (  
        <main>
            <h1>Banana Bank</h1>
            <h2>Mein Girokonto</h2>
            <div>
                <p>{kontoStand.toFixed(2)}€</p>
            </div>
            <Functions changeKontoStand = {setKontoStand}/>
        </main>
    );
}

export default Bank;