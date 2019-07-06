import React, { Component } from "react";
import { connect } from "react-redux";
import { insertPlanet } from "../reducers/actions";
import axios from "axios";

import Config from "../configs/config";
import Loading from "../assets/Loading";
import Front from "./Front";

class Window extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true
        };
    }

    fetchPlanets = async () => {
        let promissesArray = [];
        let urlsToCall = [];

        //Mount de requests URLs
        for (let i = 1; i <= Config.MAX_PLANETS_API; i++) {
            urlsToCall.push(
                `${Config.BASE_API_URL + Config.PLANETS_API_URL}${i}`
            );
        }

        //Making the requests and storing in promisses array
        urlsToCall.map(url => promissesArray.push(axios.get(url)));

        try {
            const result = await axios.all(promissesArray);
            this.props.insertPlanet(result.map(({ data }) => data));
            this.setState({ loading: false });
        } catch (error) {
            console.log("Oops, something went wrong: " + error.message);
        }
    };

    componentDidMount() {
        this.fetchPlanets();
    }

    render() {
        return this.state.loading ? <Loading /> : <Front />;
    }
}

const mapStateToProps = state => ({ planets: state.planetsReducer.planets });

const mapDispatchToProps = dispatch => ({
    insertPlanet: data => dispatch(insertPlanet(data))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Window);
