import React from 'react';

import './Inscritos.style.css';


const Inscritos = (props) => {
    return (
        
        <div className="pr-container">

            <table>
            
                <tr>
            {
                props.product.nota < 3
            ?//if = true
                <td className="pr-stock">{props.product.nombre}</td>
            :// else
                <td>{props.product.nombre}</td>
                
            }
                <td>{props.product.genero}</td>
                <td>{props.product.nota}</td>
            </tr>
            </table>
        </div>
    );
}

export default Inscritos;