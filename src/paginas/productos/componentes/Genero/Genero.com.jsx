import React from 'react';

import './Genero.style.css';


const genero = (props) => {
    return (
        
        <div className="ge-container">

            <table>
            
                <tr>
            {
                props.product.genero === "Femenino"
            ?//if = true
                <td className="ge-stock">{props.product.genero}</td>
            :// else
                <td>{props.product.genero}</td>
                
            }
                </tr>
            </table>
        </div>
    );
}

export default genero;