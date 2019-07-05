import React from "react";

import Card from "./Card";
import Informations from "./Informations";
import Films from "./Films";
import "../App.css";

const Front = ({ data, actualPlanet, totalPlanets, next }) => (
    <div className="Window col-md-3">
        <Card header={data.name}>
            <Informations data={data} />
            <hr />
            <Films films={data.films} />
            <div className="pull-right pagination">
                <span>
                    {actualPlanet} / {totalPlanets}
                </span>
            </div>
        </Card>

        <div className="text-center Next">
            <button className="btn btn-lg btn-outline-secondary" onClick={next}>
                Next
            </button>
        </div>
    </div>
);

export default Front;
