import React, { useState } from 'react'

function Contador() {
    const [valor, setValor] = useState(0);
    return (
        <>
            <h1>{valor}</h1>    
        </>
    );
}

export default Contador;

