import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { insertPlanet } from "../reducers/actions";
import axios from "axios";

import Config from "../configs/config";
import Loading from "../assets/Loading";
import Front from "./Front";

function Window({ insertPlanet, totalPlanets }) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchPlanets();
    }, []);

    async function fetchPlanets() {
        let promissesArray = [];
        let urlsToCall = [];

        //Mount the requests URLs
        for (let i = 1; i <= totalPlanets; i++) {
            urlsToCall.push(
                `${Config.BASE_API_URL + Config.PLANETS_API_URL}${i}`
            );
        }

        //Making the requests and storing in promisses array
        urlsToCall.map(url => promissesArray.push(axios.get(url)));

        //awaint the requests and submiting the result to the store
        try {
            const result = await axios.all(promissesArray);
            insertPlanet(result.map(({ data }) => data));
            setLoading(false);
        } catch (error) {
            console.log("Oops, something went wrong: " + error.message);
        }
    }

    return loading ? <Loading /> : <Front />;
}

const mapStateToProps = state => ({
    totalPlanets: state.planetsReducer.totalPlanets
});

const mapDispatchToProps = dispatch => ({
    insertPlanet: data => dispatch(insertPlanet(data))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Window);
