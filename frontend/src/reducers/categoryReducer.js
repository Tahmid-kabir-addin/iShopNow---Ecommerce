// categoryReducer.js
import { UPDATE_CATEGORIES } from "../actions/categoryActions";

const initialState = {
    categories: [
        "Laptop",
        "Desktop",
        "Monitor",
        "Office Equipment",
        "Accessories",
        "Camera",
        "Phone",
        "Gaming",
    ],
};

const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_CATEGORIES:
            return {
                ...state,
                categories: action.payload,
            };
        default:
            return state;
    }
};

export default categoryReducer;
