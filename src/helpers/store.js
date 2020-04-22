import { createStore, applyMiddleware, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducers from '../_reducers';
import promiseMiddleware from 'redux-promise';

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