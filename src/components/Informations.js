import React from 'react';

const Informations = (props) =>(
    <div className="text-center"> 

    
        <h5>Polulation:</h5> {props.data.population} <br />
    

    
        <h5>Climate:</h5> {props.data.climate} <br />
    

    
        <h5>Terrain:</h5> {props.data.terrain} <br />
    
    </div> 
)
    
export default Informations;