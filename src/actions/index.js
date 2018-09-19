import axios from 'axios'

export const FETCH_POSTS = 'fetch_posts';
export const CREATE_POST ='create_post';


const root_url='https://reduxblog.herokuapp.com/api';
const API_KEY='?key=Keklords1234';

export function fetchPosts(){

    const request=axios.get(`${root_url}/posts${API_KEY}`);

    return{
        type:FETCH_POSTS,
        payload: request
    };
}

export function createPost(values){
    const request=axios.post(`${root_url}/posts${API_KEY}`,values);
    return{
            type:CREATE_POST,
            payload:request
    }
}
