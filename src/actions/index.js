import axios from 'axios'

export const FETCH_POSTS = 'fetch_posts';


const root_url='http://reduxblog.herokuapp.com/api';
const API_KEY='?key=Keklords1234'

export function fetchPosts(){

    const request=axios.get(`${root_url}/posts${API_KEY}`);

    return{
        type:FETCH_POSTS,
        payload: request
    };
}
