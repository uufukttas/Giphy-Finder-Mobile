export const searchGiphy = searchedGiphy => ({
    type: 'SEARCH_GIPHY',
    payload: searchedGiphy,
});

export const isLoading = value => ({
    type: 'IS_LOADING',
    payload: value,
});

export const setGiphyURL = giphyURL => ({
    type: 'SET_GIPHY_URL',
    payload: giphyURL,
});