import HTTPClient from '../helpers/HTTPClient';


export const charactersService ={
    getCharacter,
    
}


function getCharacter(url){
    return HTTPClient.Get(url).then((res)=>{
        // console.log(res);
        return res.data;
    })
}
