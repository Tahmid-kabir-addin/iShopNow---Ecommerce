// categoryActions.js

export const UPDATE_CATEGORIES = "UPDATE_CATEGORIES";

export const updateCategories = (categories) => ({
    type: UPDATE_CATEGORIES,
    payload: categories,
});
