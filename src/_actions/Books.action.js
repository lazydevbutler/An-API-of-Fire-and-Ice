import { booksService,charactersService } from "../_services"
import { booksConstant } from "../_constants"

export const booksAction = {
    getList,
}
function getList(){


    return dispatch =>{
        return new Promise(function(resolve,reject) {
            dispatch(request());
            booksService.getList().then(
                bookCharacters =>{
                    resolve(dispatch(success(bookCharacters)))
                },
                error =>{
                    reject(dispatch(failure(error)))
                }
            )
        })
}
        
    

    function request(bookCharacters) {return {type:booksConstant.GET_LIST_REQUEST,bookCharacters}};
    function success(bookCharacters) {return{type:booksConstant.GET_LIST_SUCCESS,bookCharacters}}
    function failure(error) {return {type:booksConstant.GET_LIST_FAILURE,error}};
}