import config from "../configs/config";

const initialState = {
    planets: [],
    totalPlanets: config.MAX_PLANETS_API
};

export const planetsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "INSERT_PLANET":
            return { ...state, planets: action.data };
        default:
            return state;
    }
};
