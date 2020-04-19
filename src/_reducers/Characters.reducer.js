import { charactersConstant } from '../_constants'

const initialState = {
    cName:'',

};

const charactersReducer = (state = initialState,action)=>{
    switch(action.type){
        case charactersConstant.GET_CHARACTER_REQUEST:
            return{ ...state, cLoading:true, cError:'' }
        case charactersConstant.GET_CHARACTER_SUCCESS:
            return{...state, cName:action.character.name , cError:'',cLoading:false}
        case charactersConstant.GET_CHARACTER_FAILURE:
            return {...state,cLoading:false,cError:'Retrieving Character Failed'}
        default:
            return state;
    }

}
export default charactersReducer;
