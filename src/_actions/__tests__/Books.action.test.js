import configureMockStore from 'redux-mock-store';

import HTTPClient from '../../helpers/HTTPClient';
import {booksAction} from '../Books.action';
import thunk from 'redux-thunk';
// import {getList} from '../../_actions/Books.action';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Books Action', () => {
    test('should handle action GET_LIST_SUCCESS', () => {
        
        const store = mockStore({ characterLists: [] })

        return store.dispatch(booksAction.getList()).then(()=>{
            // expect(store.getActions()).toEqual()
        })
    });
    
});