import { createStore, applyMiddleware, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducers from '../_reducers';
import promiseMiddleware from 'redux-promise';
import { composeWithDevTools } from 'redux-devtools-extension'
// const logger = createStore({
//     duration: true
// })

// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose;

export default function configureStore(initialState) {
    const store = createStore(
        rootReducers,
        initialState,
        compose(applyMiddleware(
            thunkMiddleware,
            promiseMiddleware
 
        )),
    
    );
    return store;
}