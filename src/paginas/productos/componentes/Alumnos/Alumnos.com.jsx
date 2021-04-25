import React from 'react';
import Cursos from '../Cursos/Cursos.com';
import Inscritos from '../Inscritos/Inscritos.com';
import genero from '../Genero/Genero.com'
import './Alumnos.style.css';

const Alumnos = () => {
    return (

      <div class="pt-container">
         
           
         <Cursos CategoryName="PROGRAMACION 4" />

          <Inscritos product={{
           nombre:"JULIAN AGUILAR",
           nota:2.3,
           genero:"femenino",
           }}/>
                
         
         <Inscritos product={{
           nombre:"JOSE CALVO",
           nota:3.9,
           genero:"masculino",
         }}/>
        
         <Inscritos product={{
           nombre:"LAURA ACUÑA",
           nota:4.5,
           genero:"femenino",
         }}/>
         <Inscritos product={{
           nombre:"JUAN ORTIZ",
           nota:0,
           genero:"masculino",
         }}/>
         <Inscritos product={{
           nombre:"LUISA TAPIA",
           nota:1.0,
           genero:"femenino",
         }}/>
        
        <Cursos CategoryName="RADIOCOMNICAIONES" />
         <Inscritos product={{
           nombre:"MANUELA GARCIA",
           nota:4,
           genero:"femenino",
           }}/>
         
         <Inscritos product={{
           nombre:"GUSTAVO ARANGO",
           nota:4.7,
           genero:"masculino",
         }}/>
        
         <Inscritos product={{
           nombre:"LAURA TOBON",
           nota:1.5,
           genero:"femenino",
         }}/>
         <Inscritos product={{
           nombre:"MIGUEL BARON",
           nota:0.7,
           genero:"masculino",
         }}/>

         <Inscritos product={{
           nombre:"GUILLERMO SOTO",
           nota:5,
           genero:"masculino",
         }}/>

        <Cursos CategoryName="INGLES VI" />
         <Inscritos product={{
           nombre:"LEO RESTREPO",
           nota:3,
           genero:"masculino",
           }}/>
         
         <Inscritos product={{
           nombre:"CRISTIAN ARENAS",
           nota:4.4,
           genero:"masculino",
         }}/>
        
         <Inscritos product={{
           nombre:"ADOLFO CIFUENTES",
           nota:1.2,
           genero:"masculino",
         }}/>
         <Inscritos product={{
           nombre:"LUIS PERES",
           nota:0,
           genero:"masculino",
        }}/>
        <Inscritos product={{
           nombre:"FELIPE CARDONA",
           nota:2,
           genero:"masculino",
         }}/>

         <Cursos CategoryName="SISTEMAS OPERATIVOS" />
         <Inscritos product={{
           nombre:"CESAR TRUJILLO",
           nota:2.8,
           genero:"masculino",
           }}/>
         
         <Inscritos product={{
           nombre:"VIVIANA MEJIA",
           nota:3.9,
           genero:"femenino",
         }}/>
        
         <Inscritos product={{
           nombre:"ESTEFANIA ORTIZ",
           nota:5,
           genero:"femenino",
         }}/>
         <Inscritos product={{
           nombre:"ALBERTO GIL",
           nota:0.9,
           genero:"masculino",
         }}/>
         <Inscritos product={{
           nombre:"VERONICA VELEZ",
           nota:2.3,
           genero:"femenino",
         }}/>
         <Inscritos product={{
           nombre:"JUAN MUÑOZ",
           nota:4.1,
           genero:"masculino",
         }}/>


      </div>

    )
}

export default Alumnos;