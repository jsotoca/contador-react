import React, { useState } from 'react';

function Contador() {
    const [valor, setValor] = useState(0);

    return (
        <>
            <h1>{valor}</h1>
            <button onClick={ () => setValor(valor + 1)}>+1</button>
            <button onClick={ () => setValor(valor - 1)}>-1</button>
            <button onClick={ () => setValor(0)}>reset</button>    
        </>
    );
}

export default Contador;

