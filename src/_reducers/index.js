import { combineReducers} from 'redux';
import booksReducer from './Books.reducer';
import charactersReducer from './Characters.reducer';
import characterListReducer from './CharacterList.reducer';
import singleCharacterReducer from './SingleCharacter.reducer'


const rootReducers = combineReducers({
    Books : booksReducer,
    Characters: charactersReducer,
    characterList:characterListReducer,
    singleCharacter : singleCharacterReducer,
})

export default rootReducers;