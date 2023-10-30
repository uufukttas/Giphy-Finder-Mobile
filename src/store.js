import { createStore } from 'redux';
import rootReducer from './reducers/giphyReducer';

const store = createStore(rootReducer);

export default store;
