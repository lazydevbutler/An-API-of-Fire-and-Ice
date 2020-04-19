import bookReducer from '../Books.reducer';
import * as types from '../../_constants';


describe('book reducer', () => {
    test('should return the inital state', () => {
        expect(bookReducer(undefined,{})).toEqual(
            {
                bookCharacters:[],
                loading:false,
                error:''
            }
        )    
    });

    test('should return request state', () => {
        const requestAction={
            type:types.booksConstant.GET_LIST_REQUEST
        }
        expect(bookReducer({},requestAction)).toEqual({
            bookCharacters:[],
            error:'',
            loading:true,
        })
        
    });

    test('should return success state', () => {
        const successAction={
            type:types.booksConstant.GET_LIST_SUCCESS
        }
        expect(bookReducer({},successAction)).toEqual({
            bookCharacters:undefined,
            error:'',
            loading:false,
        })
        
    });
    


    test('should return fail state',()=>{
        const failAction ={
            type:types.booksConstant.GET_LIST_FAILURE,
        }
        expect(bookReducer({},failAction)).toEqual({
            bookCharacters:[],
            error:'Retrieving List Failed',
            loading:false})
    })
    
});
