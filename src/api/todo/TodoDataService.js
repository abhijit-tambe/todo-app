import axios from "axios";
import {API_URI,JPA_API_URI} from '../../Constants.js'

class TodoDataService{


    getTodoList(username){
        return axios.get(`${JPA_API_URI}/users/${username}/todos`);
    }

    getTodo(username,id){
        return axios.get(`${JPA_API_URI}/users/${username}/todos/${id}`);
    }

    deleteTodoById(username,id){
        return axios.delete(`${JPA_API_URI}/users/${username}/todos/${id}`)
    }

    updateTodo(username,id, todo){
        return axios.put(`${JPA_API_URI}/users/${username}/todos/${id}`,todo);
    }


    createTodo(username,todo){
        return axios.post(`${JPA_API_URI}/users/${username}/todos`,todo);
    }
}

export default new TodoDataService();