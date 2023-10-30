const initialState = {
    searchedGiphy: '',
    giphyURL: '',
    isLoading: false,
};

const giphyReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SEARCH_GIPHY':
            return {
                ...state,
                searchedGiphy: action.payload,
            }
        case 'IS_LOADING':
            return {
                ...state,
                isLoading: action.payload,
            }
        case 'SET_GIPHY_URL':
            return {
                ...state,
                giphyURL: action.payload,
            };
        default:
            return state;
    }
};

export default giphyReducer;