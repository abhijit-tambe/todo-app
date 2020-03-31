import axios from 'axios'
import {API_URI} from '../../Constants.js'
class HelloWorldService{
 

    executeHelloServiceBlank(){
        // console.log('hello')
        return axios.get(`${API_URI}/bean`)
    }
executeHelloService(name){
    // console.log('hello')
    // let username = 'user';
    // let password = 'password';
    // // let Your_header_value = {username,password}
    // let basicAuthHeader = 'Basic '+ window.btoa(username +":"+ password)
    // console.log(Your_header_value)
    return axios.get(`${API_URI}/bean/${name}`
    // ,{headers:{authorization:basicAuthHeader}}
    )
}
}

export default new HelloWorldService();