import React, { Component } from 'react';
import axios from 'axios';

import Config from '../configs/config';
import Loading from '../assets/Loading';
import Front from './Front';

class Window extends Component{
    constructor(props){
        super(props);

        this.state = {
            loading: true,
            data: {},
            filmNames: []
        }

        this.nextPlanet = this.nextPlanet.bind(this);
    }
    
    componentDidMount(){
        this.nextPlanet();
    }

    nextPlanet(){
        this.setState({
            loading: true
        })
        
        //Escolhe um planeta aleatório
        let planet = Math.floor(Math.random() * Config.MAX_PLANETS_API) + 1;

        axios.get(Config.BASE_API_URL + Config.PLANETS_API_URL + planet).then(resp => {
            //let status = resp.status;
            let data = resp.data;
            
            this.setState({
                data: data                
            })

            this.getFilmsInformation();

        }).catch(err => {
            console.log("Oops, something went wrong: "+err.message)
        });
    }
    
    getFilmsInformation = async () => {
        let urlFims = this.state.data.films;

        const promiseArray = urlFims.map(url=>axios.get(url));
  
        try {        
            const filmsNames = (
                await Promise.all(promiseArray)
            ).map( res=>res.data.title )

            this.setState({
                filmNames: filmsNames,
                loading: false
            })
        } catch(error) {
            console.log("Oops, something went wrong: "+error.message)
        }
    }

    render(){
        return(

            this.state.loading ? 
            
            <Loading /> : <Front data={this.state.data} next={this.nextPlanet} films={this.state.filmNames} />
        );
    }
}

export default Window;