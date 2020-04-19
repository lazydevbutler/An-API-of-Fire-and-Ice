import { charactersConstant } from '../_constants'

const initialState = {
    url:'',
    name:'',
    gender:'',
    culture:'',
    born:'',
    died:'',
    titles:[],
    aliases:[],
    father:"",
    mother:"",
    spouse:"",
    allegiances:[],
    books: [],
    povBooks:[],
    tvSeries:[],
    playedBy:[],
    loading:false,
    error:''
};

const singleCharacterReducer = (state = initialState,action)=>{
    switch(action.type){
        case charactersConstant.SET_SINGLE_CHARACTER_REQUEST:
            return{ ...state, loading:true, error:'' }
        case charactersConstant.SET_SINGLE_CHARACTER_SUCCESS:
            return{...state,
                url:action.singleCharacter.url,
                name:action.singleCharacter.name,
                gender:action.singleCharacter.gender,
                titles:action.singleCharacter.titles,
                aliases:action.singleCharacter.aliases,
                born:action.singleCharacter.born,
                died:action.singleCharacter.died,
                father:action.singleCharacter.father,
                mother:action.singleCharacter.mother,
                error:'',loading:false}
        case charactersConstant.SET_SINGLE_CHARACTER_FAILURE:
            return {...state,loading:false,error:'Retrieving Character Failed'}
        default:
            return state;
    }

}
export default singleCharacterReducer;
