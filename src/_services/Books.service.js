import HTTPClient from '../helpers/HTTPClient';


export const booksService ={
    getList,
}


function getList(){
    return HTTPClient.Get('https://anapioficeandfire.com/api/books/1').then((res)=>{
        // console.log(res.data.characters)
        return res.data.characters;
    })
}
