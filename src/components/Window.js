import React, { Component } from 'react';
import axios from 'axios';

import Config from '../configs/config';
import Loading from '../assets/Loading';
import Front from './Front';

class Window extends Component{
    constructor(props){
        super(props);

        this.state = {
            name: "",
            loading: true,
            data: {}
        }

        this.nextPlanet = this.nextPlanet.bind(this);
    }
    
    componentDidMount(){
        this.nextPlanet();
    }

    nextPlanet(){
        //Escolhe um planeta aleatório
        let planet = Math.floor(Math.random() * Config.MAX_PLANETS_API) + 1;

        axios.get(Config.BASE_API_URL + Config.PLANETS_API_URL + planet).then(resp => {
            //let status = resp.status;
            let data = resp.data;
            console.log(resp.status)
            this.setState({
                data: data,
                loading: false
            })
        });
    }

    render(){
        return(

            this.state.loading ? 
            
            <Loading /> : <Front data={this.state.data} next={this.nextPlanet} />
        );
    }
}

export default Window;