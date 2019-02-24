import React, { Component } from 'react';

import Card from './Card';
import Informations from './Informations';
import Films from './Films';
import '../App.css'

class Front extends Component{
    render(){
        return(
            <div className="Window col-md-3">
                <Card header={this.props.data.name}>
                    <Informations data={this.props.data} />
                    <hr/>

                    <Films films={this.props.films} />

                </Card>

                <div className="text-center Next">
                    <button className="btn btn-lg btn-outline-secondary" onClick={this.props.next}>Next</button>
                </div>
            </div>
        )
    }
}

export default Front;