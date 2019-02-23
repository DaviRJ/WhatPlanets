import React from 'react';

import Card from './Card';
import Informations from './Informations';

import '../App.css'

const Front = (props) => (
    <div className="Window col-md-2">
        <Card header={props.data.name}>
            <Informations data={props.data} /> 
        </Card>

        <div className="text-center Next">
            <button className="btn btn-lg btn-outline-secondary" onClick={props.next}>Next</button>
        </div>
    </div>
)

export default Front;