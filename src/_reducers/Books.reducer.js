import { booksConstant } from '../_constants'

const initialState = {
    bookCharacters:[],
    loading:false,
    error:''
};

const booksReducer = (state = initialState,action)=>{
    switch(action.type){
        case booksConstant.GET_LIST_REQUEST:
            return{ ...state, bookCharacters:[],loading:true, error:'' }
        case booksConstant.GET_LIST_SUCCESS:
            return{...state, bookCharacters: action.bookCharacters, error:'',loading:false}
        case booksConstant.GET_LIST_FAILURE:
            return {...state,bookCharacters:[],loading:false,error:'Retrieving List Failed'}
        default:
            return state;
    }

}
export default booksReducer;