import React, { Component } from 'react';

import { colors } from '../configs/config'

class Card extends Component{
    handleClasses(){
        this.classes = "card text-white "
        let background = colors[Math.floor(Math.random()*colors.length)];;
        this.classes += background;
    }
    
    render(){
        
        this.handleClasses();

        return(
            <div className={this.classes}>
                <div className="card-header text-center">
                    <h3>
                        { this.props.header } 
                    </h3>
                </div>
                <div className="card-body">
                    {this.props.children}                    
                </div>
            </div>
        );
    }
}

export default Card;