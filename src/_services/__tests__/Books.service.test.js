// import mockStore from 'redux-mock-store';

import HTTPClient from '../../helpers/HTTPClient';

// import {getList} from '../../_actions/Books.action';

describe('HTTP BookService function', () => {
    test('should get Books successfully ', async()=>{
        let results;
        await HTTPClient.Get('https://anapioficeandfire.com/api/books/1').then((res)=>{
            results = res.data.characters;
        })
        expect(results).toMatchSnapshot();
    })
    
});
