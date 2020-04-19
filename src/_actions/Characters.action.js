import { charactersService } from "../_services"
import { charactersConstant } from "../_constants"


export const charactersAction = {
    getCharacter,
    getCharacterList,
    setCharacter,
    getMultipleCharacters,
}

function getCharacter(id){
    return dispatch =>{
        dispatch(request(id));

        charactersService.getCharacter(id).then(
            character => {
                dispatch(success(character))
            },
            error =>{
                dispatch(failure(error))
            }
        )
    }
    function request(character) {return {type:charactersConstant.GET_CHARACTER_REQUEST,character}};
    function success(character) {return{type:charactersConstant.GET_CHARACTER_SUCCESS,character}}
    function failure(error) {return {type:charactersConstant.GET_CHARACTER_FAILURE,error}};
}

function getMultipleCharacters(names){
    return dispatch =>{
        let characterList = [];
        names.map(characterUrl=>{
            charactersService.getCharacter(characterUrl).then(
                respond =>{
                    characterList.push(respond);
                    dispatch(success(characterList))
                },
                error =>{
                    dispatch(failure(error))
                }
            )
        })
    }

    function request(character) {return {type:charactersConstant.GET_CHARACTER_REQUEST,character}};
    function success(character) {return{type:charactersConstant.GET_CHARACTER_SUCCESS,character}}
    function failure(error) {return {type:charactersConstant.GET_CHARACTER_FAILURE,error}};
}

function setCharacter(obj)
{
    return dispatch =>{
        dispatch(success(obj))
        
        error=>{
            dispatch(failure(error))
        }
    }
    function request(singleCharacter) {return {type:charactersConstant.SET_SINGLE_CHARACTER_REQUEST,singleCharacter}};
    function success(singleCharacter) {return{type:charactersConstant.SET_SINGLE_CHARACTER_SUCCESS,singleCharacter}}
    function failure(error) {return {type:charactersConstant.SET_SINGLE_CHARACTER_FAILURE,error}};
}

function getCharacterList(listURL){
    return dispatch =>{
        return new Promise (function(resolve,reject){
            let characterList = [];
            listURL.map(characterUrl=>{
                charactersService.getCharacter(characterUrl).then(
                    respond =>{
                        characterList.push(respond);
                        resolve(dispatch(success(characterList)))
                    },
                    error =>{
                        reject(dispatch(failure(error)))
                    }
                )
            })
        
        })
    }

    function request(characterUrl) {return {type:charactersConstant.GET_CHARACTER_LIST_REQUEST,characterUrl}};
    function success(characterList) {return{type:charactersConstant.GET_CHARACTER_LIST_SUCCESS,characterList}}
    function failure(error) {return {type:charactersConstant.GET_CHARACTER_LIST_FAILURE,error}};

}


// return dispatch =>{
//     let characterList = [];
//     const promiseList = listURL.map(characterUrl=>{
//         charactersService.getCharacter(characterUrl).then(
//             respond =>{
//                 characterList.push(respond);
//             },
//             error =>{
//                 dispatch(failure(error))
//             }
//         )
//     })
//     Promise.all(promiseList).then(()=>{
//         dispatch(success(characterList))
//     })
    

// }