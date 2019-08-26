import React from 'react'

export default props => 
//React.Fragment para poder adicionar varias tags como se fosse dentro de uma div
    <React.Fragment> 
        <h1>Bom dia {props.nome}!</h1>
        <h2>Até Breve!</h2>
    </React.Fragment>
    