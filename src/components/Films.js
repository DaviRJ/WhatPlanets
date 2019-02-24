import React, { Component } from 'react';

class Films extends Component {
    
    render(){
        let films = this.props.films.map((name, idx) => <li key={idx}>{name}</li> ) 
        
        return(
            <div>
                <div className="text-center">
                    <h5>Featured in {films.length} films</h5>
                    <ul>
                        {films.length > 0 ? films : <span>=/</span> }
                    </ul>
                </div>
            </div>
        )
    }
}

export default Films;