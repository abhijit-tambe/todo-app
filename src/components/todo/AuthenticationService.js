import axios from "axios";
import {API_URI} from '../../Constants.js'


export const USER_NAME_SESSION_ATTRIBUTE_NAME='authenticatedUser';
class AuthenticationService {
// constructor(){
//     var abc;
// }http://localhost:8080/basicauth



        executeJwtAuthenticationService(username,password){
            // let user = 'user';
            // let pass = 'password';
        return axios.post(`${API_URI}/authenticate`,
        // ,{headers:{authorization :this.createBasicAuthentication(username,password)}}
        {username,password}
        )}


        executeBasicAuthenticationService(username,password){
            // let user = 'user';
            // let pass = 'password';
           return axios.get(`${API_URI}/basicauth`
           ,{headers:{authorization :this.createBasicAuthentication(username,password)}}
        )}

        createJwtAuthenticationToken(token){
            return 'Bearer ' +token;
        }

        createBasicAuthentication(username,password){
            return 'Basic '+ window.btoa(username +":"+ password)
        }


        registerSucessfullLoginForJwt(username,token){
            // let user = 'user';
            // let pass = 'password';
            // // let Your_header_value = {username,password}
            // let basicAuthHeader = 'Basic '+ window.btoa(user +":"+ pass)
            console.log('register sucessfull login')
            sessionStorage.setItem(USER_NAME_SESSION_ATTRIBUTE_NAME,username);
            this.createJwtAuthenticationToken(token);
            this.setupAxiosInterceptors(this.createJwtAuthenticationToken(token));
            // console.log("abc:",this.abc)
        }



        registerSucessfullLogin(username,password){
            // let user = 'user';
            // let pass = 'password';
            // // let Your_header_value = {username,password}
            // let basicAuthHeader = 'Basic '+ window.btoa(user +":"+ pass)
            console.log('register sucessfull login')
            sessionStorage.setItem(USER_NAME_SESSION_ATTRIBUTE_NAME,username);
            this.setupAxiosInterceptors(this.createBasicAuthentication(username,password))
            // console.log("abc:",this.abc)
        }

        logout(){
            sessionStorage.removeItem(USER_NAME_SESSION_ATTRIBUTE_NAME);
            // axios.interceptors.request.eject(this.abc);
        // this.interceptorsId = null;
        // this.abc=null;
        }

        isUserLoggedIn(){
            let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME);
            if(user===null)return false
         return true
        }


        GetLoggedInUserName(){
            let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME);
            if(user===null) return ''
         return user
        }

        setupAxiosInterceptors(basicAuthHeader){
            // let user = 'user';
            // let password = 'password';
            // // let Your_header_value = {username,password}
            // let basicAuthHeader = 'Basic '+ window.btoa(user +":"+ password)
           axios.interceptors.request.use(
                (config)=>{
                    if(this.isUserLoggedIn()){
                    config.headers.authorization = basicAuthHeader
                }
                return config
                }
                
            )
        }


}

export default new AuthenticationService()