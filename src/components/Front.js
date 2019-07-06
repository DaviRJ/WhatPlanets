import React, { useState } from "react";
import { connect } from "react-redux";

import Card from "./Card";
import Informations from "./Informations";
import Films from "./Films";
import "../App.css";

const Front = ({ planets, totalPlanets }) => {
    const [actualPlanet, setActualPlanet] = useState(0);

    function nextPlanet() {
        actualPlanet === totalPlanets - 1
            ? setActualPlanet(0)
            : setActualPlanet(actualPlanet + 1);
    }

    return (
        <div className="Window col-md-3">
            <Card header={planets[actualPlanet].name}>
                <Informations data={planets[actualPlanet]} />
                <hr />
                <Films films={planets[actualPlanet].films} />
                <div className="pull-right pagination">
                    <span>
                        {actualPlanet + 1} / {totalPlanets}
                    </span>
                </div>
            </Card>

            <div className="text-center Next">
                <button
                    className="btn btn-lg btn-outline-secondary"
                    onClick={nextPlanet}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    planets: state.planetsReducer.planets,
    totalPlanets: state.planetsReducer.totalPlanets
});

export default connect(mapStateToProps)(Front);
