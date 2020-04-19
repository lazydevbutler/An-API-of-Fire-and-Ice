import { charactersConstant } from '../_constants'

const initialState = {
    characterList:[],
    cLoading:false,
    cError:''
};

const characterListReducer = (state = initialState,action)=>{
    switch(action.type){
        case charactersConstant.GET_CHARACTER_LIST_REQUEST:
            return{ ...state, cLoading:true, cError:'' }
        case charactersConstant.GET_CHARACTER_LIST_SUCCESS:
            return {...state, characterList: action.characterList , cLoading:false, cError:''}
        case charactersConstant.GET_CHARACTER_LIST_FAILURE:
            return {...state,cLoading:false,cError:'Retrieving Character Failed'}
        default:
            return state;
    }

}
export default characterListReducer;
