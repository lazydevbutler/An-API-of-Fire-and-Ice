import axios from 'axios';

class HTTPClient {
    baseURL = ''

    constructor(){
        this.baseURL = `https://anapioficeandfire.com/api`;
        this.axiosClient = axios.create();
        this.token = '';

        // Add a request interceptor
        this.axiosClient.interceptors.request.use(
            (request) =>{
                const method = request.method.toUpperCase();
                const url = request.url.replace(this.baseURL,'');
                // console.log(`Request: ${method} ${url}`);
                return request;
            },
            (error) =>{
                console.log(error);
                return Promise.reject(error);
            }
        )

        // Add a response interceptor
        this.axiosClient.interceptors.response.use(
            (response) => {
                const { status, statusText } = response;
                // console.log(`Response: ${status} ${statusText}`);
                return response;
            },
            (error) => {
                return Promise.reject(error);
            }
        );

    }

    SetAuthenticationCallback(callback){
        this.callback = callback;
    }

    SetAuthenticationToken(token){
        this.token = token;
        this.axiosClient.defaults.headers.common['Authentication-Token'] = token;
    }
    /** This method executes a REST GET request */
    Get(url) {
      return this.axiosClient.get(`${url}`);
    }
  
    Patch(url) {
      return this.axiosClient.patch(`${url}`);
    }
  
    /** This method executes a REST POST request */
    Post(url, data) {
      return this.axiosClient.post(`${url}`, data);
    }
  
    /** This method executes a REST PUT request */
    Put(url, data) {
      return this.axiosClient.put(`${this.baseURL}/${url}`, data);
    }
  
    /** This method executes a REST DELETE request */
    Delete(url) {
      return this.axiosClient.delete(`${this.baseURL}/${url}`);
    }
  }
  
  const httpClient = new HTTPClient();
  export default httpClient;