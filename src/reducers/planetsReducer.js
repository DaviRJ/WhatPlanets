import config from "../configs/config";

const initialState = {
    planets: [],
    totalPlanets: config.MAX_PLANETS_API,
    actualPlanet: 0
};

export const planetsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "INSERT_PLANET":
            return { planets: action.data };
        default:
            return state;
    }
};
