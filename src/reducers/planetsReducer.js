const initialState = {
    planets: []
};

export const planetsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "INSERT_PLANET":
            return { planets: action.data };
        default:
            return state;
    }
};
